export default class UserInfo {
  constructor({userNameSelecror, userJobSelector, userAvatarSelector}) {
    this._userNameElement = document.querySelector(userNameSelecror);
    this._userJobElement = document.querySelector(userJobSelector);
    this._userAvatarElement = document.querySelector(userAvatarSelector);


  }

  getUserInfo() {
    return {
      name: this._userNameElement.textContent,
      about: this._userJobElement.textContent,
      avatar:  this._userAvatarElement.src
    };

  }

  setUserInfo(data) {
    this._userNameElement.textContent = data.name;
    this._userJobElement.textContent =  data.about;
  }

  setUserAvatar(data) {
    this._userAvatarElement.src = data.avatar;
  }
}
