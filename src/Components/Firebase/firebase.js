import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

 // for Vite 
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };

// for React App
const firebaseConfig = {
  apiKey: "AIzaSyAknAuFBda9fUao4tkiPkaYNajIt7LaoM8",
  authDomain: "noxe-fdc7b.firebaseapp.com",
  projectId: "noxe-fdc7b",
  storageBucket: "noxe-fdc7b.appspot.com",
  messagingSenderId: "6162628501",
  appId: "1:6162628501:web:7d666defe38d96f556409c",
  measurementId: "G-XZ77BTNVWX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
