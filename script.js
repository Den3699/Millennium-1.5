let side = document.querySelector('.side');
let burgerButton = document.querySelector('.header__burger');
let header = document.querySelector('.header');
let burgerClose = document.querySelector('.side__close');
// let home = document.querySelector('.home__container.side_open');



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