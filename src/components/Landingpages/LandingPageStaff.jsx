import React from "react";
import Header from "../Nav/Header";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";


const LandingPageStaff = () => {

  const userData = useSelector((state) => state.user.userData);
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        <div className="flex flex-1 flex-col items-center py-11 md:py-4  md:justify-center bg-[#F5F3EA]">
          <div className="flex flex-col text-center items-center justify-center mb-16 md:h-[80vh]">
            <h1 className="text-[#006B44] font-bold md:font-semibold text-[1.125rem] md:text-[2rem] dm-sans px-14 md:px-0 mb-9 mt-8 sm:text-[2rem] 1.sm:mb-16">
              "Stay Ahead of the Procedure. Every Detail, One Dashboard."
            </h1>
            <p className="hidden md:block text-[1.375rem] mb-9 text-[#4F4F4F] font-semibold">Real-time updates. Seamless communication. Designed for surgical efficiency.</p>
            <h2 className="text-[#4F4F4F] font-bold text-[1.5rem] md:text-[2.25rem] dm-sans mb-6 sm:text-[2rem] sm:mb-16">
              {" "}
              Welcome back, {userData?.name}!
            </h2>
            <p className="mb-9 text-[#4F4F4F] dm-san px-20 leading-7 sm:text-[1.125rem] sm:mb-16">
              Would you like to update the case status or look at the critical alerts?
            </p>
            <div className="flex flex-col items-center text-center justify-center">
              <div className="flex flex-col items-center text-center justify-center gap-0 md:gap-6 sm:flex-row sm:mb-8">
                <div
                  className="flex text-center items-center justify-center dm-sans mb-9 md:mb-0 order-1 md:order-0 bg-[#008C99] text-white text-[1.25rem] font-bold rounded-[40px] px-14 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]">
                    Update Patient Status
                </div>
                <div
                  onClick={() => navigate('../construction')}  
                  className="flex text-center items-center justify-center dm-sans mb-9 md:mb-0 bg-[#008C99] text-white text-[1.25rem] font-bold rounded-[40px] px-14 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]">
                    Critical Alerts
                </div>
                <div
                  onClick={() => navigate('../construction')}  
                  className="flex text-center items-center justify-center dm-sans mb-9 md:mb-0 bg-[#008C99] text-white text-[1.25rem] font-bold rounded-[40px] px-14 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]">
                    Update Case Status
                </div>
              </div>
              <div className="flex flex-col items-center text-center justify-center gap-0 md:gap-6 sm:flex-row">
                <div className="flex text-center items-center justify-center dm-sans mb-9 md:mb-0 bg-transaparent text-[#CAC4D0] border-1 border-[#CAC4D0] text-[1.25rem] font-bold rounded-[40px] cursor-not-allowed px-14 py-6 shadow-md/60">
                  Edit Patient Info
                </div>
                <div
                  onClick={() => navigate('../construction')}  
                  className="flex text-center items-center justify-center dm-sans mb-9 md:mb-0 bg-white text-[#4F4F4F] border-1 border-[#CAC4D0] text-[1.25rem] font-bold rounded-[40px] px-14 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]">
                    Team Notifications
                </div>
                <div
                  onClick={() => navigate('../construction')}  
                  className="flex text-center items-center justify-center dm-sans mb-6 md:mb-0 bg-white border-1 border-[#CAC4D0] text-[#4F4F4F] text-[1.25rem] font-bold rounded-[40px] px-14 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]">
                    Live Case Status
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPageStaff;
