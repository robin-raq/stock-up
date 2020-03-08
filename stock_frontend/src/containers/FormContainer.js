import React, { Component } from 'react';
import tokens from '../config_keys';

export default class FormContainer extends Component {
    state = {
        balance: 5000.00,
        ticker: '',
        quantity: 0,
        total: 0,
        transaction:{ticker: 'N/A', price: 0}
    }

    handleChange = (evt)=>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) =>{
        evt.preventDefault()
        // this.props.getStockInfo(this.state.ticker)
        fetch(`https://cloud.iexapis.com/stable/stock/${this.state.ticker}/quote?token=${tokens.IEX_TOKEN}`)
        .then(r => r.json())
        .then((stockObj) => {
            console.log(stockObj)
            const newTotal = this.state.quantity * stockObj.latestPrice
            const transaction = { ticker: stockObj.symbol, price: stockObj.latestPrice}
            this.setState({
                transaction: transaction,
                total: newTotal
            })
        }).catch((error) => {
            alert("Please Verify Stock Symbol and Try Again")
        });
    }

    handleClick =(evt)=>{
        // console.log("buy")
        
    }
    render() {
        // console.log(this.state)
        const {price, ticker} = this.state.transaction
        return (
            <div className="pa4-l">
                <h2>Purchase Stocks</h2>


                <form className="bg-light-yellow mw7 center pa4 br2-ns ba b--black-10" onSubmit = {this.handleSubmit}>
                <fieldset className="cf bn ma0 pa0">
                    <legend className="pa0 f5 f4-ns mb3 black-80"> <strong>Current Balance: ${this.state.balance}</strong></legend>
                    <div class="cf">

                        <label class="db fw4 lh-copy f6" >Ticker/Symbol</label>
                        <input className ="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns pb1" onChange = {this.handleChange} type="text" id="ticker" name="ticker" placeholder="AMZN" value = {this.state.ticker}></input><br/><br/>

                        <label class="db fw4 lh-copy f6" >Quantity</label>
                        <input className ="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns pb1" onChange = {this.handleChange} type="number" id ="quantity" name="quantity" placeholder= "0" value = {this.state.quantity}></input><br/><br/>

                        <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Get Price"></input>
                    </div>

                    <> <span><p>Cost Breakdown: {this.state.quantity} shares of {this.state.ticker} stock @ ${price}/share =  ${this.state.total} </p></span> <br/>
                <div>
                    <h4>Complete Transaction:</h4> {
                        this.state.total === 0 || this.state.total > this.state.balance? <span>N/A</span>: <button  onClick ={this.handleClick}>Buy</button>
                    }
                </div>
                </>


                    </fieldset>
                </form><br/><br/>
               
                
            </div>
        )
    }
}

