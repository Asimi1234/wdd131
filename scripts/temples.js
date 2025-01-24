// temples.js

document.getElementById("currentyear").textContent = new Date().getFullYear();
    
// Populate the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Hamburger menu toggle
const hamburgerButton = document.getElementById('hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburgerButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  hamburgerButton.textContent = navMenu.classList.contains('open') ? '✖' : '\u2630';
});