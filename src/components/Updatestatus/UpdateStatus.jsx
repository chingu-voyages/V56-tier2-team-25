import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import Header from "../Header";
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
    if (!patientNo) {
      alert("No patient number found.");
      return;
    }
    const docRef = doc(db, "patient_info", String(patientNo));
    await updateDoc(docRef, formData);
    setShowModal(true);
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
    <div className="flex flex-col">
      <Header />
      <div className="h-[90vh] w-[100vw] flex flex-col items-center text-center justify-center bg-[#F5F3EA]">
        <div className="mb-20 mt-10">
          <h1 className="text-gray-600 font-bold text-4xl">Patient Status</h1>
        </div>
        <div className="">
          <div className="flex text-center items-center justify-between mb-4 font-bold">
            <p>Patient No:</p>
            {patientNo === null || patientNo.length === 0 ? null : (
              <p>{patientNo}</p>
            )}
          </div>
          <div className="flex text-center items-center justify-between mb-4 font-bold">
            <p>Current Status:</p>
            {patientFromNav === null || patientFromNav.length === 0 ? null : (
              <p>{patientFromNav.status}</p>
            )}
          </div>
          <div className="flex mb-10 font-bold">
            <p className="flex justify-center items-center">New Status:</p>
            <div className="w-[200px] relative flex justify-end">
              <button
                className="flex justify-end w-[90%] p-[10px] cursor-pointer border-1 border-[#ccc] bg-white"
                onClick={toggleDropdown}
                value={selected}
              >
                {selected}
              </button>

              {isOpen && (
                <ul className="w-[90%] ml-6 mt-11 border-1 border-[#ccc] absolute bg-white">
                  {patientFromNav === null ||
                  patientFromNav.length === 0 ? null : (
                    <div>
                      {patientFromNav.status === "Checked-In"
                        ? options.slice(0, 2).map((option) => (
                            <li
                              key={option}
                              className="p-[10px] cursor-pointer border-b border-[#eee] flex justify-end"
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
                        ? options.slice(5, 7).map((option) => (
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
          <div className="mb-8 text-red-400">Please select a new status</div>
        )}
        <div className="flex text-center items-center justify-center">
          <div
            className="bg-[#008C99] mr-4 text-white text-[1.125rem] font-bold rounded-[40px] px-18 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
            onClick={() => {
              handleSave();
            }}
          >
            Add/Update
          </div>
          <div
            className="bg-[#008C99] ml-4 text-white text-[1.125rem] font-bold rounded-[40px] px-18 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
            onClick={() => {
              navigate("/findPatient");
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
            <div className="bg-white p-20 rounded-[30px] shadow-lg text-center max-w-md w-full">
              <p className="mb-10 text-[20px]">Patient has been updated!</p>
              <button
                className="bg-[#008C99] text-white text-[1rem] font-bold rounded-[40px] px-10 py-4 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
                onClick={() => {
                  navigate("/findPatient");
                }}
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UpdateStatus;
