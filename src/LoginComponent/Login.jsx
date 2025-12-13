import React from "react";
import pics from "../assets/loginimg.jpeg";

function Login() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center px-3"
      style={{ minHeight: "100vh", backgroundColor: "#0e1217" }}
    >
      <div
        className="row shadow-lg rounded-3 overflow-hidden"
        style={{ maxWidth: "900px", width: "100%", backgroundColor: "#11141a" }}
      >
        {/* LEFT SIDE */}
        <div className="col-12 col-md-6 p-4 p-md-5 text-white">
          <h5 className="fw-bold">Welcome to CodeWithVijayyy</h5>
          <p className="text-secondary mt-2" style={{ fontSize: "13px" }}>
            Login to your account
          </p>

          <div
            className="mt-4 p-3 rounded-3"
            style={{
              backgroundColor: "#0d1117",
              border: "1px solid #222a39",
            }}
          >
            <p className="text-secondary text-center" style={{ fontSize: "14px" }}>
              Choose your preferred social account for instant access
            </p>

            <button
              className="btn w-100 py-2 mb-3 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#10151c",
                border: "1px solid #222a39",
                color: "white",
                fontSize: "14px",
              }}
            >
              <i className="bi bi-google me-2"></i> Continue with Google
            </button>

            <button
              className="btn w-100 py-2 mb-3 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#10151c",
                border: "1px solid #222a39",
                color: "white",
                fontSize: "14px",
              }}
            >
              <i className="bi bi-github me-2"></i> Continue with GitHub
            </button>

            <button
              className="btn w-100 py-2 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#10151c",
                border: "1px solid #222a39",
                color: "white",
                fontSize: "14px",
              }}
            >
              <i className="bi bi-windows me-2"></i> Continue with Microsoft
            </button>
          </div>

          {/* Divider */}
          <div className="d-flex align-items-center my-3">
            <div className="flex-grow-1" style={{ height: "1px", background: "#222a39" }}></div>
            <span className="mx-2 text-secondary">Or</span>
            <div className="flex-grow-1" style={{ height: "1px", background: "#222a39" }}></div>
          </div>

          <button
            className="btn d-flex align-items-center p-0"
            style={{ background: "none", border: "none", color: "white", fontSize: "14px" }}
          >
            <i className="bi bi-envelope me-2"></i> Continue via Email
          </button>

          <p className="mt-4 text-secondary small">
            By clicking continue, you agree to our{" "}
            <span style={{ textDecoration: "underline" }}>Terms of Service</span> and{" "}
            <span style={{ textDecoration: "underline" }}>Privacy Policy</span>.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE (hide on small screens) */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src={pics}
            alt="coding"
            className="img-fluid h-100 w-100"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
