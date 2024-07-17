import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_email: '',
    user_phone: '',
    user_password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      user_lastname: 'Doe',
      user_city: 'Hyderabad',
      user_zipcode: '500072'
    };
    axios.post('https://syoft.dev/Api/user_registeration/api/user_registeration', payload)
      .then(response => {
        alert('Registration successful!');
      })
      .catch(error => {
        console.error('There was an error registering the user!', error);
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input type="text" name="user_firstname" placeholder="First Name" onChange={handleChange} required />
        <input type="email" name="user_email" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="user_phone" placeholder="Phone" onChange={handleChange} required />
        <input type="password" name="user_password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
