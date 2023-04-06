import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const textareaRef = formRef.querySelector('textarea');
const inputRef = formRef.querySelector('input');

const FEEDBACK = 'feedback-form-state';

formRef.addEventListener('submit', onButtonClick);
textareaRef.addEventListener('input', throttle(addStateValue, 500));
inputRef.addEventListener('input', throttle(addStateValue, 500));

function addStateValue() {
  const stateValue = {
    email: inputRef.value,
    message: textareaRef.value,
  };
  localStorage.setItem(FEEDBACK, JSON.stringify(stateValue));
}

const savedData = localStorage.getItem(FEEDBACK);
if (savedData) {
  const stateValue = JSON.parse(savedData);
  inputRef.value = stateValue.email;
  textareaRef.value = stateValue.message;
}

function onButtonClick(e) {
  e.preventDefault();
  const state = {
    email: inputRef.value,
    message: textareaRef.value,
  };

  console.log(state);

  localStorage.removeItem(FEEDBACK);
  e.currentTarget.reset();
}
