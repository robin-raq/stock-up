class UsersController < ApplicationController
    def index
        users = User.all 
        render json: users, include: "**"
    
    end

    def show
        user = User.find(params[:id])
        render json: user, include: "**"
    end



    def profile
        token = request.headers['Authorization'].split(" ")[1]
        decoded_token = JWT.decode( token, 'portfolio', true, {algorithm: 'HS256'})
        user_id = decoded_token[0]["user_id"]
        current_user = User.find(user_id)
        render json: current_user
    end
    
    def create
        user = User.create(user_params)
    
        if user.valid?
            payload = {user_id: user.id}
            token = JWT.encode(payload, 'portfolio', 'HS256')
            render json: {token:token, user: user}
        else
            render json: {errors: user.errors.full_messages}, status: 422
        end
    end
    
    private
    
        def user_params
            params.permit(:name, :email, :password)
        end
end
