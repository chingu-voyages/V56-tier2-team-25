

import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import "../../index.css";
import Header from '../Header';
import Footer from '../Footer'
import { useState } from "react";
import { auth } from '../../../firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


function Login() {
    const [existingAccount, toggleExisting] = useState('Yes');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const [emailaddress, setemailaddress] = useState('');
    const [password, setPassword] = useState('');

    const infoSubmitted = async () => {
    if (!emailaddress || !password) {
        setMessage('Email and password are required.');
        setMessageType('error');
        return;
    } else if (!/.+@.+\..+/.test(emailaddress)) {
        setMessage('Please enter a valid email address.');
        setMessageType('error');
        return;
    } else if (password.length < 8) {
        setMessage('Password must be at least 8 characters');
        setMessageType('error');
        return; 
    } else {
            if (existingAccount === 'Yes') {
                try {
                    const userCredential = await signInWithEmailAndPassword(auth, emailaddress, password);
                    console.log('Successful login, awaiting navigation logic');
                } catch (error) {
                    console.error('Error logging in:', error.message);
                }
                setMessage('User logged in');
                setMessageType('success');
                return;
            } else {
                try {
                    const userCredential = await createUserWithEmailAndPassword(auth, emailaddress, password);
                } catch (error) {
                    console.error('Error registering user:', error.message);
                }
                setMessage('User created');
                setMessageType('success');
                return;
            }
        }
    }

    return (  
        <>     
            <div className="ss-wrapper">
                <Header />
                <div className="ss-purple-page">
                    {message && (
                        <div className={messageType === 'success' ? 'success-message' : 'error-message'} style={{ position: 'relative' }}>
                            <button className="message-close-btn" onClick={() => setMessage('')} aria-label="Close message">&times;</button>
                            {message}
                        </div>
                    )}

                    <div className="ss-container">
                        <div className="input-wrapper">
                            <label className="input-label" htmlFor="emailaddress">Email Address</label>
                            <input id="emailaddress" type="text" className="input-bar" placeholder = "Email Address"  value={emailaddress} onChange={(e) => setemailaddress(e.target.value)} />
                        </div>
                        <div className="input-wrapper">
                            <label className="input-label" htmlFor="password">Password</label>
                            <input id="password" type="text" className="input-bar" placeholder = "Password"   value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        {existingAccount === 'Yes' ? (
                            <div>
                                <div className="btn-dark mb-6 block" onClick={infoSubmitted}>Sign In</div>
                                <p className="text-sm text-left mt-6">
                                    Surgery Staff or Admin but don't have an account?
                                </p>
                                <p className="text-sm text-left text-blue-400" onClick={() => toggleExisting('No')}>
                                    Create account
                                </p>
                            </div>
                        ) : (
                            <div>
                                <div className="btn-dark mb-6 block" onClick={infoSubmitted}>Create Account</div>
                                <p className="text-sm text-left mt-6">
                                    Surgery or Staff Admin with existing account?
                                </p>
                                <p className="text-sm text-left text-blue-400" onClick={() => toggleExisting('Yes')}>
                                    Sign in
                                </p>
                            </div>
                        )}
                        <p className="text-sm text-left mt-6">
                            Not surgery staff or Admin?
                        </p>
                        <p className="text-sm text-left text-blue-400">
                            Continue as Guest
                        </p>
                    </div>

                </div>
            </div>
            <Footer/>
        </> 
    )

}

export default Login;