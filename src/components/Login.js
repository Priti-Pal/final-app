import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import hope from "../hope.webp";
import "../Login.css";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/login", { email, password });
      if (response.data.status) {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "/";
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="login">
        <div className="log-head">
          <h2>Hey Welcome Back! Please Login Here!</h2>
        </div>
        <div className="con-container">
          <div className="con-content">
            <img src={hope} alt="Hope" />
          </div>
          <form className="con-form1">
            <h2>Login Here!</h2>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
              />
            </div>
            <div className="form-group">
              <button type="button" onClick={handleLogin} className="log-btn">
                Login
              </button>
              <br />
              <button className="create-account">
                <Link to="/register" className="link">
                  Don't have an account?
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
