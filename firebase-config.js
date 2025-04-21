// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5jDNgrpcMdiahjYybj2OxkPUEdM5j29w",
  authDomain: "pandaboard-50656.firebaseapp.com",
  databaseURL: "https://pandaboard-50656-default-rtdb.firebaseio.com",
  projectId: "pandaboard-50656",
  storageBucket: "pandaboard-50656.firebasestorage.app",
  messagingSenderId: "1055924598513",
  appId: "1:1055924598513:web:0bbbe0bce07400e6dfdb50",
  measurementId: "G-X7V8RK5V0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
