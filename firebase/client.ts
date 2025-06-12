import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDklazlpcTctoe6VLOhdWCDzJeQ-us9ao8",
  authDomain: "hirely-ai-powered.firebaseapp.com",
  projectId: "hirely-ai-powered",
  storageBucket: "hirely-ai-powered.firebasestorage.app",
  messagingSenderId: "740070029343",
  appId: "1:740070029343:web:952fbe735753af18243d2a",
  measurementId: "G-LVE2LRHM4V"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);