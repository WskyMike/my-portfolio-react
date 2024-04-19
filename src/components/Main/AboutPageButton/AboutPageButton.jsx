import React from "react";

import "./AboutPageButton.scss";

function AboutPageButton({ onClick }) {
  return (
    <button className="aboutpage__button" onClick={onClick}>
      <div className="aboutpage__img"></div>
    </button>
  );
}

export default AboutPageButton;
