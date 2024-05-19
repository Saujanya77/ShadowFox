document.getElementById('myForm').onsubmit = function() {
    alert('Your message has reached us! Thank you for connecting!');
}
// Create a file named script.js and add this code

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
