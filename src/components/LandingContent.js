import React from "react";
import { motion } from "framer-motion";
import "/CSS/LandingContent.css";

const LandingContent = () => {
  return (
    <div className="landing-content">
      <motion.h2
        className="landing-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to OG CABS
      </motion.h2>
      <motion.p
        className="landing-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Your trusted partner for hassle-free cab booking. Enjoy safe, reliable,
        and convenient travel with OG CABS.
      </motion.p>
    </div>
  );
};

export default LandingContent;
