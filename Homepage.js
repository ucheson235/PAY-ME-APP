document.addEventListener('DOMContentLoaded', () => {
    const toggleIcon = document.querySelector('.toggle-icon');
    const navLinks = document.getElementById('nav-links');

    toggleIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});