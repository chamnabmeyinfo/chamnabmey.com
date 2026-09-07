import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check if Firebase credentials have been configured
export const isFirebaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY && 
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
);

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

if (typeof window !== 'undefined' || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
  try {
    if (isFirebaseConfigured) {
      app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
      db = getFirestore(app);
    }
  } catch (error) {
    console.warn('Firebase initialization note:', error);
  }
}

export interface LeadSubmission {
  name: string;
  email: string;
  phoneOrTelegram: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

/**
 * Saves a prospective client's inquiry to Google Cloud Firestore
 */
export async function submitClientLead(data: LeadSubmission) {
  if (db && isFirebaseConfigured) {
    try {
      const leadsRef = collection(db, 'leads');
      const docRef = await addDoc(leadsRef, {
        ...data,
        createdAt: serverTimestamp(),
        source: 'chamnabmey.com',
        status: 'new',
      });
      return { success: true, id: docRef.id, mode: 'google-firestore' };
    } catch (err: any) {
      console.error('Error writing to Firestore:', err);
      throw new Error(err.message || 'Failed to submit lead to database');
    }
  }

  // Graceful fallback for local development or preview before Firebase credentials are added to Vercel
  console.log('Firebase credentials pending. Submission received locally:', data);
  return { 
    success: true, 
    id: `mock-${Date.now()}`, 
    mode: 'demo-local',
    notice: 'Submission recorded in demo mode. Configure NEXT_PUBLIC_FIREBASE_* in Vercel to stream directly to your Google Cloud Firestore.' 
  };
}

export { db };
