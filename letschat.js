function addUser(){
    username=document.getElementById("user_name").value;
    localStorage.setItem("username",user_name);

    window.location="letschat_room.html"
}