import { useState, useEffect } from "react";
import patientsdb from "./components/patients";
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
import FAQ from './components/FAQ'

function Home() {
  const [currentPatient, setCurrentPatient] = useState(null);
  const navigate = useNavigate();

  return (
    <div>
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center bg-[#F5F3EA]">
          <div className="container flex flex-col lg:flex-row justify-center items-center mx-auto px-10  gap-18">
            <div className="flex flex-col justify-center lg:w-[47%] space-y-11">
              <h1 className="text-[3.4rem] font-bold text-[#4F4F4F] dm-sans leading-[1.125]">
                Get immediate updates on your loved one's surgery
              </h1>
              <p className="text-[1.125rem] dm-sans text-[#4F4F4F]">
                Our mission is to offer timely, compassionate updates during
                surgery, ensuring families feel informed, supported, and
                connected every step of the way
              </p>
              <div>
                <button
                  type="submit"
                  className="bg-[#008C99] text-white text-[1.125rem] font-bold rounded-[40px] px-13 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
                  onClick={() => navigate("/FindPatient")}
                >
                  Get Started <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img src={homeImg} className="w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  const [currentPatient, setCurrentPatient] = useState(null);
  const [patients, setPatients] = useState(patientsdb);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/findPatient"
          element={
            <FindPatient
              currentPatient={currentPatient}
              setCurrentPatient={setCurrentPatient}
            />
          }
        />
        <Route
          path="/updateStatus"
          element={
            <UpdateStatus
              currentPatient={currentPatient}
              setCurrentPatient={setCurrentPatient}
              patients={patients}
              setPatients={setPatients}
            />
          }
        />
        <Route path="/admin" element={<LandingPageAdmin />} />
        <Route path="/staff" element={<LandingPageStaff />} />
        <Route path="/guest" element={<LandingPageGuest />} />
        <Route path="/addPatient" element={<AddPatient />} />
        <Route path="/waitingRoom" element={<WaitingRoom />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}
