


var firebaseConfig = {
    apiKey: "AIzaSyBv48OKKLgv8f9d5yog07OqGolF7fIqnB4",
    authDomain: "kwitter-app-2-ade93.firebaseapp.com",
    databaseURL: "https://kwitter-app-2-ade93-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-2-ade93",
    storageBucket: "kwitter-app-2-ade93.appspot.com",
    messagingSenderId: "251681434324",
    appId: "1:251681434324:web:cd5e63cec1fbed84576941"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq7wxOeNGfh0wkGfnZ-6crPAgnjmKXXSQ",
  authDomain: "plutonium-94.firebaseapp.com",
  projectId: "plutonium-94",
  storageBucket: "plutonium-94.appspot.com",
  messagingSenderId: "681279483152",
  appId: "1:681279483152:web:f805cc2c1f4c894f6ac995",
  measurementId: "G-KDN4P6RP0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);