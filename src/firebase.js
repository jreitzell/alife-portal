import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCSWIuxSAtCdz1XpLl44MGOJ4dv7nQ0nIU",
  authDomain: "alife-portal.firebaseapp.com",
  projectId: "alife-portal",
  storageBucket: "alife-portal.firebasestorage.app",
  messagingSenderId: "79274937857",
  appId: "1:79274937857:web:b67190a8a716ac6ccdfa00"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
