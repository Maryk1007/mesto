export const popupFullview = document.querySelector('.popup_fullview');
export const fullviewPicture = popupFullview.querySelector('.popupfullview__picture');
export const captionPicture = popupFullview.querySelector('.popupfullview__caption');


export function openPopup(popup) {
  popup.classList.add('popup_opened');

  popup.addEventListener('click', closePopupOverlay);
  document.addEventListener('keydown', closePopupEsc);
};

export function closePopup(popup) {
  popup.classList.remove('popup_opened');

  popup.removeEventListener('click', closePopupOverlay);
  document.removeEventListener('keydown', closePopupEsc);
};



export const closePopupOverlay = (evt) => {

  if ((evt.target.classList.contains('popup')) || (evt.target.classList.contains('button-close'))) {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};

export const closePopupEsc = (evt) => {

  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};
