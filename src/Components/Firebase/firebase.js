import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
