class User < ApplicationRecord
has_secure_password
validates :username, presence: true, uniqueness: true
validates :email, presence: true, uniqueness: true
validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
validates :password, length: { minimum: 6 }

has_many :post, dependent: :destroy 
has_many :comments
has_many :likes 
end
