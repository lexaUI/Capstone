import * as firebase from 'firebase'

const config = {        
    apiKey: "AIzaSyAwy8yHGIPByYHreJKX2gZBDRzyxGv1yPI",
    authDomain: "reacthello-f0891.firebaseapp.com",
    databaseURL: "https://reacthello-f0891.firebaseio.com",
    projectId: "reacthello-f0891",
    storageBucket: "reacthello-f0891.appspot.com",
    messagingSenderId: "426733623670"
};
firebase.initializeApp(config);

export default firebase;