// export default class Popup {
//   constructor(popupSelector) {
//     this._popup = document.querySelector(popupSelector);
//     this._handleEscClose = this._handleEscClose.bind(this);
//   }

//   open() {
//     this._popup.classList.add('popup_opened');

//     this._popup.addEventListener('click', this.setEventListeners);
//     document.addEventListener('keydown', this._handleEscClose);
//   }

//   close() {
//     this._popup.classList.remove('popup_opened');

//     this._popup.removeEventListener('click', this.setEventListeners);
//     document.removeEventListener('keydown', this._handleEscClose);
//   }

//   _handleEscClose(evt) {
//       if (evt.key === 'Escape') {
//         const popupOpened = this._popup.querySelector('.popup_opened');
//         this.close(popupOpened);
//       };
//   }

//   setEventListeners(evt) {
//       if ((evt.target.classList.contains('popup')) || (evt.target.classList.contains('button-close'))) {
//         const popupOpened = this._popup.querySelector('.popup_opened');
//         this.close(popupOpened);
//       };
//   }
// }
