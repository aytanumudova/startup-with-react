import React, {useEffect} from "react";
import Logo from "../assets/svgs/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const footer = () => {
  return (
    <div className="footer container">
      <div className="row">
        <div className="col-12 col-lg-4">
          <img src={Logo} alt="logo" />
          <p className="text-secondary mt-4">
            Morbi convallis bibendum urna ut viverra. Maecenas quis consequat
            libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies
            laoreet ullamcorper.
          </p>
        </div>
        <div className="col-12 col-lg-8">
          <div className="row">
            <div className="col-12 col-md-4">
              <h4>Helpful Links</h4>
              <ul className="lh-lg">
                <li>
                  <a href="#" className="text-decoration-none text-secondary">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="icon me-2"
                    />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-secondary">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="icon me-2"
                    />
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-secondary">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="icon me-2"
                    />
                    FAQ's
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-secondary">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="icon me-2"
                    />
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-secondary">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="icon me-2"
                    />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <h4>Services</h4>
              <ul className="lh-lg">
                <li>
                  <a href="#" className="text-decoration-none text-secondary">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="icon me-2"
                    />
                    Worldwide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-secondary">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="icon me-2"
                    />
                    Scalable
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-secondary">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="icon me-2"
                    />
                    Modular
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-secondary">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="icon me-2"
                    />
                    Connectivity
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-secondary">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="icon me-2"
                    />
                    Corporate
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <h4>Contact Us</h4>
              <ul className="lh-lg">
                <li>
                  <p className="text-secondary">
                    455 West Orchard Street Kings Mountain, NC 28086
                  </p>
                </li>
                <li>
                  <a
                    href="tel:+(272) 211-7370"
                    className="text-decoration-none text-secondary"
                  >
                    Phone: (272) 211-7370
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@brand.com"
                    className="text-decoration-none text-secondary"
                  >
                    E-Mail: support@brand.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="text-secondary text-center mt-4">
          &copy; 2023 YourSite. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default footer;
