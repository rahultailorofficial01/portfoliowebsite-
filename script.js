//Wait for the DOM to be fully loaded before running script
document.addEventListener('DOMContentLoaded', (event) => {

    // Mobile menu toggle
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconClosed = document.getElementById('menu-icon-closed');
    const menuIconOpen = document.getElementById('menu-icon-open');

    // Check if elements exist before adding event listeners
    if (menuButton && mobileMenu && menuIconClosed && menuIconOpen) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuIconClosed.classList.toggle('hidden');
            menuIconClosed.classList.toggle('block');
            menuIconOpen.classList.toggle('hidden');
            menuIconOpen.classList.toggle('block');
        });
    }

    // Close mobile menu when a link is clicked
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu && menuIconClosed && menuIconOpen) {
                mobileMenu.classList.add('hidden');
                menuIconClosed.classList.remove('hidden');
                menuIconClosed.classList.add('block');
                menuIconOpen.classList.add('hidden');
                menuIconOpen.classList.remove('block');
            }
        });
    });

    // Section fade-in on scroll
    const sections = document.querySelectorAll('.fade-in-section');

    if (sections.length > 0) {
        const observeOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observeOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

});