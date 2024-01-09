class Auth {
  constructor() {
    this.user_token = JSON.parse(localStorage.getItem("auth")) || null;
  }
  getToken() {
    return JSON.parse(localStorage.getItem("auth")) ?
      JSON.parse(localStorage.getItem("auth")).auth_token : null;
  }
  getUser() {
    return JSON.parse(localStorage.getItem("auth")) ?
      JSON.parse(localStorage.getItem("auth")).user : null;
  }

  getTokenExpiration() {
    return JSON.parse(localStorage.getItem("auth")) ?
      JSON.parse(localStorage.getItem("auth")).token_expiration : null;
  }

  // setUserToken(new_token) {
  //   this.auth = new_token;
  //   localStorage.setItem("auth", JSON.stringify(new_token));
  // }

  logout() {
    localStorage.removeItem("auth");
  }
}
export default new Auth();