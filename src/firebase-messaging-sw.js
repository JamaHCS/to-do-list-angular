// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

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

  // apiKey: 'api-key',
  // authDomain: 'project-id.firebaseapp.com',
  // databaseURL: 'https://project-id.firebaseio.com',
  // projectId: 'project-id',
  // storageBucket: 'project-id.appspot.com',
  // messagingSenderId: 'sender-id',
  // appId: 'app-id',
  // measurementId: 'G-measurement-id',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();