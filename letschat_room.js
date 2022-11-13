const firebaseConfig = {
    apiKey: "AIzaSyA-sZfbtgOswSgk7vKGceA_-RzXAFyytkI",
    authDomain: "letschat-f7e28.firebaseapp.com",
    databaseURL: "https://letschat-f7e28-default-rtdb.firebaseio.com",
    projectId: "letschat-f7e28",
    storageBucket: "letschat-f7e28.appspot.com",
    messagingSenderId: "591624066367",
    appId: "1:591624066367:web:c157fc48478e94f587ef8a"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+" !";

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="letschat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
    });});}
    getData();
    
    function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="letschat_page.html";
    }
    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      
      window.location="index.html";
    }

 