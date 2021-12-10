// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth' 
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBCh_yn9l70q2WPqZa3tcgh33PO46yL_wk",
  authDomain: "clone-163ee.firebaseapp.com",
  projectId: "clone-163ee",
  storageBucket: "clone-163ee.appspot.com",
  messagingSenderId: "626879109185",
  appId: "1:626879109185:web:c7248529d307220ccc4ec0",
  measurementId: "G-4TE1G42M79"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { auth};
export default db ; 

