$(document).on('turbolinks:load', function() {
  submitNewMessage();
  broadcastJoinMessage();
  window.addEventListener("beforeunload", function(event) {
    event.preventDefault();
    $.ajax({
      url: "/joined",
      data: { username: $("#username_field").val(), actions: "left" },
      type: 'POST',
      success: function(data){
        console.log("left");
      }
    });
  });
});

function submitNewMessage(){
    $('textarea#message_content').keydown(function(event) {
          if (event.keyCode == 13) {
                    $('[data-send="message"]').click();
                    $('[data-textarea="message"]').val(" ")
                    return false;
                 }
        });
}

function broadcastJoinMessage(){
  $.ajax({
    url: "/joined",
    data: { username: $("#username_field").val(), actions: "join" },
    type: 'POST',
    success: function(data){
      console.log("joinned");
    }
  });
}
