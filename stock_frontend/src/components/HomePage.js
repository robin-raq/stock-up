import React, { Component } from 'react';

class HomePage extends Component {
    render () {
        console.log(this.props)
        return (
            <div className="tc ph4">
                <div className="f3 f2-m f1-l fw2 black-90 mv3">Welcome!</div> 
                <h1 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
                    Please Select an option from above to proceed. 
                </h1>
            </div>
        );
    }
}

export default HomePage;