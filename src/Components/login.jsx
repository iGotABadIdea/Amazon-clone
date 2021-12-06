import React from 'react'
import { Link } from "react-router-dom"
import "./login.css"

function Login() {
    return (
        <div className="login">
            <Link to="/">
             <img  className="loginLogo" src="https://wallpapercave.com/wp/wp7771200.png" alt=""/>
            </Link>
            <div className="loginContainer">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button className="loginSignInButton">Sign In</button>
                </form>
                <p>
                   By continuing, you agree to AMAZON CLONE Conditions of Use and Privacy Notice.
                </p>
                <button className="loginRegisterButton">Create your Amazon Account </button>
            </div>      
        </div>
    )
}

export default Login
