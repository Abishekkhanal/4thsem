document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const backToTopButton = document.getElementById('back-to-top');
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');
    const themeToggle = document.getElementById('theme-toggle');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });

            // Highlight the active link in navigation
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            
            // Close the mobile menu after click
            if (window.innerWidth <= 768) {
                navUl.classList.remove('show');
            }
        });
    });

    // Highlight current section in navigation on scroll
    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY + 60;

        navLinks.forEach(link => {
            const section = document.getElementById(link.getAttribute('href').substring(1));
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Show or hide the back-to-top button
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
            backToTopButton.classList.remove('hide');
        } else {
            backToTopButton.classList.remove('show');
            backToTopButton.classList.add('hide');
        }
    });

    // Smooth scroll to top
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Toggle mobile menu
    menuIcon.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

    // Toggle dark/light mode
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
});

