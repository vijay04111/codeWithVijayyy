import React from "react";
import pythonLOGO from '../assets/NoteIMG/phlogo.jpeg'
import cLOGO from '../assets/TutorialsIMG/c.jpeg'
import html from '../assets/TutorialsIMG/html.jpeg'
import mangoLOGO from '../assets/NoteIMG/mongo.jpeg'
import sqlLOGO from '../assets/NoteIMG/sql.jpeg'

function HandBook() {
  return (
    <div className="container-fluid" style={{ background: "#0e1217",minHeight: "100vh",paddingTop: "50px", paddingLeft: "40px",paddingRight: "40px", }}>
      <h3 className="text-center text-white mb-5 heading">Download Handbooks📜</h3>

      {/* First Row - 4 Cards */}
      <div className="row justify-content-center gx-4">
        <div className="col-md-3  mt-4">
          <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
            <img src={pythonLOGO}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                <h6 className="pt-3 text-white fw-bold">Python HandBook</h6>
                <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Handbook Here</p>
                <button className="m-3 rounded-2  fw-bold text-white" style={{backgroundColor:"#222a39",border:"none" ,fontSize:"14px"}}>Download</button>
          </div>
        </div>

        {/* ----Secound Card ----- */}
        <div className="col-md-3  mt-4">
          <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
            <img src={cLOGO}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                <h6 className="pt-3 text-white fw-bold">C HandBook</h6>
                <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Handbook Here</p>
                <button className="m-3 rounded-2  fw-bold text-white" style={{backgroundColor:"#222a39",border:"none" ,fontSize:"14px"}}>Download</button>
          </div>
        </div>


        {/* ----Third Card---- */}
        <div className="col-md-3  mt-4">
          <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
            <img src={html}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                <h6 className="pt-3 text-white fw-bold">HTML HandBook</h6>
                <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Handbook Here</p>
                <button className="m-3 rounded-2  fw-bold text-white" style={{backgroundColor:"#222a39",border:"none" ,fontSize:"14px"}}>Download</button>
          </div>
        </div>


        {/* ----Fourth Card ----- */}
        <div className="col-md-3  mt-4" >
          <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
            <img src={sqlLOGO}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                <h6 className="pt-3 text-white fw-bold">SQL HandBook</h6>
                <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Handbook Here</p>
                <button className="m-3 rounded-2  fw-bold text-white" style={{backgroundColor:"#222a39",border:"none" ,fontSize:"14px"}}>Download</button>
          </div>
        </div>
      </div>

      {/* Second Row - 1 Card  */}
      <div className="row justify-content-start mt-4">
        <div className="col-md-3">
         <div className="card text-center border-1 border-secondary pt-3" style={{background: "#0e1217"}}>
            <img src={mangoLOGO}   className="d-block mx-auto rounded-circle" alt="" width={100} height={100} />
                <h6 className="pt-3 text-white fw-bold">MONGO DB HandBook</h6>
                <p style={{fontSize:"12px",color:"#b6bcc9"}}>Download Handbook Here</p>
                <button className="m-3 rounded-2  fw-bold text-white" style={{backgroundColor:"#222a39",border:"none" ,fontSize:"14px"}}>Download</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HandBook;
