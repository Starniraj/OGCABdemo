import React, { useState } from "react";
import Modal from "react-modal";
import "/CSS/EnquiryPopup.css";

Modal.setAppElement("#root");

const EnquiryPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formDataToSubmit = new FormData(event.target);
    formDataToSubmit.append(
      "access_key",
      "ab500f31-1a75-42be-a5a9-b35f02f132f8"
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();
      if (data.success) {
        setResult(
          "Your form has been submitted. Our executive will contact you soon."
        );
        setTimeout(() => {
          setIsOpen(false); // Close the modal after 3 seconds
        }, 3000);
      } else {
        setResult(data.message || "Error submitting the form");
      }
    } catch (error) {
      setResult("Error submitting the form");
      console.log("Error", error);
    }
  };

  return (
    <div className={`enquiry-section ${isOpen ? "blur-background" : ""}`}>
      <button className="enquiry-button" onClick={() => setIsOpen(true)}>
        Enquire Now
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="enquiry-modal"
        overlayClassName="enquiry-overlay"
      >
        {result === "" ? (
          <>
            <h2>Enquiry Form</h2>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="number"
                name="phone"
                placeholder="Enter you mobile number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
              <button type="submit">Submit</button>
            </form>
          </>
        ) : (
          <div>
            <h2>{result}</h2>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default EnquiryPopup;
