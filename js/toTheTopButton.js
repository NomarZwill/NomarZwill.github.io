"use strict";

let toTheTopButton = document.querySelector(".main-container__to-the-top-button");
window.addEventListener("scroll", trackScroll);

function trackScroll () {
    let scroll = window.pageYOffset;
    let coord = document.documentElement.clientHeight;

    if (scroll > coord) {
        toTheTopButton.classList.remove("main-container__to-the-top-button--invisible");
    }

    if (scroll <= coord) {
        toTheTopButton.classList.add("main-container__to-the-top-button--invisible");
    }
}

window.addEventListener("click", toTheTop);

function toTheTop () {
    window.scrollBy(0, -80);
    if (window.pageYOffset > 0) {
        setTimeout(toTheTop, 0);
    }
}
