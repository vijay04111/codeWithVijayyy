import React from "react";
import pic1 from "../assets/card1.jpeg";
import pic2 from "../assets/card2.jpeg"
import pic3 from "../assets/mii.jpg"
import pic4 from '../assets/CardImg/COMP.jpeg'

function RealWorldPractice() {
  return     <>
      <div className="container-fluid d-flex flex-column align-items-center " style={{ backgroundColor: "#101521", minHeight: "150vh" }} >
        <h3 className="text-white fw-bold text-center" style={{ marginBottom: "20px", fontSize: "40px", marginTop: "80px" }}>
          Code Smarter with Real-World Practice
        </h3>

        <p className="text-white mt-3 text-center"style={{ maxWidth: "900px", lineHeight: "1.6", fontWeight: "200" }}>
          At CodeWithVijayyy, you don't just learn code, you engage in practical
          exercises that reflect real-world scenarios. From beginner-friendly
          lessons to advanced courses trusted by professionals, we prepare you
          for real-world projects.
        </p>

        {/* Cards section */}
        <div className="d-flex justify-content-center justify-content-around mt-5 flex-wrap" style={{ width: "100%" }}>
          
          {/* Card 1 */}
          <div className="card bg-dark text-white border-0 mt-4" style={{ width: "25rem" }}>
            <img src={pic1} className="card-img-top" alt="..." height={250} />
            <div className="card-body">
              <h5 className="fw-bold">Web Development</h5>
              <p className="card-text mt-2" style={{fontSize:"13px"}}>
                Learn HTML, CSS, JavaScript and modern frameworks to build
                responsive websites and web applications.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-dark text-white border-0 mt-4" style={{ width: "25rem" }}>
            <img src={pic2} className="card-img-top" alt="..." height={250} />
            <div className="card-body">
              <h5 className="fw-bold">Data Science & AI</h5>
              <p className="card-text mt-2" style={{fontSize:"13px"}}>
                Master Python, data analysis, machine learning and AI with
                hands-on projects.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-dark text-white border-0 mt-4" style={{ width: "25rem" }}>
            <img src={pic4} className="card-img-top" alt="..." height={250} />
            <div className="card-body">
              <h5 className="fw-bold">Data Structures & Algorithms</h5>
              <p className="card-text mt-2" style={{fontSize:"13px"}}>
                Learn DSA and crack interviews at top companies like Google and
                Microsoft.
              </p>
            </div>
          </div>
       </div>

          <div className="text-white">
            <h2 style={{marginTop:"80px"}}>
              Empowering Aspiring Developers to Build Their Future in Tech!
            </h2>
          </div>

          {/* count seaction*/}
        <div className="container text-white mt-5">

  <div className="row text-center">

    {/* Box 1 */}
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <h5>Students land their first developer job in</h5>
      <h1 className="fw-bold">6 months</h1>
      <h3 className="text-secondary">on average</h3>
    </div>

    {/* Box 2 */}
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <h5>Over</h5>
      <h1 className="fw-bold">7,000,000+</h1>
      <h3 className="text-secondary">students trained</h3>
    </div>

    {/* Box 3 */}
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <h5>Total YouTube Views</h5>
      <h1 className="fw-bold">1 Billion+</h1>
      <h3 className="text-secondary">views and counting</h3>
    </div>

  </div>

</div>


      </div>
    </>
  
}

export default RealWorldPractice;
