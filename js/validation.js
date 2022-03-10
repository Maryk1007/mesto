const validationElements = {
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button-save',
  inactiveButtonClass: 'button-save_disabled',
  inputErrorClass: 'form__input_error',
  errorClass: 'form__field-error_visible'
};


const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
  console.log(formElement);

  errorElement.textContent = errorMessage;
  // errorElement.classList.add(validationElements.errorClass);
  // inputElement.classList.add(validationElements.inputErrorClass);
};


const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);

  // errorElement.textContent = '';
  // errorElement.classList.remove(validationElements.errorClass);
  // inputElement.classList.remove(validationElements.inputErrorClass);
};


const checkValidity = (formElement, inputElement) => {
  const isInputNotValid = !inputElement.validity.valid;

  if (isInputNotValid) {
    const errorMessage = inputElement.validationMessage;

    showError(formElement, inputElement, errorMessage);

  } else {

    hideError(formElement, inputElement);

  }
};


const setEventListeners = (formElement) => {
  const inputList = document.querySelectorAll(validationElements.inputSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', (evt) => {
      // console.log(evt.target.name, evt.target.value);
      checkValidity(formElement, inputElement);
    });
  });
};


const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  formList.forEach((formElement) => {
    // console.log(formElement);
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      // console.log(formElement.checkValidity());
    });

    setEventListeners(formElement);
  });
};

enableValidation();
