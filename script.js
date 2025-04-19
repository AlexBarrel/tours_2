const burgerBtn = document.querySelector('.burger-button');
const languageSelect = document.querySelector('.language-select');
const burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('dark');
    languageSelect.classList.toggle('dark');
    burgerMenu.classList.toggle('active');
})