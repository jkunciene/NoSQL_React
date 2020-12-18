import firebase from 'firebase/app'
import 'firebase/firestore'


//ideti savo DB duomenis

var firebaseConfig = {
    // apiKey: ,
    // authDomain: ,
    // projectId: ,
    // storageBucket: ,
    // messagingSenderId: ,
    // appId:
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase