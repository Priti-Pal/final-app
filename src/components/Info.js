import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../Info.css";

const Info = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="header-part">
          <h2 className="heading">Enter the Values about breast cancer...</h2>
        </div>
        <div className="body-part">
          <form className="form-groups">
            <div className="form-group1">
              <input
                type="text"
                placeholder="mean radius"
                className="from-control"
              />
              <input
                type="text"
                placeholder="mean concativity"
                className="from-control"
              />
              <input
                type="text"
                placeholder="perimeter error"
                className="from-control"
              />
              <input
                type="text"
                placeholder="symmetry error"
                className="from-control"
              />
              <input
                type="text"
                placeholder="worst smoothness"
                className="from-control"
              />
            </div>
            <div className="form-group2">
              <input
                type="text"
                placeholder="mean texture"
                className="from-control"
              />
              <input
                type="text"
                placeholder="mean concave point"
                className="from-control"
              />
              <input
                type="text"
                placeholder="area error"
                className="from-control"
              />
              <input
                type="text"
                placeholder="fractal dimention error"
                className="from-control"
              />
              <input
                type="text"
                placeholder="worst compactness"
                className="from-control"
              />
            </div>
            <div className="form-group3">
              <input
                type="text"
                placeholder="mean perimeter"
                className="from-control"
              />
              <input
                type="text"
                placeholder="mean symmetry"
                className="from-control"
              />
              <input
                type="text"
                placeholder="smoothness error"
                className="from-control"
              />
              <input
                type="text"
                placeholder="worst radius"
                className="from-control"
              />
              <input
                type="text"
                placeholder="worst concavity"
                className="from-control"
              />
            </div>
            <div className="form-group4">
              <input
                type="text"
                placeholder="mean area"
                className="from-control"
              />
              <input
                type="text"
                placeholder="mean fractal dimension"
                className="from-control"
              />
              <input
                type="text"
                placeholder="compactness error"
                className="from-control"
              />
              <input
                type="text"
                placeholder="worst texture"
                className="from-control"
              />
              <input
                type="text"
                placeholder="worst concave points"
                className="from-control"
              />
            </div>
            <div className="form-group5">
              <input
                type="text"
                placeholder="mean smoothness"
                className="from-control"
              />
              <input
                type="text"
                placeholder="radius error"
                className="from-control"
              />
              <input
                type="text"
                placeholder="concavity error"
                className="from-control"
              />
              <input
                type="text"
                placeholder="worst area"
                className="from-control"
              />
              <input
                type="text"
                placeholder="worst fractal dimension"
                className="from-control"
              />
            </div>
            <div className="submit-button">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Info;
