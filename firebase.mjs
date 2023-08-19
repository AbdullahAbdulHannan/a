import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyAk2EV_FBcri18AbmhwQECMqSMIs1Kd56Y",
  authDomain: "signup-7e3f9.firebaseapp.com",
  projectId: "signup-7e3f9",
  storageBucket: "signup-7e3f9.appspot.com",
  messagingSenderId: "353076194026",
  appId: "1:353076194026:web:874be5e1f541519fb78593"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);