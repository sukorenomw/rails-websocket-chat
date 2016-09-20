class MessagesController < ApplicationController
  def create
    username = params[:message][:username] || "default"
    message = Message.new(message_params)
    message.user = User.where(username: username).first_or_create(username: username)
    if message.save
      ActionCable.server.broadcast 'messages',
        message: message.content,
        user: message.user.username
      head :ok
    else
      redirect_to root_path
    end
  end

  private
  def message_params
    params.require(:message).permit(:content)
  end
end
