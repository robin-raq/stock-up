class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :holdings
  has_many :transactions
end
