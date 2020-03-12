import React, { Component } from 'react';
import tokens from '../config_keys.js';

export default class StockItem extends Component {
    state ={
        marketStock: {price: 0},
    }

    componentDidMount(){
        this.getStockInfo(this.props.stock.ticker)  
    }
    
    getStockInfo=(ticker)=>{
        //Sometimes the IEX API or AlphaVantage API does not return open or closing prices so will have to switch url of fetch
        // fetch(`https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${tokens.IEX_TOKEN}`)
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${tokens.AlPHAV_TOKEN}`)
        .then(r => r.json())
        .then((stockObj) => {
            console.log("Portfolio Stock's API response", stockObj) 
            let stockTotal = parseInt(stockObj["Global Quote"]["05. price"]) * parseInt(this.props.stock.quantity)
            console.log("stock total", stockTotal)
            const alphaStock = {
                ticker: stockObj["Global Quote"]["01. symbol"], 
                open: stockObj["Global Quote"]["02. open"], 
                price: stockObj["Global Quote"]["05. price"], 
                previousClose: stockObj["Global Quote"]["08. previous close"]
            }
            this.props.updateTotal(stockTotal)
            this.setState({
                marketStock: alphaStock
            })
        
            //use code below to IEX API
            // const IEXStock = {
            //     ticker:stockObj.symbol,
            //     open: stockObj.open,
            //     price: stockObj.latestPrice,
            //     previousClose: stockObj.close
            // }
            // this.setState({marketStock: IEXStock})
        })
        .catch((error) => {
            alert("Our server caught an error,click Ok to continue")
        })
    }

    // determines display color of stock based on open and current price
    stockColor=()=> {
        if(this.state.marketStock.price < this.state.marketStock.open){
            return "red"
        }
        else if(this.state.marketStock.price >this.state.marketStock.open){
            return "green"
        }
        else {
            return "grey"
        }
    }

    
    

    render() {
        return (
            <div>
                <div className="card avenir" style ={{background: this.stockColor()}}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.stock.ticker}</h5>
                        <p className="card-text">{this.props.stock.quantity} shares : ${(this.state.marketStock.price * this.props.stock.quantity).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        )
    }
}
