import { db, storage } from "./firebase-config.js";
import {
  ref as dbRef,
  set,
  push,
  serverTimestamp,
  remove
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

// Function to create a new thread in the database
export function createThread(content, user, imageURL = null) {
  const threadsRef = dbRef(db, 'threads/');
  const newThreadRef = push(threadsRef);

  set(newThreadRef, {
    content: content,
    author: user || "Anonymous",
    timestamp: Date.now(),
    image: imageURL || null
  }).then(() => {
    console.log('Thread created successfully!');
  }).catch((error) => {
    console.error('Error creating thread:', error);
  });
}

// Function to upload an image to Firebase Storage
export function uploadImage(file) {
  const imageRef = storageRef(storage, 'images/' + file.name);
  return uploadBytes(imageRef, file)
    .then((snapshot) => {
      return getDownloadURL(snapshot.ref);
    })
    .catch((error) => {
      console.error('Error uploading image:', error);
    });
}

// Function to delete a thread by ID
export function deleteThread(threadId) {
  const threadRef = dbRef(db, 'threads/' + threadId);
  remove(threadRef)
    .then(() => {
      console.log("Thread deleted successfully!");
    })
    .catch((error) => {
      console.error("Error deleting thread:", error);
    });
}
