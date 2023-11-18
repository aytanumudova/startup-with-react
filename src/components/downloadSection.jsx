import React from "react";
import appleIcon from "../assets/svgs/download-section/apple.svg";
import gmailIcon from "../assets/svgs/download-section/gmailİcon.svg";
const DownloadSection = () => {
  return (
    <div className="download-section container text-center">
      <h2>Download App</h2>
      <p className="text-secondary my-4">
        Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae.
        Quisque sit amet nisi erat.
      </p>
      <div className="row d-flex flex-column flex-sm-row justify-content-center align-items-center">
        <div className="col-6 col-sm-4 col-md-3 p-2 border border-rounded rounded-5 button">
          <a
            href="#"
            className="text-decoration-none text-white d-flex justify-content-center align-items-center"
          >
            <img src={appleIcon} />
            <div className="d-flex flex-column align-items-start ms-3">
              <small>Download on the</small>
              <small>App Store</small>
            </div>
          </a>
        </div>
        <div className="col-6 col-sm-4 col-md-3 p-2 border border-rounded rounded-5 button">
          <a
            href="#"
            className="text-decoration-none text-white d-flex justify-content-center align-items-center"
          >
            <img src={gmailIcon} />
            <div className="d-flex flex-column align-items-start ms-3">
              <small>Get it on</small>
              <small>Google Play</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
