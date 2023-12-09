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

// FAQ JS
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }

        // Close other open accordion items
        document.querySelectorAll('.accordion-header').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove('active');
                otherButton.nextElementSibling.style.maxHeight = 0;
            }
        });
    });
});
