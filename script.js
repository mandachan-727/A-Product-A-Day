// Smooth scrolling to section
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to top when clicking the page title
document.querySelector('header').addEventListener('click', function () {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
