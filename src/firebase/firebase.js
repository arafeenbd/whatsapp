import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAn5-Y0zKpayLKtwmQNRs7WyB_lTCeCMVA",
    authDomain: "whatsapp-clone-b0ac8.firebaseapp.com",
    projectId: "whatsapp-clone-b0ac8",
    storageBucket: "whatsapp-clone-b0ac8.appspot.com",
    messagingSenderId: "1051053950360",
    appId: "1:1051053950360:web:825c381399fe8505bd97ed",
    measurementId: "G-HB8TKEGG8R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;