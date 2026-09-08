import fs from 'fs';
import path from 'path';
import { defaultPortfolioContent, PortfolioContent } from '@/data/portfolioContent';
import { kvGet, kvPut, purgeCloudflareCache } from '@/lib/cloudflareKv';
import { db, isFirebaseConfigured } from '@/lib/firebase';
import { doc, getDoc, setDoc, collection, getDocs, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';

export interface InboxMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  createdAt: string;
  source?: string;
  attachmentName?: string;
  attachmentUrl?: string;
}

// In-memory cache for fast reads
let inMemoryContent: PortfolioContent = { ...defaultPortfolioContent };
let inMemoryInbox: InboxMessage[] = [];

const CONTENT_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'dynamicContent.json');
const INBOX_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'inboxMessages.json');

const KV_CONTENT_KEY = 'portfolio_content';
const KV_INBOX_KEY = 'inbox_messages';

/**
 * Retrieves the current portfolio content
 * Priority: 1. Cloudflare Workers KV -> 2. Firebase -> 3. Local JSON -> 4. Default Content
 */
export async function getContent(): Promise<PortfolioContent> {
  // 1. Try Cloudflare Workers KV
  try {
    const rawKv = await kvGet(KV_CONTENT_KEY);
    if (rawKv) {
      const parsed = JSON.parse(rawKv);
      inMemoryContent = {
        ...defaultPortfolioContent,
        ...parsed,
        profile: { ...defaultPortfolioContent.profile, ...(parsed.profile || {}) },
        hero: { ...defaultPortfolioContent.hero, ...(parsed.hero || {}) },
        about: { ...defaultPortfolioContent.about, ...(parsed.about || {}) },
        skills: {
          paidMedia: parsed.skills?.paidMedia || defaultPortfolioContent.skills.paidMedia,
          tracking: parsed.skills?.tracking || defaultPortfolioContent.skills.tracking,
        },
        projects: parsed.projects || defaultPortfolioContent.projects,
        services: parsed.services || defaultPortfolioContent.services,
        testimonials: parsed.testimonials || defaultPortfolioContent.testimonials,
        blog: parsed.blog || defaultPortfolioContent.blog,
        footer: { ...defaultPortfolioContent.footer, ...(parsed.footer || {}) },
      };
      return inMemoryContent;
    }
  } catch (err) {
    console.warn('Cloudflare KV content read notice:', err);
  }

  // 2. Try Firebase Firestore if configured
  if (isFirebaseConfigured && db) {
    try {
      const docRef = doc(db, 'site_content', 'portfolio');
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const data = snap.data() as PortfolioContent;
        inMemoryContent = { ...defaultPortfolioContent, ...data };
        return inMemoryContent;
      }
    } catch (err) {
      console.warn('Firestore read notice:', err);
    }
  }

  // 3. Try local file if it exists
  try {
    if (fs.existsSync(CONTENT_FILE_PATH)) {
      const raw = fs.readFileSync(CONTENT_FILE_PATH, 'utf-8');
      const parsed = JSON.parse(raw);
      inMemoryContent = { ...defaultPortfolioContent, ...parsed };
      return inMemoryContent;
    }
  } catch (err) {
    console.warn('Local content file read notice:', err);
  }

  // 4. Fallback to current in-memory content or defaults
  return inMemoryContent;
}

/**
 * Persists updated portfolio content
 * Saves to Cloudflare Workers KV, purges edge cache, and mirrors to disk/Firebase
 */
