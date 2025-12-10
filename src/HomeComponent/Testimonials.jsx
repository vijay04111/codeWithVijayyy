import React from 'react'
import bg from '../assets/banner-bg.webp';

function Testimonials() {
  return <>
  
<div className="container-fluid py-5" style={{ background: "#071019" }}>
  <div className="container text-white">

    <h2 className="text-center fw-bold mb-5">
      <span className="px-3 py-1 rounded" style={{ borderBottom: "3px solid #1E90FF" }}>
        Testimonials
      </span>
    </h2>

    {/* information of developer */}
    <div className="row g-4 justify-content-center">

      {/* yogesh Seaction*/}
      <div className="col-12 col-md-6">
        <div className="p-4 rounded" style={{ background: "rgba(255,255,255,0.05)" }}>
          <span className="fs-3">❝</span>
          <p className="mt-3 text-secondary">
            I don't have words to thank this man, I'm really grateful to have this channel.
            If you're a mere beginner, then you can trust this guy and put your time into his content.
            It'll be worth it.
          </p>

          <h6 className="fw-bold mt-3 mb-0">Yogesh Kole</h6>
          <small className="text-secondary">Web Developer</small>
        </div>
      </div>

      {/* Vijay Seaction */}
      <div className="col-12 col-md-6">
        <div className="p-4 rounded" style={{ background: "rgba(255,255,255,0.05)" }}>
          <span className="fs-3">❝</span>
          <p className="mt-3 text-secondary">
            For everyone who wants to level up their #Coding & #Dev skills, this channel is for you.
            Both basic & advanced stacks are covered, and most content is free.
          </p>

          <h6 className="fw-bold mt-3 mb-0">Vijayy Khot</h6>
          <small className="text-secondary">Web Developer</small>
        </div>
      </div>

    </div>
  </div>
</div>


{/* CTA SECTION */}
                <div  className="container-fluid py-5" style={{ backgroundImage: `url(${bg})` }}>
                <div className="container text-center text-white">
                    <h1 className="fw-bold">Start Your Coding Journey</h1>
                    <p className="text-secondary mt-2 mb-4">
                    Learn coding step-by-step with India's most loved programming mentor.
                    </p>
                    <button className="btn btn-light px-4 py-2 fw-semibold">Start Now</button>
                </div>
                </div>


               {/* footer strat  */}

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

  </>
}

export default Testimonials
