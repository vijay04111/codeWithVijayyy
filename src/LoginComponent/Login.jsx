import React from "react";
import pics from '../assets/loginimg.jpeg'
function Login()
{
    return <>
    <div className="d-flex justify-content-center " 
         style={{ minHeight: "100vh", backgroundColor: "#0e1217" , height:"300px",paddingTop:"50px"}}>

      <div className="d-flex shadow-lg rounded-3 " style={{ width: "900px", height:"450px",backgroundColor: "#11141a" }}>

        {/* LEFT SIDE */}
        <div className="p-5 text-white" style={{ width: "50%" }}>
          <h5 className="fw-bold">Welcome to CodeWithVijayyy</h5>
          <p className="text-secondary mt-2" style={{fontSize:"13px"}}>Login to your account</p>

          <div className="mt-4 p-3 rounded-3"
               style={{ backgroundColor: "#0d1117", border: "1px solid #222a39" }}>

            <p className="text-secondary text-center" style={{fontSize:"14px"}}>
              Choose your preferred social account for instant access
            </p>

            {/* Google Button */}
            <button className="btn w-100 py-2 mb-3 d-flex align-items-center"
                    style={{ backgroundColor: "#10151c", border: "1px solid #222a39", color: "white",fontSize:"14px" }}>
              <i className="bi bi-google me-2"></i> Continue with Google
            </button>

            {/* GitHub Button */}
            <button className="btn w-100 py-2 mb-3 d-flex align-items-center"
                    style={{ backgroundColor: "#10151c", border: "1px solid #222a39", color: "white",fontSize:"14px" }}>
              <i className="bi bi-github me-2"></i> Continue with GitHub
            </button>

            {/* Microsoft Button */}
            <button className="btn w-100 py-2 d-flex align-items-center"
                    style={{ backgroundColor: "#10151c", border: "1px solid #222a39", color: "white",fontSize:"14px" }}>
              <i className="bi bi-windows me-2"></i> Continue with Microsoft
            </button>
          </div>

          {/* Divider */}
          <div className="d-flex align-items-center my-2">
            <div style={{ height: "1px", background: "#222a39", width: "100%" }}></div>
            <span className="mx-2 text-secondary">Or</span>
            <div style={{ height: "1px", background: "#222a39", width: "100%" }}></div>
          </div>

          {/* Email Login */}
          <button className="btn d-flex align-items-center"
                  style={{ background: "none", border: "none", color: "white" ,fontSize:"14px"}}>
            <i className="bi bi-envelope me-2"></i> Continue via Email
          </button>

          <p className="mt-4 text-secondary small">
            By clicking continue, you agree to our <span style={{ textDecoration: "underline" }}>Terms of Service</span> and <span style={{ textDecoration: "underline" }}>Privacy Policy</span>.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div style={{ width: "50%", height: "50%" }}>
          <img className="d-flex justify-content-center rounded rounded-2 mt-4 me-2"  src={pics}
            alt="coding"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>

      </div>
    </div>
    </>
}
export default Login;