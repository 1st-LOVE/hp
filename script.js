// 1st LOVE - Harudayori from Osaka
// Navigation & UI Scripts

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background change on scroll
    const nav = document.querySelector('.nav');
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(255, 255, 255, 0.98)';
                nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                nav.style.background = 'rgba(255, 255, 255, 0.95)';
                nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            }
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe artist cards
    document.querySelectorAll('.artist-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

    // Slideshow Logic
    const photos = [
        "P4177992 (1).JPG", "P4177993 (1).JPG", "P4177994 (1).JPG", "P4177995 (1).JPG", "P4177996 (1).JPG",
        "P4177997 (1).JPG", "P4177998 (1).JPG", "P4177999 (1).JPG", "P4178000 (1).JPG", "P4178001 (1).JPG",
        "P4178002 (1).JPG", "P4178003 (1).JPG", "P4178004 (1).JPG", "P4178005 (1).JPG", "P4178006 (1).JPG",
        "P4178007 (1).JPG", "P4178008 (1).JPG", "P4178009 (1).JPG", "P4178010 (1).JPG", "P4178011 (1).JPG",
        "P4178012 (1).JPG", "P4178013 (1).JPG", "P4178014 (1).JPG", "P4178015 (1).JPG", "P4178016 (1).JPG",
        "P4178017 (1).JPG", "P4178018 (1).JPG", "P4178019 (1).JPG", "P4178020 (1).JPG", "P4178021 (1).JPG"
    ];

    const wrapper = document.getElementById('slides-wrapper');
    if (wrapper) {
        photos.forEach(photo => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.innerHTML = `<img src="images/${photo}" alt="Event Photo" loading="lazy">`;
            wrapper.appendChild(slide);
        });

        let currentIndex = 0;
        const totalSlides = photos.length;

        function showSlide(index) {
            if (index >= totalSlides) currentIndex = 0;
            else if (index < 0) currentIndex = totalSlides - 1;
            else currentIndex = index;
            
            wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        document.getElementById('next-slide').addEventListener('click', () => showSlide(currentIndex + 1));
        document.getElementById('prev-slide').addEventListener('click', () => showSlide(currentIndex - 1));

        // Auto play
        setInterval(() => showSlide(currentIndex + 1), 3000);
    }
