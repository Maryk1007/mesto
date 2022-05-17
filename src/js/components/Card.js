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

  _likeCard() {
    this._buttonLike = this._cardElement.querySelector('.cards__button');
    this._buttonLike.classList.add('cards__button_like');
  }

  _dislikeCard() {
    this._buttonLike = this._cardElement.querySelector('.cards__button');
    this._buttonLike.classList.remove('cards__button_like');
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    this._likesCountElement = this._cardElement.querySelector('.cards__count-likes');
    this._likesCountElement.textContent = this._likes.length;

    if (this.isLiked()) {
      this._likeCard();
    } else {
      this._dislikeCard();
    }
  }

  createCard() {
    this._cardElement = this._template.cloneNode(true);
    this._pictureElement = this._cardElement.querySelector('.cards__picture');
    this._cardElement.querySelector('.cards__title').textContent = this._name;
    this._pictureElement.src = this._link;
    this._pictureElement.alt = this._name;

    if (!this._likes) {
      this._likes = [];
      console.log(this._likes);
    }

    if (!this._ownerId) {
      this._ownerId = {
        _id: this._userId
      }
    }

    this.setLikes(this._likes);
    this._getViewDeleteButton();
    this._addLiseners(this._cardElement);
    return this._cardElement;
  }

  _addLiseners(el) {
    this._deleteButton.addEventListener('click', () => this._handleDeleteClick(this._id));
    el.querySelector('.cards__button').addEventListener('click', () => this._handleLikeClick(this._id));
    this._pictureElement.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }
}
