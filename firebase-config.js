// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Configuración personalizada de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB5jDNgrpcMdiahjYybj2OxkPUEdM5j29w", // Tu API Key
  authDomain: "pandaboard-50656.firebaseapp.com", // Tu authDomain
  databaseURL: "https://pandaboard-50656-default-rtdb.firebaseio.com", // Tu URL de base de datos
  projectId: "pandaboard-50656", // Tu projectId
  storageBucket: "pandaboard-50656.firebasestorage.app", // Tu storageBucket
  messagingSenderId: "1055924598513", // Tu senderId
  appId: "1:1055924598513:web:0bbbe0bce07400e6dfdb50", // Tu appId
  measurementId: "G-X7V8RK5V0H" // measurementId (opcional)
};

// Inicializa la app de Firebase
const app = initializeApp(firebaseConfig);

// Exporta base de datos y autenticación
export const db = getDatabase(app);
export const auth = getAuth(app);
