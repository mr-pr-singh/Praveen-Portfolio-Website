// responsive nav
nav = document.querySelector('.nav');
burger = document.querySelector('.burger');
logo = document.querySelector('.logo');
list = document.querySelector('.list');

burger.addEventListener('click', ()=>{
       logo.classList.toggle('v-class-resp');
       list.classList.toggle('v-class-resp');
       nav.classList.toggle('h-nav-resp');
})

