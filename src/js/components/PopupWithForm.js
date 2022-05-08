import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this.form = popupSelector.querySelector('.popup__form');
    this.handleSubmitForm = handleSubmitForm;
  }

  _getInputValues() {

  }
}
