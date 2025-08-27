// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functionality
    initNavigation();
    initSmoothScrolling();
    initActiveLinkHighlighting();
    initMobileMenu();
    initPrayerRequestForm();
    initContactForm();
    initBackToTop();
    initParallax();
    initFadeInAnimations();
});

// Navigation functionality
function initNavigation() {
    const header = document.getElementById('header');
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Smooth scrolling for all anchor links
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

// Active link highlighting using Intersection Observer
function initActiveLinkHighlighting() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to corresponding nav link
                const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    mobileToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        this.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        
        // Focus trap for mobile menu
        if (!isExpanded) {
            // Menu is opening
            const firstLink = navMenu.querySelector('a');
            if (firstLink) {
                firstLink.focus();
            }
        }
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });
    
    // Close menu with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
            closeMobileMenu();
        }
    });
}

function closeMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    mobileToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('active');
}

// Prayer request form handling
function initPrayerRequestForm() {
    const prayerForm = document.getElementById('prayer-form');
    const prayerThankYou = document.getElementById('prayer-thank-you');
    
    if (prayerForm) {
        prayerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('prayer-name').value.trim();
            const email = document.getElementById('prayer-email').value.trim();
            const message = document.getElementById('prayer-message').value.trim();
            
            // Basic validation
            if (!email) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            if (!message) {
                showMessage('Please enter your prayer request.', 'error');
                return;
            }
            
            // Show thank you message
            prayerForm.style.display = 'none';
            prayerThankYou.style.display = 'block';
            
            // Reset form
            prayerForm.reset();
            
            // Scroll to thank you message
            prayerThankYou.scrollIntoView({ behavior: 'smooth' });
            
            // Log form data (for future backend integration)
            console.log('Prayer request submitted:', { name, email, message });
            
            // In a real implementation, you would send this to writeovercoffeee@gmail.com
            // Example backend integration:
            // fetch('/api/prayer', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ name, email, message, to: 'writeovercoffeee@gmail.com' })
            // });
        });
    }
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const contactThankYou = document.getElementById('contact-thank-you');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value.trim();
            
            // Basic validation
            if (!name) {
                showMessage('Please enter your name.', 'error');
                return;
            }
            
            if (!email) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            if (!message) {
                showMessage('Please enter your message.', 'error');
                return;
            }
            
            // Show thank you message
            contactForm.style.display = 'none';
            contactThankYou.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Scroll to thank you message
            contactThankYou.scrollIntoView({ behavior: 'smooth' });
            
            // Log form data (for future backend integration)
            console.log('Contact form submitted:', { name, email, subject, message });
            
            // In a real implementation, you would send this to writeovercoffeee@gmail.com
            // Example backend integration:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ name, email, subject, message, to: 'writeovercoffeee@gmail.com' })
            // });
        });
    }
}



// Back to top button functionality
function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 600) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // Scroll to top when clicked
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Parallax effect on mouse move
function initParallax() {
    const parallaxLayers = document.querySelectorAll('.parallax-layer, .parallax-layer-2');
    let ticking = false;
    
    // Throttled mouse move handler for better performance
    function updateParallax(e) {
        if (!ticking) {
            requestAnimationFrame(() => {
                const mouseX = e.clientX / window.innerWidth;
                const mouseY = e.clientY / window.innerHeight;
                
                parallaxLayers.forEach((layer, index) => {
                    const speed = (index + 1) * 0.5;
                    const x = (mouseX - 0.5) * speed * 20;
                    const y = (mouseY - 0.5) * speed * 20;
                    
                    layer.style.transform = `translate(${x}px, ${y}px)`;
                });
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Only add mouse move effect on desktop
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', updateParallax);
    }
    
    // Add scroll-based parallax
    let scrollTicking = false;
    window.addEventListener('scroll', function() {
        if (!scrollTicking) {
            requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const parallaxBg = document.querySelector('.parallax-bg');
                
                if (parallaxBg) {
                    parallaxBg.style.transform = `translateY(${scrolled * 0.3}px)`;
                }
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    });
}

// Fade-in animations for sections
function initFadeInAnimations() {
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

    // Observe elements for fade-in animation
    const fadeElements = document.querySelectorAll('.content-section, .endorsement-section, .retailers-section');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Message display function
function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `message message-${type}`;
    messageElement.textContent = message;
    messageElement.setAttribute('aria-live', 'polite');
    
    // Style the message
    messageElement.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        font-family: 'Merriweather', serif;
    `;

    if (type === 'success') {
        messageElement.style.background = 'linear-gradient(135deg, #8FA68E, #6B8E6B)';
    } else {
        messageElement.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
    }

    // Add to page
    document.body.appendChild(messageElement);

    // Animate in
    setTimeout(() => {
        messageElement.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 5 seconds
    setTimeout(() => {
        messageElement.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.remove();
            }
        }, 300);
    }, 5000);
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key to close any open modals or messages
    if (e.key === 'Escape') {
        const message = document.querySelector('.message');
        if (message) {
            message.remove();
        }
        closeMobileMenu();
    }
});

// Performance optimization: Lazy load images when they're added
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if there are any images
if (document.querySelectorAll('img[data-src]').length > 0) {
    lazyLoadImages();
}

// Add focus management for better accessibility
const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
focusableElements.forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--sage-green-primary)';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// Add smooth transitions for all interactive elements
const interactiveElements = document.querySelectorAll('a, button, .book-preview, .event-item, .retailer-link');
interactiveElements.forEach(element => {
    element.style.transition = 'all 0.3s ease';
});

// Performance optimizations for reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    const style = document.createElement('style');
    style.textContent = `
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
        
        .parallax-dots,
        .parallax-layer,
        .parallax-layer-2 {
            animation: none !important;
        }
    `;
    document.head.appendChild(style);
}
