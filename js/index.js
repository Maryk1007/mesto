let cardsButton = document.querySelectorAll('.cards__button');
let cardsButtonLike = document.querySelector('.cards__button_like');

for (let i = 0; i < cardsButton.length; ++i ) {
  cardsButton[i].addEventListener('click', function(evt) {
    this.classList.toggle('cards__button_like');
  });
};


let buttonChange = document.querySelector('.profile__button-change');
let popup = document.querySelector('.popup')
let popupOpen = document.querySelector('.popup_opened');
let buttonClose = document.querySelector('.popup__button-close');

function openPopup() {
  popup.classList.add('popup_opened')
};

buttonChange.addEventListener('click', openPopup);


function closePopup() {
  popup.classList.remove('popup_opened')
};

buttonClose.addEventListener('click', closePopup);

let formPopup = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__description');
let profileName = document.querySelector('.profile__name');
let profileSelfDescription = document.querySelector('.profile__self-description');
let popupButtonSave = document.querySelector('.popup__button-save');

function formSubmit(evt) {

  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileSelfDescription.textContent = jobInput.value;

  popupButtonSave.addEventListener('click', closePopup);
};

formPopup.addEventListener('submit', formSubmit);
