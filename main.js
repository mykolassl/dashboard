const burger = document.querySelector('.burger');
const menu = document.querySelector('aside');

burger.addEventListener('click', () => {
    if(burger.classList.contains('open')) {
        burger.classList.remove('open');
        menu.classList.remove('open');
    } else {
        burger.classList.add('open');
        menu.classList.add('open');
    }
});