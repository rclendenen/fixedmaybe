// Author Website JavaScript
// Clean, modern functionality for Elizabeth K. Green's website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    initEmailJS();
    
    // Initialize form handlers
    initContactForm();
    initPrayerForm();
    initSpeakingForm();
    initSubscribeForm();
    initBookingForm();
    
    // Initialize navigation active state
    initNavigation();
    
    // Initialize parallax effect
    initParallax();
    
    // Initialize flip cards
    initFlipCards();
});

// Initialize EmailJS
function initEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init('X1aBvO8QvL9P9gKPd');
    }
}

// Navigation active state
function initNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Remove existing active class first
        link.classList.remove('active');
        
        // Check if this link matches the current page
        if (currentPath === '/' && linkPath === 'index.html') {
            link.classList.add('active');
        } else if (currentPath.endsWith(linkPath)) {
            link.classList.add('active');
        }
    });
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
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
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Prepare email template parameters
            const templateParams = {
                from_email: email,
                from_name: name,
                subject: subject,
                message: message,
                to_email: 'writeovercoffeee@gmail.com'
            };
            
            // Send email using EmailJS
            if (typeof emailjs !== 'undefined') {
                emailjs.send('service_913jvci', 'template_njf9lce', templateParams)
                    .then(function(response) {
                        showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
                        contactForm.reset();
                    }, function(error) {
                        showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
                        console.error('EmailJS error:', error);
                    })
                    .finally(function() {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    });
            } else {
                showMessage('Email service is not available. Please try again later.', 'error');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

// Prayer request form handling
function initPrayerForm() {
    const prayerForm = document.getElementById('prayerForm');
    
    if (prayerForm) {
        prayerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
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
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Prepare email template parameters
            const templateParams = {
                from_email: email,
                from_name: email.split('@')[0],
                subject: subject,
                message: request,
                to_email: 'writeovercoffeee@gmail.com'
            };
            
            // Send email using EmailJS
            if (typeof emailjs !== 'undefined') {
                emailjs.send('service_913jvci', 'template_njf9lce', templateParams)
                    .then(function(response) {
                        showMessage('Thank you for sharing your prayer request. I will be praying for you.', 'success');
                        prayerForm.reset();
                    }, function(error) {
                        showMessage('Sorry, there was an error sending your prayer request. Please try again.', 'error');
                        console.error('EmailJS error:', error);
                    })
                    .finally(function() {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    });
            } else {
                showMessage('Email service is not available. Please try again later.', 'error');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

// Speaking form handling
function initSpeakingForm() {
    const speakingForm = document.getElementById('speakingForm');
    
    if (speakingForm) {
        speakingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
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
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Prepare email template parameters
            const templateParams = {
                from_email: email,
                from_name: name,
                subject: `Speaking Engagement Request: ${subject}`,
                message: `Name: ${name}\nEmail: ${email}\nEvent Type: ${subject}\n\nEvent Details:\n${message}`,
                to_email: 'writeovercoffeee@gmail.com'
            };
            
            // Send email using EmailJS
            if (typeof emailjs !== 'undefined') {
                emailjs.send('service_913jvci', 'template_njf9lce', templateParams)
                    .then(function(response) {
                        showMessage('Thank you for your booking request! I will get back to you soon.', 'success');
                        speakingForm.reset();
                    }, function(error) {
                        showMessage('Sorry, there was an error sending your booking request. Please try again.', 'error');
                        console.error('EmailJS error:', error);
                    })
                    .finally(function() {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    });
            } else {
                showMessage('Email service is not available. Please try again later.', 'error');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

// Subscribe form handling
function initSubscribeForm() {
    const subscribeForm = document.getElementById('subscribeForm');
    
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('#subscribeEmail').value.trim();
            
            // Basic validation
            if (!email) {
                showMessage('Please enter your email address.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
            submitBtn.disabled = true;
            
            // Prepare template parameters for EmailJS
            const templateParams = {
                to_email: 'writeovercoffeee@gmail.com',
                from_email: email,
                subject: 'New Newsletter Subscription',
                message: `New newsletter subscription from: ${email}`,
                reply_to: email
            };
            
            // Send email using EmailJS
            if (typeof emailjs !== 'undefined') {
                emailjs.send('service_913jvci', 'template_njf9lce', templateParams)
                    .then(function(response) {
                        showMessage('Thank you for subscribing! You will receive updates about upcoming events.', 'success');
                        subscribeForm.reset();
                    }, function(error) {
                        showMessage('Sorry, there was an error with your subscription. Please try again.', 'error');
                        console.error('EmailJS error:', error);
                    })
                    .finally(function() {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    });
            } else {
                // Fallback to Google Apps Script
                const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyoO8gGwq-V6CLYGX4bIuHRZpUvdTyv1AXIvAMecj7fRzYZoazH2QOqhs2bQnqq7SlL/exec';
                
                fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        timestamp: new Date().toISOString(),
                        source: 'elizabethkgreen.com'
                    })
                })
                .then(() => {
                    showMessage('Thank you for subscribing! You will receive updates about upcoming events.', 'success');
                    subscribeForm.reset();
                })
                .catch(error => {
                    console.error('Error:', error);
                    showMessage('Sorry, there was an error with your subscription. Please try again.', 'error');
                })
                .finally(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
            }
        });
    }
}

// Initialize flip cards for events
function initFlipCards() {
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        const flipBtn = card.querySelector('.flip-btn');
        const flipBtnBack = card.querySelector('.flip-btn-back');
        
        if (flipBtn) {
            flipBtn.addEventListener('click', function(e) {
                e.preventDefault();
                card.classList.add('flipped');
            });
        }
        
        if (flipBtnBack) {
            flipBtnBack.addEventListener('click', function(e) {
                e.preventDefault();
                card.classList.remove('flipped');
            });
        }
    });
}

// Parallax effect
function initParallax() {
    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return; // Skip parallax if user prefers reduced motion
    }
    
    // Disable parallax on mobile devices for better performance
    if (window.innerWidth <= 768) {
        return;
    }
    
    let ticking = false;
    const parallaxElements = document.querySelectorAll('.page-header, .nav-tile, .book-item, .event-item, .resource-card, .contact-info, .contact-form-container, .about-content, .booking-form, .prayer-form-container, .subscribe-form-container, .book-section, .event-item, .speaking-section');
    
    const updateParallax = () => {
        parallaxElements.forEach((element, index) => {
            if (!element) return;
            
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                // Calculate element's position relative to viewport
                const elementTop = rect.top + window.pageYOffset;
                const scrolled = window.pageYOffset;
                const elementCenter = elementTop + (rect.height / 2);
                const windowCenter = scrolled + (window.innerHeight / 2);
                
                // Different speeds for different elements (negative for opposite direction)
                const speeds = [-0.1, -0.08, -0.12, -0.06, -0.09, -0.11, -0.07, -0.13, -0.05, -0.1, -0.08, -0.09];
                const speed = speeds[index % speeds.length] || -0.1;
                
                // Calculate parallax offset based on distance from viewport center
                const distance = (elementCenter - windowCenter) * speed;
                const offset = distance * 0.3;
                
                // Use transform3d for hardware acceleration
                element.style.transform = `translate3d(0, ${offset}px, 0)`;
                element.style.willChange = 'transform';
            } else {
                // Reset transform when not visible
                element.style.transform = 'translate3d(0, 0, 0)';
                element.style.willChange = 'auto';
            }
        });
        
        ticking = false;
    };
    
    const handleScroll = () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    };
    
    // Add scroll listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    updateParallax();
    
    // Also update on resize
    window.addEventListener('resize', updateParallax, { passive: true });
}

