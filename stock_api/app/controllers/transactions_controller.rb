class TransactionsController < ApplicationController
    def index
        transactions = Transaction.all
        render json: transactions
    
    end

    def create
        # byebug
        user = User.find(params[:user_id])
        
        if user.valid? && params[:total].to_f <= user.balance
            new_balance= user.balance - params[:total].to_f
            user.update_attribute(:balance, new_balance)
            transaction = Transaction.create(transaction_params)

            if transaction.valid?
                render json: {transaction: transaction, user: user}
            else
                render json:{errors: transaction.errors.full_messges}, status:422
            end
        else
            render json:{errors: user.errors.full_messges}, status:422
        end
    
    end

    private

    def transaction_params
        params.permit(:ticker, :price, :quantity, :user_id)
    end


end
