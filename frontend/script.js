'use strict';

/**
 * add event on element
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header & back top btn active
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * toggle get started and logout buttons based on login status
 */
document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');
  const getStarted = document.getElementById('get-started');
  const logout = document.getElementById('logout');

  if (token && getStarted && logout) {
    getStarted.style.display = 'none';
    logout.style.display = 'block';
    logout.addEventListener('click', () => {
      localStorage.removeItem('token');
      window.location.reload();
    });
  } else if (getStarted && logout) {
    getStarted.style.display = 'block';
    logout.style.display = 'none';
  }
});