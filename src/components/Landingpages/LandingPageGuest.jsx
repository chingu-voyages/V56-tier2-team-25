import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const LandingPageGuest = () => {
  return (
    <section>
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        <div className="flex flex-1 flex-col items-center justify-start text-center bg-[#F5F3EA] sm:justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[#4F4F4F] font-bold text-[1.75rem] dm-sans mb-8 mt-20 sm:text-4xl">
              Welcome, Guest!
            </h1>
            <p className="mb-15 text-[#006B44] text-[1rem] dm-san w-[60vw] leading-7 sm:text-[1.125rem] md:w-130 lg:w-80">
              "Your loved one is in trusted hands. As each phase of care
              unfolds, may you feel comfort in knowing they are surrounded by
              skill, compassion, and hope."
            </p>
          </div>
          <div className="bg-[#008C99] text-white text-[1.125rem] font-bold rounded-[40px] px-18 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]">
            Track Patient Status
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default LandingPageGuest;
