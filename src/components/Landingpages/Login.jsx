import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "../../index.css";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";
import { auth } from "../../../firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/userSlice.jsx";
import { connectDataConnectEmulator } from "firebase/data-connect";
import ViewPatient from '../ViewPatient';


function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [existingAccount, toggleExisting] = useState("Yes");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const [emailaddress, setemailaddress] = useState("");
  const [password, setPassword] = useState("");

  const infoSubmitted = async () => {
    if (!emailaddress || !password) {
      setMessage("Email and password are required.");
      setMessageType("error");
      return;
    } else if (!/.+@.+\..+/.test(emailaddress)) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      return;
    } else if (password.length < 8) {
      setMessage("Password must be at least 8 characters");
      setMessageType("error");
      return;
    }

    if (existingAccount === "Yes") {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          emailaddress,
          password
        );

        // Query surgeons collection by email
        const surgeonsRef = collection(db, "surgeons");
        const q = query(surgeonsRef, where("email", "==", emailaddress));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            console.log("Query empty");
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
            if (emailaddress === "admin@admin.com") {
                navigate("/admin");
            } else {
                navigate("/staff");
            }
        }
      } catch (error) {
        console.error("Login error:", error.message);
        setMessage(error.message);
        setMessageType("error");
      }
    } else {
      //existingAccount === "No"
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailaddress,
          password
        );
        const uid = userCredential.user.uid;

        await setDoc(doc(db, "surgeons", uid), {
          role: "Staff",
        });

        setMessage("User created");
        setMessageType("success");
      } catch (error) {
        console.error("Registration error:", error.message);
        setMessage(error.message);
        setMessageType("error");
      }
    }
  };

  return (
    <>
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        <div className="flex flex-1 flex-col items-center py-11 px-8 md:px-0 md:justify-center bg-[#F5F3EA]">
          {message && (
            <div
              className={
                messageType === "success" ? "success-message" : "error-message"
              }
              style={{ position: "relative" }}
            >
              <button
                className="message-close-btn"
                onClick={() => setMessage("")}
                aria-label="Close message"
              >
                &times;
              </button>
              {message}
            </div>
          )}
          <h2 className="dm-sans text-[#4F4F4F] text-2xl md:text-4xl font-bold mb-10 md:mb-12">
            Staff & Admin Sign In
          </h2>
          <div className="w-full bg-white border md:py-14 md:px-[61px] border-gray-300 px-5 py-10 max-w-[543px]">
            <div className="flex flex-col gap-y-3 mb-6">
              <label className="text-sm font-semibold" htmlFor="emailaddress">
                Email Address
              </label>
              <input
                id="emailaddress"
                type="text"
                className="border px-4 py-2 text-[#4F4F4F] placeholder:text-[#9f9fa1] rounded-[10px] text-[1.125rem]"
                placeholder="admin@surgerystatus.com"
                value={emailaddress}
                onChange={(e) => setemailaddress(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-3 mb-11">
              <label className="text-sm font-semibold" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="text"
                className="border px-4 py-2 text-[#4F4F4F] placeholder:text-[#9f9fa1] rounded-[10px] text-[1.125rem]"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {existingAccount === "Yes" ? (
              <div className="flex flex-col mt-5 mb-9">
                <div
                  className="self-center bg-[#008C99] text-white font-bold text-[1.25rem] rounded-[40px] mb-9 md:mb-14 px-15 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA] dm-sans"
                  onClick={infoSubmitted}
                >
                  Sign In
                </div>
                <p className="text-left dm-sans text-sm md:text-[1.125rem]">
                  Surgery Staff or Admin but don't have an account?{" "}
                  <span
                    className="text:sm md:text-[1.125rem] text-left text-[#008C99] font-bold cursor-pointer hover:text-[#A8D5BA]"
                    onClick={() => toggleExisting("No")}
                  >
                    Create an account
                  </span>
                </p>
              </div>
            ) : (
              <div className="flex flex-col mt-5 mb-9">
                <div
                  className="self-center bg-[#008C99] text-white font-bold text-[1.25rem] rounded-[40px] mb-9 md:mb-14 px-15 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA] dm-sans"
                  onClick={infoSubmitted}
                >
                  Create Account
                </div>
                <p className="text-left dm-sans text-sm md:text-[1.125rem]">
                  Surgery or staff Admin with existing account?{" "}
                  <span
                    className="text-sm md:text-[1.125rem] text-left text-[#008C99] font-bold cursor-pointer hover:text-[#A8D5BA]"
                    onClick={() => toggleExisting("Yes")}
                  >
                    Sign in
                  </span>
                </p>
              </div>
            )}
            <p className="text-left dm-sans text-sm md:text-[1.125rem]">
              Not surgery staff or Admin? <br></br> Continue as a {""}
              <span
                className="text:sm md:text-[1.125rem] text-left text-[#008C99] font-bold cursor-pointer hover:text-[#A8D5BA]"
                onClick={() => navigate("../guest")}
              >
                Guest
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
