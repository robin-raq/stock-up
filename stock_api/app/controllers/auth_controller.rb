class AuthController < ApplicationController
    def login
        # find a user
        # byebug
        user = User.find_by(email: params[:email])
        # if user exists, see if they are really the user via a password
        is_authenticated = user.authenticate(params[:password])
        # if all is well, send back the user
        if is_authenticated
            payload = {user_id: user.id}
            token = JWT.encode(payload,'portfolio','HS256')
            render json: {token: token, user: user}
        else
            render json: {errors: ['Wrong username or password']}, status: 422
        end
    
    end

end
