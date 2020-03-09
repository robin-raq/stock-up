import React, { Component } from 'react';
import PortfolioContainer from './PortfolioContainer';
import FormContainer from './FormContainer';
import tokens from '../config_keys.js';
import { Switch, Route, withRouter } from 'react-router-dom';

export default class MainContainer extends Component {

    state = {
        userStocks: [],
        currentUser: {},
        userBalance: 0
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
                userBalance: user.balance
            })
        })
        
    }
    buyStock =()=>{

    }

    render() {
        
        return (
            <div>
                <div className="row">
                    <div className="col-8">
                        <PortfolioContainer currentUser={this.state.currentUser} stocks = {this.state.userStocks} getStockInfo = {this.getStockInfo}/>
                    </div>
                    <div className="col-4">
                        <FormContainer currentUser={this.state.currentUser} balance= {this.state.userBalance} getStockInfo = {this.getStockInfo} buyStock ={this.buyStock}/>
                    </div>
                </div>
            </div>
        )
    }
}
