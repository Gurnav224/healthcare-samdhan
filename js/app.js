const hamburgerMenu = document.querySelector(".hamburger__menu");
const navListContainer = document.querySelector(".navList__container");
const hamburgerClose = document.querySelector(".hamburger__close")


console.log(hamburgerMenu)
console.log(navListContainer)

hamburgerMenu.addEventListener("click",()=>{

    if(navListContainer.style.display==="none"){

        navListContainer.style.display = "block"
    }
    else{
        navListContainer.style.display = "none"
    }


    
})

hamburgerClose.addEventListener('click',()=>{
    if(navListContainer.style.display==="block"){

        navListContainer.style.display = "none"
    }
    else{
        navListContainer.style.display = "block"
    }

})