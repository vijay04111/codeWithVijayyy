import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

function Log() {
  const { register, handleSubmit, reset,formState: { errors }} = useForm();

  function dataSend(data)
  {
    axios.post('http://localhost:5001/Login',data).then((res)=>{
      // console.log(res)
        if(res.status===201)
        {
          console.log(res.data);
          reset()
          
        }
    }).catch((errors)=>{
      console.log(errors);
      
    })
  }

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center"  style={{ minHeight: "100vh", backgroundColor: "#0e1217" }}>
        <div className="shadow-lg rounded-3 p-4 p-md-5 text-white"style={{ width: "100%",maxWidth: "420px",backgroundColor: "#7d8fb4ff",}}>
          <h5 className="fw-bold text-center">Welcome Back 👋</h5>
          <p className="text-secondary text-center text-dark" style={{ fontSize: "13px"}}>
            Login to your account
          </p>

          <form onSubmit={handleSubmit(dataSend)}>
            {/* Username */}
            <div className="mb-3">
              <label className="form-label" style={{ fontSize: "13px" }}>
                Username
              </label>
              <input  type="text" className="form-control" placeholder="Enter your username"style={{ backgroundColor: "#6095e4ff",border: "1px solid #222a39", color: "white",}} {...register("username", { required: "Username is required" })} />
              {errors.username && (<small className="text-danger"> {errors.username.message}</small>)}</div>
                  {/* Password */}
            <div className="mb-4">
              <label className="form-label" style={{ fontSize: "13px" }}>
                Password
              </label>
              <input type="password" className="form-control"  placeholder="Enter your password"  style={{ backgroundColor: "#6095e4ff",border: "1px solid #222a39", color: "white", }} {...register("password", { required: "Password is required" })}/>
              {errors.password && (<small className="text-danger">{errors.password.message}</small>)} </div>

            {/* Button */}
            <button
              type="submit"
              className="btn w-100 py-2"
              style={{
                backgroundColor: "#10151c",
                border: "1px solid #222a39",
                color: "white",
                fontSize: "14px",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Log;
