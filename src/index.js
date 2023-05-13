// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9XA94a7R1wxT7akQ0aEBgLGyoqz8zTQ0",
  authDomain: "aps-poluicao-do-solo.firebaseapp.com",
  projectId: "aps-poluicao-do-solo",
  storageBucket: "aps-poluicao-do-solo.appspot.com",
  messagingSenderId: "743692941493",
  appId: "1:743692941493:web:b30bbb4623fd71a99fe6fc",
  measurementId: "G-P1EQ1T9E6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);