$(".heading-compose").click(function() {
      $(".side-two").css({
        "left": "0"
      });
    });

    $(".newMessage-back").click(function() {
      $(".side-two").css({
        "left": "-100%"
      });
    });
    
/*showing current time and date*/
var d = new Date()
document.getElementById("time").innerHTML = d.toUTCString()