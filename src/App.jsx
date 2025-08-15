import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import homeImg from "./assets/homeImg.png";
import LandingPageAdmin from "./components/Landingpages/LandingPageAdmin";
import LandingPageGuest from "./components/Landingpages/LandingPageGuest";
import LandingPageStaff from "./components/Landingpages/LandingPageStaff";
import WaitingRoom from "./components/WaitingRoom";
import UpdateStatus from "./components/Updatestatus/UpdateStatus";
import FindPatient from "./components/Findpatient/FindPatient";
import Footer from "./components/Footer";
import Login from "./components/Landingpages/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AddPatient from "./components/AddPatient";
import AdminFindPatient from "./components/EditPatient/AdminFindPatient";
import PatientForm from "./components/EditPatient/PatientForm";
import FAQ from "./components/FAQ/FAQ";
import UnderConstruction from "./components/UnderConstruction";
import GuestPatientStatus from "./components/GuestPatientStatus";
import ViewPatient from "./components/ViewPatient";
import ScrollToTop from "./components/ScrollToTop";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        <div className="flex flex-1 flex-col items-center py-11 md:py-0 justify-start md:justify-center text-center md:text-left bg-[#F5F3EA]">
          <div className="container flex flex-col lg:flex-row justify-center items-center mx-auto lg:px-10 px-8 lg:gap-18">
            <div className="flex items-center justify-center mb-6 lg:mb-0 order-0 lg:order-2">
              <img src={homeImg} className="w-auto object-contain" />
            </div>
            <div className="flex flex-col justify-center w-full lg:w-[47%] lg:space-y-11">
              <h1 className="lg:text-[3.4rem] text-[1.25rem] font-semibold lg:font-bold pb-[1rem] text-[#4F4F4F] dm-sans lg:leading-[1.125]">
                Get immediate updates on your loved one's surgery
              </h1>
              <p className="text-sm lg:text-[1.125rem] leading-6 lg:leading dm-sans text-[#4F4F4F]">
                Our mission is to offer timely, compassionate updates during
                surgery, ensuring families feel informed, supported, and
                connected every step of the way
              </p>
              <div className="flex justify-center lg:justify-start">
                <button
                  type="submit"
                  className="bg-[#008C99] text-white text-[1.125rem] mt-12 lg:mt-0 font-bold rounded-[40px] px-13 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
                  onClick={() => navigate("/FindPatient")}
                >
                  Get Started <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/findPatient" element={<FindPatient />} />
        <Route path="/updateStatus" element={<UpdateStatus />} />
        <Route path="/viewPatient" element={<ViewPatient />} />
        <Route path="/admin" element={<LandingPageAdmin />} />
        <Route path="/staff" element={<LandingPageStaff />} />
        <Route path="/guest" element={<LandingPageGuest />} />
        <Route path="/guestpatientstatus" element={<GuestPatientStatus />} />
        <Route path="/addPatient" element={<AddPatient />} />
        <Route path="/waitingRoom" element={<WaitingRoom />} />
        <Route path="/adminEdit" element={<AdminFindPatient />} />
        <Route path="/adminPatients" element={<PatientForm />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/construction" element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
}
