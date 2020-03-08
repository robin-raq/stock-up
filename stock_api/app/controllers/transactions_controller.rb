class TransactionsController < ApplicationController
    def index
        transactions = Transaction.all
        render json: transactions
    
    end

    def create
    
    end

end
