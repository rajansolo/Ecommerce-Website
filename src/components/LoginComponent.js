import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../CSS/login.css';
import { auth } from '../firebase/firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const login = (event) => {
        event.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth) => {
                history.push("/");
            })
            .catch((e) => alert(e.message))
    }

    const register = (event) => {
        event.preventDefault();
        auth 
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {

            })  
            .catch((e) => alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/home"> <img  className="login__image" src="./assets/images/header/logo.png"  alt="logo"/></Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <h5>Email</h5>
                <input className="login__input" type="text" placeholder="username" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <h5> Password </h5>
                <input className="login__input" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className="login__button" type="submit" onClick={login}> sign in </button>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button className="register__button" onClick={register}>Create your account</button>
            </div>
        </div>
    )
}

export default Login;
