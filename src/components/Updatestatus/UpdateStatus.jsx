import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import Header from "../Nav/Header";
import Footer from "../Footer";

const UpdateStatus = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState("Select New Status");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
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

  const options = [
    "Checked-In",
    "Pre-Procedure",
    "In-Progress",
    "Surgery Completed",
    "Recovery",
    "Recovery Complete",
    "Discharge",
  ];

  const allOptions = [
    "Registered",
    "Checked-In",
    "Pre-Procedure",
    "In-Progress",
    "Surgery Completed",
    "Recovery",
    "Recovery Complete",
    "Discharge",
    "Completed",
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     status: selected,
  //   });
  //   alert("function triggered");
  // };

  console.log(selected);
  console.log(formData);

  const handleSave = async () => {
    if (
      selected === "Select New Status" ||
      selected === patientFromNav.status
    ) {
      setError("Select a new status");
    } else if (!patientNo) {
      alert("No patient number found.");
      return;
    } else {
      const docRef = doc(db, "patient_info", String(patientNo));
      await updateDoc(docRef, formData);
      setShowModal(true);
    }
  };

  const styles = {
    modalOverlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
  };

  // const handleSelectChange = () => {
  //   if (selected !== "Select New Status") {
  //     setError(null);
  //   } else {
  //     null;
  //   }
  // };

  return (
    <>
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        <div className="flex flex-1 flex-col items-center py-11 md:py-4 md:px-2 md:justify-center bg-[#F5F3EA]">
          <div className="mb-14 md:mb-20">
            <h1 className="text-[#4F4F4F] font-bold text-2xl md:text-4xl dm-sans">
              Patient Status
            </h1>
          </div>
          <div className="flex flex-col gap-3 md:gap-7 dm-sans md:text-[1.25rem] font-semibold text-[#333333]">
            <div className="flex justify-between">
              <p>Patient No:</p>
              {patientNo === null || patientNo.length === 0 ? null : (
                <p>{patientNo}</p>
              )}
            </div>
            <div className="flex text-center items-center justify-between">
              <p>Current Status:</p>
              {patientFromNav === null || patientFromNav.length === 0 ? null : (
                <p>{patientFromNav.status}</p>
              )}
            </div>
            <div className="flex mb-38 md:mb-42 md:gap-25">
              <p className="flex justify-center items-center mr-8">
                New Status:
              </p>
              <div className="md:w-[272px] relative flex justify-end">
                <button
                  className="flex justify-center items-center py-2 md:px-7 w-[200px] md:w-[250px] cursor-pointer border-1 border-black rounded-[10px] bg-white z-20"
                  onClick={toggleDropdown}
                  value={selected}
                >
                  {selected}
                </button>

                {isOpen && (
                  <ul className="md:w-[92%] z-20 mt-10 md:mt-11 border-1 font-medium px-[15px] border-[#ccc] absolute bg-white rounded-[10px]">
                    {patientFromNav === null ||
                    patientFromNav.length === 0 ? null : (
                      <div>
                        {patientFromNav.status === "Registered"
                          ? options.slice(0, 1).map((option) => (
                              <li
                                key={option}
                                className="p-[10px] cursor-pointer border-b border-[#eee] flex justify-center"
                                onClick={() => handleOptionClick(option)}
                              >
                                {option}
                              </li>
                            ))
                          : null}
                        {patientFromNav.status === "Checked-In"
                          ? allOptions.slice(0, 3).map((option) => (
                              <li
                                key={option}
                                className="p-[10px] cursor-pointer border-b border-[#eee] flex justify-center"
                                onClick={() => handleOptionClick(option)}
                              >
                                {option}
                              </li>
                            ))
                          : null}
                        {patientFromNav.status === "Pre-Procedure"
                          ? options.slice(0, 3).map((option) => (
                              <li
                                key={option}
                                className="p-[10px] cursor-pointer border-b border-[#eee] flex justify-end"
                                onClick={() => handleOptionClick(option)}
                              >
                                {option}
                              </li>
                            ))
                          : null}
                        {patientFromNav.status === "In-Progress"
                          ? options.slice(1, 4).map((option) => (
                              <li
                                key={option}
                                className="p-[10px] cursor-pointer border-b border-[#eee] flex justify-end"
                                onClick={() => handleOptionClick(option)}
                              >
                                {option}
                              </li>
                            ))
                          : null}
                        {patientFromNav.status === "Surgery Completed"
                          ? options.slice(2, 5).map((option) => (
                              <li
                                key={option}
                                className="p-[10px] cursor-pointer border-b border-[#eee] flex justify-end"
                                onClick={() => handleOptionClick(option)}
                              >
                                {option}
                              </li>
                            ))
                          : null}
                        {patientFromNav.status === "Recovery"
                          ? options.slice(3, 6).map((option) => (
                              <li
                                key={option}
                                className="p-[10px] cursor-pointer border-b border-[#eee] flex justify-end"
                                onClick={() => handleOptionClick(option)}
                              >
                                {option}
                              </li>
                            ))
                          : null}
                        {patientFromNav.status === "Recovery Complete"
                          ? options.slice(4, 7).map((option) => (
                              <li
                                key={option}
                                className="p-[10px] cursor-pointer border-b border-[#eee] flex justify-end"
                                onClick={() => handleOptionClick(option)}
                              >
                                {option}
                              </li>
                            ))
                          : null}
                        {patientFromNav.status === "Discharge"
                          ? allOptions.slice(6, 9).map((option) => (
                              <li
                                key={option}
                                className="p-[10px] cursor-pointer border-b border-[#eee] flex justify-end"
                                onClick={() => handleOptionClick(option)}
                              >
                                {option}
                              </li>
                            ))
                          : null}
                        {patientFromNav.status === "Completed"
                          ? allOptions.slice(7, 8).map((option) => (
                              <li
                                key={option}
                                className="p-[10px] cursor-pointer border-b border-[#eee] flex justify-end"
                                onClick={() => handleOptionClick(option)}
                              >
                                {option}
                              </li>
                            ))
                          : null}
                      </div>
                    )}
                  </ul>
                )}
              </div>
            </div>
          </div>
          {error === null ? null : (
            <div className="mb-8 text-red-400">{error}</div>
          )}
          <div className="flex flex-col md:flex-row text-center items-center justify-center gap-7">
            <div
              className="bg-[#008C99] text-white text-[1.125rem] font-bold rounded-[40px] px-18 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
              onClick={() => {
                handleSave();
              }}
            >
              Add/Update
            </div>
            <div
              className="bg-white text-[#4F4F4F] text-[1.125rem] font-bold rounded-[40px] border border-[#CAC4D0] px-18 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancel
            </div>
          </div>
          {showModal && (
            <div
              style={styles.modalOverlay}
              className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
            >
              <div className="bg-white p-20 rounded-[10px] shadow-lg text-center max-w-md w-full">
                <p className="mb-10 text-[20px] dm-sans font-semibold">
                  Patient has been updated!
                </p>
                <button
                  className="bg-[#008C99] text-white text-[1rem] font-bold rounded-[40px] px-10 py-4 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
                  onClick={() => {
                    navigate(-2);
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateStatus;
