/* ----------- Load Document ------ */
window.addEventListener("load", function() {

    let mediaMenu = document.querySelector("#menu-icon");
    let mediaNav = document.querySelector("header .header__nav");

    mediaMenu.addEventListener("click", () => {
        mediaMenu.classList.toggle("bx-x");
        mediaNav.classList.toggle("opened");
    });

    window.addEventListener("scroll", () => {
        mediaMenu.classList.remove("bx-x");
        mediaNav.classList.remove("opened");
    });

    AOS.init({
        offset:300,
        duration:1500
    });

});