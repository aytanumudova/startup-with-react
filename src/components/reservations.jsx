import React from "react";
import { useRef } from "react";
import reservationImg from "../assets/svgs/reservations-section/booking.svg";
const Reservations = () => {
  const buttonRef = useRef();

  const addActiveClass = (e) => {
    const clickedAreas = e.target;
    if (clickedAreas.classList.contains("button")) {
      clickedAreas.classList.toggle("active");
    }
    // for (let i = 0; i < clickedAreas.length; i++) {
    //   clickedAreas[i].addEventListener("click",)
    //   if (clickedAreas.length > 0) {
    //     clickedAreas[0].className = clickedAreas[0].className.replace(
    //       "active",
    //       " "
    //     );
    //   }
    // }
  };

  return (
    <div className="row container m-auto reservation-section pt-3">
      <div className="col-12 col-lg-6 left-side d-flex align-items-center justify-content-center">
        <img src={reservationImg} alt="booking-img" />
      </div>
      <div className="col-12 col-lg-6 right-side mt-5 mt-lg-0 ">
        <span>What we do?</span>
        <h3 className="mt-4 mb-3">Reservations Management</h3>
        <p>
          Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae.
          Quisque sit amet nisi erat.
        </p>
        <div className="list mt-5">
          <div className="list-item d-flex d-inline align-items-baseline gap-3 mb-2">
            <div className="button d-flex justify-content-center align-items-center">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.22321 4.65179C5.28274 4.71131 5.3125 4.77976 5.3125 4.85714C5.3125 4.93452 5.28274 5.00298 5.22321 5.0625L1.0625 9.22321C1.00298 9.28274 0.934524 9.3125 0.857143 9.3125C0.779762 9.3125 0.71131 9.28274 0.651786 9.22321L0.205357 8.77679C0.145833 8.71726 0.116071 8.64881 0.116071 8.57143C0.116071 8.49405 0.145833 8.4256 0.205357 8.36607L3.71429 4.85714L0.205357 1.34821C0.145833 1.28869 0.116071 1.22024 0.116071 1.14286C0.116071 1.06548 0.145833 0.997023 0.205357 0.9375L0.651786 0.491071C0.71131 0.431547 0.779762 0.401785 0.857143 0.401785C0.934524 0.401785 1.00298 0.431547 1.0625 0.491071L5.22321 4.65179Z"
                  fill="#4B6EE5"
                />
              </svg>
            </div>
            <p>Sed eleifend est ac mi imperdiet pellentesque.</p>
          </div>
          <div className="list-item d-flex d-inline align-items-baseline gap-3 mb-2">
            <div className="button d-flex justify-content-center align-items-center">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.22321 4.65179C5.28274 4.71131 5.3125 4.77976 5.3125 4.85714C5.3125 4.93452 5.28274 5.00298 5.22321 5.0625L1.0625 9.22321C1.00298 9.28274 0.934524 9.3125 0.857143 9.3125C0.779762 9.3125 0.71131 9.28274 0.651786 9.22321L0.205357 8.77679C0.145833 8.71726 0.116071 8.64881 0.116071 8.57143C0.116071 8.49405 0.145833 8.4256 0.205357 8.36607L3.71429 4.85714L0.205357 1.34821C0.145833 1.28869 0.116071 1.22024 0.116071 1.14286C0.116071 1.06548 0.145833 0.997023 0.205357 0.9375L0.651786 0.491071C0.71131 0.431547 0.779762 0.401785 0.857143 0.401785C0.934524 0.401785 1.00298 0.431547 1.0625 0.491071L5.22321 4.65179Z"
                  fill="#4B6EE5"
                />
              </svg>
            </div>
            <p>Sed eleifend est ac mi imperdiet pellentesque.</p>
          </div>
          <div className="list-item d-flex d-inline align-items-baseline gap-3">
            <div className="button d-flex justify-content-center align-items-center">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.22321 4.65179C5.28274 4.71131 5.3125 4.77976 5.3125 4.85714C5.3125 4.93452 5.28274 5.00298 5.22321 5.0625L1.0625 9.22321C1.00298 9.28274 0.934524 9.3125 0.857143 9.3125C0.779762 9.3125 0.71131 9.28274 0.651786 9.22321L0.205357 8.77679C0.145833 8.71726 0.116071 8.64881 0.116071 8.57143C0.116071 8.49405 0.145833 8.4256 0.205357 8.36607L3.71429 4.85714L0.205357 1.34821C0.145833 1.28869 0.116071 1.22024 0.116071 1.14286C0.116071 1.06548 0.145833 0.997023 0.205357 0.9375L0.651786 0.491071C0.71131 0.431547 0.779762 0.401785 0.857143 0.401785C0.934524 0.401785 1.00298 0.431547 1.0625 0.491071L5.22321 4.65179Z"
                  fill="#4B6EE5"
                />
              </svg>
            </div>
            <p>Sed eleifend est ac mi imperdiet pellentesque.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
