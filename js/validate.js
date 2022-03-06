const showError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);

  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add('input_error');
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);

  errorElement.textContent = '';
  inputElement.classList.remove('input_error');
};

const checkValidity = (formElement, inputElement) => {
  console.log(inputElement.validity);
  const InputNotValid = !inputElement.validity.valid;

  if(InputNotValid) {
    showError(formElement, inputElement);
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
    submitButtonElement.classList.add('.button-save:disabled');
    submitButtonElement.setAttribute('disabled', true);
  }
  else {
    submitButtonElement.classList.remove('.button-save:disabled');
    submitButtonElement.removeAttribute('disabled');
  };
};

const setEventListeners = (formElement) => {
  const inputList = formElement.querySelectorAll('.input');
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
      console.log(formElement.checkValidity());
    });

    setEventListeners(formElement);
  });
};

enableValidation();
