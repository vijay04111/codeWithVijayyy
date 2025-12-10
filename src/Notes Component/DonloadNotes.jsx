import React from 'react'
import pythonLOGO from '../assets/NoteIMG/phlogo.jpeg'
import cLOGO from '../assets/TutorialsIMG/c.jpeg'
import dsa from '../assets/NoteIMG/DSA.webp'
import android from '../assets/NoteIMG/Android.jpeg'
import javaLOGO from '../assets/TutorialsIMG/java.jpeg'
import html from '../assets/TutorialsIMG/html.jpeg'
import css from '../assets/TutorialsIMG/css.jpeg'
import javaScript from '../assets/TutorialsIMG/js.jpeg'
import SupportPopup from '../SuperPop'

function DonloadNotes() {
  return <>
                <div className="container-fluid" style={{ background: "#0e1217",minHeight: "120vh",paddingTop: "90px", paddingLeft: "40px",paddingRight: "40px", }}>
                      <h3 className="text-center text-white mb-1 heading">Download Notes📚</h3>
                
                      {/* First Row - 4 Cards */}

                      {/* First Card */}
                      <div className="row justify-content-center gx-4">
                        <div className="col-md-3  mt-4">
                          <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                            <img src={pythonLOGO}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                <h6 className="pt-3 text-white fw-bold">Python Notes</h6>
                                <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Notes Here</p>
                               <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
                                    <button className="rounded-2 fw-bold text-white px-2 py-1" style={{backgroundColor: "#222a39",border: "none",fontSize: "12px",whiteSpace: "nowrap",flexShrink: 1}} onClick={<SupportPopup/>}>PDF Notes</button>
                                    <button className="rounded-2 fw-bold text-white px-2 py-1" style={{backgroundColor: "#222a39",border: "none",fontSize: "12px",whiteSpace: "nowrap",flexShrink: 1}}>ChapterWise Notes </button>
                                </div>
                          </div>
                        </div>
                
                        {/* ----Secound Card ----- */}
                        <div className="col-md-3  mt-4">
                          <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                            <img src={cLOGO}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                <h6 className="pt-3 text-white fw-bold">C Notes</h6>
                                <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Notes Here</p>
                                <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
                                    <button className="rounded-2 fw-bold text-white px-2 py-1" style={{backgroundColor: "#222a39",border: "none",fontSize: "12px",whiteSpace: "nowrap",flexShrink: 1}}>PDF Notes</button>
                                    <button className="rounded-2 fw-bold text-white px-2 py-1" style={{backgroundColor: "#222a39",border: "none",fontSize: "12px",whiteSpace: "nowrap",flexShrink: 1}}>ChapterWise Notes </button>
                                </div>                        
                          </div>
                        </div>
                
                
                        {/* ----Third Card---- */}
                        <div className="col-md-3  mt-4">
                          <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                            <img src={android}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                <h6 className="pt-3 text-white fw-bold">Android Notes</h6>
                                <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Notes Here</p>
                                 <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
                                    <button className="rounded-2 fw-bold text-white px-2 py-1" style={{backgroundColor: "#222a39",border: "none",fontSize: "12px",whiteSpace: "nowrap",flexShrink: 1}}>PDF Notes</button>
                                    <button className="rounded-2 fw-bold text-white px-2 py-1" style={{backgroundColor: "#222a39",border: "none",fontSize: "12px",whiteSpace: "nowrap",flexShrink: 1}}>ChapterWise Notes </button>
                                </div>
                          </div>
                        </div>
                
                
                        {/* ----Fourth Card ----- */}
                        <div className="col-md-3  mt-4" >
                          <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                            <img src={javaLOGO}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                <h6 className="pt-3 text-white fw-bold">Java Notes</h6>
                                <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Notes Here</p>
                                <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
                                    <button className="rounded-2 fw-bold text-white px-2 py-1" style={{backgroundColor: "#222a39",border: "none",fontSize: "12px",whiteSpace: "nowrap",flexShrink: 1}}>PDF Notes</button>
                                    <button className="rounded-2 fw-bold text-white px-2 py-1" style={{backgroundColor: "#222a39",border: "none",fontSize: "12px",whiteSpace: "nowrap",flexShrink: 1}}>ChapterWise Notes </button>
                                </div>
                          </div>
                        </div>
                      </div>
                
                      {/* Second Row - 1 Card  */}
                     <div className="row justify-content-center gx-4">
                        <div className="col-md-3  mt-4">
                          <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                            <img src={html}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                <h6 className="pt-3 text-white fw-bold">HTML Notes</h6>
                                <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Notes Here</p>
                               <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
                                    <button className="rounded-2 fw-bold text-white px-2 py-1" style={{backgroundColor: "#222a39",border: "none",fontSize: "12px",whiteSpace: "nowrap",flexShrink: 1}}>PDF Notes</button>
                                    <button className="rounded-2 fw-bold text-white px-2 py-1" style={{backgroundColor: "#222a39",border: "none",fontSize: "12px",whiteSpace: "nowrap",flexShrink: 1}}>ChapterWise Notes </button>
                                </div>
                          </div>
                        </div>
                
                        {/* ----Secound Card ----- */}
                        <div className="col-md-3  mt-4">
                          <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                            <img src={css}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                <h6 className="pt-3 text-white fw-bold">CSS Notes</h6>
                                <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Notes Here</p>
                                <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
                                    <button className="rounded-2 fw-bold text-white px-2 py-1" style={{backgroundColor: "#222a39",border: "none",fontSize: "12px",whiteSpace: "nowrap",flexShrink: 1}}>PDF Notes</button>
                                    <button className="rounded-2 fw-bold text-white px-2 py-1" style={{backgroundColor: "#222a39",border: "none",fontSize: "12px",whiteSpace: "nowrap",flexShrink: 1}}>ChapterWise Notes </button>
                                </div>                        
                          </div>
                        </div>
                
                
                        {/* ----Third Card---- */}
                        <div className="col-md-3  mt-4">
                          <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                            <img src={dsa}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                <h6 className="pt-3 text-white fw-bold">DSA Notes</h6>
                                <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Notes Here</p>
                                 <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
                                    <button className="rounded-2 fw-bold text-white px-2 py-1" style={{backgroundColor: "#222a39",border: "none",fontSize: "12px",whiteSpace: "nowrap",flexShrink: 1}}>PDF Notes</button>
                                    <button className="rounded-2 fw-bold text-white px-2 py-1" style={{backgroundColor: "#222a39",border: "none",fontSize: "12px",whiteSpace: "nowrap",flexShrink: 1}}>ChapterWise Notes </button>
                                </div>
                          </div>
                        </div>
                
                
                        {/* ----Fourth Card ----- */}
                        <div className="col-md-3  mt-4" >
                          <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
                            <img src={javaScript}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                                <h6 className="pt-3 text-white fw-bold">JavaScript Notes</h6>
                                <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Notes Here</p>
                                <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
                                    <button className="rounded-2 fw-bold text-white px-2 py-1" style={{backgroundColor: "#222a39",border: "none",fontSize: "12px",whiteSpace: "nowrap",flexShrink: 1}}>PDF Notes</button>
                                    <button className="rounded-2 fw-bold text-white px-2 py-1" style={{backgroundColor: "#222a39",border: "none",fontSize: "12px",whiteSpace: "nowrap",flexShrink: 1}}>ChapterWise Notes </button>
                                </div>
                          </div>
                        </div>
                      </div>
                
                    </div>
  </>
}

export default DonloadNotes
