export default class UserInfo {
  constructor({userNameSelecror, userJobSelector}) {
    this._userNameElement = document.querySelector(userNameSelecror);
    this._userJobElement = document.querySelector(userJobSelector);
  }

  getUserInfo() {
    return {
      name: this._userNameElement.textContent,
      about: this._userJobElement.textContent
    };

  }

  setUserInfo(data) {
    this._userNameElement.textContent = data.name;
    this._userJobElement.textContent =  data.about;
  }
}
