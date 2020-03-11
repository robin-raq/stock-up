class HoldingsController < ApplicationController
    def index
        holdings = Holding.all
        render json: holdings
    end

    def create
        user = User.find(params[:user_id])

        if user.valid?
            if user.holdings.find_by(ticker: params[:ticker])
                holding = user.holdings.find_by(ticker: params[:ticker])
                new_quantity = holding.quantity + params[:quantity].to_i
                holding.update_attribute(:quantity, new_quantity)
                render json: {holding: holding}

            else
                holding = Holding.create(holding_params)
                render json: {holding: holding}
            end
        else
            render json:{errors: user.errors.full_messges}, status:422
        end

    end


    

    def create_or_find_existing_holding(user)
        if user.holdings.find_by(ticker: params[:ticker])
            holding = user.holdings.find_by(ticker: params[:ticker])
            new_quantity = holding.quantity + params[:quantity].to_i
            holding.quantity= new_quantity
        else
            holding = Holding.create(holding_params)
        end
    end


    private 

    def holding_params
        params.permit(:ticker, :quantity, :user_id)
    end
    
end
