import React from "react";
import NavBar from './components/HomeNavBar';
import Img from "./components/images/molecularBio.png";

export default function Home() {
  return (
    <div className='body'>
      <NavBar />
      <div class = "row">
      <h1>Inventory Management System Of Agricultural Biotechnology Centre</h1>
      </div>

      <div className="pb-20 select-none">
        <div class = "row">
        <div class="col-6">
            <p className="py-5">
              Start, switch, or advance your career with more than 2000 courses, Professional Certificates, and degrees from world-class universities.
              Are you eager to embark on a journey of continuous learning and self-improvement?
              Look no further! <b>Join LearnEdge</b>🌟
            </p>
            <p>Sign Up as a Student</p>
            <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off">
              Sign Up 
            </button>
         </div>
        <div class="col-6">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src={Img} alt="Description of the image" 
                 width="400"
                 height="300" 
            />
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}
