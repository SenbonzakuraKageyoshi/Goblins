const menu=document.querySelector(".menu"),main=document.querySelector(".main"),menuOpenBtn=document.querySelector(".open-menu-btn"),menuCloseBtn=document.querySelector(".menu-btn-close"),openMenu=()=>{main.classList.add("hidden"),menu.classList.add("active")},closeMenu=()=>{main.classList.remove("hidden"),menu.classList.remove("active")};menuOpenBtn.addEventListener("click",()=>openMenu()),menuCloseBtn.addEventListener("click",()=>closeMenu());const openAnswerButtons=document.querySelectorAll(".questions__list-item-open"),openAnswer=({target:a})=>{let b=a.closest(".questions__list-item"),c=b.querySelector(".questions__list-item-answer");c.classList.toggle("active"),a.classList.toggle("active")};openAnswerButtons.forEach(a=>{a.addEventListener("click",a=>openAnswer(a))});const navLinks=document.querySelectorAll(".header__nav-menu__list-link"),scrollToSection=a=>{a.preventDefault(),main.classList.remove("hidden"),menu.classList.remove("active"),document.querySelector(`.${a.target.getAttribute("data-to")}`).scrollIntoView({behavior:"smooth"})};navLinks.forEach(a=>{a.addEventListener("click",a=>scrollToSection(a))})