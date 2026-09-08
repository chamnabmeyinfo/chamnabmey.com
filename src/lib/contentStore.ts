import fs from 'fs';
import path from 'path';
import { defaultPortfolioContent, PortfolioContent } from '@/data/portfolioContent';
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
}

// In-memory cache for fast serverless reads
let inMemoryContent: PortfolioContent = { ...defaultPortfolioContent };
let inMemoryInbox: InboxMessage[] = [];

const CONTENT_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'dynamicContent.json');
const INBOX_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'inboxMessages.json');

/**
 * Retrieves the current portfolio content
 */
export async function getContent(): Promise<PortfolioContent> {
  // 1. Try Firebase Firestore if configured
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

  // 2. Try local file if it exists
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

  // 3. Fallback to current in-memory content or defaults
  return inMemoryContent;
}

/**
 * Persists updated portfolio content
 */
export async function saveContent(updatedContent: PortfolioContent): Promise<boolean> {
  inMemoryContent = updatedContent;

  // 1. Save to Firebase Firestore if configured
  if (isFirebaseConfigured && db) {
    try {
      const docRef = doc(db, 'site_content', 'portfolio');
      await setDoc(docRef, updatedContent, { merge: true });
    } catch (err) {
      console.error('Failed to save to Firestore:', err);
    }
  }

  // 2. Save to local file
  try {
    const dir = path.dirname(CONTENT_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(CONTENT_FILE_PATH, JSON.stringify(updatedContent, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Failed to save local content file:', err);
    // Even if local disk write fails (e.g. read-only serverless environment), memory cache holds it
    return true;
  }
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

  inMemoryInbox.unshift(newMsg);

  // 1. Save to Firestore if available
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

  // 2. Save to local file
  try {
    const dir = path.dirname(INBOX_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    let list: InboxMessage[] = [];
    if (fs.existsSync(INBOX_FILE_PATH)) {
      list = JSON.parse(fs.readFileSync(INBOX_FILE_PATH, 'utf-8'));
    }
    list.unshift(newMsg);
    fs.writeFileSync(INBOX_FILE_PATH, JSON.stringify(list.slice(0, 100), null, 2), 'utf-8');
  } catch (err) {
    console.warn('Local inbox file write notice:', err);
  }

  return newMsg;
}

/**
 * Retrieves all incoming inquiries for the admin
 */
export async function getInboxMessages(): Promise<InboxMessage[]> {
  if (isFirebaseConfigured && db) {
    try {
      const colRef = collection(db, 'inbox_messages');
      const q = query(colRef, orderBy('createdAt', 'desc'));
      const snap = await getDocs(q);
      const list: InboxMessage[] = [];
      snap.forEach(d => {
        list.push({ id: d.id, ...(d.data() as any) });
      });
      if (list.length > 0) return list;
    } catch (err) {
      console.warn('Firestore inbox read notice:', err);
    }
  }

  if (inMemoryInbox.length > 0) {
    return inMemoryInbox;
  }

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
