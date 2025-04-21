import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Tu configuración de Firebase
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

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la base de datos y el almacenamiento
export const db = getDatabase(app);
export const storage = getStorage(app);
