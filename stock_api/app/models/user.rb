class User < ApplicationRecord
    #auth and validation
    has_secure_password
    validates :email, uniqueness: true
    validates :balance, numericality: {greater_than_or_equal_to: 0}

    #associations
    has_many :transactions 
    has_many :holdings
end
