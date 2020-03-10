import React, { Component } from 'react';

export default class TransactionItem extends Component {
    render() {
        return (
            <div>
                <div className="card" style ={{background:"aqua"}}>
                    <div className="card-body">
                        <h5 className="card-title text-uppercase">BUY ({this.props.transaction.ticker})</h5>
                        <p className="card-text">{this.props.transaction.quantity} shares @ ${this.props.transaction.price}</p>
                    </div>
                </div>
            </div>
        )
    }
}
