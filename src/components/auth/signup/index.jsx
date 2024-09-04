import React, { useState } from 'react'
import Header from '../../Header'
import { auth } from '../../firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useAuth } from '../../contexts/authContexts'
import { Navigate} from 'react-router-dom'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { userLoggedIn } = useAuth()
    const [errorMessage, setErrorMessage] = useState('')

    const signUpOnSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            setErrorMessage(error.message)
        })
    }
    return (
        <div>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
           <Header />
           <div className="fcontainer">
            <div className="wrapper-form">
                    <div className="title">
                    Sign Up
                    </div>
                    <form className="signup-form" onSubmit={signUpOnSubmit}>
                    <div  className="field">
                        <input className="input-signup" type="email" placeholder='Enter your email' value={email} onChange ={(e) => setEmail(e.target.value)}></input>
                        <label>Email Address</label>
                    </div>
                    <div className="field">
                        <input className="input-signup" type="password" placeholder='Enter your password' value={password} onChange ={(e) => setPassword(e.target.value)}></input>
                        <label>Password</label>
                    </div>
                    <div className="field">
                        <input type="Submit" className="submit-type"></input>
                    </div>
                    <div className="error">
                        {errorMessage}
                    </div>
                    </form>
                </div>
           </div>
        </div>
    )
}

export default Signup