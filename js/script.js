let cardsButton = document.querySelectorAll('.cards__button');
let cardsButtonLike = document.querySelector('.cards__button_like');

for (let i = 0; i < cardsButton.length; ++i ) {
  cardsButton[i].addEventListener('click', function(evt) {
    this.classList.toggle('cards__button_like');
  });
};
