import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext'
import { auth } from '../../auth/firebase/firebase';

function Header() {
    const { userLoggedIn } = useAuth()
    const navigate = useNavigate()
  return (
    <div className="content-header">
      <div className="top-header">
        
        <div className="end-header">
            <Link to="/">
                <button className="enter-button" >Home</button>
            </Link>
            {
                userLoggedIn 
                ?
                <>  
                    <Link to="/watchlist">
                    <button className="enter-button"> View Watchlist</button>
                    </Link>
                    
                    <button className="enter-button" onClick={() => { auth.signOut().then(() => { navigate('/home') }) }}> Sign Out</button> 
                </>
                :
                <>
                <Link to="/login">
                <button className="enter-button" >Login</button>
                </Link>
                
                <Link to={'/signup'}>
                <button className="enter-button" >Sign Up</button>
                </Link>
                </>
            } 
        </div>
      </div>
    </div>
  )
}

export default Header