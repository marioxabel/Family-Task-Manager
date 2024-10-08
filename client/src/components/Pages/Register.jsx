import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Register form inputs
export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    type: 'parent',
    parentKey: '',
  });
  // const [showParentKey, setShowParentKey] = useState(false);
  const navigate = useNavigate();

  //Event handler for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      password: formData.password,
      type: formData.type,
      parentKey: formData.type === 'child' ? formData.parentKey : null,
    };
    console.log(payload);

    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok){
        navigate('/');
      }

      // const result = await response.json();

      // if (response.ok) {
      //   //Store JWT token
      //   localStorage.setItem('token', result.token);

      //   if (formData.userType === 'parent') {
      //     navigate('/ParentPage');
      //   } else {
      //     navigate('/ChildPage');
      //   }
      // } else {
      //   console.error('Registration failed:', result.message);
      // }

    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#e2e0ff', padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#5e52c7', fontSize: '25px' }}>Register</h1>

      {/* First name field */}
      <form onSubmit={handleSubmit}>
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
          name="type"
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
        <button type="submit" style={buttonStyle}>Register</button>
      </form>
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