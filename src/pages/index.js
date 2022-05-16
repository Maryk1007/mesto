import FormValidator from '../js/components/FormValidator.js';
import Card from '../js/components/Card.js';
import Section from '../js/components/Section.js';
import PopupWithSubmit from '../js/components/PopupWithSubmit'
import PopupWithImage from '../js/components/PopupWithImage.js';
import PopupWithForm from '../js/components/PopupWithForm.js';
import UserInfo from '../js/components/UserInfo.js';
import Api from '../js/components/Api.js';
import { validationElements,
        cardsContainer,
        buttonChange,
        buttonAddPhoto,
        formPopupPhoto,
        formPopupProfile,
        nameInputProfile,
        jobInputProfile,
        url,
        token,
        buttonEditProfile,
        formPopupEditAvatar,
        formDeletePhoto
      } from '../js/constants.js';

import css from '../pages/index.css';

const api = new Api({
  baseUrl: url,
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
});

let userId;

api.getProfile()
  .then(res => {
    newUserInfo.setUserInfo(res);
    userId = res._id;
});

api.getCardItems()
  .then(cardsList => {
    cardsList.forEach((cardElement) => {
      // console.log(cardElement);
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

const popupConfirmDelete = new PopupWithSubmit('.popup_confirm-delete');
popupConfirmDelete.setEventListeners();

function handleDeleteClick(card) {
  popupConfirmDelete.changeSubmitHandler(() => {
    api.deleteCard(card._id)
      .then(res => {
        card.deleteCard();
        popupConfirmDelete.close();
      })
      .catch((err) => {
        console.log(`${err}`);
    });
  })
  popupConfirmDelete.open();
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
  const card = new Card(cardItem,
    handleCardClick, {
      handleLikeClick: () => {},
      handleDeleteClick: () => {handleDeleteClick(card)}
    },
    userId,
     '.item__template');
  return card.createCard();
};

const cardList = new Section({
  data: [],
  renderer: (cardItem) => {
    cardList.addItem(createCard(cardItem));
  }
}, cardsContainer);

cardList.renderItems();


//попап с новыми фото//
const popupAddPhoto = new PopupWithForm({
  popupSelector:'.popup_photo',
  handleFormSubmit: (cardItem) => {
    api.addCards(cardItem.name, cardItem.link)
      .then(res => {cardList.addItem(createCard(cardItem))})
  }
});

popupAddPhoto.setEventListeners();


//попап с данными профиля//
const popupWithProfile = new PopupWithForm({
  popupSelector: '.popup_profile',
  handleFormSubmit: ( data ) => {
    api.editProfile(data.name, data.about)
      .then(res => {
        newUserInfo.setUserInfo( data );
      })
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


