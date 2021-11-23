
// Firebase version 9 not compatible with version 8 in expo 

import { initializeApp } from "firebase/app"

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import {FIREBASE_API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID} from '@env'

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};


let app = initializeApp(firebaseConfig)


const db = getFirestore(app)
const auth = getAuth(app)

export {db, auth} 



