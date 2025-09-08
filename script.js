// Author Website JavaScript
// Clean, modern functionality for Elizabeth K. Green's website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSmoothScrolling();
    initContactForm();
    initPrayerForm();
    initEventsForm();
    initCalendar();
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
            
            // Create email content for prayer request
            const emailSubject = `Prayer Request: ${subject}`;
            const emailBody = `Email: ${email}\nSubject: ${subject}\n\nPrayer Request:\n${request}\n\nThis is a prayer request from the website contact form.`;
            
            // Create mailto link
            const mailtoLink = `mailto:writeovercoffeee@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            showMessage('Your email client will open with your prayer request. Please send the email to complete your prayer request.', 'success');
        });
        
        // Add Request Booking button functionality
        const requestBookingBtn = document.getElementById('request-booking-btn');
        if (requestBookingBtn) {
            requestBookingBtn.addEventListener('click', function() {
                // Get form data
                const formData = new FormData(prayerForm);
                const email = formData.get('email').trim();
                const subject = formData.get('subject').trim();
                const request = formData.get('request').trim();
                
                // Basic validation
                if (!email || !subject || !request) {
                    showMessage('Please fill in all required fields before requesting a booking.', 'error');
                    return;
                }
                
                if (!isValidEmail(email)) {
                    showMessage('Please enter a valid email address.', 'error');
                    return;
                }
                
                // Create email content for booking request
                const emailSubject = `Booking Request: ${subject}`;
                const emailBody = `Name: ${email}\nEmail: ${email}\nRequest Type: ${subject}\n\nDetails:\n${request}\n\nThis is a booking request from the prayer request form.`;
                
                // Create mailto link
                const mailtoLink = `mailto:writeovercoffeee@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
                
                // Open email client
                window.location.href = mailtoLink;
                
                // Show success message
                showMessage('Your email client will open with your booking request. Please send the email to complete your booking request.', 'success');
            });
        }
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
            
            // Create email content
            const emailSubject = `Speaking Engagement Request: ${subject}`;
            const emailBody = `Name: ${name}\nEmail: ${email}\nEvent Type: ${subject}\n\nEvent Details:\n${message}`;
            
            // Create mailto link
            const mailtoLink = `mailto:writeovercoffeee@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            showMessage('Your email client will open with your request. Please send the email to complete your booking request.', 'success');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    }
}

// Optimized Parallax effects
function initParallaxEffects() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        return; // Skip parallax if user prefers reduced motion
    }
    
    // Disable parallax on mobile devices for better performance
    if (window.innerWidth <= 768) {
        return;
    }
    
    // Single optimized parallax handler
    let ticking = false;
    const parallaxElements = [];
    
    // Collect all parallax elements
    const sections = document.querySelectorAll('section');
    const heroElements = document.querySelectorAll('.hero-text, .hero-image');
    
    // Add sections to parallax elements with reduced speeds for smoother effect
    sections.forEach((section, index) => {
        const speeds = [0.05, 0.03, 0.08, 0.02, 0.05]; // Much more subtle speeds
        parallaxElements.push({
            element: section,
            speed: speeds[index] || 0.03,
            type: 'section'
        });
    });
    
    // Add hero elements to parallax elements
    heroElements.forEach((element, index) => {
        parallaxElements.push({
            element: element,
            speed: (index + 1) * 0.01, // Very subtle hero parallax
            type: 'hero'
        });
    });
    
    // Single scroll handler for all parallax effects
    const updateParallax = () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(({ element, speed, type }) => {
            if (!element || !element.isConnected) return;
            
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                const rate = scrolled * -speed;
                
                // Use transform3d for hardware acceleration and smoother performance
                element.style.transform = `translate3d(0, ${rate}px, 0)`;
                element.style.willChange = 'transform';
            } else {
                // Reset will-change when not visible for better performance
                element.style.willChange = 'auto';
            }
        });
        
        ticking = false;
    };
    
    // Optimized scroll handler with passive listener
    const handleScroll = () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    };
    
    // Add scroll listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Clean up function
    return () => {
        window.removeEventListener('scroll', handleScroll);
        // Reset all transforms
        parallaxElements.forEach(({ element }) => {
            if (element) {
                element.style.transform = '';
                element.style.willChange = 'auto';
            }
        });
    };
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

// Calendar functionality
function initCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    const currentMonthEl = document.getElementById('currentMonth');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    
    if (!calendarGrid || !currentMonthEl || !prevMonthBtn || !nextMonthBtn) {
        return; // Calendar elements not found
    }
    
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    
    // National holidays (US) - only these dates are marked as booked
    const bookedDates = new Set([
        // 2025 Holidays
        '2025-01-01', // New Year's Day
        '2025-01-20', // Martin Luther King Jr. Day
        '2025-02-17', // Presidents' Day
        '2025-05-26', // Memorial Day
        '2025-06-19', // Juneteenth
        '2025-07-04', // Independence Day
        '2025-09-01', // Labor Day
        '2025-10-13', // Columbus Day
        '2025-11-11', // Veterans Day
        '2025-11-27', // Thanksgiving Day
        '2025-12-25', // Christmas Day
        
        // 2026 Holidays
        '2026-01-01', // New Year's Day
        '2026-01-19', // Martin Luther King Jr. Day
        '2026-02-16', // Presidents' Day
        '2026-05-25', // Memorial Day
        '2026-06-19', // Juneteenth
        '2026-07-04', // Independence Day
        '2026-09-07', // Labor Day
        '2026-10-12', // Columbus Day
        '2026-11-11', // Veterans Day
        '2026-11-26', // Thanksgiving Day
        '2026-12-25'  // Christmas Day
    ]);
    
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    function renderCalendar() {
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();
        
        currentMonthEl.textContent = `${monthNames[currentMonth]} ${currentYear}`;
        
        calendarGrid.innerHTML = '';
        
        // Add day headers
        const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayHeaders.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'calendar-day-header';
            dayHeader.textContent = day;
            dayHeader.style.cssText = `
                font-weight: 600;
                color: var(--primary-color);
                text-align: center;
                padding: 8px 0;
                font-size: 0.8rem;
            `;
            calendarGrid.appendChild(dayHeader);
        });
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day other-month';
            calendarGrid.appendChild(emptyDay);
        }
        
        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = day;
            
            const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const isBooked = bookedDates.has(dateString);
            const isToday = currentDate.getDate() === day && 
                           currentDate.getMonth() === currentMonth && 
                           currentDate.getFullYear() === currentYear;
            
            if (isToday) {
                dayElement.classList.add('today');
            }
            
            if (isBooked) {
                dayElement.classList.add('booked');
                dayElement.title = 'This date is already booked';
            } else {
                dayElement.classList.add('available');
                dayElement.title = 'Click to select this date';
                
                dayElement.addEventListener('click', function() {
                    // You can add booking functionality here
                    showMessage(`Selected date: ${monthNames[currentMonth]} ${day}, ${currentYear}`, 'info');
                });
            }
            
            calendarGrid.appendChild(dayElement);
        }
    }
    
    function changeMonth(direction) {
        if (direction === 'prev') {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
        } else {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
        }
        
        // Don't allow going beyond December 2026
        if (currentYear > 2026 || (currentYear === 2026 && currentMonth > 11)) {
            if (direction === 'next') {
                currentMonth = 11;
                currentYear = 2026;
                return;
            }
        }
        
        renderCalendar();
    }
    
    prevMonthBtn.addEventListener('click', () => changeMonth('prev'));
    nextMonthBtn.addEventListener('click', () => changeMonth('next'));
    
    // Initial render
    renderCalendar();
}