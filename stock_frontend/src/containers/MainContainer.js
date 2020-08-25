import React, { Component } from "react";
import PortfolioContainer from "./PortfolioContainer";
import FormContainer from "./FormContainer";

export default class MainContainer extends Component {
  state = {
    userStocks: [],
    currentUser: {},
  };

  componentDidMount() {
    fetch("http://localhost:3000/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          userStocks: user.holdings,
          currentUser: user,
        });
      });
  }

  displayNewStock = (newStock) => {
    let copiedStocks = this.state.userStocks.filter(
      (stock) => stock.ticker !== newStock.ticker
    );
    this.setState({
      userStocks: [newStock, ...copiedStocks],
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-8">
            <PortfolioContainer
              currentUser={this.state.currentUser}
              stocks={this.state.userStocks}
            />
            <ul className="list pl0 measure ">
              <h6> KEY</h6>
              <li className="bg-green">Stock Price Up </li>
              <li className="bg-gray">Stock Price Stable </li>
              <li className="bg-red">Stock Price Down </li>
            </ul>
          </div>
          <div className="col-4">
            <FormContainer
              currentUser={this.state.currentUser}
              displayNewStock={this.displayNewStock}
            />
          </div>
        </div>
      </div>
    );
  }
}
