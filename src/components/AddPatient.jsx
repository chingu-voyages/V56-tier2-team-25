
import { db } from '../../firebase';
import { doc, setDoc } from "firebase/firestore";
import Footer from "./Footer"
import Header from "./Header"
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const AddPatient = () => {

    const navigate = useNavigate();

    const [patientNo, setPatientNo] = useState('')

    const inputs = [
        { label: "Patient No.:", type: 'text', name: 'patientNo', placeholder: 'Patient number', mobileLabel: 'Patient Number'},
        { label: "First Name:", type: 'text', name: 'firstName', placeholder: 'First name', mobileLabel: 'First Name'},
        { label: "Last Name:", type: 'text', name: 'lastName', placeholder: 'Last name', mobileLabel: 'Last Name'},
        { label: "Street:", type: 'text', name: 'street', placeholder: 'Street', mobileLabel: 'Street'},
        { label: "City:", type: "text", name: 'city', placeholder: 'City', mobileLabel: 'City'},
        { label: "State:", type: 'text', name: 'state', placeholder: 'State', mobileLabel: 'State'},
        { label: "Country:", type: 'text', name: 'country', placeholder: 'Country', mobileLabel: 'Country'},
        { label: "Telephone:", type: 'tel', name: 'telephone', placeholder: 'Telephone number', mobileLabel: 'Telephone'},
        { label: "Contact Email:", type: 'email', name: 'email', placeholder: 'Contact email', mobileLabel: 'Email'}
    ]

    const generateNo = () => {
        let number = ''
        for (let i = 0; i < 6; i++) {
            number += Math.ceil(Math.random() * 9)
        }
        setPatientNo(number)
    }

    const formInputs = inputs.map(input => {
        const isPatientNo = input.name === 'patientNo'
        return (
            <div className="flex flex-col md:flex-row justify-between items-center mb-[18px] px-10 md:px-0" key = {input.name}>
                <label 
                    htmlFor={input.name}
                    className="md:hidden font-semibold text-sm text-[#333333] self-start mb-1"
                >
                    {input.mobileLabel}
                </label>
                <label
                    htmlFor={input.name}
                    className="hidden md:block font-semibold text-xl dm-sans text-[#333333] mb-0"
                >
                    {input.label}
                </label>
                <input 
                    type={input.type} 
                    id={input.name} 
                    name={input.name}
                    placeholder={input.placeholder}
                    value={isPatientNo ? patientNo : undefined}
                    className="bg-white border w-[331px] md:w-[262px] border-[#333333] rounded-[10px] px-3 py-2 text-[#333333]"
                /> 
                {isPatientNo && 
                    <p 
                        className='flex md:absolute md:ml-128 text-sm font-semibold underline text-[#008C99] cursor-pointer self-start pt-2'
                        onClick={generateNo}
                    >
                        Generate New Patient Number
                    </p>
                }
            </div>
        )
    })

    const submitForm = async (e) => {
        e.preventDefault()
        const formElement = e.currentTarget
        const formData = new FormData(formElement)
        const dataForDB = Object.fromEntries(formData.entries());
        if (dataForDB.patientNo !== "") {
            await setDoc(doc(db, "patient_info", dataForDB.patientNo), dataForDB);
            console.log("Created");
        } else {
            console.log("Not created");
        }
        formElement.reset()
        setPatientNo('')
    }
    
    return (
        <>
        <section className="min-h-screen w-full flex flex-col">
            <Header/>
            <div className="flex flex-1 flex-col items-center pt-11 md:pt-0 md:justify-center bg-[#F5F3EA]">
                <h2 className="text-[#4F4F4F] font-bold text-2xl lg:text-4xl dm-sans mb-10 md:mb-24">Patient Information</h2>
                <form onSubmit={submitForm} className="flex flex-col">
                    {formInputs}
                    <div className="flex flex-col md:flex-row items-center gap-7 mt-10 mb-12 md:mb-0">
                            <button 
                                type="submit"
                                className="bg-[#008C99] text-white text-[1.125rem] font-bold rounded-[40px] px-18 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
                                >
                                Add New Patient
                            </button>
                            <button
                                type="button"
                                className="bg-white text-[#4F4F4F] text-[1.125rem] font-bold rounded-[40px] border border-[#CAC4D0] px-15 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
                                onClick={() => navigate(-1)}
                                >
                                Cancel
                            </button>
                    </div>
                </form>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default AddPatient