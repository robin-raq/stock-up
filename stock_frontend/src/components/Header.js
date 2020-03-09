import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
    
    return (
        <header className="bg-white black-80 tc pv2 avenir">
            <a href="" className="bg-black-80 ba b--black dib pa2 w2 h2 br-100">    
            </a>
            <h1 className="mt2 mb0 baskerville i fw1 f1">Stock Up!</h1>
            <h2 className="mt2 mb0 f6 fw4 ttu tracked">Manage Your Portfolio with Ease</h2>
            
            <nav className="bt bb tc mw10 center mt4">
            { localStorage.token
            ? <>
            <Link 
                className ="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/portfolio">Portfolio</Link>
            <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/transactions">Transactions</Link>
            <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" to="/login" onClick ={()=>props.handleLogout()}>Logout</Link>
            </>
            : <>
            <Link 
                className ="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/login">Login</Link>
            <Link className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/signup">Signup</Link>
            </>

            }
            
  </nav>
</header>
    )
}
