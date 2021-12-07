import React, {useState} from 'react'
import { Link, useNavigate} from "react-router-dom"
import { auth } from '../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,
onAuthStateChanged, signOut} from "firebase/auth"
import "./login.css"

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async (e) =>{
        e.preventDefault();
        try {
           const user = await signInWithEmailAndPassword(auth, email, password);
           if (user) {
               navigate("/");
           }
       } catch (error ) {
           console.log(error.message);
       }
        
    } 
    const register = async (e) =>{
        e.preventDefault();
       try {
           const user = await createUserWithEmailAndPassword(auth, email, password);
           console.log(user);
       } catch (error) {
           alert(error.message)
       }
    }
    return (
        <div className="login">
            <Link to="/">
             <img  className="loginLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png" alt=""/>
            </Link>
            <div className="loginContainer">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button  type='sumbit' onClick={signIn} className="loginSignInButton">Sign In</button>
                </form>
                <p>
                   By continuing, you agree to AMAZON CLONE Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register} className="loginRegisterButton">Create your Amazon Account </button>
            </div>      
        </div>
    )
}

export default Login
