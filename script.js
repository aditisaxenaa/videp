var menu = document.querySelector('#menu');
var navbar = document.querySelector('#navbar');
var close = document.querySelector('#close');


menu.addEventListener('click', function(){
    navbar.style.transform = 'translateY(100%)';


})

close.addEventListener('click', function(){
    navbar.style.transform = 'translateY(0%)';


})