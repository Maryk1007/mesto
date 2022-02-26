// //переменные popupProfile//
// const formPopupProfile = popupProfile.querySelector('.popup__form');
// const nameInputProfile = popupProfile.querySelector('.input_field_name');
// const jobInputProfile = popupProfile.querySelector('.input_field_description');
// const buttonSavepopupProfile = popupProfile.querySelector('.button-save');
// const formErrorName = popupProfile.querySelector(`.${input.id}-error`);
// const formErrorJob = popupProfile.querySelector(`.${input.id}-error`);

// //переменные popupPhoto//
// const formPopupPhoto = popupPhoto.querySelector('.popup__form');
// const photoInputName = popupPhoto.querySelector('.input_field_title');
// const photoInputLink = popupPhoto.querySelector('.input_field_link');
// const buttonCreate = popupPhoto.querySelector('.button-save');

const formSubmit = (evt) => {
  evt.preventDefault();

  console.log('form submited is valid? ', formPopupProfile.checkValidity());
};

const checkInputValidity = (input) => {
const errorMessage = document.querySelector(`#error-${input.id}`);

  if(input.validity.valid) {
    errorMessage.textContent = '';
  }
  else {
    errorMessage.textContent = input.validationMessage;
  }
};


function enableValidationProfile() {
  const formPopupProfile = popupProfile.querySelector('.popup__form');

  formPopupProfile.addEventListener('submit', formSubmit);

  const inputsProfile = popupProfile.querySelectorAll('.input');

  inputsProfile.forEach((input) => {
    input.addEventListener('input', () => checkInputValidity(input));
  });

};

enableValidationProfile();


function enableValidationPhoto() {
  const formPopupPhoto = popupPhoto.querySelector('.popup__form');

  formPopupPhoto.addEventListener('submit', formSubmit);

  const inputsPhoto = popupPhoto.querySelectorAll('.input');

  inputsPhoto.forEach((input) => {
    input.addEventListener('input', () => checkInputValidity(input));
  });
};

enableValidationPhoto();


