import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxNYCnfJRP2Fq8cx92tfRCe_cv4HnJd0A",
  authDomain: "car-rentify.firebaseapp.com",
  projectId: "car-rentify",
  storageBucket: "car-rentify.appspot.com",
  messagingSenderId: "855383341108",
  appId: "1:855383341108:web:08e20830639e1ef1e27261",
};

export const app = initializeApp(firebaseConfig);
