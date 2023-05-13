// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmRs6Qjdifgkt2MY5WxrX8Z73Ec9UtFyQ",
  authDomain: "hackathon-15-may.firebaseapp.com",
  projectId: "hackathon-15-may",
  storageBucket: "hackathon-15-may.appspot.com",
  messagingSenderId: "1038465159948",
  appId: "1:1038465159948:web:987c7b910b9e878ffe6f29",
  measurementId: "G-V6ZJWL7HGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;