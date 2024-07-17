import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    user_firstname: "",
    user_email: "",
    user_phone: "",
    user_password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        validationErrors[key] = `Please enter ${key.replace("_", " ")}`;
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const payload = {
      ...formData,
      user_lastname: "Smith",
      user_city: "Hyderabad",
      user_zipcode: "500072",
    };

    try {
      await axios.post(
        "https://syoft.dev/Api/user_registeration/api/user_registeration",
        payload
      );
      navigate("/signin");
    } catch (error) {
      setErrors({ form: "Registration failed. Please try again." });
    }
  };

  return (
    <div className="container">
      <div className="left">
        <h1>Welcome to our community</h1>
        
      </div>

      <div className="right">
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          {errors.form && <p className="error">{errors.form}</p>}
          <label>First Name *</label>
          <input
            type="text"
            name="user_firstname"
            value={formData.user_firstname}
            onChange={handleChange}
            required
          />
          {errors.user_firstname && (
            <p className="error">{errors.user_firstname}</p>
          )}

          <label>Email Address *</label>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
          {errors.user_email && <p className="error">{errors.user_email}</p>}

          <label>Phone Number *</label>
          <input
            type="text"
            name="user_phone"
            value={formData.user_phone}
            onChange={handleChange}
            required
          />
          {errors.user_phone && <p className="error">{errors.user_phone}</p>}

          <label>Password *</label>
          <input
            type="password"
            name="user_password"
            value={formData.user_password}
            onChange={handleChange}
            required
          />
          {errors.user_password && (
            <p className="error">{errors.user_password}</p>
          )}

          <button type="submit">Create your free account</button>
        </form>
        <p>
          Already have an account?{" "}
          <a href={" "} onClick={() => navigate("/signin")}>
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;