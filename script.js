let side = document.querySelector('.side');
let burgerButton = document.querySelector('.header__burger');
let header = document.querySelector('.header');
let burgerClose = document.querySelector('.side__close');
let popup = document.querySelector('.popup');
let headerButton = document.querySelector('.header__btn');
let popupClose = document.querySelector('.popup__close');
let headerButtonsmall = document.querySelector('.header__btn_small')

let card = document.querySelectorAll('.card');
let slaiderButton = document.querySelector('.inform__button-arrow');


let body = document.body;








   
   



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





burgerButton.addEventListener('click', function ()  {

   disableScroll();

   side.classList.toggle('side_open');

   // header.classList.toggle('side_open');

   function disableScroll() {
      body.classList.add('disable-scroll');

  
   
   }

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




slaiderButton.addEventListener('click', function () {
   card.forEach(card =>
     card.classList.toggle('card__slaider'));
 
     slaiderButton.classList.toggle('inform__button-arrow_close');
 
 }); 
 
 new Swiper('.swiper',{
   pagination: {
     el: '.swiper-pagination',
   }
 });