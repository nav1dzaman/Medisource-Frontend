import React from "react";
import Login from "./authPages/Login";
import videoBg from "../assets/video.mp4";
import { Link } from "react-router-dom";
import Effects from "./Effects";

function Home() {
  const mainStyle = {
    width: "100%",
    height: "100vh",
    position: "relative",
  };

  const videoStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const contentStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  };

  return (
    <div>
      <div style={mainStyle}>
        <div style={overlayStyle}></div>
        <video src={videoBg} autoPlay loop muted style={videoStyle} />
        <div style={contentStyle}>
          <div class="w-max mt-[200px]">
            <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold mt-[-150px]">
              Welcome to MediSource
            </h1>
          </div>

          <div class="flex flex-wrap gap-4 justify-center pt-23">
            <div class="flex flex-col items-center gap-2 h-[130px] text-white rounded-xl shadow-md p-1 w-[240px] bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition-transform duration-300 hover:scale-105">
              <div class="font-semibold text-lg text-center">Pharmacist</div>
              <div class="flex items-center justify-center h-[50px]">
                <img
                  src="medicine.png"
                  alt="Medicine Logo"
                  class="h-full w-auto"
                />
              </div>
              <div class="font-normal text-center">Find Your Medicine</div>
            </div>

            <div class="flex flex-col items-center gap-2 h-[130px] text-white rounded-xl shadow-md p-1 w-[240px] bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition-transform duration-300 hover:scale-105">
              <div class="font-semibold text-lg text-center">Find Doctor</div>
              <div class="flex items-center justify-center h-[50px]">
                <img
                  src="doctor.png"
                  alt="Medicine Logo"
                  class="h-full w-auto"
                />
              </div>
              <div class="font-normal text-center">Find a doctor nearby</div>
            </div>

            <div class="flex flex-col items-center gap-2 h-[130px] text-white rounded-xl shadow-md p-1 w-[240px] bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition-transform duration-300 hover:scale-105">
              <div class="font-semibold text-lg text-center">
                Medical report
              </div>
              <div class="flex items-center justify-center h-[50px]">
                <img
                  src="report.png"
                  alt="Medicine Logo"
                  class="h-full w-auto"
                />
              </div>
              <div class="font-normal text-center">Downlaod Test Reports</div>
            </div>

            <Link to="/login">
              <div class="flex flex-col items-center gap-2 h-[130px] text-white rounded-xl shadow-md p-1 w-[240px] bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition-transform duration-300 hover:scale-105">
                <div class="font-semibold text-lg text-center">
                  User Sign in
                </div>
                <div class="flex items-center justify-center h-[50px]">
                  <img
                    src="signin.png"
                    alt="Medicine Logo"
                    class="h-full w-auto"
                  />
                </div>
                <div class="font-normal text-center">Sign in to portal</div>
              </div>
            </Link>
          </div>
         
         <div className="mt-16">
         <Effects/>
         </div>


        </div>
        
      </div>
<div>

</div>

    </div>
  );
}

export default Home;
