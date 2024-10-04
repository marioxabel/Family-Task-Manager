import React, { useState } from 'react';

//Register form inputs
export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userType: '',
    parentKey: '',
  });

  //Event handler for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div style={{ backgroundColor: '#e2e0ff', padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#5e52c7', fontSize: '25px' }}>Register</h1>

      {/* First name field */}
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        style={inputStyle}
      />
      {/* Last name field */}
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        style={inputStyle}
      />
      {/* Email field */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        style={inputStyle}
      />
      {/* Password field */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        style={inputStyle}
      />
      {/* Usertype options */}
      <select
        name="userType"
        value={formData.userType}
        onChange={handleChange}
        style={inputStyle}
      >
        <option value="" disabled>
          User’s type
        </option>
        <option value="parent">Parent</option>
        <option value="child">Child</option>
      </select>
      {/* Conditional type */}
      {formData.userType === 'child' && (
        <input
          type="text"
          name="parentKey"
          placeholder="Parent’s key"
          value={formData.parentKey}
          onChange={handleChange}
          style={inputStyle}
        />
      )}
      {/* Register button */}
      <button style={buttonStyle}>Register</button>
    </div>
  );
}

// Styles
const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '8px',
  border: '1px solid #ccc',
  backgroundColor: '#f5f5f5',
  fontSize: '16px',
};

const buttonStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  borderRadius: '8px',
  backgroundColor: '#6a0dad',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
};