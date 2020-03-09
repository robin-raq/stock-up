import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class HomePage extends Component {
    render () {
        console.log(this.props)
        return (
            <div className="tc ph4">
                <div className="f3 f2-m f1-l fw2 black-90 mv3">Welcome! 
                </div> 
                    <h1 class="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
                        Please Select an option from above to proceed. 
                    </h1>
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