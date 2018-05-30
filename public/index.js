function sendText(){
      var message = document.getElementById("message").value;
      document.getElementById("messages").innerHTML = message;
      console.log(message);
    };