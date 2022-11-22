// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBtEyQXXgQZXOYBNq5IIo_AxFukEfRsaWE',
  authDomain: 'react-pokemon-api.firebaseapp.com',
  projectId: 'react-pokemon-api',
  storageBucket: 'react-pokemon-api.appspot.com',
  messagingSenderId: '1016214012540',
  appId: '1:1016214012540:web:272625c98b2ffe3e9a3ff9',
}

export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
