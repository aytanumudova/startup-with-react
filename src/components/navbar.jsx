// rfce
// rafce
// rcce
import React from "react";
import Logo from "../assets/svgs/logo.svg";
const navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg container">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={Logo} alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pages
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link " href="#">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Demos
              </a>
            </li> <li class="nav-item">
              <a class="nav-link " href="#">
                Docs
              </a>
            </li> <li class="nav-item">
              <button class=" btn btn-primary btn-navbar">
                Buy now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
