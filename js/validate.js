const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
  console.log(errorElement);

  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__field-error_visible');
  inputElement.classList.add('form__input_error');
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);

  errorElement.textContent = '';
  errorElement.classList.remove('form__field-error_visible');
  inputElement.classList.remove('form__input_error');
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

const toggleButtonState = (inputList, submitButtonElement) => {
  const inputElements = Array.from(inputList);
  const hasInvalidInput = inputElements.some((inputElement) => {
    return !inputElement.validity.valid;
  });

  if(hasInvalidInput) {
    submitButtonElement.classList.add('button-save_disadled');
    submitButtonElement.setAttribute('disabled', true);
  }
  else {
    submitButtonElement.classList.remove('button-save_disadled');
    submitButtonElement.removeAttribute('disabled');
  };
};

const setEventListeners = (formElement) => {
  const inputList = formElement.querySelectorAll('.form__input');
  const submitButtonElement = formElement.querySelector('.button-save');

  toggleButtonState(inputList, submitButtonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkValidity(formElement, inputElement);
      toggleButtonState(inputList, submitButtonElement);
    });
  });
};

const enableValidation = () => {
  const formList = document.querySelectorAll('.popup__form');

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation();
