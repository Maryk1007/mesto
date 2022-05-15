import FormValidator from '../js/components/FormValidator.js';
import Card from '../js/components/Card.js';
import Section from '../js/components/Section.js';
import PopupWithImage from '../js/components/PopupWithImage.js';
import PopupWithForm from '../js/components/PopupWithForm.js';
import UserInfo from '../js/components/UserInfo.js';
import Api from '../js/components/Api.js';
import { validationElements,
        cardItems,
        cardsContainer,
        buttonChange,
        buttonAddPhoto,
        formPopupPhoto,
        formPopupProfile,
        nameInputProfile,
        jobInputProfile,
        url,
        token
      } from '../js/constants.js';

import css from '../pages/index.css';

const api = new Api({
  baseUrl: url,
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
});

api.getProfile()
  .then(res => {
    newUserInfo.setUserInfo(res);
    console.log(res);
});

api.getCardItems()
  .then(cardsList => {
    cardsList.forEach((cardElement) => {
      createCard(cardElement);

      cardList.addItem(createCard(cardElement))
    })

  })

//экземпляр класса PopupWithImage//
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


//экземпляр класса UserInfo//
const newUserInfo = new UserInfo({userNameSelecror: '.profile__name', userJobSelector: '.profile__self-description'});


//получение карточек//

function createCard(cardItem) {
  const card = new Card(cardItem, handleCardClick, '.item__template');
  return card.createCard();
};

const cardList = new Section({
  data: cardItems,
  renderer: (cardItem) => {
    cardList.addItem(createCard(cardItem));
  }
}, cardsContainer);

cardList.renderItems();


//попап с новыми фото//
const popupAddPhoto = new PopupWithForm({
  popupSelector:'.popup_photo',
  handleFormSubmit: (cardItem) => {
    cardList.addItem(createCard(cardItem));
  }
});

popupAddPhoto.setEventListeners();


//попап с данными профиля//
const popupWithProfile = new PopupWithForm({
  popupSelector: '.popup_profile',
  handleFormSubmit: ( data ) => {
    newUserInfo.setUserInfo( data );
  }
});

popupWithProfile.setEventListeners();


//открытие попапа с данными профиля//
buttonChange.addEventListener('click', () => {
  const userInfo = newUserInfo.getUserInfo();
  nameInputProfile.value = userInfo.name;
  jobInputProfile.value = userInfo.about;
  formProfileValidation.resetErrors();
  popupWithProfile.open();
});


//открытие попапа для добавления новых фото//
buttonAddPhoto.addEventListener('click', () => {
  formAddPhotoValidation.resetErrors();
  popupAddPhoto.open();
});
