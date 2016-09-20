class JoinController < ApplicationController
  def joined
    username = params[:username]
    if username != "default"
      ActionCable.server.broadcast 'joined',
        user: username,
        action: params[:actions]
      head :ok
    else
      render nothing: true, status: 422
    end
  end
end
