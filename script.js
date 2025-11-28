// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Menu Filter Functionality (Menu Page)
    const menuFilterBtns = document.querySelectorAll('.menu-filter-btn');
    const menuItems = document.querySelectorAll('.menu-category');
    
    if (menuFilterBtns.length > 0) {
        menuFilterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Update active button style
                menuFilterBtns.forEach(b => {
                    b.classList.remove('bg-burgundy', 'text-white');
                    b.classList.add('bg-white', 'text-burgundy');
                });
                this.classList.remove('bg-white', 'text-burgundy');
                this.classList.add('bg-burgundy', 'text-white');
                
                // Filter menu items
                menuItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                        item.style.animation = 'fadeIn 0.5s';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Gallery Filter Functionality (Gallery Page)
    const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (galleryFilterBtns.length > 0) {
        galleryFilterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button style
                galleryFilterBtns.forEach(b => {
                    b.classList.remove('bg-burgundy', 'text-white');
                    b.classList.add('bg-white', 'text-burgundy');
                });
                this.classList.remove('bg-white', 'text-burgundy');
                this.classList.add('bg-burgundy', 'text-white');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        item.style.animation = 'fadeIn 0.5s';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Gallery Image Modal (Gallery Page)
    const galleryItemsClickable = document.querySelectorAll('.gallery-item');
    const imageModal = document.getElementById('image-modal');
    const closeModal = document.getElementById('close-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    
    if (galleryItemsClickable.length > 0 && imageModal) {
        galleryItemsClickable.forEach(item => {
            item.addEventListener('click', function() {
                const title = this.querySelector('h3').textContent;
                const description = this.querySelector('p').textContent;
                const emoji = this.querySelector('span').textContent;
                const bgClass = this.querySelector('div > div').className;
                
                modalTitle.textContent = title;
                modalDescription.textContent = description;
                modalImage.innerHTML = `<div class="${bgClass} h-96 rounded-lg flex items-center justify-center"><span class="text-9xl">${emoji}</span></div>`;
                
                imageModal.classList.remove('hidden');
            });
        });
        
        if (closeModal) {
            closeModal.addEventListener('click', function() {
                imageModal.classList.add('hidden');
            });
        }
        
        imageModal.addEventListener('click', function(e) {
            if (e.target === imageModal) {
                imageModal.classList.add('hidden');
            }
        });
    }

    // Reservation Form Validation & Submission (Reservations Page)
    const reservationForm = document.getElementById('reservation-form');
    const successMessage = document.getElementById('success-message');
    
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;
            
            // Validation
            if (!name || !email || !phone || !date || !time || !guests) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Date validation (must be future date)
            const selectedDate = new Date(date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                alert('Please select a future date.');
                return;
            }
            
            // Show success message
            successMessage.classList.remove('hidden');
            reservationForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 5000);
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }

    // Contact Form Validation & Submission (Contact Page)
    const contactForm = document.getElementById('contact-form');
    const contactSuccessMessage = document.getElementById('contact-success-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show success message
            contactSuccessMessage.classList.remove('hidden');
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                contactSuccessMessage.classList.add('hidden');
            }, 5000);
            
            // Scroll to success message
            contactSuccessMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }

    // FAQ Accordion (Contact Page)
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const icon = this.querySelector('span');
                
                // Toggle answer visibility
                if (answer.classList.contains('hidden')) {
                    answer.classList.remove('hidden');
                    icon.textContent = '−';
                } else {
                    answer.classList.add('hidden');
                    icon.textContent = '+';
                }
            });
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Set minimum date for reservation form to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);