
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCKRTpq5T73mA7tVbwzXOOdHuaLv5utVe4",
  authDomain: "app-riachuelo-fd8ce.firebaseapp.com",
  projectId: "app-riachuelo-fd8ce",
  storageBucket: "app-riachuelo-fd8ce.appspot.com",
  messagingSenderId: "443828635061",
  appId: "1:443828635061:web:775eb24e92cd6c399b85fc",
  measurementId: "G-TQMFC33021"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics}