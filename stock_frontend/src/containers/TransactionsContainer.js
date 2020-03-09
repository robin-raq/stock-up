import React, { Component } from 'react'

export default class TransactionsContainer extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.currentUser.name}'s Transactions</h2>
            </div>
        )
    }
}
