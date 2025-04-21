import { db } from "./firebase-config.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { deleteThread } from "./threads.js";

// Function to render all threads from the database
export function renderThreads() {
  const threadsRef = ref(db, 'threads/');

  onValue(threadsRef, (snapshot) => {
    const threads = snapshot.val();
    console.log("Loaded threads:", threads);

    const container = document.getElementById('threadsContainer');
    container.innerHTML = '';

    for (const threadId in threads) {
      const thread = threads[threadId];

      const readableDate = thread.timestamp
        ? new Date(thread.timestamp).toLocaleString()
        : "Unknown date";

      const threadElement = document.createElement('div');
      threadElement.classList.add('thread');

      threadElement.innerHTML = `
        <h3>${thread.author || "Anonymous"}</h3>
        <p>${thread.content}</p>
        <p><em>Posted: ${readableDate}</em></p>
        ${thread.image ? `<img src="${thread.image}" alt="Thread Image" style="max-width: 200px;" />` : ''}
        <button data-id="${threadId}" class="delete-thread-btn">Delete Thread</button>
      `;

      container.appendChild(threadElement);
    }

    const deleteButtons = document.querySelectorAll('.delete-thread-btn');
    deleteButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        deleteThread(id);
      });
    });
  });
}
