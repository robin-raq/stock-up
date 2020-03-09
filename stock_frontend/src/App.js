import React, {Component} from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import TransactionsPage from './components/TransactionsPage';
import SignUpPage from './components/SignUpPage';
import FourOhFourPage from './components/FourOhFourPage'
import MainContainer from './containers/MainContainer';
import { Switch, Route, withRouter } from 'react-router-dom';
// import './App.css';

class App extends Component{
  state = {
    currentUser: {}
  }

  // componentDidMount(){
  //   if (localStorage.token) {
  //     fetch('http://localhost:3000/profile',{
  //       headers: {
  //         'Authorization': `Bearer ${localStorage.token}`
  //       }
  //     })
  //     .then(res => res.json())
  //     .then((user) => {
  //       // console.log(user)   
  //       this.setState({currentUser: user})
  //     })
      
  //   } else {
  //     this.props.history.push('/login')
  //   }

  // }

  handleLogout =()=>{
    localStorage.clear()
    // window.location.reload();
  }

  render(){
    // console.log(this.state)
    if (localStorage.token){
    return(
      <div className="App">
        <Header currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>
        
        <Switch>
          <Route
            path={'/portfolio'}
            render={routerProps => <MainContainer currentUser= {this.state.currentUser} {...routerProps} />} />
            <Route 
              path={"/transactions"}
              render={routerProps => <TransactionsPage {...routerProps}/>} 
            />
          {/* <Route path={'/login'} component={LoginPage} />
          <Route path={'/signup'} component={SignUpPage} /> */}
          <Route exact path={'/'} component={MainContainer} />
          <Route component={FourOhFourPage} />
      </Switch>
        {/* <MainContainer/> */}
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
