import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar(props) {
    return (
        <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
        <nav className="f6 fw6 ttu tracked">
        <div>
        { props.currentUser
          ? <> 
              <Link className="link dim white dib mr3" to="/profile">PORTFOLIO</Link>
              <Link className="link dim white dib mr3" to="/transactions">TRANSACTIONS</Link>
            </>
          : <> 
              <Link className="link dim white dib mr3" to="/signup">SIGNUP</Link>
              <Link className="link dim white dib mr3" to="/login">LOGIN</Link>
            </>
        }
        </div>
        <Link className="link white-70 hover-white no-underline flex items-center pa3" to="/" onClick={null}>
          LOGOUT
        </Link>
      
        </nav>
        </header>
    
    )
}
