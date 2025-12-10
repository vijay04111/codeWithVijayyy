import React from "react";
import img1 from '../assets/CardImg/PAINT.jpeg'
import img2 from '../assets/CardImg/PYTHON.jpeg'
import img3 from '../assets/CardImg/C PROGRAM.jpeg'
import img4 from '../assets/CardImg/MERN.jpeg'
import img5 from '../assets/CardImg/COMP.jpeg'

function Cards() {
  return     <>
      <div className="container-fluid text-white"style={{ background: "#071019", paddingTop: "100px" }}>

        <h2 className="text-center fw-bold mb-5">Premium Courses</h2>

        <div style={{display: "flex",flexWrap: "wrap",gap: "20px",justifyContent: "center", }}>

          {/* Card 1 */}
          <div className="card bg-dark text-white p-2"
            style={{ width: "100%", maxWidth: "260px", flex: "1 1 260px" }}>
            <img src={img1} className="card-img-top rounded" height={300} />
            <div className="card-body">
              <h6 className="fw-bold">
                Ultimate Job-Ready AI-Powered Data Analytics Course
              </h6>
              <p className="small text-secondary">CodeWithVijayyy • Beginner</p>
              <p className="fw-bold">₹2599</p>
              <button className="btn btn-primary w-100">View Course</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-dark text-white p-2"
            style={{ width: "100%", maxWidth: "260px", flex: "1 1 260px" }}>
            <img src={img2} className="card-img-top rounded" height={300} />
            <div className="card-body">
              <h6 className="fw-bold">The Ultimate Job Ready Data Science Course</h6>
              <p className="small text-secondary">CodeWithVijayyy • Beginner</p>
              <p className="fw-bold">₹2899</p>
              <button className="btn btn-primary w-100">View Course</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-dark text-white p-2"
            style={{ width: "100%", maxWidth: "260px", flex: "1 1 260px" }}>
            <img src={img3} className="card-img-top rounded" height={300} />
            <div className="card-body">
              <h6 className="fw-bold">C Programming For Beginners - Learn C</h6>
              <p className="small text-secondary">CodeWithVijayyy • Beginner</p>
              <p className="fw-bold">₹389</p>
              <button className="btn btn-primary w-100">View Course</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card bg-dark text-white p-2"
            style={{ width: "100%", maxWidth: "260px", flex: "1 1 260px" }}>
            <img src={img4} className="card-img-top rounded" height={300} />
            <div className="card-body">
              <h6 className="fw-bold">Ultimate Web Development Course 2026</h6>
              <p className="small text-secondary">CodeWithVijayyy • Beginner</p>
              <p className="fw-bold">₹788</p>
              <button className="btn btn-primary w-100">View Course</button>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card bg-dark text-white p-2"
            style={{ width: "100%", maxWidth: "260px", flex: "1 1 260px" }}>
            <img src={img5} className="card-img-top rounded" height={300} />
            <div className="card-body">
              <h6 className="fw-bold">
                Complete 2025 Python Bootcamp — Learn Python
              </h6>
              <p className="small text-secondary">CodeWithVijayyy • Beginner</p>
              <p className="fw-bold">₹399</p>
              <button className="btn btn-primary w-100">View Course</button>
            </div>
          </div>

        </div>

        {/* Footer Section */}
        <div className="container-fluid py-5">
          <div className="container text-white">

            <div className="d-flex justify-content-between flex-wrap" style={{ gap: "40px" }}>

              {/* Main */}
              <div style={{ minWidth: "180px" }}>
                <h5 className="fw-bold mb-3">Main</h5>
                <p className="text-secondary mb-1">Home</p>
                <p className="text-secondary mb-1">Contact</p>
                <p className="text-secondary mb-1">Work With Us</p>
                <p className="text-secondary mb-1">My Gear</p>
              </div>

              {/* Learn */}
              <div style={{ minWidth: "180px" }}>
                <h5 className="fw-bold mb-3">Learn</h5>
                <p className="text-secondary mb-1">Courses</p>
                <p className="text-secondary mb-1">Tutorials</p>
                <p className="text-secondary mb-1">Notes</p>
              </div>

              {/* Legal */}
              <div style={{ minWidth: "180px" }}>
                <h5 className="fw-bold mb-3">Legal</h5>
                <p className="text-secondary mb-1">Terms</p>
                <p className="text-secondary mb-1">Privacy</p>
                <p className="text-secondary mb-1">Refund</p>
              </div>

              {/* Social */}
              <div style={{ minWidth: "180px" }}>
                <h5 className="fw-bold mb-3">Social</h5>

                <div className="d-flex align-items-center mb-2 gap-2">
                  <i className="bi bi-github"></i>
                  <span className="text-secondary">GitHub</span>
                </div>

                <div className="d-flex align-items-center mb-2 gap-2">
                  <i className="bi bi-twitter-x"></i>
                  <span className="text-secondary">Twitter (X)</span>
                </div>

                <div className="d-flex align-items-center mb-2 gap-2">
                  <i className="bi bi-youtube"></i>
                  <span className="text-secondary">YouTube</span>
                </div>

                <div className="d-flex align-items-center mb-2 gap-2">
                  <i className="bi bi-facebook"></i>
                  <span className="text-secondary">Facebook</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  
}

export default Cards;
