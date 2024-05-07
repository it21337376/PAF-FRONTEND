import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyBqpcte8ZoYWpLOWq79UMheerCEOrzLLFE",
  authDomain: "fitness-app-8e5ca.firebaseapp.com",
  projectId: "fitness-app-8e5ca",
  storageBucket: "fitness-app-8e5ca.appspot.com",
  messagingSenderId: "304802458109",
  appId: "1:304802458109:web:91b5c2d1b3b4f1c98a9194",
});

const auth=firebase.auth();
const storage=firebase.storage();

export {storage,auth};


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBqpcte8ZoYWpLOWq79UMheerCEOrzLLFE",
//   authDomain: "fitness-app-8e5ca.firebaseapp.com",
//   projectId: "fitness-app-8e5ca",
//   storageBucket: "fitness-app-8e5ca.appspot.com",
//   messagingSenderId: "304802458109",
//   appId: "1:304802458109:web:91b5c2d1b3b4f1c98a9194",
//   measurementId: "G-NPTZ6J78MV"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);