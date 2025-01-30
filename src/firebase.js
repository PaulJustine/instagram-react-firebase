
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCTLDLC5AKoCRv5uji5hPy9xdeqO5CjuU",
  authDomain: "instagram-clone-93c78.firebaseapp.com",
  projectId: "instagram-clone-93c78",
  storageBucket: "instagram-clone-93c78.firebasestorage.app",
  messagingSenderId: "169731299402",
  appId: "1:169731299402:web:d3fd6cc3d01c84ef782eb3"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth();