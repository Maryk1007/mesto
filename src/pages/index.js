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
        allButtonsSubmit,
        buttonSavePhoto,
        buttonSaveProfile,
        buttonSaveAvatar,
        buttonDeletePhoto
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


Promise.all([api.getProfile(), api.getCardItems()])
  .then(([data, cardsList]) => {
    newUserInfo.setUserInfo(data);
    newUserInfo.setUserAvatar(data);
    userId = data._id;

    cardsList.forEach((cardElement) => {
      createCard(cardElement);
      cardList.addItem(createCard(cardElement))
    })

  })
  .catch(err => {
    console.log(`${err}`)
  });


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
      .catch((err) => {
        console.log(`${err}`)
      })
  } else {
    api.addLike(card._id)
    .then(res => {
      card.setLikes(res.likes);
    })
    .catch((err) => {
      console.log(`${err}`)
    })
  }
}

const popupConfirmDelete = new PopupWithForm({popupSelector: '.popup_confirm-delete'});

function handleDeleteClick(card) {
  popupConfirmDelete.open()
  popupConfirmDelete.changeFormSubmit((id) => {
    api.deleteCard(card._id)
    .then(res => {
      card.deleteCard();
      popupConfirmDelete.close();
    })
    .catch((err) => {
      console.log(`${err}`);
    })
    .finally(() => {
      buttonDeletePhoto.textContent = 'Да'
    })
  })
}

popupConfirmDelete.setEventListeners();


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
      .then(res => {
        cardList.addItem(createCard(res));
        popupAddPhoto.close();
      })
      .catch((err) => {
        console.log(`${err}`)
      })
      .finally(() => {
        buttonSavePhoto.textContent = 'Создать'})
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
        popupWithProfile.close();
      })
      .catch((err) => {
        console.log(`${err}`)
      })
      .finally(() => {
        buttonSaveProfile.textContent = 'Сохранить'})
  }
});

popupWithProfile.setEventListeners();

const popupAvatar = new PopupWithForm ({
  popupSelector: '.popup_edit-avatar',
  handleFormSubmit: ( data ) => {
    renderLoading(true);
    api.editAvatar(data.avatar)
      .then(res => {
        newUserInfo.setUserAvatar(data);
        popupAvatar.close()
      })
      .catch((err) => {
        console.log(`${err}`)
      })
      .finally(() => {
        buttonSaveAvatar.textContent = 'Сохранить'})
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
