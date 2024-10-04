import {jwtDecode } from 'jwt-decode';

class AuthService {
  // Decode the token and return the user's profile information
  getProfile() {
    const token = this.getToken();
    if (!token) return null;
    
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Invalid token', error);
      return null;
    }
  }

  // Check if the user is logged in by verifying the presence of a valid token
  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token); // Ensure token exists and is not expired
  }
  
  // Check if the token has expired
  isTokenExpired(token) {
    try {
      const decoded = jwtDecode(token);
      if (decoded.exp && decoded.exp * 1000 < Date.now()) {
        return true; // Token is expired
      }
      return false; // Token is valid
    } catch (error) {
      console.error('Error decoding token', error);
      return true; // Assume token is invalid/expired if decoding fails
    }
  }

  // Return the token from localStorage
  getToken() {
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser;
  }

  // Save the token to localStorage and redirect to the home page
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // Remove the token from localStorage and redirect to the login page
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/login');
  }
}

export default new AuthService();
