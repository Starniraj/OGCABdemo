import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineContacts,
  AiOutlineAppstore,
  AiOutlineBook,
} from "react-icons/ai";
import { motion } from "framer-motion";
import "/CSS/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo-container">
        <motion.h1
          className="logo"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          OGCAB
        </motion.h1>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <FaPhoneAlt className="icon" />
          <a href="tel:+919792000555">+91-987-654-3210</a>
        </div>
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <a href="mailto:info@goindiacab.com">info@ogcab.com</a>
        </div>
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
        <FaBars className="menu-icon" />
      </button>

      {menuOpen && (
        <>
          {/* Transparent overlay */}
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          ></motion.div>

          <motion.nav
            className="nav-bar"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <button className="close-menu" onClick={() => setMenuOpen(false)}>
              <FaTimes className="close-icon" />
            </button>
            <ul className="nav-list">
              {["Home", "About", "Contact", "Services", "Booking"].map(
                (item, index) => (
                  <motion.li
                    className="nav-item"
                    key={item}
                    variants={navItemVariants}
                    custom={index}
                  >
                    <a href={`#${item.toLowerCase()}`}>
                      {item === "Home" && (
                        <AiOutlineHome className="nav-icon" />
                      )}
                      {item === "About" && (
                        <AiOutlineInfoCircle className="nav-icon" />
                      )}
                      {item === "Contact" && (
                        <AiOutlineContacts className="nav-icon" />
                      )}
                      {item === "Services" && (
                        <AiOutlineAppstore className="nav-icon" />
                      )}
                      {item === "Booking" && (
                        <AiOutlineBook className="nav-icon" />
                      )}
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.nav>
        </>
      )}
    </motion.header>
  );
};

export default Header;
