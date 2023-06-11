import React from "react";

const card = ({ dataTitle, dataText, dataImg }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 text-center mt-5 mt-lg-0 custom-card">
      <h5>{dataTitle}</h5>
      <p className="card-text my-3 mb-4">{dataText}</p>
      <img src={dataImg} alt="cardImg" width={100} />
    </div>
  );
};

export default card;
