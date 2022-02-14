//переменные для PopupProfile//
const buttonChange = document.querySelector('.profile__button-change');
const popupProfile = document.querySelector('.popupProfile')
const buttonClosePopupProfile = document.querySelector('.popupProfile__button-close');
const formPopupProfile = document.querySelector('.popupProfile__form');
const nameInputProfile = document.querySelector('.popupProfile__info_field_name');
const jobInputProfile = document.querySelector('.popupProfile__info_field_description');
const profileName = document.querySelector('.profile__name');
const profileSelfDescription = document.querySelector('.profile__self-description');
const buttonSavepopupProfile = document.querySelector('.popupProfile__button-save');

// переменные для popupPhoto//
const buttonAddPhoto = document.querySelector('.profile__button-addphoto');
const popupPhoto = document.querySelector('.popupPhoto')
const buttonClosePopupPhoto = document.querySelector('.popupPhoto__button-close');
const buttonCreate = document.querySelector('.popupPhoto__button-save');
const photoInputName = document.querySelector('.popupPhoto__info_field_name');
const photoInputLink = document.querySelector('.popupPhoto__info_field_link');
const formPopupPhoto = document.querySelector('.popupPhoto__form');

//  переменные для PopupFullview//
const buttonClosePopupFullview = document.querySelector('.popupFullview__button-close');
const popupFullview = document.querySelector('.popupFullview');
const picture = document.querySelectorAll('.cards');
const fullviewPicture = document.querySelector('.popupFullview__picture');
const captionPicture = document.querySelector('.popupFullview__caption');

//функции открытия и закрытия попапа//
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

buttonChange.addEventListener('click', () => {
  nameInputProfile.value = profileName.textContent;
  jobInputProfile.value = profileSelfDescription.textContent;
  openPopup(popupProfile);
});


function closePopup(popup) {
  popup.classList.remove('popup_opened')
};

buttonClosePopupProfile.addEventListener('click', () => {
  closePopup(popupProfile);
});

//функция редактирования попапа//
function formSubmit(evt) {

  evt.preventDefault();

  profileName.textContent = nameInputProfile.value;
  profileSelfDescription.textContent = jobInputProfile.value;

  closePopup();
};

formPopupProfile.addEventListener('submit', formSubmit);


//функции открытия и закрытия попапа с фото//
buttonAddPhoto.addEventListener('click', () => {
  openPopup(popupPhoto);
});

buttonClosePopupPhoto.addEventListener( 'click', () => {
  closePopup(popupPhoto);
});


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
  const newItem = template.cloneNode(true);
  newItem.querySelector('.cards__title').textContent = item.name;
  newItem.querySelector('.cards__picture').src = item.link;
  newItem.querySelector('.cards__picture').alt = item.name;

  addLiseners(newItem);

  list.prepend(newItem);
}

//функции удаления и like//
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
  popupFullview.classList.add('popupFullview_opened');
  fullviewPicture.src = evt.target.src;
  fullviewPicture.alt = evt.target.alt;
  captionPicture.textContent = evt.target.alt;
}

function fullviewCardClose() {
  popupFullview.classList.remove('popupFullview_opened');
}

buttonClosePopupFullview.addEventListener('click', fullviewCardClose);


//функция добавления новой карточки//
function createNewCard() {
  renderItem({
    'name': photoInputName.value,
    'link': photoInputLink.value
  });
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
  closeAddPhoto();
  clearInput();
});

render();

