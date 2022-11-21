// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBtEyQXXgQZXOYBNq5IIo_AxFukEfRsaWE',
  authDomain: 'react-pokemon-api.firebaseapp.com',
  projectId: 'react-pokemon-api',
  storageBucket: 'react-pokemon-api.appspot.com',
  messagingSenderId: '1016214012540',
  appId: '1:1016214012540:web:272625c98b2ffe3e9a3ff9',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
