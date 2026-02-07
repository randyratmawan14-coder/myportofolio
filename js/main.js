const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const images = document.querySelectorAll(".lightbox")

images.forEach((img) => {
    img.addEventListener("click", () => {
        if (document.querySelector(".lightbox-overlay")) 
            return;

        const overlay = document.createElement("div");
        overlay.className = "lightbox-overlay";

        const largeImg = document.createElement("img");
        largeImg.src = img.src;

        overlay.appendChild(largeImg);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", (e) => {
            if (e.target === overlay){
                overlay.remove();
            }
        })
    })
})