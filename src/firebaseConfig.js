import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 🔹 Clean Generic Demo Firebase Project Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDemoKeyProject2026AntigravityAppKey",
  authDomain: "demo-exam-app-2026.firebaseapp.com",
  projectId: "demo-exam-app-2026",
  storageBucket: "demo-exam-app-2026.appspot.com",
  messagingSenderId: "109876543210",
  appId: "1:109876543210:web:abcdef1234567890demo"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth Export
export const auth = getAuth(app);
export default app;
