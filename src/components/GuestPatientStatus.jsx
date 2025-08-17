import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Header from "./Nav/Header";
import Footer from "./Footer";

const GuestPatientStatus = () => {
  const [selected, setSelected] = useState("Select New Status");
  const location = useLocation();
  const navigate = useNavigate();
  const patientFromNav = location.state?.patient;
  const patientNo = patientFromNav?.patientNo;

  const [formData, setFormData] = useState({
    patientNo: "",
    status: "",
  });

  useEffect(() => {
    const fetchPatient = async () => {
      if (!patientNo) return;
      const docRef = doc(db, "patient_info", String(patientNo));
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setFormData(docSnap.data());
      }
    };

    if (patientFromNav) {
      setFormData(patientFromNav);
    } else {
      fetchPatient();
    }
  }, [patientNo, patientFromNav]);

  useEffect(() => {
    if (selected !== "Select New Status") {
      setFormData({
        ...patientFromNav,
        status: selected,
      });
    } else {
      null;
    }
  }, [selected]);

  console.log(patientNo);
  console.log(patientFromNav);

  console.log(selected);
  console.log(formData);

  return (
    <>
      <div className="w-full min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 flex-col items-center py-11 md:py-4 md:px-2 md:justify-center bg-[#F5F3EA]">
          <div className="mb-17">
            <h1 className="text-[#4F4F4F] font-bold text-2xl lg:text-4xl dm-sans">Patient Status</h1>
          </div>
          <div className="text-[#4F4F4F] mb-10 w-full md:w-[30%] px-7">
            <div className="text-[1.125rem] md:text-xl font-semibold mb-3 flex justify-between">
              <p>Patient No:</p>
              {patientNo === null || patientNo.length === 0 ? null : (
                <p>{patientNo}</p>
              )}
            </div>
            <div className="text-[1.125rem] md:text-xl font-semibold mb-3 flex gap-20 justify-between">
              <p>Surgery Status:</p>
              {patientFromNav === null || patientFromNav.length === 0 ? null : (
                <p>{patientFromNav.status}</p>
              )}
            </div>
          </div>
          <div className="flex text-center items-center justify-center">
            <div
              className="bg-[#008C99] ml-4 text-white text-[1.125rem] font-bold rounded-[40px] px-18 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </div>
          </div>
        </div>
      </div>
       <Footer />
    </>
  );
};

export default GuestPatientStatus;
