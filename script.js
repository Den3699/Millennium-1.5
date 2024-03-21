let side = document.querySelector('.side');
let burgerButton = document.querySelector('.header__burger');
let header = document.querySelector('.header');



burgerButton.addEventListener('click', function ()  {
   side.classList.toggle('side_open');

   header.classList.toggle('side_open')
   
});