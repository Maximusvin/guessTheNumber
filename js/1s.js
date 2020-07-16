'use strict';

// Получение данных из формы
const inputUserNameRef = document.querySelector('.js-name');
const inputUserNumberRef = document.querySelector('.input-number');
const formRef = document.querySelector('.about__form');
const formNumberRef = document.querySelector('.form-number');
const textBlock1Ref = document.querySelector('.text__wrap');
const textBlock2Ref = document.querySelector('.text__wrap2');
const textBlock3Ref = document.querySelector('.text__wrap3');
const errorRef = document.querySelector('.about__error');
const error2Ref = document.querySelector('.about__error2');
const error3Ref = document.querySelector('.about__error3');
const btnYesRef = document.querySelector('.about__btn-yes');
const btnNoRef = document.querySelector('.about__btn-no');

const moreRef = document.querySelector('.more');
const smallerRef = document.querySelector('.smaller');
const correctlyRef = document.querySelector('.correctly');

formRef.addEventListener('submit', () => {
  event.preventDefault();

  let userName = inputUserNameRef.value;

  if (userName === '') {
    errorRef.classList.add('active');
  } else {
    userName = userName[0].toUpperCase() + userName.slice(1);
    textBlock1Ref.classList.add('close');
    textBlock2Ref.classList.add('active');
    document.getElementById('name').innerHTML = userName;
    document.getElementById('name1').innerHTML = userName;
  }

  btnYesRef.addEventListener('click', () => {
    textBlock2Ref.classList.remove('active');
    textBlock3Ref.classList.add('active');
  });

  btnNoRef.addEventListener('click', () => {
    error2Ref.classList.add('active');
  });
});

// код игры

let randomNumber = Math.round(Math.random() * 100);

formNumberRef.addEventListener('submit', () => {
  event.preventDefault();

  let inputNumber = inputUserNumberRef.value;

  if (Number.isNaN(+inputNumber)) {
    inputUserNumberRef.value = '';
    error3Ref.classList.add('active');
  }

  if (!Number.isNaN(+inputNumber)) {
    inputUserNumberRef.value = '';
    error3Ref.classList.remove('active');

    inputNumber = +inputNumber;

    if (inputNumber > randomNumber) {
      moreRef.classList.add('active');
      smallerRef.classList.remove('active');
      correctlyRef.classList.remove('active');
      document.getElementById('more').innerHTML = inputNumber;
    }

    if (inputNumber < randomNumber) {
      smallerRef.classList.add('active');
      moreRef.classList.remove('active');
      correctlyRef.classList.remove('active');
      document.getElementById('smaller').innerHTML = inputNumber;
    }

    if (inputNumber === randomNumber) {
      smallerRef.classList.remove('active');
      moreRef.classList.remove('active');
      correctlyRef.classList.add('active');
    }
  }
});
