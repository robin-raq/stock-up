import React, {Component} from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import TransactionsPage from './components/TransactionsPage';
import SignUpPage from './components/SignUpPage';
import FourOhFourPage from './components/FourOhFourPage'
import MainContainer from './containers/MainContainer';
import { Switch, Route, withRouter } from 'react-router-dom';


class App extends Component{
  state = {
    currentUser: {}
  }

  handleLogout =()=>{
    localStorage.clear()
  }

  render(){
    if (localStorage.token){
      return(
        <div className="App">
          <Header currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>
          <Switch>
            <Route
              path={'/portfolio'}
              render={routerProps => <MainContainer 
              currentUser= {this.state.currentUser} {...routerProps} />} 
            />
            <Route 
              path={"/transactions"}
              render={routerProps => <TransactionsPage {...routerProps}/>} 
            />
            <Route exact path={'/'} component={MainContainer} />
            <Route component={FourOhFourPage} />
          </Switch>
        </div>
      )
    }else{
      return(
        <div className="App">
          <Header currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>
          <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route path={'/login'} component={LoginPage} />
            <Route path={'/signup'} component={SignUpPage} />
            <Route component={FourOhFourPage} />
            </Switch>
        </div>
      )
    }
  }
}

export default withRouter(App);
