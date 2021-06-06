import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyDJDR3GFAbKfnobH7b57nQaoIAkC33B6_s',
    authDomain: 'preston-s-chat-app.firebaseapp.com',
    projectId: 'preston-s-chat-app',
    storageBucket: 'preston-s-chat-app.appspot.com',
    messagingSenderId: '737217441660',
    appId: '1:737217441660:web:a0f58b05db934dca2ffef9',
  })
  .auth();
