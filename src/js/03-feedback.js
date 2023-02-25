
import throttle from 'lodash.throttle';


const mailEl = document.querySelector('input[type="email"]');
const textAreaEl = document.querySelector('textarea[name="message"]');
const formEl = document.querySelector('form.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const data = {
  email: '',
  message: '',
};
getData()

formEl.addEventListener("input", throttle(onInputStorage, 500));
formEl.addEventListener("submit", onSubmit);

function onInputStorage() {
    data.email = mailEl.value;
    data.message = textAreaEl.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
}


function getData() {
  if (JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) === null) { 
    mailEl.value = "";
    textAreaEl.value = "";
  } else {
  let loadData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    mailEl.value = loadData.email;
    textAreaEl.value = loadData.message;
    data.email = loadData.email;
    data.message = loadData.message;
  }
}


function onSubmit(e) {
  e.preventDefault();
  console.log(`email =>`, data.email);
  console.log(`massage =>`, data.message);
  data.email = '';
  data.message = '';
  localStorage.removeItem(LOCALSTORAGE_KEY);
  mailEl.value = '';
  textAreaEl.value = '';

}

