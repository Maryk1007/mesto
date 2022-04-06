export class FormValidator {
  constructor (settings, form) {
    this._form = form
    this._settings = settings
  }

  _showError (inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`#error-${inputElement.id}`);
    const {inputErrorClass, errorClass} = this._settings

    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
    inputElement.classList.add(inputErrorClass);
  };

  _hideError (inputElement) {
    const errorElement = this._form.querySelector(`#error-${inputElement.id}`);
    const {inputErrorClass, errorClass} = this._settings

    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
    inputElement.classList.remove(inputErrorClass);
  };

  _checkValidity (inputElement) {
    const InputNotValid = !inputElement.validity.valid;

    if(InputNotValid) {
      this._showError(inputElement, inputElement.validationMessage);
    }
    else {
      this._hideError(inputElement);
    };
  }

  _hasInvalidInput = () => {
    return this._inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  };


  _toggleButtonState = () => {

    if(this._hasInvalidInput()) {
      this._submitButtonElement.classList.add(this._settings.inactiveButtonClass);
      this._submitButtonElement.setAttribute('disabled', true);
    }
    else {
      this._submitButtonElement.classList.remove(this._settings.inactiveButtonClass);
      this._submitButtonElement.removeAttribute('disabled');
    };
  };

  _setEventListeners () {
    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    this._submitButtonElement = this._form.querySelector(this._settings.submitButtonSelector);

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation () {
    this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });

      this._setEventListeners();
  };
}
