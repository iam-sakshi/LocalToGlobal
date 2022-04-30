import React, { useState } from 'react';
import { auth } from "./firebase";
import {Link , useHistory} from "react-router-dom";
import './SigninSignup.css';
import {Sliderbar} from './Sliderbar';

export const Signup = (props) => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
    
        const login = (e) => {
            e.preventDefault();
            auth.signInWithEmailAndPassword(email, password).then(() => {
                setEmail('');
                setPassword('');
                setError('');
                props.history.push('/');
            }).catch(err => setError(err.message));
        }
    return (
       <div>
                       <Sliderbar/>
            <div className="inn" id="in">
                <div className="lgimg">
                    <img src="asserts/login-removebg-preview.png"/>
                </div>
                <div className="user-form">
                    <h3> WELCOME BACK!</h3>
                <form autoComplete="off" onSubmit={login}>
                    <i class="fas fa-envelope"></i>
                    <input type="email"  placeholder="Your Email" required
                    onChange={(e) => setEmail(e.target.value)} value={email}/><br/>
                    <i class="fas fa-lock"></i>
                    <input type="password"  placeholder="Enter Password"  vequired
                    onChange={(e) => setPassword(e.target.value)} value={password}/><br/>
                <div className="lgbtn"> 
                    <button className="primary btn" type="submit">Login</button>
                 <Link to="/SigninSignup">
                     <button className="btn">Create Account</button>
                </Link>
                </div>
                </form>
                {error && <span className='error-msg'>{error}</span>}

                </div>
            </div>
        </div>
    )
}

export default Signup