// Booking form handling
function initBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('bookingEmail').value.trim();
            const phoneCountry = document.getElementById('phoneCountry').value;
            const phoneNumber = document.getElementById('phoneNumber').value.trim();
            const organization = document.getElementById('organization').value.trim();
            const website = document.getElementById('website').value.trim();
            const eventType = document.getElementById('eventType').value;
            const audience = document.getElementById('audience').value;
            const eventDate = document.getElementById('eventDate').value;
            const attendance = document.getElementById('attendance').value;
            const budget = document.getElementById('budget').value;
            const eventFormat = document.getElementById('eventFormat').value;
            const eventLocation = document.getElementById('eventLocation').value.trim();
            const addressCountry = document.getElementById('addressCountry').value;
            const addressLine1 = document.getElementById('addressLine1').value.trim();
            const addressLine2 = document.getElementById('addressLine2').value.trim();
            const city = document.getElementById('city').value.trim();
            const state = document.getElementById('state').value.trim();
            const zipCode = document.getElementById('zipCode').value.trim();
            const mainGoal = document.getElementById('mainGoal').value;
            const challenges = document.getElementById('challenges').value.trim();
            const additionalInfo = document.getElementById('additionalInfo').value.trim();
            const hearAbout = document.getElementById('hearAbout').value.trim();
            
            // Collect checkboxes
            const topics = Array.from(document.querySelectorAll('input[name="topics"]:checked')).map(cb => cb.value).join(', ');
            const includes = Array.from(document.querySelectorAll('input[name="includes"]:checked')).map(cb => cb.value).join(', ');
            
            // Basic validation
            if (!firstName || !lastName || !email || !phoneNumber || !eventDate || !hearAbout) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Build message content
            let messageContent = `BOOKING REQUEST\n\n`;
            messageContent += `CONTACT INFORMATION:\n`;
            messageContent += `Name: ${firstName} ${lastName}\n`;
            messageContent += `Email: ${email}\n`;
            messageContent += `Phone: ${phoneCountry} ${phoneNumber}\n`;
            messageContent += `Organization: ${organization || 'N/A'}\n`;
            messageContent += `Website: ${website || 'N/A'}\n\n`;
            
            messageContent += `EVENT DETAILS:\n`;
            messageContent += `Event Type: ${eventType || 'N/A'}\n`;
            messageContent += `Primary Audience: ${audience || 'N/A'}\n`;
            messageContent += `Date: ${eventDate}\n`;
            messageContent += `Estimated Attendance: ${attendance || 'N/A'}\n`;
            messageContent += `Budget: $${budget || 'N/A'}\n`;
            messageContent += `Format: ${eventFormat || 'N/A'}\n`;
            messageContent += `Location: ${eventLocation || 'N/A'}\n\n`;
            
            if (addressLine1 || city || state || zipCode) {
                messageContent += `ADDRESS:\n`;
                messageContent += `Country: ${addressCountry}\n`;
                messageContent += `Address Line 1: ${addressLine1 || 'N/A'}\n`;
                messageContent += `Address Line 2: ${addressLine2 || 'N/A'}\n`;
                messageContent += `City: ${city || 'N/A'}\n`;
                messageContent += `State: ${state || 'N/A'}\n`;
                messageContent += `ZIP Code: ${zipCode || 'N/A'}\n\n`;
            }
            
            messageContent += `SPEAKING TOPICS:\n${topics || 'None selected'}\n\n`;
            messageContent += `Main Goal: ${mainGoal || 'N/A'}\n\n`;
            messageContent += `Challenges/Themes: ${challenges || 'N/A'}\n\n`;
            messageContent += `Would like to include: ${includes || 'None selected'}\n\n`;
            messageContent += `Additional Information: ${additionalInfo || 'N/A'}\n\n`;
            messageContent += `How did you hear: ${hearAbout}\n`;
            
            // Prepare email template parameters (matching the speaking form format)
            const templateParams = {
                from_email: email,
                from_name: `${firstName} ${lastName}`,
                subject: `Booking Request: ${eventType || 'Speaking Engagement'} - ${eventDate || 'Date TBD'}`,
                message: messageContent,
                reply_to: email,
                to_email: 'writeovercoffeee@gmail.com'
            };
            
            // Send email using EmailJS (same service and template as speaking form)
            if (typeof emailjs !== 'undefined') {
                emailjs.send('service_913jvci', 'template_njf9lce', templateParams)
                    .then(function(response) {
                        showMessage('Thank you for your booking request! Elizabeth will get back to you soon.', 'success');
                        bookingForm.reset();
                    }, function(error) {
                        showMessage('Sorry, there was an error sending your booking request. Please try again.', 'error');
                        console.error('EmailJS error:', error);
                    })
                    .finally(function() {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    });
            } else {
                showMessage('Email service is not available. Please try again later.', 'error');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
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
        z-index: 10000;
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
