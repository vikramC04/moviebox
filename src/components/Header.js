import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="content-header">
      <div className="top-header">
        
        <div className="end-header">
                <Link to="/">
                    <button className="enter-button" >Home</button>
                 </Link>
                 <Link to="/login">
                    <button className="enter-button" >Sign Up</button>
                 </Link>
                
                <Link to={'/signup'}>
                <   button className="enter-button" >Log In</button>
                </Link>
        </div>
      </div>
    </div>
  )
}

export default Header