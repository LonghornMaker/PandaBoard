import { db } from "./firebase-config.js";
import { ref, set, push, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// Función para guardar un nuevo thread en la base de datos
export function createThread(content, user, imageURL = null) {
  const threadRef = ref(db, 'threads/');  // Ref de los threads en la base de datos
  const newThreadRef = push(threadRef);  // Crear una nueva referencia para un thread

  set(newThreadRef, {
    content: content,
    author: user,
    timestamp: serverTimestamp(),  // Marca de tiempo de la creación
    image: imageURL,  // URL de la imagen (si la hay)
  }).then(() => {
    console.log('Thread created successfully!');
  }).catch((error) => {
    console.error('Error creating thread:', error);
  });
}
