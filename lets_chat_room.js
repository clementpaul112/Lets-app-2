// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyClUfqOemb4qESWtBz9q6MI1OcG-cGS-YM",
    authDomain: "lets-chat-app-1fa35.firebaseapp.com",
    databaseURL: "https://lets-chat-app-1fa35.firebaseio.com",
    projectId: "lets-chat-app-1fa35",
    storageBucket: "lets-chat-app-1fa35.appspot.com",
    messagingSenderId: "638899380733",
    appId: "1:638899380733:web:39a1222f36ef5f38fd3994"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name +"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     
      });});}

function addRoom()
{
      room_name = document.getElementById(room_name).nodeValue;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="lets_chat_room.html";
}
