//валидация для одной формы//

// const formSubmit = (evt) => {
//   evt.preventDefault();

//   console.log('form submited is valid? ', formPopupPhoto.checkValidity());
// };

// function enableValidation() {
//   formPopupPhoto.addEventListener('submit', formSubmit);

//   const inputsProfile = formPopupPhoto.querySelectorAll('.input');

//   inputsProfile.forEach((input) => {
//     input.addEventListener('input', () => checkInputValidity(input));
//   });

// };

// enableValidation();


//Валидация для двух форм//

const checkInputValidity = (form, input) => {
const errorMessage = document.querySelector(`#error-${input.id}`);

  if(input.validity.valid) {
    console.log(input.validity.valid);
    errorMessage.textContent = '';
    input.classList.remove('input_error');
  }
  else {
    errorMessage.textContent = input.validationMessage;
    input.classList.add('input_error');
  }
};


function enableValidation() {

  const forms = document.querySelectorAll('.popup__form');

  forms.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      console.log('form submited is valid? ', form.checkValidity());
    });

    const inputs = form.querySelectorAll('.input');

    inputs.forEach((input) => {
      input.addEventListener('input', () => checkInputValidity(form, input));
    });
  });
};

enableValidation();
