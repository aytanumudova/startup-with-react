import React from "react";

const card = ({ dataTitle, dataText, dataImg }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 text-center mt-5 mt-lg-0 custom-card">
      <h5>{dataTitle}</h5>
      <p className="card-text text-secondary my-3 mb-4">{dataText}</p>
      <img src={dataImg} alt="cardImg" />
    </div>
  );
};

export default card;
