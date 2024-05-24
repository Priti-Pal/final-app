import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../Register.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("/register-user", {
        firstName,
        lastName,
        email,
        password,
      });
      if (response.data.status) {
        alert("Account created successfully");
        window.location.href = "/login";
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="login">
        <div className="log-head">
          <h2>Create a New Account</h2>
        </div>
        <form className="con-form1">
          <h2>Register Here!</h2>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button type="button" onClick={handleRegister} className="log-btn">
              Register
            </button>
            <br />
            <button className="create-account">
              <Link to="/login" className="link">
                Already have an account?
              </Link>
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
