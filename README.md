<h1 align='center'><b> Stock Up 📈</b></h1>  
<p align='center'>
    A simple fullstack web-based application for buying and monitoring a portfolio of stocks
</p>

**Demo** 
------------
![stock-up-demo](images/stock-up.gif)

**Features**
------------
Stock Up is an app that aims to provide users a convenient way to buy for stocks and monitor their portfolio. 
- Users can signup and login. 
- Users can buy shares of a stock at it's current price.
- Users can view a list of all transactions made to date
- Users can view their portfolio to review performance of stocks and see immediately via color indicator whether current price is less than, greater than or equal to the day's opening price


**Tech Stack**
--------------

This web app makes use of the following:

**Backend**

-   [Ruby 2.6.1](https://www.ruby-lang.org/en/)
-   [Ruby on Rails ~> 5.2.3](https://rubyonrails.org/) - MVC web framework used as an API
-   [PostgreSQL >= 0.18, < 2.0](https://www.postgresql.org/) - Database
-   [bcrypt ~>3.1.7](https://github.com/codahale/bcrypt-ruby) - Rails gem for encryption and securing user passwords
-   [Active Model Serializers](https://github.com/rails-api/active_model_serializers) - Serializing API routes to JSON




**Front End**


-   [React.js](https://reactjs.org/) - Javascript library
-   [react-router](https://github.com/ReactTraining/react-router#readme) - NPM used for declarative routing
-   [Bootstrap](https://getbootstrap.com/)- CSS library
-   [tachyons](https://tachyons.io/) - CSS library



**Prerequisites**
-----------------

Before you begin, ensure you have installed the latest version of:

-   [Node.js and npm](https://nodejs.org/en/)

This web app uses the following API keys from:

-   [IEX Cloud API](https://iexcloud.io/docs/api/)
-   [Alpha Vantage API](https://www.alphavantage.co/documentation/)


 **Component Tree**
--------------------
- App
    - Header
    - LoginPage
    - SignUpPage
    - HomePage
    -FourOhFourPage
    - TransactionsPage
            - TransactionItem
    - MainContainer
        - PortfolioContainer
            - StockItem
        - PurchaseForm
        


**Additional Info**
--------------------------------

*For full commit history  please see initial repo click here: [stock-portfolio-app](https://github.com/robin-raq/stock-portfolio-app)*