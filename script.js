const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const text = formControl.querySelector('small');
  text.innerText = message;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

const checkEmail = (input) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
};

const getFieldName = (field) => {
  return field.id.charAt(0).toUpperCase() + field.id.slice(1);
};

const checkRequired = (input) => {
  input.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} can't be empty`);
    } else {
      showSuccess(input);
    }
  });
};

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} should be at least ${min} chars`);
    input.value = '';
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} can't be more than ${max} chars`);
    input.value = '';
  } else {
    showSuccess(input);
  }
};

const checkInputsMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 10);
  checkLength(password, 5, 15);
  checkEmail(email);
  checkInputsMatch(password, password2);
});
