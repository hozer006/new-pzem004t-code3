import Firebase from "firebase";

let config = {
  apiKey: "AIzaSyBYIgeoe43YAyZpLAf-9paO7Qz1bCJ231c",
    authDomain: "pzem-3-phase.firebaseapp.com",
    databaseURL: "https://pzem-3-phase-default-rtdb.firebaseio.com",
    projectId: "pzem-3-phase",
    storageBucket: "pzem-3-phase.appspot.com",
    messagingSenderId: "385315314289",
    appId: "1:385315314289:web:21fbfa27f0384cfdb8d9d0",
    measurementId: "G-6MEVQK0C17"
};

let app = Firebase.initializeApp(config);

export default app.database();
