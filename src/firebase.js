// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBYJVhefTzJ7VeX73JVHtgfK5PK0kwThQ",
  authDomain: "netflix-clone-4910b.firebaseapp.com",
  projectId: "netflix-clone-4910b",
  storageBucket: "netflix-clone-4910b.appspot.com",
  messagingSenderId: "445936230182",
  appId: "1:445936230182:web:cff3068d8bff7c32deabe7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
