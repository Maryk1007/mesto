import Section from '../js/components/Section.js';
import Popup from '../js/components/Popup.js'
import { FormValidator } from '../js/components/FormValidator.js';
import { Card } from '../js/components/Card.js';
import { openPopup, closePopup, closePopupOverlay, closePopupEsc} from '../js/utils.js'
import { cardItems, popupFullview, popupPhoto, popupProfile, fullviewPicture, captionPicture, cardsContainer } from '../js/constants.js';

import css from '../pages/index.css';


//переменные для PopupProfile//
const buttonChange = document.querySelector('.profile__button-change');

const buttonClosePopupProfile = popupProfile.querySelector('.button-close');
const formPopupProfile = popupProfile.querySelector('.popup__form');
const nameInputProfile = popupProfile.querySelector('.form__input_field_name');
const jobInputProfile = popupProfile.querySelector('.form__input_field_description');
const profileName = document.querySelector('.profile__name');
const profileSelfDescription = document.querySelector('.profile__self-description');
const buttonSavepopupProfile = popupProfile.querySelector('.button-save');


//переменные для popupPhoto//
const buttonAddPhoto = document.querySelector('.profile__button-addphoto');

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

// const popupWithProfile = new Popup (popupProfile);
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


//получение карточки//

const cardList = new Section({
  data: cardItems,
  renderer: (cardItem) => {
    const card = new Card(cardItem, '.item__template');
      const cardElement = card.createCard();

      cardList.addItem(cardElement);
  }
}, cardsContainer);

cardList.renderItems();


//функция добавления новой карточки//
function createNewCard() {
  const newCard = new Card({
    'name': photoInputName.value,
    'link': photoInputLink.value
  }, '.item__template');

  const newCardElement = newCard.createCard();
  const cardRenderer = new Section({ data: []}, cardsContainer);
  cardRenderer.addItem(newCardElement);
};






//вызов функций попапа//
formPopupPhoto.addEventListener( 'submit', (evt) => {
  evt.preventDefault();

  createNewCard();
  closePopup(popupPhoto);
  evt.target.reset();
});

