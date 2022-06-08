const menu = document.querySelector('.menu');
const main = document.querySelector('.main');
const menuOpenBtn = document.querySelector('.open-menu-btn');
const menuCloseBtn = document.querySelector('.menu-btn-close');

const openMenu = () => {
    main.classList.add('hidden');
    menu.classList.add('active');
}

const closeMenu = () => {
    main.classList.remove('hidden');
    menu.classList.remove('active');
}

menuOpenBtn.addEventListener('click', () => openMenu())
menuCloseBtn.addEventListener('click', () => closeMenu())

const openAnswerButtons = document.querySelectorAll('.questions__list-item-open');


const openAnswer = ({target}) => {
    const parent = target.closest('.questions__list-item');
    const answer = parent.querySelector('.questions__list-item-answer');

    answer.classList.toggle('active')
    target.classList.toggle('active')

}

openAnswerButtons.forEach((item) => {
    item.addEventListener('click', (e) => openAnswer(e))
})

const navLinks = document.querySelectorAll('.header__nav-menu__list-link');

const scrollToSection = (e) => {
    e.preventDefault()

    main.classList.remove('hidden');
    menu.classList.remove('active');

    document.querySelector(`.${e.target.getAttribute('data-to')}`).scrollIntoView({
        behavior: 'smooth'
    });
}

navLinks.forEach((item) => {
    item.addEventListener('click', (e) => scrollToSection(e))
})
