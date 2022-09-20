const menu = document.querySelector('.box');
let body = document.querySelector('body');

menu.addEventListener('click', function(){
    menu.classList.toggle('active');
    body.classList.toggle('open');
})
