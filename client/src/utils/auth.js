class AuthService {
  
    // Verifica si el usuario ha iniciado sesión al obtener el token de localStorage
    loggedIn() {
      const token = this.getToken();
      return token;
    }
  
    // Obtiene el token JWT desde localStorage
    getToken() {
      const loggedUser = localStorage.getItem('id_token') || '';
      return loggedUser;
    }
  
    // Almacena el token JWT en localStorage y redirige a la página de inicio
    login(idToken) {
      localStorage.setItem('id_token', idToken);
      window.location.assign('/');
    }
  
    // Elimina el token JWT de localStorage y redirige a la página de inicio
    logout() {
      localStorage.removeItem('id_token');
      window.location.assign('/');
    }
  }
  
  // Exporta una instancia de la clase AuthService
  export default new AuthService();
  