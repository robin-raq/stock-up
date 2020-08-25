class AuthController < ApplicationController
    def login
        user = User.find_by(email: params[:email])
        is_authenticated = user.authenticate(params[:password])

        if is_authenticated
            payload = {user_id: user.id}
            token = JWT.encode(payload,ENV['SECRET'],'HS256')
            render json: {token: token, user: user}
        else
            render json: {errors: ['Wrong username or password, please try again']}, status: 422
        end
    
    end

end
