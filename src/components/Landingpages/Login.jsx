

import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import "../../index.css";
import Header from '../Header';
import Footer from '../Footer'
import { useState } from "react";
import { auth } from '../../../firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from '../../../firebase';
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/userSlice.jsx";


function Login() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

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
  }

  if (existingAccount === 'Yes') {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, emailaddress, password);

        // Query surgeons collection by email
        const surgeonsRef = collection(db, "surgeons");
        const q = query(surgeonsRef, where("email", "==", emailaddress));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const role = userDoc.data().role;
            const name = userDoc.data().name;
            setMessage(`User logged in as ${role}`);
            setMessageType("success");

            dispatch(setUserData({
                uid: userCredential.user.uid,
                email: emailaddress,
                role: role,
                name: name,
                }));

            localStorage.setItem("userData", JSON.stringify({
                uid: userCredential.user.uid,
                email: emailaddress,
                role: role,
                name: name,
                }));

            if (role === "Admin") {
            navigate("/admin");
            } else if (role === "Staff") {
            navigate("/staff");
            } else {
            setMessage("User role is not recognized.");
            setMessageType("error");
            }
        } else {
            setMessage("User profile not found.");
            setMessageType("error");
        }
    } catch (error) {
    console.error("Login error:", error.message);
    setMessage(error.message);
    setMessageType("error");
    }


  } else {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailaddress, password);
      const uid = userCredential.user.uid;

      await setDoc(doc(db, 'surgeons', uid), {
        role: 'Staff'
      });

      setMessage('User created');
      setMessageType('success');
    } catch (error) {
      console.error('Registration error:', error.message);
      setMessage(error.message);
      setMessageType('error');
    }
  }
};

    return (  
        <>     
            <div className="ss-wrapper">
                <Header />
                <div className="ss-page">
                    {message && (
                        <div className={messageType === 'success' ? 'success-message' : 'error-message'} style={{ position: 'relative' }}>
                            <button className="message-close-btn" onClick={() => setMessage('')} aria-label="Close message">&times;</button>
                            {message}
                        </div>
                    )}
                    <h2 className="dm-sans text-[#4F4F4F] text-4xl font-bold mb-12">Staff & Admin Sign In</h2>
                    <div className="ss-container">
                        <div className="input-wrapper">
                            <label className="input-label" htmlFor="emailaddress">Email Address</label>
                            <input id="emailaddress" type="text" className="input-bar" placeholder = "admin@surgerystatus.com"  value={emailaddress} onChange={(e) => setemailaddress(e.target.value)} />
                        </div>
                        <div className="input-wrapper">
                            <label className="input-label" htmlFor="password">Password</label>
                            <input id="password" type="text" className="input-bar" placeholder = "Password"   value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        {existingAccount === 'Yes' ? (
                            <div className="flex flex-col mt-5">
                                <div className="self-center bg-[#008C99] text-white text-[1.25rem] font-bold rounded-[40px] mb-14 px-15 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA] dm-sans" onClick={infoSubmitted}>Sign In</div>
                                <p className="text-left dm-sans text-[1.125rem]">
                                    Surgery Staff or Admin but don't have an account?
                                </p>
                                <p className="text-[1.125rem] text-left text-[#008C99] font-bold cursor-pointer hover:text-[#A8D5BA]" onClick={() => toggleExisting('No')}>
                                    Create an account
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col mt-5">
                                <div className="self-center bg-[#008C99] text-white text-[1.25rem] font-bold rounded-[40px] mb-14 px-15 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA] dm-sans" onClick={infoSubmitted}>Create Account</div>
                                <p className="text-left dm-sans text-[1.125rem]">
                                    Surgery or staff Admin with existing account?
                                </p>
                                <p className="text-[1.125rem] text-left text-[#008C99] font-bold cursor-pointer hover:text-[#A8D5BA]" onClick={() => toggleExisting('Yes')}>
                                    Sign in 
                                </p>
                            </div>
                        )}
                        <p className="text-left dm-sans text-[1.125rem] mt-9">
                            Not surgery staff or Admin? Continue as a <span className="text-[1.125rem] text-left text-[#008C99] font-bold cursor-pointer hover:text-[#A8D5BA]">Guest
                            </span>
                        </p>
                        
                    </div>

                </div>
            </div>
            <Footer/>
        </> 
    )

}

export default Login;