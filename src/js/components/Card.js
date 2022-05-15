export default class Card {
  constructor (data, handleCardClick, templateSelector) {
    this._template = document.querySelector(templateSelector)
          .content.querySelector('.cards');
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._handleCardClick = handleCardClick;
  }
  _deleteCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _likeCard(evt) {
    evt.target.closest('.cards__button').classList.toggle('cards__button_like');
  }

  _setLikes() {
    this._likesCountElement = this._cardElement.querySelector('.cards__count-likes');
    this._likesCountElement.textContent = 8;
  }

  createCard() {
    this._cardElement = this._template.cloneNode(true);
    this._pictureElement = this._cardElement.querySelector('.cards__picture');
    this._cardElement.querySelector('.cards__title').textContent = this._name;
    this._pictureElement.src = this._link;
    this._pictureElement.alt = this._name;

    this._setLikes();
    this._addLiseners(this._cardElement);
    return this._cardElement;
  }

  _addLiseners(el) {
    el.querySelector('.cards__delete-button').addEventListener('click', this._deleteCard);
    el.querySelector('.cards__button').addEventListener('click', this._likeCard);
    this._pictureElement.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }
}
