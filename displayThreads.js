// displayThreads.js
import { db } from './firebase-config.js';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js';

// Function to display threads on the page
export function displayThreads() {
  const threadsContainer = document.getElementById('threadsContainer');
  const q = query(collection(db, 'threads'), orderBy('timestamp', 'desc'));

  onSnapshot(q, (snapshot) => {
    threadsContainer.innerHTML = ''; // Clear current threads

    snapshot.forEach((docSnap) => {
      const data = docSnap.data();

      const title = data.title || '[No Title]';
      const content = data.content || '[No Content]';

      const threadDiv = document.createElement('div');
      threadDiv.className = 'thread';
      threadDiv.innerHTML = `
        <h4>${title}</h4>
        <p>${content}</p>
        <button class="delete-btn" data-id="${docSnap.id}">Delete Thread</button>
      `;

      // Event listener to delete the thread
      threadDiv.querySelector('.delete-btn').addEventListener('click', async () => {
        if (confirm('Are you sure you want to delete this thread?')) {
          await deleteDoc(doc(db, 'threads', docSnap.id));
        }
      });

      threadsContainer.appendChild(threadDiv); // Append thread to the container
    });
  });
}
