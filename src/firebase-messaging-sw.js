// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  projectId: 'to-do-list-9e42e',
  appId: '1:53864658097:web:03d64cec388f5212a21e90',
  storageBucket: 'to-do-list-9e42e.appspot.com',
  apiKey: 'AIzaSyAX1PxZJIkjWBmp7QAhExdq8Moo6G3dFJ4',
  authDomain: 'to-do-list-9e42e.firebaseapp.com',
  messagingSenderId: '53864658097',
  databaseURL: "https://to-do-list-9e42e-default-rtdb.firebaseio.com",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();