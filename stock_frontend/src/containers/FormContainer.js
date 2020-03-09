import React, { Component } from 'react';
import tokens from '../config_keys';

export default class FormContainer extends Component {
    state = {
        ticker: '',
        quantity: 0,
        total: 0,
        balance: 0,
        transaction:{ticker: 'N/A', price: 0},
        displayQuote: false, 
        canBuy: false
    }

    handleChange = (evt)=>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) =>{
        evt.preventDefault()
        fetch(`https://cloud.iexapis.com/stable/stock/${this.state.ticker}/quote?token=${tokens.IEX_TOKEN}`)
        .then(r => r.json())
        .then((stockObj) => {
            
            const newTotal = this.state.quantity * stockObj.latestPrice
            const transaction = { ticker: stockObj.symbol, price: stockObj.latestPrice, quantity: this.state.quantity, user_id: this.props.currentUser.id, total: newTotal.toFixed(2)}

            const canBuy = (parseInt(transaction.total) <= parseInt(this.state.balance))

            console.log (transaction.total, this.state.balance)
            console.log (parseInt(transaction.total) <= parseInt(this.state.balance))

            this.setState({
                transaction: transaction,
                total: newTotal,
                displayQuote: true,
                canBuy: canBuy
                
            })
        }).catch((error) => {
            alert("Please Verify Stock Symbol and Try Again")
        });
    }

    handleClick =() => {
        // post fetch to database to create new transaction
        fetch(`http://localhost:3000/transactions`, {
            method:'POST',
            headers: { 
                'Content-type': 'application/json',
                'accept': 'application/json'
        },
            body: JSON.stringify(this.state.transaction)
        })
        .then(resp => resp.json())
        .then(respObj=> {
            console.log(respObj.transaction, respObj.user)
            this.setState({
                balance:  respObj.user.balance
            })
            
            
        }).catch((error) => {
            alert(error)
        });
        
        //post fetch to the database to create a new holding
        fetch(`http://localhost:3000/holdings`, {
            method:'POST',
            headers: { 
                'Content-type': 'application/json',
                'accept': 'application/json'
        },
            body: JSON.stringify(this.state.transaction)
        })
        .then(resp => resp.json())
        .then(respObj=> {
            // console.log(respObj.holding)
            this.props.displayNewStock(respObj.holding)
            this.setState({ticker: '', quantity: 0, displayQuote: false, canBuy: false})
            
        }).catch((error) => {
            alert(error)
        });
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
            const newBalance = parseInt(user.balance).toFixed(2)
            this.setState({
                balance: newBalance
            })
        })

    }

    
    
    render() {
        // console.log("currentUser's Balance", this.state.balance)
        const {price} = this.state.transaction
        return (
            <div className="pa4-l">
                <h2>Purchase Stocks</h2>


                <form 
                    className="bg-light-yellow mw7 center pa4 br2-ns ba b--black-10" 
                    onSubmit = {this.handleSubmit}
                >
                <fieldset className="cf bn ma0 pa0">
                    <legend className="pa0 f5 f4-ns mb3 black-80"> 
                        {
                            this.state.balance >= 0 ? 
                                <strong>Current Balance: ${parseInt(this.state.balance).toFixed(2)}</strong>  
                            :   <strong>Current Balance: $ INSUFFICIENT FUNDS </strong>
                        }
                    
                    </legend>

                    <div className="cf">

                        <label className="db fw4 lh-copy f6" >Ticker/Symbol</label>
                        <input 
                            className ="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns pb1" 
                            onChange = {this.handleChange} 
                            type="text" 
                            name="ticker" 
                            placeholder="AMZN" 
                            value = {this.state.ticker}></input><br/><br/>

                        <label className="db fw4 lh-copy f6" >Quantity</label>
                        <input 
                            className ="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns pb1" 
                            onChange = {this.handleChange} 
                            type="number"  
                            name="quantity" 
                            min="1" 
                            placeholder= " 1" 
                            value = {this.state.quantity}>
                        </input><br/><br/>

                        <input 
                            className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" 
                            type="submit" 
                            value="Get Price">
                        </input>
                    </div>

                    { 
                    this.state.displayQuote ?
                    <>
                        <span>
                            <strong>Cost Breakdown:</strong> 
                            <p> 
                                {this.state.quantity} shares of {this.state.ticker} stock @ ${price.toFixed(2)}/share 
                            </p>
                            <strong>Total Cost</strong>
                            <p> ${this.state.transaction.total} </p> 

                            {
                                this.state.canBuy ? <button onClick ={this.handleClick}>Buy</button> : <button>N/A</button>
                            }
                        </span> 
                    </>
                    :
                    <div></div>

                }

                </fieldset>
                </form><br/><br/>   

                
            </div>
        )
    }
}

