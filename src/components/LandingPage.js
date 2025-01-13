import React from "react";
import { motion } from "framer-motion";
import "/CSS/LandingPage.css";

function LandingPage({ toggleForm }) {
  return (
    <div className="follow-us-title">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="follow-title"
      >
        Follow Us
      </motion.h2>
      <div className="social-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        />
        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" />
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        />
        <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" />
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
        />
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
          />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
          alt="YouTube"
        />
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt="LinkedIn"
        />
      </div>
    </div>
  );
}

export default LandingPage;
