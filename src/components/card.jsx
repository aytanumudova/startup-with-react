import React from "react";
import cardImg from "../assets/svgs/carousel-section/card-img.svg";

const card = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4 text-center mt-5 mt-lg-0 custom-card">
      <h5>Market Research</h5>
      <p className="card-text my-3 mb-4">
        Quisque at arcu at turpis lobortis ultrices. Nullam et accumsan mauris.
        Nunc pellentesque in tellus.
      </p>
      <img src={cardImg} alt="cardImg" />
    </div>
  );
};

export default card;
