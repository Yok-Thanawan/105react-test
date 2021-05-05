import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD20MwWnswHHb4yNEJ6JPi3Q1NwPDHpcfs",
    authDomain: "login-8146d.firebaseapp.com",
    projectId: "login-8146d",
    storageBucket: "login-8146d.appspot.com",
    messagingSenderId: "793120626033",
    appId: "1:793120626033:web:09df7801f694e21fa912d0"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;