export default class UserInfo {
  constructor({userNameSelecror, userJobSelector}) {
    this._userNameElement = document.querySelector(userNameSelecror);
    this._userJobElement = document.querySelector(userJobSelector);
  }

  getUserInfo() {
    return {
      user: this._userNameElement.textContent,
      info: this._userJobElement.textContent
    }
  }

  setUserInfo({ userName, userJob }) {
    this._userNameElement.textContent = userName;
    this._userJobElement.textContent =  userJob;
  }
}
