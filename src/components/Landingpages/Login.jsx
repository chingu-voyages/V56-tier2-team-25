

import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import "../../index.css";
import Header from '../Header';
import { useState } from "react";
import { auth } from '../../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';


function Login() {
    const [existingAccount, toggleExisting] = useState('Yes');

    const [emailaddress, setemailaddress] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async () => {
        if (password !== "" && /.+@.+\..+/.test(emailaddress)) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, emailaddress, password);
            } catch (error) {
                console.error('Error registering user:', error.message);
            }
        }
    }

    return (        
        <div className="ss-wrapper">
            <Header />
            <div className="ss-purple-page">

                <div className="ss-container">
                    <div className="input-wrapper">
                        <label className="input-label" htmlFor="emailaddress">Email Address</label>
                        <input id="emailaddress" type="text" className="input-bar" placeholder = "Email Address"  value={emailaddress} onChange={(e) => setemailaddress(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label className="input-label" htmlFor="password">Password</label>
                        <input id="password" type="text" className="input-bar" placeholder = "Password"   value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    {existingAccount === 'No' ? (
                        <div>
                            <div className="btn-dark mb-6 block">Sign In</div>
                            <p className="text-sm text-left mt-6">
                                Surgery Staff or Admin but don't have an account?
                            </p>
                            <p className="text-sm text-left text-blue-400" onClick={() => toggleExisting('Yes')}>
                                Create account
                            </p>
                        </div>
                    ) : (
                        <div>
                            <div className="btn-dark mb-6 block" onClick={registerUser}>Create Account</div>
                            <p className="text-sm text-left mt-6">
                                Surgery or Staff Admin with existing account?
                            </p>
                            <p className="text-sm text-left text-blue-400" onClick={() => toggleExisting('No')}>
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
    )

}

export default Login;