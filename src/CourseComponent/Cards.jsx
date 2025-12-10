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
        <div className="container-fluid py-5" style={{ background: "#071019" }}>
      <div className="container text-white">

        <div className="d-flex justify-content-between flex-wrap"style={{ gap: "40px" }}>

          {/* Main */}
          <div style={{ minWidth: "180px" }}>
            <h5 className="fw-bold mb-3">Main</h5>
            <a href="/home" className="text-secondary mb-1" style={{textDecoration:"none"}}>Home</a>
              <a href="/contact" className="nav-link text-secondary"> Contact</a>

            <p className="text-secondary mb-1">Work With Us</p>
            <p className="text-secondary mb-1">My Gear</p>
          </div>

          {/* Learn */}
          <div style={{ minWidth: "180px" }}>
            <h5 className="fw-bold mb-3">Learn</h5>
             <a href="/course" className="nav-link text-secondary"> Courses</a>
             <a href="/totorials" className="nav-link text-secondary"> Tutorials</a>
             <a href="/notes" className="nav-link text-secondary">Notes</a>

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
              <a href="https://github.com/vijay04111" target="_blank" rel="noopener noreferrer" className="text-secondary text-decoration-none">GitHub</a>
            </div>

            <div className="d-flex align-items-center mb-2 gap-2">
              <i className="bi bi-twitter-x"></i>
              <a href="https://twitter.com/your_username" target="_blank" rel="noopener noreferrer" className="text-secondary" style={{ textDecoration: 'none' }}>Twitter (X)</a>
            </div>

            <div className="d-flex align-items-center mb-2 gap-2">
              <i className="bi bi-youtube"></i>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-secondary" style={{ textDecoration: 'none' }}>YouTube</a>
            </div>

            <div className="d-flex align-items-center mb-2 gap-2">
              <i className="bi bi-facebook"></i>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-secondary" style={{ textDecoration: 'none' }}>Facebook</a>
            </div>
          </div>

        </div>
      </div>
    </div>

      </div>
    </>
  
}

export default Cards;
