import React from "react";
import { useState } from "react";
import "./landingpages.css";
import Header from "../Header";
import Footer from "../Footer";
import { useSelector } from "react-redux";

const LandingPageAdmin = () => {
  const userData = useSelector((state) => state.user.userData);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center text-center bg-[#F5F3EA] p-10">
        <div className="flex flex-col items-center justify-center md:h-[80vh]">
          <h1 className="text-[#4F4F4F] font-bold text-[2rem] dm-sans mb-8 sm:text-4xl md:mb-15">
            Welcome back, {userData?.name}!
          </h1>
          <p className="mb-8 text-gray-600 text-[1rem] dm-san w-[80vw] leading-7 sm:text-[1.125rem] md:mb-15 md:w-120">
            Would you like to update the patient's surgery status or edit their
            personal information?
          </p>
          <div className="flex flex-col items-center text-center justify-center mb-4 sm:flex-row sm:mb-8">
            <div className="bg-[#008C99] mb-4 text-white text-[0.8rem] font-bold rounded-[40px] px-18 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA] sm:text-[1.125rem] sm:mb-0 sm:mr-2">
              Update Patient Status
            </div>
            <div className="bg-[#008C99] mt-2 mb-20 text-white text-[0.8rem] font-bold rounded-[40px] px-18 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA] sm:text-[1.125rem] sm:mt-0 sm:mb-0 sm:ml-2 ">
              Edit Patient Info
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPageAdmin;
