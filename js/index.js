import { FormValidator } from './FormValidator.js'
import { Card } from './Card.js';
import {fullviewPicture, captionPicture, popupFullview, openPopup, closePopup, closePopupOverlay, closePopupEsc} from './utils.js'


//массив с карточками//
const cardItems = [
  {
    'name': 'Гора Казбек',
    'link': 'https://images.unsplash.com/photo-1563284223-333497472e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
  },
  {
    'name': 'Арка дружбы народов',
    'link': 'https://images.unsplash.com/photo-1549466785-f5c1771646cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2VvcmdpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    'name': 'Жинвальское водохранилище',
    'link': 'https://images.unsplash.com/photo-1607068798195-d26a9703b277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2VvcmdpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    'name': 'Монастырь Джвари',
    'link': 'https://images.unsplash.com/photo-1581169837556-3bd4c2b14e62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGdlb3JnaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  },
  {
    'name': 'Тбилисский театр марионеток',
    'link': 'https://images.unsplash.com/photo-1584097774573-1c3cc28b2aef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdlb3JnaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  },
  {
    'name': 'Тбилиси',
    'link': 'https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2VvcmdpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  }
];


//переменные для PopupProfile//
const buttonChange = document.querySelector('.profile__button-change');
const popupProfile = document.querySelector('.popup_profile');
const buttonClosePopupProfile = popupProfile.querySelector('.button-close');
const formPopupProfile = popupProfile.querySelector('.popup__form');
const nameInputProfile = popupProfile.querySelector('.form__input_field_name');
const jobInputProfile = popupProfile.querySelector('.form__input_field_description');
const profileName = document.querySelector('.profile__name');
const profileSelfDescription = document.querySelector('.profile__self-description');
const buttonSavepopupProfile = popupProfile.querySelector('.button-save');


//переменные для popupPhoto//
const buttonAddPhoto = document.querySelector('.profile__button-addphoto');
const popupPhoto = document.querySelector('.popup_photo');
const buttonClosePopupPhoto = popupPhoto.querySelector('.button-close');
const buttonCreate = popupPhoto.querySelector('.button-save');
const photoInputName = popupPhoto.querySelector('.form__input_field_title');
const photoInputLink = popupPhoto.querySelector('.form__input_field_link');
const formPopupPhoto = popupPhoto.querySelector('.popup__form');


//переменные для PopupFullview//
const buttonClosePopupFullview = popupFullview.querySelector('.button-close');
const picture = document.querySelectorAll('.cards');

const validationElements = {
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button-save',
  inactiveButtonClass: 'button-save:disabled',
  inputErrorClass: 'form__input_error',
  errorClass: 'form__field-error_visible'
};


//экземпляры класса FormValidator//
const formProfileValidation = new FormValidator (validationElements, formPopupProfile)
const formAddPhotoValidation = new FormValidator (validationElements, formPopupPhoto)

formProfileValidation.enableValidation();
formAddPhotoValidation.enableValidation();


//обработчики открытия попапов//
buttonChange.addEventListener('click', () => {
  formProfileValidation.resetErrors();
  nameInputProfile.value = profileName.textContent;
  jobInputProfile.value = profileSelfDescription.textContent;
  openPopup(popupProfile);
});

buttonAddPhoto.addEventListener('click', () => {
  formAddPhotoValidation.resetErrors();
  openPopup(popupPhoto);
});


//функция редактирования попапа//
function editProfile(evt) {
  evt.preventDefault();

  profileName.textContent = nameInputProfile.value;
  profileSelfDescription.textContent = jobInputProfile.value;

  closePopup(popupProfile);
};

formPopupProfile.addEventListener('submit', editProfile);


//цикл для перебора массива//
const cardsContainer = document.querySelector('.images__list');

function render() {
  cardItems.forEach((data) => {
    const card = new Card(data, '.item__template');
    const cardElement = card.createCard();

    cardsContainer.prepend(cardElement);
  });
}


//функция добавления новой карточки//
function createNewCard() {
  const newCard = new Card({
    'name': photoInputName.value,
    'link': photoInputLink.value
  }, '.item__template');

  const newCardElement = newCard.createCard()
  list.prepend(newCardElement);
};


//вызов функций попапа//
formPopupPhoto.addEventListener( 'submit', (evt) => {
  evt.preventDefault();

  createNewCard();
  closePopup(popupPhoto);
  evt.target.reset();
});

render();
