import FormValidator from '../js/components/FormValidator.js';
import Card from '../js/components/Card.js';
import Section from '../js/components/Section.js';
import PopupWithImage from '../js/components/PopupWithImage.js';
import PopupWithForm from '../js/components/PopupWithForm.js';
import UserInfo from '../js/components/UserInfo.js';
import { cardItems, cardsContainer, buttonChange, buttonAddPhoto, formPopupPhoto, formPopupProfile, nameInputProfile, jobInputProfile } from '../js/constants.js';

import css from '../pages/index.css';


const validationElements = {
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button-save',
  inactiveButtonClass: 'button-save:disabled',
  inputErrorClass: 'form__input_error',
  errorClass: 'form__field-error_visible'
};


const popupWithImage = new PopupWithImage('.popup_fullview');
popupWithImage.setEventListeners();

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}



//экземпляры класса FormValidator//
const formProfileValidation = new FormValidator (validationElements, formPopupProfile)
const formAddPhotoValidation = new FormValidator (validationElements, formPopupPhoto)

formProfileValidation.enableValidation();
formAddPhotoValidation.enableValidation();

const newUserInfo = new UserInfo({userNameSelecror: '.profile__name', userJobSelector: '.profile__self-description'});


//получение карточки//

const cardList = new Section({
  data: cardItems,
  renderer: (cardItem) => {
    const card = new Card(cardItem, handleCardClick, '.item__template');
      const cardElement = card.createCard();

      cardList.addItem(cardElement);
  }
}, cardsContainer);

cardList.renderItems();


const popupAddPhoto = new PopupWithForm({
  popupSelector:'.popup_photo',
  handleFormSubmit: (data) => {
    const newCard = new Card(data, handleCardClick, '.item__template');
    const cardElement = newCard.createCard();
    cardList.addItem(cardElement);
  }
});

popupAddPhoto.setEventListeners();


const popupWithProfile = new PopupWithForm({
  popupSelector: '.popup_profile',
  handleFormSubmit: ( data ) => {
    newUserInfo.setUserInfo( data );
  }
});

popupWithProfile.setEventListeners();

buttonChange.addEventListener('click', () => {
  formProfileValidation.resetErrors();
  const userInfo = newUserInfo.getUserInfo();
  nameInputProfile.value = userInfo.user;
  jobInputProfile.value = userInfo.info;
  popupWithProfile.open();
});

buttonAddPhoto.addEventListener('click', () => {
  formAddPhotoValidation.resetErrors();
  popupAddPhoto.open();
});
