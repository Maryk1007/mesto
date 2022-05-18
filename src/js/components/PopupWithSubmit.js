import Popup from './Popup.js'

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
  }

  changeSubmitHandler(handler) {
    this.changeSubmitHandler = handler;
  }

  setEventListeners = () => {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      // this.changeSubmitHandler();
  });
  }
}
