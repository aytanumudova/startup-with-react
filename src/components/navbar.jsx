// rfce
// rafce
// rcce
import React from "react";
import Logo from "../assets/svgs/logo.svg";
const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg container">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto d-flex align-items-end mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Demos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Docs
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-blue mt-2 mt-lg-0 ms-lg-4">Buy now</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
