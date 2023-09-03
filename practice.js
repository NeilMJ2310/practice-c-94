
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBeVKIT7-LDU0st7HKQOPqitCxjXpvWzGE",
    authDomain: "kwitterr-6a9af.firebaseapp.com",
    databaseURL: "https://kwitterr-6a9af-default-rtdb.firebaseio.com",
    projectId: "kwitterr-6a9af",
    storageBucket: "kwitterr-6a9af.appspot.com",
    messagingSenderId: "949247772100",
    appId: "1:949247772100:web:531658a6a9566a17655091"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 function addUser(){
    name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(name).update({
        purpose:"adding user"
    });
    }
 