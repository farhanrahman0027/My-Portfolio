import React, { useEffect, useState } from "react";
import axios from "axios";

const VisitorCounter = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
  const fetchVisits = async () => {
    try {
      const res = await axios.post("https://devfarhan.vercel.app/api/visit");

      console.log("Response:", res.data);
      setVisits(res.data.count);
    } catch (error) {
      console.error("Error fetching count:", error);
    }
  };
  fetchVisits();
}, []);


  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm">
      👋 {visits} visitors so far
    </div>
  );
};

export default VisitorCounter;