export async function saveContent(updatedContent: PortfolioContent): Promise<boolean> {
  inMemoryContent = updatedContent;

  // 1. Save to Cloudflare Workers KV
  try {
    await kvPut(KV_CONTENT_KEY, JSON.stringify(updatedContent));
    // Purge Cloudflare edge cache asynchronously
    purgeCloudflareCache().catch(e => console.warn('Cache purge notice:', e));
  } catch (err) {
    console.warn('Cloudflare KV save notice:', err);
  }

  // 2. Save to Firebase Firestore if configured
  if (isFirebaseConfigured && db) {
    try {
      const docRef = doc(db, 'site_content', 'portfolio');
      await setDoc(docRef, updatedContent, { merge: true });
    } catch (err) {
      console.error('Failed to save to Firestore:', err);
    }
  }

  // 3. Save to local file (in dev or writable fs)
  try {
    const dir = path.dirname(CONTENT_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(CONTENT_FILE_PATH, JSON.stringify(updatedContent, null, 2), 'utf-8');
  } catch (err) {
    // Disk write might be read-only in serverless, Cloudflare KV is source of truth
  }

  return true;
}

/**
 * Retrieves all incoming inquiries for the admin
 */
export async function getInboxMessages(): Promise<InboxMessage[]> {
  // 1. Try Cloudflare Workers KV
  try {
    const rawKv = await kvGet(KV_INBOX_KEY);
    if (rawKv) {
      const list = JSON.parse(rawKv);
      if (Array.isArray(list)) {
        inMemoryInbox = list;
        return inMemoryInbox;
      }
    }
  } catch (err) {
    console.warn('Cloudflare KV inbox read notice:', err);
  }

  // 2. Try Firestore if configured
  if (isFirebaseConfigured && db) {
    try {
      const colRef = collection(db, 'inbox_messages');
      const q = query(colRef, orderBy('createdAt', 'desc'));
      const snap = await getDocs(q);
      const list: InboxMessage[] = [];
      snap.forEach(d => {
        list.push({ id: d.id, ...(d.data() as any) });
      });
      if (list.length > 0) {
        inMemoryInbox = list;
        return inMemoryInbox;
      }
    } catch (err) {
      console.warn('Firestore inbox read notice:', err);
    }
  }

  // 3. Try local file
  try {
    if (fs.existsSync(INBOX_FILE_PATH)) {
      const raw = fs.readFileSync(INBOX_FILE_PATH, 'utf-8');
      inMemoryInbox = JSON.parse(raw);
      return inMemoryInbox;
    }
  } catch (err) {
    console.warn('Local inbox read notice:', err);
  }

  return inMemoryInbox;
}

/**
 * Adds an incoming message to the inbox
 */
export async function saveInboxMessage(msg: Omit<InboxMessage, 'id' | 'createdAt'>): Promise<InboxMessage> {
  const newMsg: InboxMessage = {
    ...msg,
    id: 'msg-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
    createdAt: new Date().toISOString(),
  };

  const currentList = await getInboxMessages();
  const updatedList = [newMsg, ...currentList.filter(m => m.id !== newMsg.id)].slice(0, 200);
  inMemoryInbox = updatedList;

  // 1. Save to Cloudflare Workers KV
  try {
    await kvPut(KV_INBOX_KEY, JSON.stringify(updatedList));
  } catch (err) {
    console.warn('Cloudflare KV inbox write notice:', err);
  }

  // 2. Save to Firestore if available
  if (isFirebaseConfigured && db) {
    try {
      const colRef = collection(db, 'inbox_messages');
      await addDoc(colRef, {
        ...newMsg,
        serverTimestamp: serverTimestamp(),
      });
    } catch (err) {
      console.warn('Firestore inbox write notice:', err);
    }
  }

  // 3. Save to local file
  try {
    const dir = path.dirname(INBOX_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(INBOX_FILE_PATH, JSON.stringify(updatedList, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Local inbox file write notice:', err);
  }

  return newMsg;
}

/**
 * Deletes an incoming message by id
 */
export async function deleteInboxMessage(id: string): Promise<boolean> {
  const currentList = await getInboxMessages();
  const updatedList = currentList.filter(m => m.id !== id);
  inMemoryInbox = updatedList;

  // 1. Save to Cloudflare Workers KV
  try {
    await kvPut(KV_INBOX_KEY, JSON.stringify(updatedList));
  } catch (err) {
    console.warn('Cloudflare KV inbox delete notice:', err);
  }

  // 2. Save to local file
  try {
    fs.writeFileSync(INBOX_FILE_PATH, JSON.stringify(updatedList, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Local inbox file write notice:', err);
  }

  return true;
}
