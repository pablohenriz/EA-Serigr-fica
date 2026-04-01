// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Filter tabs (visual only)
document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 80) current = s.id;
    });
    navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--yellow)' : '';
    });
});

// Categories menu toggle (mobile)
const categoryToggle = document.querySelector('.category-toggle');
const categoriesList = document.querySelector('.categories-list');

if (categoryToggle && categoriesList) {
    categoryToggle.addEventListener('click', () => {
        categoriesList.classList.toggle('active');
    });

    // Close menu when clicking on a category
    document.querySelectorAll('.categories-list a').forEach(link => {
        link.addEventListener('click', () => {
            categoriesList.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.categories-menu')) {
            categoriesList.classList.remove('active');
        }
    });
}