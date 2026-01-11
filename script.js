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
    
    // Initialize navigation active state
    initNavigation();
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
