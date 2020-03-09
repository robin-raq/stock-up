import React, { Component } from 'react';
import TransactionItem from './TransactionItem'

export default class TransactionsPage extends Component {
    state={
        currentUser: '',
        transactions:[]
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
                transactions: user.transactions,
                currentUser: user
            })
        })
        
    }

    render() {
        return (
            <div>
                <h2>{this.state.currentUser.name}'s Transactions</h2>
                {
                    this.state.transactions.map(transactionObj=> <TransactionItem transaction={transactionObj} key = {transactionObj.id}/>)
                }
            </div>
        )
    }
}
