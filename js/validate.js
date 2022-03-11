const validationElements = {
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button-save',
  inactiveButtonClass: 'button-save:disabled',
  inputErrorClass: 'form__input_error',
  errorClass: 'form__field-error_visible'
};


const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
  console.log(errorElement);

  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationElements.errorClass);
  inputElement.classList.add(validationElements.inputErrorClass);
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);

  errorElement.textContent = '';
  errorElement.classList.remove(validationElements.errorClass);
  inputElement.classList.remove(validationElements.inputErrorClass);
};

const checkValidity = (formElement, inputElement) => {
  const InputNotValid = !inputElement.validity.valid;

  if(InputNotValid) {
    errorMessage = inputElement.validationMessage;
    showError(formElement, inputElement, errorMessage);
  }
  else {
    hideError(formElement, inputElement);
  };
};

const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, submitButtonElement) => {

  if(hasInvalidInput(inputList)) {
    submitButtonElement.classList.add(validationElements.inactiveButtonClass);
    submitButtonElement.setAttribute('disabled', true);
  }
  else {
    submitButtonElement.classList.remove(validationElements.inactiveButtonClass);
    submitButtonElement.removeAttribute('disabled');
  };
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validationElements.inputSelector));
  const submitButtonElement = formElement.querySelector(validationElements.submitButtonSelector);

  toggleButtonState(inputList, submitButtonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkValidity(formElement, inputElement);
      toggleButtonState(inputList, submitButtonElement);
    });
  });
};

const enableValidation = () => {
  const formList = document.querySelectorAll(validationElements.formSelector);

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation();
