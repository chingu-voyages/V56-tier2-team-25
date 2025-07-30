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

function Home() {
  const [page, setPage] = useState("admin");
  
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <div className="flex flex-1 items-center max-w-7xl mx-auto px-6 py-12 gap-12">
        <div className="flex flex-col justify-center flex-1 max-w-lg space-y-6">
          <p className="text-4xl font-bold text-blue-900">
            Get immediate updates on your loved one's surgery
          </p>
          <p className="text-sm text-gray-400">
            Our mission is to offer timely, compassionate updates during surgery, ensuring families feel informed, supported, and connected every step of the way
          </p>
          <div>
            <button type="submit" className="btn-dark-oval px-8">Get Started →</button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <img src={homeImg} className="max-h-[400px] w-auto object-contain"/>
        </div>

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
      {page === "guest" ? <LandingPageGuest /> : null}
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
