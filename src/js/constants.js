export const validationElements = {
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button-save',
  inactiveButtonClass: 'button-save:disabled',
  inputErrorClass: 'form__input_error',
  errorClass: 'form__field-error_visible'
};

export const cardItems = [
  {
    'photoName': 'Гора Казбек',
    'photoLink': 'https://images.unsplash.com/photo-1563284223-333497472e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
  },
  {
    'photoName': 'Арка дружбы народов',
    'photoLink': 'https://images.unsplash.com/photo-1549466785-f5c1771646cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2VvcmdpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    'photoName': 'Жинвальское водохранилище',
    'photoLink': 'https://images.unsplash.com/photo-1607068798195-d26a9703b277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2VvcmdpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    'photoName': 'Монастырь Джвари',
    'photoLink': 'https://images.unsplash.com/photo-1581169837556-3bd4c2b14e62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGdlb3JnaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  },
  {
    'photoName': 'Тбилисский театр марионеток',
    'photoLink': 'https://images.unsplash.com/photo-1584097774573-1c3cc28b2aef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdlb3JnaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  },
  {
    'photoName': 'Тбилиси',
    'photoLink': 'https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2VvcmdpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  }
];

export const cardsContainer = '.images__list';
export const buttonChange = document.querySelector('.profile__button-change');
export const buttonAddPhoto = document.querySelector('.profile__button-addphoto');


const popupPhoto = document.querySelector('.popup_photo');
export const formPopupPhoto = popupPhoto.querySelector('.popup__form');


const popupProfile = document.querySelector('.popup_profile');
export const formPopupProfile = popupProfile.querySelector('.popup__form');
export const nameInputProfile = popupProfile.querySelector('.form__input_field_name');
export const jobInputProfile = popupProfile.querySelector('.form__input_field_description');

