App.joined = App.cable.subscriptions.create('JoinChannel', {
  received: function(data){
    $("#messages").removeClass('hidden');
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    console.log(data);
    if(data.action == "left"){
      return $('#messages').append("<p> -- <b>"+data.user+"</b> left the chat -- </p>");
    }else{
      return $('#messages').append("<p> -- <b>"+data.user+"</b> joined the chat -- </p>");
    }
  }
});
