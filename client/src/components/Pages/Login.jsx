import { useState } from "react";

import Auth from '../../utils/utils.js';
import { loginUser } from "../../api/API.js";

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

      if (loginData.type === "child") {
        window.location.assign('/childpage');
      } else {
        window.location.assign('/parentpage');
      }

    } catch (err) {
      console.error('Failed to login', err);
      setCredentialsWrong(true);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <button style={styles.registerButton} onClick={() => window.location.assign("/register")}>
          Register
        </button>
      </header>
      <form style={styles.loginForm} onSubmit={handleSubmit}>
        <h1 style={styles.title}>Login</h1>
        <label style={styles.label}>Email</label>
        <input
          type='text'
          name='email'
          value={loginData.email || ''}
          onChange={handleChange}
          style={styles.inputField}
        />
        <label style={styles.label}>Password</label>
        <input
          type='password'
          name='password'
          value={loginData.password || ''}
          onChange={handleChange}
          style={styles.inputField}
        />
        <ProfileSwitcher 
          selectedProfile={loginData.type}
          setSelectedProfile={(value) => setLoginData(prev => ({ ...prev, type: value }))} 
        />
        <button type='submit' style={styles.enterButton}>Login</button>
        {credentialsWrong && <p style={styles.errorText}>Wrong Credentials!</p>}
      </form>
    </div>
  );
};

const ProfileSwitcher = ({ selectedProfile, setSelectedProfile }) => {
  return (
    <div style={styles.profileSwitcher}>
      <select
        value={selectedProfile || ''}
        onChange={(e) => setSelectedProfile(e.target.value)}
        style={styles.selectField} // Apply select field styles
      >
        <option value="" disabled>
          Select Profile
        </option>
        <option key="parent" value="parent">
          Parent
        </option>
        <option key="child" value="child">
          Child
        </option>
      </select>
    </div>
  );
};

const styles = {
  container: {
    padding: '15px',
    maxWidth: '350px', 
    margin: 'auto',
    backgroundColor: '#E6E0F8',
    borderRadius: '10px',
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px', 
  },
  registerButton: {
    backgroundColor: 'white',
    padding: '8px', 
    borderRadius: '15px', 
    border: 'none',
    cursor: 'pointer',
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: '1.5em', // Adjust title size
  },
  label: {
    margin: '5px 0',
  },
  inputField: {
    margin: '8px 0', 
    padding: '10px',
    borderRadius: '15px', 
    border: 'none',
    backgroundColor: '#D6C7FC',
    textAlign: 'center',
  },
  enterButton: {
    marginTop: '15px',
    padding: '8px', 
    backgroundColor: '#D6C7FC',
    border: 'none',
    borderRadius: '15px', 
    cursor: 'pointer',
  },
  profileSwitcher: {
    marginTop: '8px',
  },
  selectField: {
    padding: '8px',
    borderRadius: '15px',
    backgroundColor: '#D6C7FC',
    textAlign: 'center',
    border: 'none',
    outline: 'none', // Remove outline
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: '10px', // Added margin for error text
  },
};

export default Login;
