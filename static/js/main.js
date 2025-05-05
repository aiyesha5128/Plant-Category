// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    
    // Filter form submission with loader
    const filterForm = document.getElementById('filter-form');
    const searchForm = document.getElementById('search-form');
    const loader = document.querySelector('.loader');
    
    if (filterForm) {
        filterForm.addEventListener('submit', function() {
            loader.style.display = 'inline-block';
        });
    }
    
    if (searchForm) {
        searchForm.addEventListener('submit', function() {
            loader.style.display = 'inline-block';
        });
    }
    
    // Plant card click handler (for mobile)
    const plantCards = document.querySelectorAll('.plant-card');
    plantCards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.querySelector('a.stretched-link');
            if (link) {
                link.click();
            }
        });
    });
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            // Check if element is in viewport
            if(position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('animate__animated', 'animate__fadeIn');
            }
        });
    };
    
    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }
});
