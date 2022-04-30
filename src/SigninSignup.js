import React, { useState } from 'react';
import './SigninSignup.css';
import { Link, useHistory } from "react-router-dom";
import { auth,db } from "./firebase";
import {Sliderbar} from './Sliderbar';

export const SigninSignup=(props) => {

    const [Fname, setFName] =useState('');
    const [Lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred) => {
            db.collection('SignedUpUsersData').doc(cred.user.uid).set({
                FName: Fname,
                LName: Lname,
                Email: email,
                Password: password
            }).then(() => {
                setFName('');
                setLName('');
                setEmail('');
                setPassword('');
                setError('');
                props.history.push('/Signup');
            }).catch(err => setError(err.message));
        }).catch(err => setError(err.message));
    }
    return (
        <div>
            <Sliderbar/>
            <div className="inn">
                <div className="lgimg">
                    <img src="asserts/register-removebg-preview.png"/>
                </div>
                <div className="user-form">
                    <h3> WELCOME!</h3>
                <form autoComplete="off"  onSubmit={signup}>
                    <i class="fas fa-user"></i>
                    <input type="text"  placeholder="First Name" required
                    onChange={(e) => setFName(e.target.value)} value={Fname} /><br/>
                     <i class="fas fa-user"></i>
                    <input type="text"  placeholder="Last Name"required
                    onChange={(e) => setLName(e.target.value)} value={Lname} /><br/>
                    <i class="fas fa-envelope"></i>
                    <input type="email"  placeholder="Your Email" required
                    onChange={(e) => setEmail(e.target.value)} value={email}/><br/>
                    <i class="fas fa-lock"></i>
                    <input type="password"  placeholder="Create Password" required
                    onChange={(e) => setPassword(e.target.value)} value={password}/><br/>
                <div className="lgbtn"> 
                <Link to='/Signup'><button className="btn primary">
                    Login</button>
                    </Link>
                    <button type="submit" className="btn">Create Account</button>
                </div>
                </form>    
            {error && <span className='error-msg'>{error}</span>}
                </div>
            </div>
        </div>
    )
}

export default SigninSignup;
