import React, { Component } from 'react';
import PortfolioContainer from './PortfolioContainer';
import FormContainer from './FormContainer';
import NavBar from '../components/NavBar'
import tokens from '../config_keys.js'

export default class MainContainer extends Component {

    state = {
        userStocks: [],
        marketStocks: [],
        currentUser: {}
    }
    
    componentDidMount(){
        //get the current users stocks from backend
        fetch("http://localhost:3000/holdings")
        .then(r => r.json())
        .then((stocksResponse) => {
            //console.log(stocksResponse)
            this.setState({
                userStocks: stocksResponse
            })
        })

        // get the market stocks from api
    }

    render() {
        
        return (
            <div>
                <div className="row">
                    <div className="col-8">
                        <PortfolioContainer stocks = {this.state.userStocks} getStockInfo = {this.getStockInfo}/>
                    </div>
                    <div className="col-4">
                        <FormContainer getStockInfo = {this.getStockInfo}/>
                    </div>
                </div>
            </div>
        )
    }
}
