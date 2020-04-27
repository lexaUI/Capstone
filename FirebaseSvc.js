import firebase from 'firebase';

class FirebaseSvc {
  constructor() {
    if (!firebase.apps.length) { //avoid re-initializing
      firebase.initializeApp({
        apiKey: "AIzaSyAwy8yHGIPByYHreJKX2gZBDRzyxGv1yPI",
        authDomain: "reacthello-f0891.firebaseapp.com",
        databaseURL: "https://reacthello-f0891.firebaseio.com",
        projectId: "reacthello-f0891",
        storageBucket: "reacthello-f0891.appspot.com",
        messagingSenderId: "426733623670",
      });
     }
  }
login = async(user, success_callback, failed_callback) => {
     await firebase.auth()
       .signInWithEmailAndPassword(user.email, user.password)
     .then(success_callback, failed_callback);
  }
}
createAccount = async (user) => {
  firebase.auth()
    .createUserWithEmailAndPassword(user.email, user.password)
  .then(function() {
    var userf = firebase.auth().currentUser;
    userf.updateProfile({ displayName: user.name})
    .then(function() {
      alert("User " + user.name + " was created successfully.");
    }, function(error) {
      console.warn("Error update displayName.");
    });
  }, function(error) {
    console.error("got error:" + error.message);
    alert("Create account failed.");
  });
}
const firebaseSvc = new FirebaseSvc();
export default firebaseSvc;