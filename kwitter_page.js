
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

           room_name = localStorage.getItem("room_name") ; 


           

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send()
{

      msg = document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      }) ;
      document.getElementById("msg").value = "" ;

      
}

function logout()
{

      window.location = "index.html" ;
      

}