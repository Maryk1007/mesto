export const validationElements = {
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button-save',
  inactiveButtonClass: 'button-save:disabled',
  inputErrorClass: 'form__input_error',
  errorClass: 'form__field-error_visible'
};

export const url = 'https://mesto.nomoreparties.co/v1/cohort-40';
export const token = '727072e6-c5f4-4d87-823d-11ff5d188e34';

export const cardsContainer = '.images__list';
export const buttonChange = document.querySelector('.profile__button-change');
export const buttonAddPhoto = document.querySelector('.profile__button-addphoto');
export const buttonEditProfile = document.querySelector('.profile__edit-avatar');


const popupPhoto = document.querySelector('.popup_photo');
export const formPopupPhoto = popupPhoto.querySelector('.popup__form');
export const buttonSavePhoto = popupPhoto.querySelector('.button-save');


const popupProfile = document.querySelector('.popup_profile');
export const formPopupProfile = popupProfile.querySelector('.popup__form');
export const nameInputProfile = popupProfile.querySelector('.form__input_field_name');
export const jobInputProfile = popupProfile.querySelector('.form__input_field_description');
export const buttonSaveProfile = popupProfile.querySelector('.button-save');

const popupAvatar = document.querySelector('.popup_edit-avatar');
export const formPopupAvatar = popupAvatar.querySelector('.popup__form');
export const avatar = document.querySelector('.profile__picture');
export const buttonSaveAvatar = popupAvatar.querySelector('.button-save');

const popupConfirmDeletePhoto = document.querySelector('.popup_confirm-delete');
export const formDeletePhoto = popupConfirmDeletePhoto.querySelector('.popup__form');
export const buttonDeletePhoto = popupConfirmDeletePhoto.querySelector('.button-save');

export const allButtonsSubmit = document.querySelectorAll('.button-save');
