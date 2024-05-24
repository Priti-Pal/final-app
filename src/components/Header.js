import React from "react";
import logoimg from "../img.png";
import "../Header.css";

const Header = ({ isLoggedIn, handleLogout }) => {
  return (
    <div className="header">
      <header className="app-header">
        <img src={logoimg} className="logo" alt="Logo" />
        <h3>
          <span>B</span>reast Cancer Prediction
        </h3>
        <ul>
          <li>
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <button onClick={() => (window.location.href = "/login")}>
                Login
              </button>
            )}
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
