import {fullviewPicture, captionPicture, popupFullview, openPopup, closePopup, closePopupOverlay, closePopupEsc} from './utils.js'

export class Card {

  constructor (data, templateSelector) {
    this._template = document.querySelector(templateSelector).content;

    this._name = data.name
    this._link = data.link
  }
  _deleteCard(evt) {
    evt.target.closest('.cards').remove();
  }

  _likeCard(evt) {
    evt.target.closest('.cards__button').classList.toggle('cards__button_like');
  }

  _openFullviewCard(evt) {
    fullviewPicture.src = evt.target.src;
    fullviewPicture.alt = evt.target.alt;
    captionPicture.textContent = evt.target.alt;

    openPopup(popupFullview);
  }

  createCard() {
    const cardElement = this._template.cloneNode(true);
    cardElement.querySelector('.cards__title').textContent = this._name;
    cardElement.querySelector('.cards__picture').src = this._link;
    cardElement.querySelector('.cards__picture').alt = this._name;

    this._addLiseners(cardElement);
    return cardElement;
  }

  _addLiseners(el) {
    el.querySelector('.cards__delete-button').addEventListener('click', this._deleteCard);
    el.querySelector('.cards__button').addEventListener('click', this._likeCard);
    el.querySelector('.cards__picture').addEventListener('click', this._openFullviewCard);
  }
}
