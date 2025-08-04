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
import Footer from "./components/Footer";
import WaitingRoom from "./components/WaitingRoom";
import UpdateStatus from "./components/Updatestatus/UpdateStatus";
import FindPatient from "./components/Findpatient/FindPatient";

function Home() {
  const [currentPatient, setCurrentPatient] = useState(null);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <div className="flex flex-1 items-center max-w-7xl mx-auto px-6 py-12 gap-12">
        <div className="flex flex-col justify-center flex-1 max-w-lg space-y-6">
          <p className="text-4xl font-bold text-blue-900">
            Get immediate updates on your loved one's surgery
          </p>
          <p className="text-sm text-gray-400">
            Our mission is to offer timely, compassionate updates during
            surgery, ensuring families feel informed, supported, and connected
            every step of the way
          </p>
          <div>
            <button type="submit" className="btn-dark-oval px-8">
              Get Started →
            </button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <img src={homeImg} className="max-h-[400px] w-auto object-contain" />
        </div>
      </div>
      {/* <LandingPageAdmin /> */}
      {/* <LandingPageStaff /> */}
      {/* <LandingPageGuest /> */}
      <FindPatient
        currentPatient={currentPatient}
        setCurrentPatient={setCurrentPatient}
      />
      <div className="mb-2"></div>
      <UpdateStatus
        currentPatient={currentPatient}
        setCurrentPatient={setCurrentPatient}
      />
      <div className="mb-2"></div>
      <WaitingRoom />
      <Footer />
    </div>
  );
}

/*
function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <p>
        Get immediate updates on your loved one's surgery
      </p>
      <p>
        Our mission is to offer timely, compassionate updates during surgery, ensuring families feel informed, supported, and connected every step of the way
      </p>
      <button type="submit" className="btn-dark-oval">Get Started →</button>
      <img src={homeImg}/>
    </div>
  );
}
*/
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
