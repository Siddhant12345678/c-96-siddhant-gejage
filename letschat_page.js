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

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;

           console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class = 'user_tick' src ='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> like:"+like+"</span></button> <hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
       } });  }); }

        getData();
function updateLike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({ 
            like: updated_likes
      });
}
  getData();
  function send(){
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value="";
  
  }

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  
  window.location="index.html";
}