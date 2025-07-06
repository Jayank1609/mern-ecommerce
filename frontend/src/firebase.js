// firebase.js
import { initializeApp } from "firebase/app";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_KP8lKY_uyjIpNv-0T2ji8umF3ulsdvg",
  authDomain: "sutrava.firebaseapp.com",
  projectId: "sutrava",
  storageBucket: "sutrava.firebasestorage.app",
  messagingSenderId: "928212590456",
  appId: "1:928212590456:web:f5f7d61cda99f33be5f28d"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

