import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDTJ6rzQAOq2AMCRPuB8BoHhDybCtOBXWI",
    authDomain: "discord-clone-e72f7.firebaseapp.com",
    databaseURL: "https://discord-clone-e72f7.firebaseio.com",
    projectId: "discord-clone-e72f7",
    storageBucket: "discord-clone-e72f7.appspot.com",
    messagingSenderId: "857231797621",
    appId: "1:857231797621:web:28af98fb924ac741c0773c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider} ;
export default db;