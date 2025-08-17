import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Footer from "./Footer"
import Header from "./Nav/Header"


const WaitingRoom = () => {
  const [patients, setPatients] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const pageSize = 8;
  const intervalTime = 10000; // 10 seconds

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "patient_info"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPatients(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchCollection();
  }, []);

  useEffect(() => {}, [patients]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) =>
        (prevPage + 1) * pageSize >= patients.length ? 0 : prevPage + 1
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, [patients.length]);

  const sortedPatients = [...patients].sort((a, b) => a.id - b.id);

  const start = currentPage * pageSize;
  const currentItems = sortedPatients.slice(start, start + pageSize);

  return (
    <div>
    <Header/>
    <div className="w-full min-h-screen flex flex-col">
      <div className="flex flex-1 flex-col items-center py-11 md:py-4 md:px:2 md:justify-center bg-[#F5F3EA]">
        <div className="">
          <h1 className="text-[#4F4F4F] font-bold text-2xl md:text-4xl dm-sans">Patient Status</h1>
        </div>
        <div className="mt-13" >
          {loading ? <div className="text-[16px]"> Loading...</div> : null}
        </div>
        {currentItems.map((item, index) => {
          const isLast = index === currentItems.length - 1
          const style = !isLast ? "flex items-center text-center justify-between border-b border-[#CAC4D0]" : "flex items-center text-center justify-between"
          let textColor = "text-gray-800";
          if (item.status === "Checked-In") {
            textColor = "bg-[#6298FC]";
          } else if (item.status === "Pre-Procedure") {
            textColor = "bg-[#F67C47]";
          } else if (item.status === "In-Progress") {
            textColor = "bg-[#CA0D10]";
          } else if (item.status === "Surgery Completed") {
            textColor = "bg-[#AD27DE]";
          } else if (item.status === "Recovery") {
            textColor = "bg-[#20E83E]";
          } else if (item.status === "Recovery Complete") {
            textColor = "bg-[#EAF261]";
          } else if (item.status === "Discharge") {
            textColor = "bg-[#D4D2E3]";
          }

          return (
            <div className={style}>

              <div className="w-40 md:w-60 font-semibold flex items-center text-xl md:text-2xl text-center dm-sans">
                ID{item.id}
              </div>
              <div
                className={`w-40 md:w-80 p-2 flex items-center justify-center mb-5 mt-5 font-semibold md:text-2xl rounded-lg ${textColor}`}
              >
                {item.status}
              </div>
            </div>
          );
        })}
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default WaitingRoom;
