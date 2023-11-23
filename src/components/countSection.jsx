import React from "react";
import CountUp from "react-countup";
const countSection = () => {
  return (
    <div className="countup row m-auto py-5 text-light">
      <div className="col-12 col-md-6 col-lg-3 text-center mt-5 mt-lg-0">
        <CountUp end={202} duration={25} />
        <p>Happy Customer</p>
      </div>
      <div className="col-12 col-md-6 col-lg-3 text-center mt-5 mt-lg-0 ">
        <CountUp end={765} duration={20} />
        <p>Reservation Request</p>
      </div>
      <div className="col-12 col-md-6 col-lg-3 text-center mt-5 mt-lg-0 ">
        <CountUp end={12} duration={30} />
        <p>Color Template</p>
      </div>
      <div className="col-12 col-md-6 col-lg-3 text-center mt-5 mt-lg-0 ">
        <CountUp end={186} duration={30} />
        <p>Staff Account</p>
      </div>
    </div>
  );
};

export default countSection;
