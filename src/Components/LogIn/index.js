import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";

const LogIn = () => {
  const [formData, setFormData] = useState({
    user_email: "",
    user_password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://syoft.dev/Api/userlogin/api/userlogin",
        formData
      );
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      navigate("/dashboard");
    } catch (error) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="left">
        <h1>Welcome back!</h1>
        <p>Login to continue.</p>
      </div>
      <div className="right">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
          <label>Email Address *</label>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
          <label>Password *</label>
          <input
            type="password"
            name="user_password"
            value={formData.user_password}
            onChange={handleChange}
            required
          />
          <button type="submit">Log in</button>
        </form>
        <p>
          Don't have an account?{" "}
          <a href={" "} onClick={() => navigate("/signup")}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LogIn;