// src/components/Services.js
import React from "react";
import { motion } from "framer-motion";
import "/CSS/Services.css"; // Assuming your CSS is located here

const Services = () => (
  <motion.section
    className="services"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    <motion.h2
      className="services-title"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      Our Services
    </motion.h2>

    <div className="service-cards">
      <motion.div
        className="card1"
        whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
        transition={{ duration: 0.3 }}
      >
        <h3>Taxi Service</h3>
        <p>
          Reliable and fast taxi services to reach your destination quickly.
        </p>
        <motion.button
          className="book-now-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.button>
      </motion.div>

      <motion.div
        className="card2"
        whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
        transition={{ duration: 0.3 }}
      >
        <h3>Ride Booking</h3>
        <p>Book a ride from the comfort of your home with ease.</p>
        <motion.button
          className="book-now-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.button>
      </motion.div>

      <motion.div
        className="card3"
        whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
        transition={{ duration: 0.3 }}
      >
        <h3>Airport Transfers</h3>
        <p>Airport rides with punctuality and comfort.</p>
        <motion.button
          className="book-now-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.button>
      </motion.div>
    </div>
  </motion.section>
);

export default Services;
