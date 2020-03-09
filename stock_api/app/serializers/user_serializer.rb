class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :balance
  has_many :holdings
  has_many :transactions
end
