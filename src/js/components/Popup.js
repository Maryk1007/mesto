export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._buttonClose = this._popup.querySelector('.button-close')
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);

  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => {this._handleEscClose(evt)});
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => {this._handleEscClose(evt)});
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    };
  }

  _handleOverlayClose(evt) {
    if(evt.target.classList.contains('popup')) {
      this.close();
    }
  }

  setEventListeners () {
    this._buttonClose.addEventListener('click', (evt) => {this.close(evt)});
    this._popup.addEventListener('click', (evt) => {this._handleOverlayClose(evt)});
  }
}
