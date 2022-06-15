const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-navigation-list');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})