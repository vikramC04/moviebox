import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import { auth } from '../../auth/firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuth } from '../../auth/AuthContext'
import { Navigate} from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { userLoggedIn } = useAuth()
    const [errorMessage, setErrorMessage] = useState('')
    

    const loginOnSubmit = async (e) => {
        e.preventDefault()
        await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            console.log(error)
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
                    Login
                    </div>
                    <form className="signup-form" onSubmit={loginOnSubmit}>
                    <div className="field">
                        <input type="email" placeholder='Enter your email' value={email} onChange ={(e) => setEmail(e.target.value)}></input>
                        <label>Email Address</label>
                    </div>
                    <div className="field">
                        <input type="password" placeholder='Enter your password' value={password} onChange ={(e) => setPassword(e.target.value)}></input>
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

export default Login