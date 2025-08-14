import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

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
    <div className="flex flex-col">
      <div className="h-[100vh] w-[100vw] flex flex-col items-center text-center justify-start bg-[#F5F3EA]">
        <div className="mb-16 mt-20">
          <h1 className="text-gray-600 font-bold text-2xl">Patient Status</h1>
        </div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          {loading ? <div className="text-[16px]"> Loading...</div> : null}
        </div>
        {currentItems.map((item, index) => {
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
            <div className="flex items-center text-center justify-between mb-2 border-b border-gray-400">
              <div className="w-40 h-10 font-bold flex items-center text-center">
                ID{item.id}
              </div>
              <div
                className={`w-50 p-2 flex items-center text-center mb-5 mt-5 font-bold ${textColor}`}
              >
                {item.status}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WaitingRoom;
