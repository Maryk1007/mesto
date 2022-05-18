import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._form.querySelectorAll('.form__input'));
    this._handleFormSubmit = handleFormSubmit;
    this._buttonSave = this._form.querySelector('.button-save');
  }

  _getInputValues() {
    this._formInputValues = {};
    this._inputList.forEach(input => this._formInputValues[input.name] = input.value);

    return this._formInputValues;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners = () => {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
  });
  }
}
