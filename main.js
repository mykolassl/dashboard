const burger = document.querySelector('.burger');
const menu = document.querySelector('aside');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    if(burger.classList.contains('open')) {
        burger.classList.remove('open');
        menu.classList.remove('open');
        body.style.position = 'static';
    } else {
        burger.classList.add('open');
        menu.classList.add('open');
        body.style.position = 'fixed';
    }
});