import React from "react";
import { Link } from "react-router-dom";



export default function NavBar() {
  return <>


    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container-fluid">


        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <i className="bi bi-code-slash fs-4"></i>
          <span className="fw-bold fs-4">CodeWithVijayyy</span>
        </a>

        <button  className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto gap-4">
            <li className="nav-item">
              <Link to='/home' className="nav-link text-white" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/course' className="nav-link text-white" href="#">Courses</Link>
            </li>
            <li className="nav-item">
              <Link to='/totorials' className="nav-link text-white" href="#">Tutorials</Link>
            </li>
            <li className="nav-item">
              <Link to='/blog' className="nav-link text-white" href="#">Blog</Link>
            </li>
            <li className="nav-item">
            <Link to='/notes' className="nav-link text-white" href="#">Notes</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-link text-white" href="#">Contact</Link>
            </li>
          </ul>

                  

          <div className="d-flex gap-2">
            <Link to='/login' className="btn btn-outline-light rounded px-4" style={{fontSize:"13px"}}>Login</Link>
            <Link to='/sign-up' className="btn btn-outline-light rounded px-4" style={{fontSize:"13px"}}>Signup</Link> 
          </div>


        </div>
      </div>
    </nav>
  </>
}
