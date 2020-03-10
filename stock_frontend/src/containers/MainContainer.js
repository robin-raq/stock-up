import React, { Component } from 'react';
import PortfolioContainer from './PortfolioContainer';
import FormContainer from './FormContainer';

export default class MainContainer extends Component {

    state = {
        userStocks: [],
        currentUser: {}
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

    displayNewStock =(newStock)=>{
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
                        <PortfolioContainer 
                            currentUser={this.state.currentUser} 
                            stocks = {this.state.userStocks}
                        />
                    </div>
                    <div className="col-4">
                        <FormContainer 
                            currentUser={this.state.currentUser}  
                            displayNewStock ={this.displayNewStock}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
