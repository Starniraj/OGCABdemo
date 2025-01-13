// src/components/Support.js
import React from "react";
import { motion } from "framer-motion";
import "/CSS/Support.css";
import EnquiryPopup from "./EnquiryPopup";

const Support = () => (
  <motion.section
    className="support"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
  >
    <h2>Need Support?</h2>
    <p>
      If you have any questions or need assistance, feel free to contact us!
    </p>
    <EnquiryPopup />
  </motion.section>
);

export default Support;
