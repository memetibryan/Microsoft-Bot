function sendText(){
      var message = document.getElementById("message").value;
      document.getElementById("messages").innerHTML = message;
      console.log(message);
    };

function writeUserData(message) {
  firebase.database().set({
    sentmessage: message
  });
}