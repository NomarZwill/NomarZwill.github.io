"use strict";

let contacts = document.createElement("div");
contacts.className = "contacts";
contacts.innerHTML = `<a class="contacts__elem" href="tel:+79608294596">
<img class="icons-32" src="./img/phone-icon.svg">
</a>

<a class="contacts__elem" href="mailto:nomar_01.92@mail.ru">
<img class="icons-32" src="./img/mail-icon.svg">
</a>

<a class="contacts__elem" href="https://vk.com/id8376509" target="_blank">
<img class="icons-32" src="./img/vk-icon.svg">
</a>`;

let navbarList = document.createElement("div");
navbarList.className = "navbar-list";
navbarList.innerHTML = `<a class="navbar-list__item navbar-list--font-set" href="pages/list-of-content.html#projects">ПРОЕКТЫ</a>
<a class="navbar-list__item navbar-list--font-set" href="pages/list-of-content.html#art">ТВОРЧЕСТВО</a>`;

let subnavbar = document.createElement("div");
subnavbar.className = "subnavbar";

function openSubnavbar() {
    document.querySelector(".subnavbar").classList.toggle("subnavbar--close");
    document.querySelector(".subnavbar").classList.toggle("subnavbar--open");
}

function closeSubnavbar () {
    document.querySelector(".subnavbar").classList.add("subnavbar--close");
    document.querySelector(".subnavbar").classList.remove("subnavbar--open");
}

function drawForWideScreen() {
    document.querySelector(".droplist").classList.add("droplist--collapse");
    document.querySelector(".header").append(contacts);
    document.querySelector(".header").append(navbarList);
    document.querySelector(".subnavbar").classList.remove("subnavbar--open");
    document.querySelector(".subnavbar").classList.remove("subnavbar--close");
    document.querySelector(".contacts").classList.add("contacts--wide-screen");
    document.querySelector(".navbar-list").classList.add("navbar-list--wide-screen");
    document.querySelector(".droplist").removeEventListener("click", openSubnavbar);
    document.querySelector(".content-container").removeEventListener("click", closeSubnavbar);
}

function drawForNarrowScreen() {
    document.querySelector(".droplist").classList.remove("droplist--collapse");
    document.querySelector(".main-container").append(subnavbar);
    document.querySelector(".subnavbar").append(contacts);
    document.querySelector(".subnavbar").append(navbarList);
    document.querySelector(".contacts").classList.remove("contacts--wide-screen");
    document.querySelector(".navbar-list").classList.remove("navbar-list--wide-screen");
    document.querySelector(".subnavbar").classList.add("subnavbar--close");
    document.querySelector(".droplist").addEventListener("click", openSubnavbar);
    document.querySelector(".content-container").addEventListener("click", closeSubnavbar);
}

function drawNavbar(mql) {
    if (mql.matches) {
        drawForWideScreen();
    } else {
        drawForNarrowScreen();
    }
}

let mediaQueryList = window.matchMedia("(min-width: 48em)");

mediaQueryList.addListener(drawNavbar);

drawNavbar(mediaQueryList);