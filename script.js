let side = document.querySelector('.side');
let burgerButton = document.querySelector('.header__burger');



burgerButton.addEventListener('click', function ()  {
   side.classList.toggle('side_open')
});