import { db } from "./firebase-config.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// Función para mostrar los threads en la página principal
export function displayThreads() {
  const threadsRef = ref(db, 'threads/');  // Referencia a los threads en la base de datos

  onValue(threadsRef, (snapshot) => {
    const threads = snapshot.val();  // Obtiene todos los threads
    const threadsContainer = document.getElementById('threadsContainer');  // Elemento donde se mostrarán los threads

    threadsContainer.innerHTML = '';  // Limpiar los threads actuales

    // Iterar sobre todos los threads y mostrarlos
    for (const threadId in threads) {
      const thread = threads[threadId];
      const threadElement = document.createElement('div');
      threadElement.classList.add('thread');

      // Crear el HTML para cada thread
      threadElement.innerHTML = `
        <h3>${thread.author}</h3>
        <p>${thread.content}</p>
        <p><em>Fecha: ${new Date(thread.timestamp).toLocaleString()}</em></p>
        ${thread.image ? `<img src="${thread.image}" alt="Thread Image" />` : ''}
        <button onclick="deleteThread('${threadId}')">Borrar Thread</button>
      `;

      threadsContainer.appendChild(threadElement);  // Agregar el thread al contenedor
    }
  });
}

// Modificación en el botón de borrar
threadElement.innerHTML = `
  <h3>${thread.author}</h3>
  <p>${thread.content}</p>
  <p><em>Fecha: ${new Date(thread.timestamp).toLocaleString()}</em></p>
  ${thread.image ? `<img src="${thread.image}" alt="Thread Image" />` : ''}
  <button onclick="deleteThread('${threadId}')">Borrar Thread</button>
`;

window.deleteThread = deleteThread;  // Exponer la función deleteThread globalmente
