import React from "react";
import playBtn from "../assets/svgs/introsection/play-btn.svg";
import MovingComponent from "react-moving-text";
import Typed from "react-typed";
import AOS from "aos";
import { useEffect } from "react";
import playBtn2 from "../assets/svgs/introsection/ply-btn2.svg";

const Introsection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="introsection p-4 container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-5 intro-left-side">
          <Typed
            className="typing-effect-text lh-sm"
            strings={["Simple online hotel management system"]}
            typeSpeed={40}
          />
          <MovingComponent
            type="fadeInFromLeft"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            <p className="text-secondary mt-3">
              Maecenas sed ligula ut dui pharetra aliquet. Vestibulum eget orci
              libero. Sed est sem, mollis nec lectus nec, varius suscipit
              ligula.{" "}
            </p>
          </MovingComponent>

          <div className="intro-btns d-flex align-items-center">
            <button className="btn btn-blue me-4">About Us</button>
            <div className="d-flex align-items-center">
              <a href="#" className="text-decoration-none text-secondary">
                <img src={playBtn} alt="Play-btn" className="me-2 play-btn"/>
                Watch Video
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-7 intro-right-side mt-5 mt-md-0 d-flex justify-content-center align-items-center">
          <a href="#">
            <img src={playBtn2} alt="play-btn" className="rounded-circle" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Introsection;
