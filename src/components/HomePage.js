import React from "react";
import { Link } from "react-router-dom";
import Dr1 from "../Dr1.png";
import "../Home.css";

const HomePage = () => {
  return (
    <div className="home">
      <div className="header-part">
        <h1 className="heading">
          "Some people want it to happen, some wish it would happen, others make
          it happen."
        </h1>
      </div>
      <div className="body-part">
        <div className="intro">
          <img src={Dr1} alt="Doctor" />
        </div>
        <div className="container">
          <div className="content">
            <h2>
              Breast cancer, a disease in which malignant (cancer) cells form in
              the tissues of the breast. The disease occurs almost entirely in
              women, but men can get it, too. Early detection of breast cancer
              can save lives.
            </h2>
          </div>
          <button>
            <Link to="/info">Predict Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
