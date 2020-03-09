import React, { Component } from 'react';
import PortfolioContainer from './PortfolioContainer';
import FormContainer from './FormContainer';

export default class MainContainer extends Component {

    state = {
        userStocks: [],
        currentUser: {},
    }
    
    componentDidMount(){

        fetch('http://localhost:3000/profile',{
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
        .then(res => res.json())
        .then((user) => {
            // console.log(user)   
            this.setState({
                userStocks: user.holdings,
                currentUser: user,
            })
        })
        
    }

    updateUserBalance =(userObj)=>{
        this.setState({
            currentUser: userObj
        })

    }
    displayNewStock =(newStock)=>{
        // let copiedStocks = [...this.state.userStocks]
        let copiedStocks = this.state.userStocks.filter(stock => stock.ticker !== newStock.ticker )

        this.setState({
            userStocks:[newStock, ...copiedStocks]
        })

    }

    render() {
        // console.log(this.state.currentUser)
        
        return (
            <div>
                <div className="row">
                    <div className="col-8">
                        <PortfolioContainer currentUser={this.state.currentUser} stocks = {this.state.userStocks} getStockInfo = {this.getStockInfo}/>
                    </div>
                    <div className="col-4">
                        <FormContainer 
                            currentUser={this.state.currentUser}  getStockInfo = {this.getStockInfo} 
                            updateUserBalance ={this.updateUserBalance}
                            displayNewStock ={this.displayNewStock}
                            />
                    </div>
                </div>
            </div>
        )
    }
}
