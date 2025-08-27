// Newsletter form handling
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            
            if (!email) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            showMessage('Thank you for subscribing! Check your email for the free excerpt.', 'success');
            emailInput.value = '';
            
            // In a real implementation, you would send this to your backend
            console.log('Newsletter subscription:', email);
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to header
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add loading animation to placeholder cover
    const placeholderCover = document.querySelector('.placeholder-cover');
    if (placeholderCover) {
        placeholderCover.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'shimmer 2s infinite';
            }, 10);
        });
    }

    // Add hover effects to retailer links
    const retailerLinks = document.querySelectorAll('.retailer-link');
    retailerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add intersection observer for fade-in animations
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
    const fadeElements = document.querySelectorAll('.endorsement-section, .newsletter-section, .retailers-section');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Email validation function
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
    `;

    if (type === 'success') {
        messageElement.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
    } else {
        messageElement.style.background = 'linear-gradient(135deg, #f44336, #d32f2f)';
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

// Add some interactive features for the book cover placeholder
function replacePlaceholderCover() {
    const placeholder = document.querySelector('.placeholder-cover');
    if (placeholder) {
        // This would be replaced with actual book cover image
        placeholder.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <i class="fas fa-image" style="font-size: 3rem; margin-bottom: 1rem; color: #8b7355;"></i>
                <p style="font-size: 1rem; color: #8b7355;">Replace with actual book cover</p>
                <button onclick="restorePlaceholder()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #8b7355; border: none; border-radius: 4px; color: white; cursor: pointer;">
                    Restore Placeholder
                </button>
            </div>
        `;
    }
}

function restorePlaceholder() {
    const placeholder = document.querySelector('.placeholder-cover');
    if (placeholder) {
        placeholder.innerHTML = `
            <i class="fas fa-book-open"></i>
            <span>Book Cover</span>
        `;
    }
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key to close any open modals or messages
    if (e.key === 'Escape') {
        const message = document.querySelector('.message');
        if (message) {
            message.remove();
        }
    }
});

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

// Initialize parallax effect
initParallax();
