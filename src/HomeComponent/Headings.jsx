import React from 'react'
import bg from "../assets/banner-bg.webp";
import RotatingTypingText from './RotatingTypingText';


function Headings() 
{
  return  <>
   <div
  className="d-flex align-items-center flex-column container-fluid"
  style={{backgroundImage: `linear-gradient(rgba(5, 15, 35, 0.85),rgba(5, 15, 35, 0.85)), url(${bg})`,backgroundSize: "cover",backgroundPosition: "center",height: "125vh",}}>
         
           <div>
             <p className=' text-dark  p-2  rounded rounded-5' style={{marginTop:"100px" , backgroundColor:'#dcddde'}}>Learn coding the right way</p>
           </div>


          {/* Heading code with vijayyy */}
            <div className="container text-center mt-5">
                 <h1 className="heading text-white">
                      Welcome to CodeWithVijayyy
                 </h1>

           </div>
           {/* Swip teaxt seaction calling */}
           <RotatingTypingText/>

          {/* Para Seaction */}
           <div className='d-flex flex-column align-items-center'>
           <p className='mt-5 text-white' style={{ maxWidth: "620px", width: "100%" }}>
              Confused about which course to take? We've got you covered! Browse courses and discover the best option for you. It's free! <span className='fw-bold'> CodeWithVijayyy</span> is my effort to teach the basics and those coding techniques in a short time that took me years to master.</p>
           </div>

            {/* Buuton */}
              <div className="d-flex gap-3" style={{marginTop:"70px"}}>
                <button className="btn btn-light px-4 py-2 rounded-3 shadow-sm fw-medium">
                  Explore Courses
                </button>

                <button className="btn btn-dark px-4 py-2 rounded-3 shadow-sm fw-medium">
                  Read Articles
                </button>
              </div>


            {/* Card Seaction  */}

             <div className="p-3 px-5  rounded-4 d-flex justify-content-between text-center shadow-lg" style={{ minWidth: "200px",background: "rgba(0,0,0,0.35)",marginTop:"50px"}}>

          <div className="mx-4">
            <h3 className="fw-bold text-white mb-1">100+</h3>
            <small className="text-light opacity-75">Courses</small>
          </div>

          <div className="mx-4">
            <h3 className="fw-bold text-white mb-1">500K+</h3>
            <small className="text-light opacity-75">Students</small>
          </div>

          <div className="mx-4">
            <h3 className="fw-bold text-white mb-1">5.0</h3>
            <small className="text-light opacity-75">Rating</small>
          </div>
        </div>
           </div>

           
     </>
}

export default Headings
