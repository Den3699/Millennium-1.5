let side = document.querySelector('.side');
let burgerButton = document.querySelector('.header__burger');
let header = document.querySelector('.header');
let burgerClose = document.querySelector('.side__close');
let popup = document.querySelector('.popup');
let headerButton = document.querySelector('.header__btn');
let popupClose = document.querySelector('.popup__close');
let headerButtonsmall = document.querySelector('.header__btn_small')



burgerButton.addEventListener('click', function ()  {
   side.classList.toggle('side_open');

   header.classList.toggle('side_open');

   
   
});


burgerClose.addEventListener('click', function ()  {
   document.querySelector('.side').classList.remove('side_open')
});


burgerButton.addEventListener('click', event => {
   event._isClickWithInMenu = true;
});

side.addEventListener('click', event => {
   event._isClickWithInMenu = true;
});

document.body.addEventListener('click', event => {
   if (event._isClickWithInMenu) return;
   document.querySelector('.side').classList.remove('side_open')

});










headerButton.addEventListener('click', function ()  {
   popup.classList.toggle('open');

});

headerButtonsmall.addEventListener('click', function ()  {
   popup.classList.toggle('open');

});


popupClose.addEventListener('click', function ()  {
   document.querySelector('.popup').classList.remove('open')
});