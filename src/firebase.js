import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwU_Hm_iJTM5fKUDUZ3TOARS5T8Eq05as",
  authDomain: "netflix-app-858a0.firebaseapp.com",
  projectId: "netflix-app-858a0",
  storageBucket: "netflix-app-858a0.appspot.com",
  messagingSenderId: "617208947578",
  appId: "1:617208947578:web:6af324ac3ccfbf952aacc3",
  measurementId: "G-ESD6KW9X0M",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
