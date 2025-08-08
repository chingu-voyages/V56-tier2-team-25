import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useSelector } from "react-redux";

const LandingPageStaff = () => {
  const userData = useSelector((state) => state.user.userData);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col text-center items-center justify-center bg-[#F5F3EA]">
        <div className="flex flex-col text-center items-center justify-center mb-16 md:h-[80vh]">
          <h1 className="text-[#006B44] font-bold text-[1.50rem] dm-sans mb-8 mt-8 sm:text-[1.75rem] sm:mb-16">
            "Stay Ahead of the Procedure. Every Detail, One Dashboard."
          </h1>
          <h1 className="text-[#4F4F4F] font-bold text-[2rem] dm-sans mb-8 sm:text-[2rem] sm:mb-16">
            {" "}
            Welcome back, {userData?.name}!
          </h1>
          <p className="mb-8 text-gray-600 text-[1rem] dm-san w-[80vw] leading-7 sm:text-[1.125rem] sm:mb-16">
            Would you like to update the case status or look at the critical
            alerts?
          </p>
          <div className="flex flex-col items-center text-center justify-center">
            <div className="flex flex-col items-center text-center justify-center mb-4 sm:flex-row sm:mb-8">
              <div className="flex text-center items-center justify-center mb-4 bg-[#008C99] text-white text-[0.8rem] font-bold rounded-[40px] px-18 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA] sm:mb-0 sm:px-12 sm:py-4 lg:px-15 lg:py-5 lg:text-[1.25rem]">
                Critical Alerts
              </div>
              <div className="flex text-center items-center justify-center mb-4 bg-[#008C99] text-white text-[0.8rem] font-bold rounded-[40px] px-18 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA] sm:mb-0 sm:ml-4 sm:mr-4 sm:px-12 sm:py-4 lg:px-15 lg:py-5 lg:text-[1.25rem]">
                Update Case Status
              </div>
              <div className="flex text-center items-center justify-center bg-[#008C99] text-white text-[0.8rem] font-bold rounded-[40px] px-18 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA] sm:px-12 sm:py-4 lg:px-15 lg:py-5 lg:text-[1.25rem]">
                Update Patient Status
              </div>
            </div>
            <div className="flex flex-col items-center text-center justify-center sm:flex-row">
              <div className="flex text-center items-center justify-center mb-4 bg-[#008C99] text-white text-[0.8rem] font-bold rounded-[40px] px-18 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA] sm:mb-0 sm:px-12 sm:py-4 lg:px-15 lg:py-5 lg:text-[1.25rem]">
                Edit Patient Info
              </div>
              <div className="flex text-center items-center justify-center mb-4 bg-[#008C99] text-white text-[0.8rem] font-bold rounded-[40px] px-18 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA] sm:mb-0 sm:ml-4 sm:mr-4 sm:px-12 sm:py-4 lg:px-15 lg:py-5 lg:text-[1.25rem]">
                Team Notifications
              </div>
              <div className="flex text-center items-center justify-center bg-[#008C99] text-white text-[0.8rem] font-bold rounded-[40px] px-18 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA] sm:px-12 sm:py-4 lg:px-15 lg:py-5 lg:text-[1.25rem]">
                Live Case Status
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPageStaff;
