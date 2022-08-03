// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const DataBase = async (Name, Email, Message) => {
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyBVYEHR4ZVM-mFx-lu1W6Tq2sCqneGHba8",
    authDomain: "testing-f3991.firebaseapp.com",
    projectId: "testing-f3991",
    storageBucket: "testing-f3991.appspot.com",
    messagingSenderId: "52390708213",
    appId: "1:52390708213:web:f0971fff696f8111b6d6bc",
    measurementId: "G-3YCGKF9ZQQ",
  });

  // Initialize Firebase
  const db = getFirestore();

  await addDoc(collection(db, "contacts"), {
    name: Name,
    email: Email,
    message: Message,
  })
    .then(() => {
      alert("yup");
    })
    .catch((err) => {
      alert(err.message);
    });
};

export default DataBase;
