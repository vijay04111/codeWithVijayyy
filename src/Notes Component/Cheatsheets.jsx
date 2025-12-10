import React from 'react'
import pythonLOGO from '../assets/NoteIMG/phlogo.jpeg'
import cLOGO from '../assets/TutorialsIMG/c.jpeg'
import javaLOGO from '../assets/TutorialsIMG/java.jpeg'
import html from '../assets/TutorialsIMG/html.jpeg'
import css from '../assets/TutorialsIMG/css.jpeg'
import javaScript from '../assets/TutorialsIMG/js.jpeg'
import cplus from '../assets/NoteIMG/cplus.jpeg'
import flask from '../assets/NoteIMG/flask.jpeg'
import dj from '../assets/NoteIMG/Django.jpeg'
import php from '../assets/NoteIMG/PHP.jpeg'
import sql from '../assets/NoteIMG/sql.jpeg'
import mongo from '../assets/NoteIMG/mongo.jpeg'
function Cheatsheets() {
  return <>
  
    <div className="container-fluid" style={{ background: "#071019",minHeight: "150vh",paddingTop: "90px", paddingLeft: "40px",paddingRight: "40px", }}>
                        <h3 className="text-center text-white mb-1 heading">Download Cheatsheets🔖</h3>
                  
                        {/* First Row - 4 Cards */}
  
                        {/* First Card */}
                        <div className="row justify-content-center gx-4">
                          <div className="col-md-3  mt-4">
                            <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                              <img src={pythonLOGO}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                  <h6 className="pt-3 text-white fw-bold">Python Cheatsheet</h6>
                                  <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Cheatsheet Here</p>
                                <button className="m-3 rounded-2  fw-bold text-white" style={{backgroundColor:"#222a39",border:"none" ,fontSize:"14px"}}>Download</button>
                            </div>
                          </div>
                  
                          {/* ----Secound Card ----- */}
                          <div className="col-md-3  mt-4">
                            <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                              <img src={cLOGO}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                  <h6 className="pt-3 text-white fw-bold">C Cheatsheet</h6>
                                  <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Cheatsheet Here</p>
                                  <button className="m-3 rounded-2  fw-bold text-white" style={{backgroundColor:"#222a39",border:"none" ,fontSize:"14px"}}>Download</button>                        
                            </div>
                          </div>
                  
                  
                          {/* ----Third Card---- */}
                          <div className="col-md-3  mt-4">
                            <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                              <img src={cplus}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                  <h6 className="pt-3 text-white fw-bold">C++ Cheatsheet</h6>
                                  <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Cheatsheet Here</p>
                                  <button className="m-3 rounded-2  fw-bold text-white" style={{backgroundColor:"#222a39",border:"none" ,fontSize:"14px"}}>Download</button>
                            </div>
                          </div>
                  
                  
                          {/* ----Fourth Card ----- */}
                          <div className="col-md-3  mt-4" >
                            <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                              <img src={javaLOGO}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                  <h6 className="pt-3 text-white fw-bold">Java Cheatsheet</h6> 
                                  <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Cheatsheet Here</p>
                                  <button className="m-3 rounded-2  fw-bold text-white" style={{backgroundColor:"#222a39",border:"none" ,fontSize:"14px"}}>Download</button>
                            </div>
                          </div>
                        </div>
                  
                        {/* Second Row - 1 Card  */}
                       <div className="row justify-content-center gx-4">
                          <div className="col-md-3  mt-4">
                            <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                              <img src={html}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                  <h6 className="pt-3 text-white fw-bold">HTML Cheatsheet</h6>
                                  <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Cheatsheet Here</p>
                                  <button className="m-3 rounded-2  fw-bold text-white" style={{backgroundColor:"#222a39",border:"none" ,fontSize:"14px"}}>Download</button>

                            </div>
                          </div>
                  
                          {/* ----Secound Card ----- */}
                          <div className="col-md-3  mt-4">
                            <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                              <img src={css}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                  <h6 className="pt-3 text-white fw-bold">CSS Cheatsheet</h6>
                                  <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Cheatsheet Here</p>
                                  <button className="m-3 rounded-2  fw-bold text-white" style={{backgroundColor:"#222a39",border:"none" ,fontSize:"14px"}}>Download</button>                        
                            </div>
                          </div>
                  
                  
                          {/* ----Third Card---- */}
                          <div className="col-md-3  mt-4">
                            <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                              <img src={flask}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                  <h6 className="pt-3 text-white fw-bold">Flask Cheatsheet</h6>
                                  <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Cheatsheet Here</p>
                                  <button className="m-3 rounded-2  fw-bold text-white" style={{backgroundColor:"#222a39",border:"none" ,fontSize:"14px"}}>Download</button>
                            </div>
                          </div>
                  
                  
                          {/* ----Fourth Card ----- */}
                          <div className="col-md-3  mt-4" >
                            <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                              <img src={javaScript}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                  <h6 className="pt-3 text-white fw-bold">JavaScript Cheatsheet</h6>
                                  <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Cheatsheet Here</p>
                                  <button className="m-3 rounded-2  fw-bold text-white" style={{backgroundColor:"#222a39",border:"none" ,fontSize:"14px"}}>Download</button>
                            </div>
                          </div>
                        </div>

                        {/* Third Row */}
                  
                  <div className="row justify-content-center gx-4">
                          <div className="col-md-3  mt-4">
                            <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                              <img src={php}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                  <h6 className="pt-3 text-white fw-bold">PHP Cheatsheet</h6>
                                  <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Cheatsheet Here</p>
                                  <button className="m-3 rounded-2  fw-bold text-white" style={{backgroundColor:"#222a39",border:"none" ,fontSize:"14px"}}>Download</button>

                            </div>
                          </div>
                  
                          {/* ----Secound Card ----- */}
                          <div className="col-md-3  mt-4">
                            <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                              <img src={sql}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                  <h6 className="pt-3 text-white fw-bold">SQL Cheatsheet</h6>
                                  <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Cheatsheet Here</p>
                                  <button className="m-3 rounded-2  fw-bold text-white" style={{backgroundColor:"#222a39",border:"none" ,fontSize:"14px"}}>Download</button>                        
                            </div>
                          </div>
                  
                  
                          {/* ----Third Card---- */}
                          <div className="col-md-3  mt-4">
                            <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                              <img src={dj}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                  <h6 className="pt-3 text-white fw-bold">Django Cheatsheet</h6>
                                  <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Cheatsheet Here</p>
                                  <button className="m-3 rounded-2  fw-bold text-white" style={{backgroundColor:"#222a39",border:"none" ,fontSize:"14px"}}>Download</button>
                            </div>
                          </div>
                  
                  
                          {/* ----Fourth Card ----- */}
                          <div className="col-md-3  mt-4" >
                            <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                              <img src={mongo}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                  <h6 className="pt-3 text-white fw-bold">Mango DB Cheatsheet</h6>
                                  <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Cheatsheet Here</p>
                                  <button className="m-3 rounded-2  fw-bold text-white" style={{backgroundColor:"#222a39",border:"none" ,fontSize:"14px"}}>Download</button>
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

export default Cheatsheets
