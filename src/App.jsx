import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './index.css';
import Header from './components/Header'
import homeImg from './assets/homeImg.png'
import LandingPageAdmin from "./components/Landingpages/LandingPageAdmin";
import LandingPageGuest from "./components/Landingpages/LandingPageGuest";
import LandingPageStaff from "./components/Landingpages/LandingPageStaff";
import Footer from './components/Footer';
import Login from './components/Landingpages/Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import AddPatient from "./components/AddPatient";

function Home() {
  const [page, setPage] = useState("admin");
  
  return (
    <>
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center bg-[#F5F3EA]">
          <div className="container flex flex-col lg:flex-row justify-center items-center mx-auto px-8 gap-18">
            <div className="flex flex-col justify-center lg:w-[45%] space-y-11">
              <h1 className="text-[3.4rem] font-bold text-[#4F4F4F] dm-sans leading-[1.125]">
                Get immediate updates on your loved one's surgery
              </h1>
              <p className="text-[1.125rem] dm-sans text-[#4F4F4F]">
                Our mission is to offer timely, compassionate updates during surgery, ensuring families feel informed, supported, and connected every step of the way
              </p>
              <div>
                <button 
                  type="submit" 
                  className="bg-[#008C99] text-white text-[1.125rem] font-bold rounded-[40px] px-13 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
                >
                  Get Started <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img src={homeImg} className="w-auto object-contain"/>
            </div>
          </div>
      {/*  
       <div className="h-16 flex text-center items-center justify-center">
        <div
          className="w-20 mr-2 border-1 p-1 hover:cursor-pointer"
          onClick={() => {
            setPage("admin");
          }}
        >
          Admin
        </div>
        <div
          className="w-20 ml-2 border-1 p-1 hover:cursor-pointer"
          onClick={() => {
            setPage("staff");
          }}
        >
          Staff
        </div>
        <div
          className="w-20 ml-2 border-1 p-1 hover:cursor-pointer"
          onClick={() => {
            setPage("guest");
          }}
        >
          Guest
        </div>
      </div>
      {page === "admin" ? <LandingPageAdmin /> : null}
      {page === "staff" ? <LandingPageStaff /> : null}
      {page === "guest" ? <LandingPageGuest /> : null} */}
        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<AddPatient />} />
      </Routes>
    </Router>
  );
}
