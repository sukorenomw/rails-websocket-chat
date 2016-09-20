App.messages = App.cable.subscriptions.create('MessagesChannel', {
  received: function(data) {
      $("#messages").removeClass('hidden')
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
      return $('#messages').append(this.renderMessage(data));
    },

  renderMessage: function(data) {
    return "<p> <b>" + data.user + ": </b>" + data.message + "</p>";
  }
});
