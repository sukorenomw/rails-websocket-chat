class JoinChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'joined'
  end
end
