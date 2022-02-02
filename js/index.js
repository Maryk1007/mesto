let buttonChange = document.querySelector('.profile__button-change');
let popup = document.querySelector('.popup')
let popupOpen = document.querySelector('.popup_opened');
let buttonClose = document.querySelector('.popup__button-close');

let formPopup = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__info_name');
let jobInput = document.querySelector('.popup__info_description');
let profileName = document.querySelector('.profile__name');
let profileSelfDescription = document.querySelector('.profile__self-description');
let popupButtonSave = document.querySelector('.popup__button-save');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileSelfDescription.textContent;
};

buttonChange.addEventListener('click', openPopup);


function closePopup() {
  popup.classList.remove('popup_opened')
};

buttonClose.addEventListener('click', closePopup);

function formSubmit(evt) {

  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileSelfDescription.textContent = jobInput.value;

  closePopup();
};

formPopup.addEventListener('submit', formSubmit);
