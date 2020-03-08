User.destroy_all
Holding.destroy_all
Transaction.destroy_all


user1 = User.create(name: "Raq", email: "raq@gmail.com", password: 'pass123')

user2 = User.create(name: "Hope", email: "hope@gmail.com", password: 'pass456')

transaction1 = Transaction.create(ticker: "fb", quantity: 4, price: 100, user: user1)


transaction2 = Transaction.create(ticker: "amzn", quantity: 2, price: 100, user: user2)

holding1 = Holding.create(ticker: "FB", quantity: 4, user: user1)

holding2 = Holding.create(ticker: "AMZN", quantity: 2, user: user2)

holding3 = Holding.create(ticker: "GOOG", quantity: 2, user: user1)

holding4 = Holding.create(ticker: "V", quantity: 10, user: user1)

holding5 = Holding.create(ticker: "NKE", quantity: 10, user: user2)

holding6 = Holding.create(ticker: "UAA", quantity: 5, user: user2)