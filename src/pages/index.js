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
        formPopupAvatar,
        avatar,
        allButtonsSubmit
      } from '../js/constants.js';

import css from '../pages/index.css';


function renderLoading(isLoading) {
  if(isLoading) {
    Array.from(allButtonsSubmit).forEach((submit) => {
      submit.textContent = 'Сохранение...';
    })
  } else {
    submit.textContent = 'Сохранить';
  }
}

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
      createCard(cardElement);

      cardList.addItem(createCard(cardElement))
    })

  })

//функции слушателей//
const popupWithImage = new PopupWithImage('.popup_fullview');
popupWithImage.setEventListeners();

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}


function handleLikeClick(card) {
  if(card.isLiked()) {
    api.deleteLike(card._id)
      .then(res => {
        card.setLikes(res.likes);
      })
  } else {
    api.addLike(card._id)
    .then(res => {
      card.setLikes(res.likes);
    })
  }
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
const formAvatarValidation = new FormValidator (validationElements, formPopupAvatar)

formProfileValidation.enableValidation();
formAddPhotoValidation.enableValidation();
formAvatarValidation.enableValidation();


//экземпляр класса UserInfo//
const newUserInfo = new UserInfo({
  userNameSelecror: '.profile__name',
  userJobSelector: '.profile__self-description',
  userAvatarSelector: '.profile__picture'
});


//получение карточек//
function createCard(cardItem) {
  const card = new Card(cardItem,
    handleCardClick, {
      handleLikeClick: () => {handleLikeClick(card)},
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
    renderLoading(true);
    api.addCards(cardItem.name, cardItem.link)
      .then(res => {cardList.addItem(createCard(cardItem))})
  }
});

popupAddPhoto.setEventListeners();


//попап с данными профиля//
const popupWithProfile = new PopupWithForm({
  popupSelector: '.popup_profile',
  handleFormSubmit: ( data ) => {
    renderLoading(true);
    api.editProfile(data.name, data.about)
      .then(res => {
        newUserInfo.setUserInfo( data );
      })
  }
});

popupWithProfile.setEventListeners();

const popupAvatar = new PopupWithForm ({
  popupSelector: '.popup_edit-avatar',
  handleFormSubmit: ( data ) => {
    renderLoading(true);
    api.editAvatar(data.avatar)
      .then(res => {
        avatar.src = `${res.avatar}`
      })
  }
})

popupAvatar.setEventListeners();


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


buttonEditProfile.addEventListener('click', () => {
  formAvatarValidation.resetErrors();
  popupAvatar.open();
})
