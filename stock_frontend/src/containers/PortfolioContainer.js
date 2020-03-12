import React, { Component } from 'react';
import StockItem from '../components/StockItem';

export default class PortfolioContainer extends Component {
    state ={
        total: 0
    }

    updateTotal=(stockTotal)=>{
        const newTotal = this.state.total + stockTotal
        this.setState({total: newTotal})
    }
    render() {
        console.log("total", this.state.total)
        return (
            <div>
                <h2 ><strong className ="text-capitalize">{this.props.currentUser.name}</strong>'s Portfolio (${this.state.total})</h2>
                {
                    this.props.stocks.map(stockObj=> <StockItem stock={stockObj} key = {stockObj.id} updateTotal= {this.updateTotal}/>)
                }    
            </div>
        )
    }
}
