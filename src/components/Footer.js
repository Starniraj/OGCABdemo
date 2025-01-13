// src/components/Footer.js
import React from "react";
import { motion } from "framer-motion";
import LandingPage from "./LandingPage";
import "/CSS/Footer.css";

const Footer = () => {
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Taxi Services Card */}
        <motion.div
          className="card"
          variants={cardVariant}
          initial="hidden"
          animate="visible"
        >
          <h3>Taxi Services</h3>
          <ul>
            <li>Cab Service in Agra</li>
            <li>Cab Service in Ayodhya</li>
            <li>Cab Service in Chandigarh</li>
            <li>Cab Service in Dehradun</li>
            <li>Cab Service in Jaipur</li>
            <li>Cab Service in Noida</li>
            <li>Cab Service in Varanasi</li>
            <li>Cab Service in Haridwar</li>
          </ul>
        </motion.div>

        {/* Taxi Tour Packages Card */}
        <motion.div
          className="card"
          variants={cardVariant}
          initial="hidden"
          animate="visible"
        >
          <h3>Taxi Tour Packages</h3>
          <ul>
            <li>Tour Package From Delhi</li>
            <li>Tour Package From Punjab</li>
            <li>Tour Package From Uttar Pradesh</li>
            <li>Tour Package From Uttarakhand</li>
            <li>Tour Package From Rajasthan</li>
            <li>Tour Package From Jammu Kashmir</li>
            <li>Tour Package From Himachal</li>
          </ul>
        </motion.div>

        {/* Popular Routes Card */}
        <motion.div
          className="card"
          variants={cardVariant}
          initial="hidden"
          animate="visible"
        >
          <h3>Popular Routes</h3>
          <ul>
            <li>Delhi To Himachal Pradesh Taxi Service</li>
            <li>Delhi To Uttarakhand Taxi Service</li>
            <li>Delhi To Jammu Kashmir Taxi Service</li>
            <li>Delhi To Rajasthan Taxi Service</li>
            <li>Delhi To Uttar Pradesh Taxi Service</li>
            <li>Delhi To Punjab Taxi Service</li>
          </ul>
        </motion.div>
      </div>

      {/* Contact Us Section Centered */}
      <motion.div
        className="contact-card"
        variants={cardVariant}
        initial="hidden"
        animate="visible"
      >
        <h3>Contact Us</h3>
        <p>
          WZ- 69, First Floor Todapur Periphery Rd, Todapur, New Delhi, Delhi
          110012
        </p>
        <p>
          Booking: <a href="tel:+919792000555">+91-9792-000-555</a>
        </p>
        <p>
          Support: <a href="tel:+919557479080">+91-9557-479-080</a>
        </p>
        <p>
          Email: <a href="mailto:info@goindiacab.com">info@goindiacab.com</a>
        </p>
      </motion.div>

      <LandingPage />

      <div className="footer-bottom">
        <p>&copy; 2025 OG CABS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
