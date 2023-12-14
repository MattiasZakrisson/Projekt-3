const scrollDownHero = () => {

    const arrowButton = document.querySelector('#hero__arrow-button')

    const scrollArrow = () => {
        
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    }

    arrowButton.addEventListener('click', scrollArrow)

}

scrollDownHero()