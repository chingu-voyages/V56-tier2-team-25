import { db } from '../../firebase';
import { doc, getDoc } from "firebase/firestore";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from 'react';
import "../index.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';


function ViewPatient() {

    const navigate = useNavigate();

    const [acceptedPN, setAcceptedPN] = useState("");
    const [patientNo, setPatientNo] = useState("");
    const [message, setMessage] = useState('');
    const [patientData, setPatientData] = useState(null);

    async function checkPN(patientNo) {
        const patientCheck = doc(db, "patient_info", patientNo);
        const patient = await getDoc(patientCheck);
        
        if (patient.exists()) {
            setPatientData(patient.data());
            setAcceptedPN(patientNo);
        } else {
            setMessage("Patient Not Found")
        }
    }
    

    if (acceptedPN === "") {
        return (
            <section>
                <div className="min-h-screen w-full flex flex-col">      
                    <Header />
                    <div className="flex flex-1 flex-col items-center pt-11 md:pt-0 md:justify-center bg-[#F5F3EA]">
                        {message && (
                            <div className='error-message' style={{ position: 'relative' }}>
                                <button className="message-close-btn" onClick={() => setMessage('')} aria-label="Close message">&times;</button>
                                {message}
                            </div>
                        )}
                        <div className="mb-16">
                            <h1 className="text-[#4F4F4F] font-bold text-2xl lg:text-4xl dm-sans">Find Patient</h1>
                        </div>
                        <div className="mb-14 lg:mb-11 max-w-[256px] lg:max-w-full text-[#090909] text-[1.125rem] dm-sans text-center">
                            <p>Input patient number to find an existing patient.</p>
                        </div>
                        <div className="mb-14">
                            <input 
                                className="w-[262px] bg-white border-1 border-[#000] px-5 py-[10px] rounded-[10px] placeholder-[#3C3C43/30]"
                                type="text"
                                placeholder="Type patient number here"
                                value={patientNo}
                                onChange={(e) => setPatientNo(e.target.value)}
                            />
                        </div>
                        <div className='flex gap-7'>
                            <div 
                                className="bg-[#008C99] text-white text-[1.125rem] font-bold rounded-[40px] px-15 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
                                onClick = {() => checkPN(patientNo)}
                            >
                                Find Patient
                            </div>
                             <div
                                className="bg-white text-[#4F4F4F] text-[1.125rem] font-bold rounded-[40px] border border-[#CAC4D0] px-15 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA] hover:text-white hover-border-none"
                                onClick={() => navigate(-1)}
                            >
                                Cancel
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <div className="min-h-screen w-full flex flex-col"> 
                <Header />
                <div className="flex flex-1 flex-col items-center pt-11 md:pt-0 md:justify-center bg-[#F5F3EA]">
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-4">Patient Information</h2>
                        <ul>
                            {Object.entries(patientData).map(([key, value]) => (
                                <li key={key} className="mb-2"><strong>{key}:</strong> {value}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}




export default ViewPatient;