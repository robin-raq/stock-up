class HoldingsController < ApplicationController
    def index
        holdings = Holding.all
        render json: holdings
    end
end
