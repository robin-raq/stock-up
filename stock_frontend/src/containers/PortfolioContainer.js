import React, { Component } from 'react';
import StockItem from '../components/StockItem'

export default class PortfolioContainer extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.currentUser.name}'s Portfolio</h2>
                {
                    this.props.stocks.map(stockObj=> <StockItem stock={stockObj} key = {stockObj.id} getStockInfo = {this.props.getStockInfo}/>)
                }
                
            </div>
        )
    }
}
