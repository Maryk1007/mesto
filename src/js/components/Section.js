// import { cardsContainer } from '../constants.js'
import { Card } from './Card.js'

export default class Section {
  constructor({ data }, containerSelector) {
    this._initialArray = data;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._initialArray.forEach((data) => {
      const card = new Card(data, '.item__template');
      const cardElement = card.createCard();

      this.addItem(cardElement);
      // cardsContainer.prepend(cardElement);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }

}
