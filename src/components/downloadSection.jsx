import React from "react";

const DownloadSection = () => {
  return (
    <div className="download-section container">
      <h2>Download App</h2>
      <p>
        Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae.
        Quisque sit amet nisi erat.
      </p>
      <div className="row">
        <div className="col-12 col-md-6">
          <a href="#">
            <small>
              Download on the <span>App Store</span>
            </small>
          </a>
        </div>
        <div className="col-12 col-md-6">
          <a href="#">
            <small>
              Get it on<span>Google Play</span>
            </small>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
