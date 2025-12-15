import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";


export default function Sig() {
  const { register,handleSubmit,reset,formState: { errors }, } = useForm();

  const dataSend = (data) => {
    axios
      .post("http://localhost:5001/Signup", data)
      .then((res) => {
        if (res.status === 201) {
          console.log(res.data);
          reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh",  background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", }}>
      <div className="card shadow-lg border-0" style={{width: "100%", maxWidth: "420px",borderRadius: "16px", }}>
        <div className="card-body p-4" style={{ backgroundColor: "#ffffff", borderRadius: "16px" }}>
          <h4 className="text-center fw-bold mb-1">Create Account ✨</h4>
          <p className="text-center text-muted mb-4" style={{ fontSize: "14px" }}>
            Sign up to get started
          </p>

          <form onSubmit={handleSubmit(dataSend)}>
            <div className="row">
              <div className="col-6 mb-3">
                <label className="form-label">First Name</label>
                <input className="form-control " placeholder="F_Name"{...register("firstName", { required: "Required" })}/>
                {errors.firstName && (
                  <small className="text-danger">{errors.firstName.message}</small>
                )}
              </div>

              <div className="col-6 mb-3">
                <label className="form-label">Last Name</label>
                <input className="form-control" placeholder="Surname" {...register("lastName", { required: "Required" })} />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input  type="email" className="form-control" placeholder="abcd@email.com"{...register("email", { required: "Required" })}/>
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input type="tel"className="form-control"placeholder="9876543210"{...register("phone", { required: "Required" })}/>
            </div>

            <div className="mb-3">
              <label className="form-label">Username</label>
              <input className="form-control" placeholder="abdc__123" {...register("username", { required: "Required" })}  />
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="*******"{...register("password", { required: "Required" })}/>
            </div>

            <button  type="submit"className="btn w-100 fw-semibold"style={{ background: "linear-gradient(135deg, #667eea, #764ba2)", color: "white",borderRadius: "10px",}}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
