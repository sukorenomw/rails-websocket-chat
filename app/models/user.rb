class User < ApplicationRecord
  has_many :message
  validates :username, presence: true, uniqueness: true
end
