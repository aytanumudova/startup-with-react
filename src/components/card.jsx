import React from "react";

const card = ({dataTitle, dataText, dataImg}) => {
    return (
        <div className="custom-card d-flex flex-column justify-content-center align-items-center">
            <h5>{dataTitle}</h5>
            <p className="card-text text-secondary my-3 mb-4">{dataText}</p>
            <img src={dataImg} alt="cardImg" className="m-auto"/>
        </div>
    );
};

export default card;
