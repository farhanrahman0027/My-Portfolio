import React, { useEffect, useState } from "react";
import axios from "axios";

const VisitorCounter = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    axios.post("http://localhost:5000/api/visit")
      .then((res) => setVisits(res.data.count))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm">
      👋 {visits} visitors so far
    </div>
  );
};

export default VisitorCounter;
