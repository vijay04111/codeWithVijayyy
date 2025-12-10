import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function SupportPopup() {
  return (
    <div 
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        background: "rgba(0, 0, 255, 0.4)" // Blue background
      }}
    >
      <div 
        className="p-4 rounded"
        style={{
          width: "40%",
          background: "#0f0f11",
          color: "white",
          borderRadius: "12px",
        }}
      >
        <div className="text-center mb-3">
          <div 
            className="rounded-circle d-flex justify-content-center align-items-center mx-auto"
            style={{
              width: "50px",
              height: "50px",
              background: "#1d162f",
            }}
          >
            <span style={{ fontSize: "24px", color: "#bb60ff" }}>♡</span>
          </div>
        </div>

        <h4 className="text-center fw-bold">
          Support Our Platform 💝
        </h4>

        <p className="text-center mt-3" style={{ fontSize: "14px", lineHeight: "22px" }}>
          We have removed ads and made all our notes and resources completely free 
          to keep education accessible for everyone.
        </p>

        <p className="text-center" style={{ fontSize: "14px", lineHeight: "22px" }}>
          Your contribution helps us maintain the servers, create new content, 
          and keep this platform running for thousands of students like you.
        </p>

        <p className="text-center" style={{ fontSize: "14px" }}>
          Higher amounts help us provide free education to more students! 🙏
        </p>

        {/* Buttons Grid */}
        <div className="row text-center mt-4">
          {["₹49","₹69","₹99","₹149","₹499","₹999","₹1999"].map((amt, i) => (
            <div className="col-6 mb-3" key={i}>
              <button 
                className="w-100 py-2 rounded fw-bold"
                style={{
                  background: "#bb60ff",
                  border: "none",
                  fontSize: "16px",
                  color: "white"
                }}
              >
                ♡ {amt}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center mt-2" style={{ fontSize: "14px", textDecoration: "underline", cursor: "pointer" }}>
          I want to continue without supporting this platform
        </p>

      </div>
    </div>
  );
}

export default SupportPopup;
