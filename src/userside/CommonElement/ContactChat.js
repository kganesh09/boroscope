import React, { useState } from "react";
import { ChatDotsFill } from "react-bootstrap-icons"; 
import "./Chat.css";

function ContactChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // To store error message
  const [responseMessage, setResponseMessage] = useState(""); // To store API success response

  const toggleChat = () => setIsOpen(!isOpen);
  const currentDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMessage(null);
    setResponseMessage("");

    try { 
      console.log(currentDate);
      
      const response = await fetch(`${API_BASE_URL}/user/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phoneno, date: currentDate }),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(data.message || "Thank you for contacting us!");
      } else {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // After showing the response, close the popup after 5 seconds and reset to Step 1
  const closePopup = () => {
    setTimeout(() => {
      setIsOpen(false);
      setStep(1); // Go back to Step 1
      setName(""); // Clear the name input
      setEmail(""); // Clear the email input
      setResponseMessage(""); // Clear the response message
      setErrorMessage(null); // Clear any error message
    }, 5000); // 5 seconds delay
  };

  return (
    <>
      {/* Floating Button */}
      <button onClick={toggleChat} className="floating-button">
        {isOpen ? "✖" : <ChatDotsFill/>} 
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <span>Contact Us</span>
            <button onClick={toggleChat} className="close-btn">
              ✖
            </button>
          </div>
          <div className="chat-body">
            {step === 1 && (
              <>
                <p>Hello! What is your name?</p>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button onClick={() => setStep(2)} disabled={!name}>
                  Next
                </button>
              </>
            )}
            {step === 2 && (
              <>
                <p>Please Enter your Mobile number</p>
                <input
                  type="number"
                  placeholder="Enter your mobile number"
                  value={phoneno}
                  onChange={(e) => setphoneno(e.target.value)}
                />
                <button onClick={() => setStep(3)} disabled={!name}>
                  Next
                </button>
              </>
            )}
            {step === 3 && (
              <>
                {/* Only show input and submit button if no response message is present */}
                {!responseMessage && !errorMessage && (  
                  <>
                  <p>Nice to meet you, {name}! 📅 Today's date is {currentDate}.</p>
                  <p>Can you enter your email?</p>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={handleSubmit} disabled={!email || loading}>
                      {loading ? "Submitting..." : "Submit"}
                    </button>
                  </>
                )}

                {/* Show response message or error */}
                {responseMessage && <p className="text-success">{responseMessage}</p>}
                {errorMessage && <p className="text-danger">{errorMessage}</p>}

                {/* If a response is shown, close the popup after 5 seconds */}
                {responseMessage || errorMessage ? closePopup() : null}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ContactChat;
