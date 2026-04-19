const menuIcon = document.querySelector(`#menu-icon`);
const navLinks = document.querySelector(`.nav-links`);
const images = document.querySelectorAll(`.lightbox`)

menuIcon.addEventListener(`click`, () => {
    navLinks.classList.toggle(`active`);
})

images.forEach((img) => {
    img.addEventListener(`click`, () => {
        if (document.querySelector(`.lightbox-overlay`))
            return;

        const overlay = document.createElement(`div`);
        overlay.className = `lightbox-overlay`;

        const largeImg = document.createElement(`img`);
        largeImg.src = img.src;

        overlay.appendChild(largeImg);
        document.body.appendChild(overlay);

        overlay.addEventListener(`click`, (e) => {
            if (e.target === overlay){
                overlay.remove();
            }
        })
    })
})