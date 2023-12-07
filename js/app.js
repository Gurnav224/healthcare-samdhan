const hamburgerMenu = document.querySelector(".hamburger__menu");
const navListContainer = document.querySelector(".navList__container");
const hamburgerClose = document.querySelector(".hamburger__close");

hamburgerMenu.addEventListener("click", () => {
    // Toggle the "show" class on the navListContainer
    
    navListContainer.classList.toggle("show");
});

hamburgerClose.addEventListener("click", () => {
    // Toggle the "show" class on the navListContainer
    navListContainer.classList.toggle("show");
});
