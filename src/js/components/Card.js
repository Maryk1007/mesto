export default class Card {

  constructor (data, handleCardClick, templateSelector) {
    this._template = document.querySelector(templateSelector)
          .content.querySelector('.cards');
    this._name = data.photoName;
    this._link = data.photoLink;
    this._handleCardClick = handleCardClick;
  }
  _deleteCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _likeCard(evt) {
    evt.target.closest('.cards__button').classList.toggle('cards__button_like');
  }

  // _openFullviewCard(evt) {
  //   fullviewPicture.src = evt.target.src;
  //   fullviewPicture.alt = evt.target.alt;
  //   captionPicture.textContent = evt.target.alt;

  //   openPopup(popupFullview);
  // }

  createCard() {
    this._cardElement = this._template.cloneNode(true);
    const pictureElement = this._cardElement.querySelector('.cards__picture');
    this._cardElement.querySelector('.cards__title').textContent = this._name;
    pictureElement.src = this._link;
    pictureElement.alt = this._name;
    console.log(pictureElement.src);

    this._addLiseners(this._cardElement);
    return this._cardElement;
  }

  _addLiseners(el) {
    el.querySelector('.cards__delete-button').addEventListener('click', this._deleteCard);
    el.querySelector('.cards__button').addEventListener('click', this._likeCard);
    el.querySelector('.cards__picture').addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }
}
