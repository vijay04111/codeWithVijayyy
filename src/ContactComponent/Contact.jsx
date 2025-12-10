import React from "react";
import pic from '../assets/contact.jpeg'
import { useForm } from "react-hook-form";
import axios from "axios";



  

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



    </>
}
export default Contact;