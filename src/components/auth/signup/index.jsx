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
           <h1>Sign Up</h1>
           <form onSubmit={signUpOnSubmit}>
                <input type="email" placeholder='Enter your email' value={email} onChange ={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder='Enter your password' value={password} onChange ={(e) => setPassword(e.target.value)}></input>
                <button type="Submit"> Submit</button>
           </form>
            <h2>{errorMessage}</h2>
        </div>
    )
}

export default Signup