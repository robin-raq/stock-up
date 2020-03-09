import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class HomePage extends Component {
    render () {
        console.log(this.props)
        return (
            <div>
                <h5>Hi, Welcome to StockUp! Please Select an option from above to proceed. </h5> 
                {/* <ul>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul> */}
            </div>
        );
    }
}

export default HomePage;