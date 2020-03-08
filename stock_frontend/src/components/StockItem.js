import React, { Component } from 'react';
import tokens from '../config_keys.js';

export default class StockItem extends Component {
    state ={
        marketStock: {price:"0"}
    }

    componentDidMount(){
        const newStockObj =  this.getStockInfo(this.props.stock.ticker)  
    }

    getStockInfo=(ticker)=>{
        fetch(`https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${tokens.IEX_TOKEN}`)
        // fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${tokens.AlPHAV_TOKEN}`)
        .then(r => r.json())
        .then((stockObj) => {
            // console.log(stockObj["Global Quote"])
            // const stock = {ticker: stockObj["Global Quote"]["01. symbol"], open: stockObj["Global Quote"]["02. open"], price: stockObj["Global Quote"]["05. price"], previousClose: stockObj["Global Quote"]["08. previous close"] }

            console.log(stockObj)
            const IEXStock = {
                ticker:stockObj.symbol,
                open: stockObj.open,
                price: stockObj.latestPrice,
                previousClose: stockObj.close
            }
            this.setState({marketStock: IEXStock})
        })
        .catch((error) => {
            alert("our server caught an error, please standby")
        });
    }

    myColor=()=> {
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
        console.log(this.props.stock.ticker)
        return (
            <div>
                <div className="card" style ={{background: this.myColor()}}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.stock.ticker}</h5>
                        <p className="card-text">{this.props.stock.quantity} shares : ${this.state.marketStock.price}</p>
                    </div>
                </div>
                
            </div>
        )
    }
}
