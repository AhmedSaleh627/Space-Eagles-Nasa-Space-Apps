// src/components/Exoplanet/GasGiants.jsx
import React, { useEffect, useState } from "react"; // Remove duplicate imports
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const GasGiants = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/Exoplanets/Exoplanet_Gas_Giants.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleQuizNavigation = () => {
    navigate("/quizgas"); // Navigate to the quiz page
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 via-black to-blue-900 text-white p-4">
      <motion.h1 
        className="text-5xl font-extrabold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Gas Giants
      </motion.h1>
      {data.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {data[0].Body1}
          </motion.p>
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {data[0].Body2}
          </motion.p>
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

export default GasGiants;
