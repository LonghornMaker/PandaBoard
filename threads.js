// threads.js
import { db } from './firebase-config.js';
import { collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js';

// Function to create a new thread
export async function createThread(title, content) {
  try {
    await addDoc(collection(db, 'threads'), {
      title: title.trim(),
      content: content.trim(),
      timestamp: serverTimestamp(),
    });
    console.log('Thread created successfully!');
  } catch (error) {
    console.error('Error creating thread:', error);
  }
}
