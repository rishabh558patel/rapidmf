import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div className="flex gap-1">
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }} // Delays each star
        >
          <FaStar className="text-yellow-400 text-3xl" />
        </motion.div>
      ))}
      {/* 5th Star (Faded) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }} // Keep it faded
        transition={{ duration: 0.5, delay: 4 * 0.2 }}
      >
        <FaStar className="text-gray-100 text-3xl" />
      </motion.div>
    </div>
  );
};

export default StarRating;
