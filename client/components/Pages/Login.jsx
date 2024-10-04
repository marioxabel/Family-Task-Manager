import { useState } from "react";
import Auth from '../../src/utils/utils.js';
import { loginUser } from "../../src/api/API.js";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    type: ''
  });
  const [credentialsWrong, setCredentialsWrong] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(loginData);
      Auth.login(data.token);
      setCredentialsWrong(false);
    } catch (err) {
      console.error('Failed to login', err);
      setCredentialsWrong(true);
    }
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Email</label>
        <input
          type='text'
          name='email'
          value={loginData.email || ''}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type='password'
          name='password'
          value={loginData.password || ''}
          onChange={handleChange}
        />
        <ProfileSwitcher 
          selectedProfile={loginData.type} // Pass the type from loginData
          setSelectedProfile={(value) => setLoginData(prev => ({ ...prev, type: value }))} // Update the type in loginData
        />
        <button type='submit'>Submit Form</button>
        {credentialsWrong && <p style={{ color: 'red', fontWeight: 'bold' }}>Wrong Credentials!</p>}
      </form>
    </div>
  );
};

export default Login;



const ProfileSwitcher = ({ selectedProfile, setSelectedProfile }) => {
  return (
    <div>
      <select
        value={selectedProfile || ''} // Use selectedProfile directly
        onChange={(e) => setSelectedProfile(e.target.value)} // Update the state with the selected value
      >
        <option value="" disabled>
          Select Profile
        </option>
        <option key="parent" value="parent">
          Parent {/* Display type only */}
        </option>
        <option key="child" value="child">
          Child {/* Display type only */}
        </option>
      </select>
    </div>
  );
};



