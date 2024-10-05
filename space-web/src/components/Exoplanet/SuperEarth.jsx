// src/components/Exoplanet/SuperEarth.jsx
import React, { useEffect, useState } from "react"; // Remove duplicate imports
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SuperEarth = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/Exoplanets/Exoplanet_Super_Earth.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleQuizNavigation = () => {
    navigate("/quizsup"); 
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 via-black to-blue-900 text-white p-4">
      <motion.h1 
        className="text-5xl font-extrabold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Super Earth
      </motion.h1>
      {data ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <p className="text-lg mb-2">
                <span className="font-semibold">Body1:</span> {item.Body1}
              </p>
              <p className="text-lg mb-2">
                <span className="font-semibold">Body2:</span> {item.Body2}
              </p>
              <p className="text-lg mb-2">
                <span className="font-semibold">Body3:</span> {item.Body3}
              </p>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading...
        </motion.p>
      )}
      {/* Quiz Time Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">It's Quiz Time!</h2>
        <button
          onClick={handleQuizNavigation}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Go to Quiz
        </button>
      </div>
    </div>
  );
};

export default SuperEarth;
