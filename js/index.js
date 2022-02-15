//переменные для PopupProfile//
const buttonChange = document.querySelector('.profile__button-change');
const popupProfile = document.querySelector('.popup_profile')
const buttonClosePopupProfile = popupProfile.querySelector('.button-close');
const formPopupProfile = popupProfile.querySelector('.popup__form');
const nameInputProfile = popupProfile.querySelector('.input_field_name');
const jobInputProfile = popupProfile.querySelector('.input_field_description');
const profileName = document.querySelector('.profile__name');
const profileSelfDescription = document.querySelector('.profile__self-description');
const buttonSavepopupProfile = popupProfile.querySelector('.button-save');

//переменные для popupPhoto//
const buttonAddPhoto = document.querySelector('.profile__button-addphoto');
const popupPhoto = document.querySelector('.popup_photo')
const buttonClosePopupPhoto = popupPhoto.querySelector('.button-close');
const buttonCreate = popupPhoto.querySelector('.button-save');
const photoInputName = popupPhoto.querySelector('.input_field_title');
const photoInputLink = popupPhoto.querySelector('.input_field_link');
const formPopupPhoto = popupPhoto.querySelector('.popup__form');

//переменные для PopupFullview//
const popupFullview = document.querySelector('.popup_fullview');
const buttonClosePopupFullview = popupFullview.querySelector('.button-close');
const picture = document.querySelectorAll('.cards');
const fullviewPicture = popupFullview.querySelector('.popupfullview__picture');
const captionPicture = popupFullview.querySelector('.popupfullview__caption');


//функции открытия и закрытия попапов//
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened')
};


//обработчики открытия и закрытия попапов//
buttonChange.addEventListener('click', () => {
  nameInputProfile.value = profileName.textContent;
  jobInputProfile.value = profileSelfDescription.textContent;
  openPopup(popupProfile);
});

buttonClosePopupProfile.addEventListener('click', () => {
  closePopup(popupProfile);
});

buttonAddPhoto.addEventListener('click', () => {
  openPopup(popupPhoto);
});

buttonClosePopupPhoto.addEventListener( 'click', () => {
  closePopup(popupPhoto);
});

buttonClosePopupFullview.addEventListener('click', () => {
  closePopup(popupFullview);
});


//функция редактирования попапа//
function formSubmit(evt) {

  evt.preventDefault();

  profileName.textContent = nameInputProfile.value;
  profileSelfDescription.textContent = jobInputProfile.value;

  closePopup(popupProfile);
};

formPopupProfile.addEventListener('submit', formSubmit);


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

//цикл для перебора массива//
const template = document.querySelector('.item__template').content;
const list = document.querySelector('.images__list');

function render() {
  cardItems.forEach(renderItem);
}
//функция добавления элемента массива в карточку//
function renderItem(item) {
  const cardElement = template.cloneNode(true);
  cardElement.querySelector('.cards__title').textContent = item.name;
  cardElement.querySelector('.cards__picture').src = item.link;
  cardElement.querySelector('.cards__picture').alt = item.name;

  addLiseners(cardElement);

  list.prepend(cardElement);
}


//функции удаления, like, окна fullview//
function addLiseners(el) {
  el.querySelector('.cards__delete-button').addEventListener('click', deleteCard);
  el.querySelector('.cards__button').addEventListener('click', likeCard);
  el.querySelector('.cards__picture').addEventListener('click', fullviewCardOpen);
}

function deleteCard(evt) {
  evt.target.closest('.cards').remove();
}

function likeCard(evt) {
  evt.target.closest('.cards__button').classList.toggle('cards__button_like');
}

function fullviewCardOpen(evt) {
  fullviewPicture.src = evt.target.src;
  fullviewPicture.alt = evt.target.alt;
  captionPicture.textContent = evt.target.alt;

  openPopup(popupFullview);
}


//функция добавления новой карточки//
function createNewCard() {
    const newItem = renderItem({
    'name': photoInputName.value,
    'link': photoInputLink.value
  }); return newItem;
};


//функция очищения попапа после закрытия//
function clearInput() {
  photoInputLink.value = '';
  photoInputName.value = '';
}
//вызов функций попапа//
formPopupPhoto.addEventListener( 'submit', (evt) => {
  evt.preventDefault();

  createNewCard();
  closePopup(popupPhoto);
  clearInput();
});

render();
