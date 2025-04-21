import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Función para registrar un usuario con email y contraseña
export function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User registered: ", user);
    })
    .catch((error) => {
      console.error("Error registering user: ", error);
    });
}

// Función para iniciar sesión con email y contraseña
export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User logged in: ", user);
    })
    .catch((error) => {
      console.error("Error logging in user: ", error);
    });
}

// Función para login anónimo
export function loginAnonymously() {
  return signInAnonymously(auth)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User logged in anonymously: ", user);
    })
    .catch((error) => {
      console.error("Error logging in anonymously: ", error);
    });
}
