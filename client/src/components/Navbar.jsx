import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    checkLogin();
  }, [loginCheck]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px', paddingTop: '30px', paddingBottom: '50px' }}>
        {!loginCheck ? (
          <button className="navbar-btn-login" type='button'>
            <Link to='/'>Login</Link>
          </button>
        ) : (
          <button className="navbar-btn" type='button' onClick={() => {
            auth.logout();
          }}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
