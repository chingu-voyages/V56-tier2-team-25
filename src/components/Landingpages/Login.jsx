

import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import "./landingpages.css";
import Header from '../Header';
import { useState } from "react";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Validate login here (e.g., check against backend or local values)
        console.log('Logging in with', username, password);
    };

    return (
        <div className="lp-guest-wrapper">
            <Header />
            <div className="lp-guest-container"></div>
        </div>
    )

}

export default Login;