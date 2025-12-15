import React from "react";
import pic from '../assets/contact.jpeg'
import { useForm } from "react-hook-form";
import axios from "axios";
import Navigation from '../Component/Navigation'



  

function Contact()
{
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm()

 function sendUserData(data)
{
  axios.post('http://localhost:5001/contact-info', data)
    .then((res)=>{
        if(res.status === 201 || res.status === 200){
            console.log(res.data);
            reset();
        }
    })
    .catch((err)=>{
        console.log(err);
    });
}

    
    return <>
    <Navigation/>
    <div style={{ background: "#0e1217", minHeight: "100vh" }}>
  <div className="container py-5">

    <div className="row d-flex justify-content-center align-items-start">

      {/* LEFT SIDE — Contact Info */}
      <div className="col-12 col-md-5 text-white mb-4 mb-md-0">
        <div className="p-3">
          <h3>Contact US</h3>
          <p className="mt-4" style={{ fontSize: "14px", color: "#b6bcc9" }}>
            We are available for questions, feedback, or collaboration opportunities. 
            Let us know how we can help
          </p>

          <p className="mt-4" style={{ fontSize: "14px", color: "#b6bcc9" }}>
            You can also contact us at contact@codewithVijayyy.com for any payment 
            or course access related queries
          </p>

          <img src={pic} alt="" width={300} height={200} className="rounded" />
        </div>
      </div>

      {/* RIGHT SIDE — Contact Form */}
      <div className="col-12 col-md-6">
        <form onSubmit={handleSubmit(sendUserData)} 
              className="p-3" 
              style={{ border: "1px solid #222a39", borderRadius: "10px" }}>

          {/* Name */}
          <div>
            <label className="text-white" style={{ fontSize: "13px" }}>Name :</label>
            <input
              type="text"
              className="form-control mt-2 placeholderSmall"
              style={{ background: "#1c1f24", border: "1px solid #222a39", color: "white" }}
              placeholder="Your Name"
              {...register("name")}
            />
          </div>

          {/* Email */}
          <div className="mt-3">
            <label className="text-white" style={{ fontSize: "13px" }}>Email :</label>
            <input
              type="text"
              className="form-control mt-2 placeholderSmall"
              style={{ background: "#1c1f24", border: "1px solid #222a39", color: "white" }}
              placeholder="E mail"
              {...register("email")}
            />
          </div>

          {/* Phone No */}
          <div className="mt-3">
            <label className="text-white" style={{ fontSize: "13px" }}>Phone Number :</label>
            <input type="number" className="form-control mt-2 placeholderSmall" style={{ background: "#1c1f24", border: "1px solid #222a39", color: "white" }} placeholder="Your 10 digit indian Number"{...register("phoneNumber")} />
          </div>

          {/* Subject */}
          <div className="mt-3">
            <label className="text-white" style={{ fontSize: "13px" }}>Subject :</label>
            <input
              type="text"
              className="form-control mt-2 placeholderSmall"
              style={{ background: "#1c1f24", border: "1px solid #222a39", color: "white" }}
              placeholder="Subject"
              {...register("subject")}
            />
          </div>

          {/* Message */}
          <div className="mt-3">
            <label className="text-white" style={{ fontSize: "13px" }}>Message :</label>
            <textarea
              className="form-control mt-2 placeholderSmall"
              style={{ background: "#1c1f24", border: "1px solid #222a39", color: "white" }}
              placeholder="Message"
              {...register("message")}
            />
          </div>

          <button className="btn bg-secondary w-100 mt-3">Send message</button>
        </form>
      </div>

    </div>
  </div>
</div>
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
export default Contact;