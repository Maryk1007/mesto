const buttonChange = document.querySelector('.profile__button-change');
const popup = document.querySelector('.popup')
const popupOpen = document.querySelector('.popup_opened');
const buttonClose = document.querySelector('.popup__button-close');

const formPopup = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__info_field_name');
const jobInput = document.querySelector('.popup__info_field_description');
const profileName = document.querySelector('.profile__name');
const profileSelfDescription = document.querySelector('.profile__self-description');
const popupButtonSave = document.querySelector('.popup__button-save');

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



const cardItems = [
  {
    name: 'Тбилиси',
    link: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2VvcmdpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Тбилисский театр марионеток',
    link: 'https://images.unsplash.com/photo-1584097774573-1c3cc28b2aef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdlb3JnaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Жинвальское водохранилище',
    link: 'https://images.unsplash.com/photo-1607068798195-d26a9703b277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2VvcmdpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Монастырь Джвари',
    link: 'https://images.unsplash.com/photo-1581169837556-3bd4c2b14e62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGdlb3JnaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Арка дружбы народов',
    link: 'https://images.unsplash.com/photo-1549466785-f5c1771646cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2VvcmdpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Гора Казбек',
    link: 'https://images.unsplash.com/photo-1563284223-333497472e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
  }
];


const template = document.querySelector('.item__template').content;
const list = document.querySelector('.images__list');

cardItems.forEach( (item) => {
  const newItem = template.cloneNode(true);
  newItem.querySelector('.cards__title').textContent = item.name;
  newItem.querySelector('.cards__picture').src = item.link;

  list.prepend(newItem);
});


const buttonAddPhoto = document.querySelector('.profile__button-addphoto');
