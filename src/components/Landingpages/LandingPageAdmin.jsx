import React from "react";
import { useState } from "react";
import Header from "../Nav/Header";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

const LandingPageAdmin = () => {
  const userData = useSelector((state) => state.user.userData);

  const navigate = useNavigate();

  return (
    <>
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col items-center py-11 md:py-4  md:justify-center bg-[#F5F3EA]">
        <h1 className="text-[1.5rem] md:text-4xl font-bold dm-sans text-[#4F4F4F] mb-18">
          Welcome back, {userData?.name}!
        </h1>
        <p className="text-[.875rem] sm:text-[1.125rem] px-11 text-[#4F4F4F] text-center mb-18">
          Would you like to update the patient's surgery status or edit their personal information?
        </p>
        <div className="flex flex-col md:flex-row gap-7 items-center justify-center">
          <button 
            className="flex text-center items-center justify-center dm-sans md:mb-0 bg-[#008C99] text-white text-[1.25rem] font-bold rounded-[40px] px-14 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
            onClick={() => navigate("/FindPatient")}
          >
              Update Patient Status
          </button>
          <button 
            className="flex text-center items-center justify-center dm-sans mb-9 md:mb-0 bg-white text-[#4F4F4F] text-[1.25rem] border border-[#CAC4D0] font-bold rounded-[40px] px-14 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
            onClick={()=>navigate("/adminEdit")}
          >
              Edit Patient Info
          </button>
        </div>
      </div>
      
    </div>
    <Footer />
    </>
  );
};

export default LandingPageAdmin;
