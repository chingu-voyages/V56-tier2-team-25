import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import Header from "../Nav/Header";
import Footer from "../Footer";

const FindPatient = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || null
  );

  console.log(userData);

  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      setError("");
      setResult(null);

      const patientsRef = collection(db, "patient_info");
      const q = query(patientsRef, where("patientNo", "==", inputValue));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        const data = doc.data();
        localStorage.setItem("selectedPatient", JSON.stringify(data));
        navigate(`/updateStatus`, { state: { patient: data } });
        setResult(data);
      } else {
        setError("Patient not found.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while searching.");
    }
  };

  const handleGuestSearch = async () => {
    try {
      setError("");
      setResult(null);

      const patientsRef = collection(db, "patient_info");
      const q = query(patientsRef, where("patientNo", "==", inputValue));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        const data = doc.data();
        localStorage.setItem("selectedPatient", JSON.stringify(data));
        navigate(`/guestpatientstatus`, { state: { patient: data } });
        setResult(data);
      } else {
        setError("Patient not found.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while searching.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section>
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        <div className="flex flex-1 flex-col items-center py-11 md:py-4 md:px-2 md:justify-center bg-[#F5F3EA]">
          <div className="mb-16">
            <h1 className="text-[#4F4F4F] font-bold text-2xl lg:text-4xl dm-sans">
              Find Patient
            </h1>
          </div>
          <div className="mb-14 lg:mb-11 max-w-[256px] lg:max-w-full text-[#090909] text-[1.125rem] dm-sans text-center">
            <p>Input patient number to find an existing patient.</p>
          </div>
          <div className="mb-14">
            <input
              className="w-[262px] bg-white border-1 border-[#000] px-5 py-[10px] rounded-[10px] placeholder-[#3C3C43/30]"
              type="text"
              placeholder="Type patient number here"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            {error === null ? null : (
            <div className="text-red-500 flex justify-center mt-5">
              No patient with entered ID exists
            </div>
          )}
          </div>
          
          <div className="flex flex-col md:flex-row text-center items-center justify-center gap-7 md:gap-2 lg:gap-7">
            {userData === null ? (
              <div
                className="bg-[#008C99] text-white text-[1.125rem] font-bold rounded-[40px] px-15 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
                onClick={() => {
                  handleGuestSearch(inputValue);
                }}
              >
                Enter
              </div>
            ) : null}
            <div className='flex flex-col items-center md:flex-row gap-7'>
              {userData === null ? null : (
                
                  <div
                    className="bg-[#008C99] text-white text-[1.125rem] font-bold rounded-[40px] px-15 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
                    onClick={() => {
                      handleSearch(inputValue);
                    }}
                  >
                    Update Status
                  </div>
                )}

              <div
                className="bg-white text-[#4F4F4F] text-[1.125rem] font-bold rounded-[40px] border border-[#CAC4D0] px-15 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA] hover:text-white hover-border-none"
                onClick={() => navigate(-1)}
              >
                Cancel
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default FindPatient;
