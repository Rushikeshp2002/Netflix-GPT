// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAypjm_b3BaDqREb2pFFjaACbo0nBoAjso",
  authDomain: "netflixgpt-32f7c.firebaseapp.com",
  projectId: "netflixgpt-32f7c",
  storageBucket: "netflixgpt-32f7c.appspot.com",
  messagingSenderId: "418643134947",
  appId: "1:418643134947:web:39352aceae030b337338d6",
  measurementId: "G-WBL455FGYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();