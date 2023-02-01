// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/firebase-auth";

const firebaseConfig = {
  apiKey: "AIzaSyDll51B5rhmcUg9n9jyfS9-VURExtnw_Gk",

  authDomain: "sacred-dahlia-367713.firebaseapp.com",

  databaseURL:
    "https://sacred-dahlia-367713-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "sacred-dahlia-367713",

  storageBucket: "sacred-dahlia-367713.appspot.com",

  messagingSenderId: "420756014389",

  appId: "1:420756014389:web:12385ef94197011c2d387c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
