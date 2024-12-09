// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: 'smart-solutions-db81f.firebaseapp.com',
	projectId: 'smart-solutions-db81f',
	storageBucket: 'smart-solutions-db81f.firebasestorage.app',
	messagingSenderId: '800593804905',
	appId: '1:800593804905:web:bc3ca3cb9915f2a449acf8',
	measurementId: 'G-L5MJNETWLL',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
