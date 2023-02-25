import throttle from 'lodash.throttle';


const mailEl = document.querySelector('input[type="email"]');
const textAreaEl = document.querySelector('textarea[name="message"]');
const formEl = document.querySelector('form.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';
let saveDataMail;
let saceDataMessage;
const data = {
  email: '',
  message: '',
};


formEl.addEventListener("input", throttle(onInputStorage, 500));

function onInputStorage() {
    data.email = mailEl.value;
    data.message = textAreaEl.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
}