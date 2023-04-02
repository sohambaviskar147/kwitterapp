
      var firebaseConfig = {
      apiKey: "AIzaSyBGUYAo6ZTuF6_78iYuMxiOAEaHk0ijDro",
      authDomain: "kwitter-b5625.firebaseapp.com",
      databaseURL: "https://kwitter-b5625-default-rtdb.firebaseio.com",
      projectId: "kwitter-b5625",
      storageBucket: "kwitter-b5625.appspot.com",
      messagingSenderId: "872544668284",
      appId: "1:872544668284:web:f743e302fa166381d857f9"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name") ;

    document.getElementById("user_name").innerHTML = " Welcome " + user_name + "!" ;


    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names) ; 
      row = "<div class = 'room_name' id="+ Room_names +" onclick = 'redirctToRoomName(this.id) '>" + Room_names + "</div>" ; 
      //End code
      });});}
getData();

function addRoom()
{

      room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      }) ;
      localStorage.setItem("room_name",room_name) ;

      window.location = "kwitter_page.html" ;
}     

      function redirctToRoomName()
      {
            localStorage.setItem("your room name ", new_room_name) ;

            window.location ="kwitter_page.html" ;
      }
function logout() 
{

      window.location = "index.html" ;

}