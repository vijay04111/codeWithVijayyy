import React from "react";
import ht from '../assets/TutorialsIMG/html.jpeg'
import cs from '../assets/TutorialsIMG/css.jpeg'
import javascriptLOGO from "../assets/TutorialsIMG/javaScript.jpeg";
import snak from '../assets/TutorialsIMG/PH.jpeg'
import cp from '../assets/TutorialsIMG/c.jpeg'
import rc from '../assets/TutorialsIMG/react.jpeg'
import ja from '../assets/TutorialsIMG/java.jpeg'  // fixed
import cc from '../assets/TutorialsIMG/ccc.jpeg'


function Tutorials() {
  return (
    <>
      <section className="py-5" style={{ background: "#071019" }}>
        <div className="container">
          <h2 className="text-center text-white fw-bold mb-5">Tutorials</h2>

          {/* ------------------- ROW 1 ------------------- */}
          <div className="d-flex justify-content-center flex-wrap"style={{ gap: "5px" }}>

            {/* CARD 1 */}
            <div className="card text-center mt-3 p-4"style={{width: "12rem",background: "#11151b",  border: "1px solid #1f232b",borderRadius: "20px"}}>
              <img src={ht} className="mx-auto mb-3 rounded-5" width={50} height={50}/>
              <h5 className="text-white fw-bold">HTML Tutorial</h5>
              <p className="text-secondary mt-2" style={{fontSize:"13px"}}>
                The word hypertext markup language is composed…
              </p>
              <button className="btn btn-light mt-5">Start Learning!</button>
            </div>

            {/* CARD 2 */}
            <div className="card text-center mt-3 p-4"style={{width: "12rem",background: "#11151b",border: "1px solid #1f232b",borderRadius: "20px"}}>
              <img src={cs} className="mx-auto mb-3 rounded-5" width={50} height={50}/>
              <h5 className="text-white fw-bold">CSS Tutorial</h5>
              <p className="text-secondary mt-2" style={{fontSize:"13px"}}>
                CSS stands for cascading style sheets…
              </p>
              <button className="btn btn-light " style={{marginTop:"65px"}}>Start Learning!</button>
            </div>

            {/* CARD 3 */}
            <div className="card text-center p-4 mt-3" style={{width: "12rem",background: "#11151b", border: "1px solid #1f232b",borderRadius: "20px"}}>
              <img src={javascriptLOGO} className="mx-auto mb-3 rounded-5" width={50} height={50}/>
              <h5 className="text-white fw-bold">JavaScript Tutorial</h5>
              <p className="text-secondary mt-2" style={{fontSize:"13px"}}>
                JavaScript is a lightweight cross-platform language…
              </p>
              <button className="btn btn-light mt-4">Start Learning!</button>
            </div>

            {/* CARD 4 */}
            <div className="card text-center p-4 mt-3" style={{ width: "12rem", background: "#11151b",border: "1px solid #1f232b",  borderRadius: "20px" }}>
              <img src={snak} className="mx-auto mb-3 rounded-5" width={50} height={50}/>
              <h5 className="text-white fw-bold">Python Tutorial</h5>
              <p className="text-secondary mt-2" style={{fontSize:"13px"}}>
                Python is a high-level general-purpose programming language…
              </p>
              <button className="btn btn-light mt-2">Start Learning!</button>
            </div>
          </div>

          {/* ------------------- ROW 2 ------------------- */}
          <div className="d-flex justify-content-center flex-wrap mt-4" style={{ gap: "5px" }}>

            {/* CARD 5 */}
            <div className="card text-center p-4 mt-3" style={{width: "12rem",background: "#11151b",border: "1px solid #1f232b", borderRadius: "20px"}}>
              <img src={cp} className="mx-auto mb-3 rounded-5" width={50} height={50}/>
              <h5 className="text-white fw-bold">C Tutorial</h5>
              <p className="text-secondary mt-2" style={{fontSize:"13px"}}>
                C language is considered the mother language…
              </p>
              <button className="btn btn-light mt-3">Start Learning!</button>
            </div>

            {/* CARD 6 */}
            <div className="card text-center p-4 mt-3"style={{width: "12rem",background: "#11151b",border: "1px solid #1f232b", borderRadius: "20px"}}>           
             <img src={rc} className="mx-auto mb-3 rounded-5" width={50} height={50}/>
              <h5 className="text-white fw-bold">React JS Tutorial</h5>
              <p className="text-secondary mt-2" style={{fontSize:"13px"}}>
                React is an open-source JS library…
              </p>
              <button className="btn btn-light mt-3">Start Learning!</button>
            </div>

            {/* CARD 7 */}
            <div className="card text-center p-4 mt-3" style={{width: "12rem", background: "#11151b", border: "1px solid #1f232b", borderRadius: "20px"}}>
              <img src={ja} className="mx-auto mb-3 rounded-5" width={50} height={50}/>
              <h5 className="text-white fw-bold">Java Tutorial</h5>
              <p className="text-secondary mt-2" style={{fontSize:"13px"}}>
                Java is a programming language created in 1995…
              </p>
              <button className="btn btn-light mt-3">Start Learning!</button>
            </div>

            {/* CARD 8 */}
            <div className="card text-center p-4 mt-3" style={{width: "12rem",background: "#11151b",border: "1px solid #1f232b",borderRadius: "20px"}}>
              <img src={cc} className="mx-auto mb-3 rounded-5" width={50} height={50}/>
              <h5 className="text-white fw-bold">C++ Tutorial</h5>
              <p className="text-secondary mt-2" style={{fontSize:"13px"}}>
                C++ is used for high-performance apps…
              </p>
              <button className="btn btn-light" style={{marginTop:"40px"}}>Start Learning!</button>
            </div>

          </div>
        </div>


        
        {/* Footer Section */}
       <div className="container-fluid py-5 mt-5" style={{ background: "#071019" }}>
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
      </section>

      
    </>
  );
}

export default Tutorials;
