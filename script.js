// Author Website JavaScript
// Clean, modern functionality for Elizabeth K. Green's website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSmoothScrolling();
    initContactForm();
    initPrayerForm();
    initEventsForm();
    initScrollEffects();
    initParallaxEffects();
    initAccessibility();
});

// Smooth scrolling for content box links
function initSmoothScrolling() {
    const contentLinks = document.querySelectorAll('.content-btn[href^="#"], .btn[href^="#"]');
    
    contentLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const offset = headerHeight + 20;
                
                const targetPosition = targetSection.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
}


// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name').trim();
            const email = formData.get('email').trim();
            const message = formData.get('message').trim();
            
            // Basic validation
            if (!name || !email || !message) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Log form data (for future backend integration)
                console.log('Contact form submitted:', { name, email, message });
            }, 1500);
        });
    }
}

// Prayer request form handling
function initPrayerForm() {
    const prayerForm = document.getElementById('prayer-form');
    
    if (prayerForm) {
        prayerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const email = formData.get('email').trim();
            const subject = formData.get('subject').trim();
            const request = formData.get('request').trim();
            
            // Basic validation
            if (!email || !subject || !request) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                showMessage('Thank you for sharing your prayer request. I will be praying for you.', 'success');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Log form data (for future backend integration)
                console.log('Prayer request submitted:', { email, subject, request });
            }, 1500);
        });
    }
}

// Events form handling
function initEventsForm() {
    const eventsForm = document.getElementById('eventsForm');
    
    if (eventsForm) {
        eventsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name').trim();
            const email = formData.get('email').trim();
            const subject = formData.get('subject').trim();
            const message = formData.get('message').trim();
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                showMessage('Thank you for your speaking engagement request! I\'ll get back to you soon.', 'success');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Log form data (for future backend integration)
                console.log('Events form submitted:', { name, email, subject, message });
            }, 1500);
        });
    }
}

// Parallax effects
function initParallaxEffects() {
    // Parallax for sections
    const sections = document.querySelectorAll('section');
    
    const parallaxObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                const speed = section.dataset.speed || 0.5;
                
                // Add parallax scroll effect
                const handleScroll = () => {
                    const scrolled = window.pageYOffset;
                    const rate = scrolled * -speed;
                    section.style.transform = `translateY(${rate}px)`;
                };
                
                // Throttle scroll events for performance
                let ticking = false;
                const throttledScroll = () => {
                    if (!ticking) {
                        requestAnimationFrame(() => {
                            handleScroll();
                            ticking = false;
                        });
                        ticking = true;
                    }
                };
                
                window.addEventListener('scroll', throttledScroll);
                
                // Store the handler for cleanup
                section._parallaxHandler = throttledScroll;
            } else {
                // Clean up event listener when section is not visible
                const section = entry.target;
                if (section._parallaxHandler) {
                    window.removeEventListener('scroll', section._parallaxHandler);
                    section._parallaxHandler = null;
                }
            }
        });
    }, {
        threshold: 0,
        rootMargin: '50px 0px -50px 0px'
    });
    
    // Add parallax data attributes to sections
    sections.forEach((section, index) => {
        // Different speeds for different sections
        const speeds = [0.3, 0.2, 0.4, 0.1, 0.3];
        section.dataset.speed = speeds[index] || 0.2;
        parallaxObserver.observe(section);
    });
    
    // Parallax for hero elements
    const heroElements = document.querySelectorAll('.hero-text, .hero-image');
    
    const heroParallax = () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        heroElements.forEach((element, index) => {
            const speed = (index + 1) * 0.1;
            element.style.transform = `translateY(${rate * speed}px)`;
        });
    };
    
    // Throttle hero parallax
    let heroTicking = false;
    const throttledHeroParallax = () => {
        if (!heroTicking) {
            requestAnimationFrame(() => {
                heroParallax();
                heroTicking = false;
            });
            heroTicking = true;
        }
    };
    
    window.addEventListener('scroll', throttledHeroParallax);
}

// Scroll effects and animations
function initScrollEffects() {
    // Fade in elements on scroll
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
    
    // Observe elements for fade-in effect
    const fadeElements = document.querySelectorAll('.hero-text, .hero-image, .about-text, .book-details, .contact-info, .contact-form, .prayer-content');
    
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Header scroll effect with new colors
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(244, 243, 239, 0.98)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = 'rgba(244, 243, 239, 0.95)';
            header.style.backdropFilter = 'blur(15px)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Accessibility enhancements
function initAccessibility() {
    // Skip link functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Keyboard navigation for social links
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Focus management for forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const firstInput = form.querySelector('input, textarea');
        const lastInput = form.querySelectorAll('input, textarea');
        
        if (firstInput && lastInput.length > 0) {
            const lastElement = lastInput[lastInput.length - 1];
            
            // Trap focus within form
            lastElement.addEventListener('keydown', function(e) {
                if (e.key === 'Tab' && !e.shiftKey) {
                    e.preventDefault();
                    firstInput.focus();
                }
            });
            
            firstInput.addEventListener('keydown', function(e) {
                if (e.key === 'Tab' && e.shiftKey) {
                    e.preventDefault();
                    lastElement.focus();
                }
            });
        }
    });
}

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type = 'info') {
    // Remove existing messages
    const existingMessage = document.querySelector('.message-toast');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `message-toast message-${type}`;
    messageEl.innerHTML = `
        <div class="message-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="message-close" aria-label="Close message">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    messageEl.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    messageEl.querySelector('.message-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    messageEl.querySelector('.message-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
    `;
    
    // Add to page
    document.body.appendChild(messageEl);
    
    // Animate in
    setTimeout(() => {
        messageEl.style.transform = 'translateX(0)';
    }, 100);
    
    // Close functionality
    const closeBtn = messageEl.querySelector('.message-close');
    closeBtn.addEventListener('click', () => {
        messageEl.style.transform = 'translateX(100%)';
        setTimeout(() => messageEl.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageEl.parentNode) {
            messageEl.style.transform = 'translateX(100%)';
            setTimeout(() => messageEl.remove(), 300);
        }
    }, 5000);
}

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const optimizedScrollHandler = debounce(() => {
    // Scroll-based functionality can be added here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Handle reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition', 'none');
}