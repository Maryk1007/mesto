// import { cardsContainer } from '../constants.js'
import { Card } from './Card.js'

export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._initialArray = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._initialArray.forEach(item => this._renderer(item));
  }

  addItem(element) {
    this._container.prepend(element);
  }

}
