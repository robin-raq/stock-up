import React, {Component} from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import FourOhFourPage from './components/FourOhFourPage'
import NavBar from './components/NavBar';
import MainContainer from './containers/MainContainer';
import { Switch, Route, withRouter } from 'react-router-dom';
// import './App.css';

class App extends Component{
  state = {
    name: ''
  }

  componentDidMount(){
    if (localStorage.token) {
      fetch('http://localhost:3000/profile',{
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
      .then(res => res.json())
      .then(user => this.setState({name: user.name}))
      
    } else {
      this.props.history.push('/login')
    }
  }

  render(){
    console.log(this.props)
    return(
      <div className="App">
        <Header currentUser={this.state.name} />
        {/* <NavBar currentUser={this.state.name}/> */}
        
        <Switch>
          <Route
            path={'/profile'}
            render={routerProps => <MainContainer {...routerProps} name={this.state.name}/>} />
          <Route path={'/login'} component={LoginPage} />
          <Route path={'/signup'} component={SignUpPage} />
          <Route exact path={'/'} component={HomePage} />
          <Route component={FourOhFourPage} />
      </Switch>
        {/* <MainContainer/> */}
      </div>

    )
  }
}

export default withRouter(App);
