export default class Card {
  constructor ({ name, link, likes, _id, owner }, handleCardClick, {handleLikeClick, handleDeleteClick}, currentUserId, templateSelector) {
    this._template = document.querySelector(templateSelector)
          .content.querySelector('.cards');
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = _id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;

    this._userId = currentUserId;
    this._ownerId = owner;
  }

  deleteCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _getViewDeleteButton() {
    this._deleteButton = this._cardElement.querySelector('.cards__delete-button');

    if (this._ownerId._id !== this._userId) {
      this._deleteButton.classList.remove('cards__delete-button_show');
    }
  }

  isLiked() {
    const userHasLikedCard = this._likes.find((user) => { return user._id === this._userId});
    return userHasLikedCard;
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    this._likesCountElement = this._cardElement.querySelector('.cards__count-likes');
    this._likesCountElement.textContent = this._likes.length;

    this._buttonLike = this._cardElement.querySelector('.cards__button');

    if (this.isLiked()) {
      this._buttonLike.classList.add('cards__button_like');
    } else {
      this._buttonLike.classList.remove('cards__button_like');
    }
  }

  createCard() {
    this._cardElement = this._template.cloneNode(true);
    this._pictureElement = this._cardElement.querySelector('.cards__picture');
    this._cardElement.querySelector('.cards__title').textContent = this._name;
    this._pictureElement.src = this._link;
    this._pictureElement.alt = this._name;

    this.setLikes(this._likes);
    this._getViewDeleteButton();
    this._addLiseners();
    return this._cardElement;
  }

  _addLiseners() {
    this._deleteButton.addEventListener('click', () => this._handleDeleteClick(this._id));
    this._buttonLike.addEventListener('click', () => this._handleLikeClick(this._id));
    this._pictureElement.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }
}
