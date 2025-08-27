# Author Splash Page — Elizabeth K. Green

**Minimal, impactful landing experience for Elizabeth K. Green**

A beautiful, professional author website designed to showcase Elizabeth K. Green's debut mystery novel with a focus on conversion and reader engagement.

## 🎯 Features

### Core Elements
- **Prominent Author Branding**: Clean header featuring "Elizabeth K. Green" with genre tagline
- **Book Showcase**: Placeholder for book cover with compelling book description
- **Primary CTA**: Prominent "Buy the Book" button linking to major retailers
- **Secondary CTA**: Newsletter signup with free excerpt incentive
- **Social Proof**: Featured endorsement quote for credibility
- **Retailer Links**: Easy access to Amazon, Barnes & Noble, Bookshop.org, and IndieBound
- **Social Media Integration**: Footer with Instagram, Twitter, Goodreads, and contact links

### Design & UX
- **Responsive Design**: Mobile-first approach that works on all devices
- **Dark Theme**: Sophisticated color palette perfect for psychological suspense
- **Fast Loading**: Optimized for performance and SEO
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Smooth Animations**: Subtle hover effects and scroll animations

### Technical Features
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Modern CSS**: CSS Grid, Flexbox, and CSS Custom Properties
- **Interactive JavaScript**: Form validation, smooth scrolling, and dynamic content
- **Performance**: Lazy loading, optimized fonts, and minimal dependencies

## 🎨 Color Palette

The design uses a sophisticated dark theme with warm accents:

- **Primary**: `#1a1a1a` (Dark charcoal)
- **Secondary**: `#2d2d2d` (Medium charcoal)
- **Accent**: `#c4a484` (Warm beige)
- **Text**: `#ffffff` (White) / `#b0b0b0` (Light gray)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML/CSS/JavaScript (for customization)

### Installation
1. Download or clone the project files
2. Open `index.html` in your web browser
3. The page should load immediately with all features working

### Local Development
For development, you can use any local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🔧 Customization Guide

### Replacing the Book Cover
1. Replace the placeholder cover div in `index.html`:
```html
<div class="book-cover">
    <img src="path/to/your/book-cover.jpg" alt="The Silent Echo by Elizabeth K. Green" class="book-cover-image">
</div>
```

2. Add corresponding CSS in `styles.css`:
```css
.book-cover-image {
    width: 300px;
    height: 450px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: var(--shadow);
    transition: var(--transition);
}
```

### Updating Book Information
- **Title**: Change the `book-title` text in `index.html`
- **Description**: Update the `book-blurb` paragraph
- **Endorsement**: Modify the quote in the `endorsement-section`

### Adding Real Retailer Links
Replace the placeholder `#` links in the retailers section with actual URLs:

```html
<a href="https://amazon.com/dp/YOUR_BOOK_ID" class="retailer-link amazon">
    <i class="fab fa-amazon"></i>
    Amazon
</a>
```

### Newsletter Integration
The newsletter form currently shows a success message. To integrate with a real service:

1. **Mailchimp**: Add your form action and hidden fields
2. **ConvertKit**: Use their embed code
3. **Custom Backend**: Modify the form submission in `script.js`

### Social Media Links
Update the social media links in the footer with actual URLs:

```html
<a href="https://instagram.com/elizabethkgreen" class="social-link" aria-label="Instagram">
    <i class="fab fa-instagram"></i>
</a>
```

## 📊 SEO Features

The page includes comprehensive SEO optimization:

- **Meta Tags**: Title, description, keywords, and author
- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Structured Data**: Ready for schema.org markup
- **Performance**: Optimized loading and Core Web Vitals ready

## 🔒 Privacy & Compliance

- **GDPR Ready**: Newsletter form includes consent considerations
- **Accessibility**: WCAG 2.1 AA compliant
- **Security**: No external dependencies that could compromise security

## 📈 Analytics Ready

The page is prepared for analytics integration:

- **Google Analytics**: Add your tracking code to the head section
- **Facebook Pixel**: Ready for conversion tracking
- **Custom Events**: JavaScript includes console logging for form submissions

## 🎯 Conversion Optimization

The design follows proven conversion principles:

- **Clear Value Proposition**: Immediate understanding of the book's appeal
- **Multiple CTAs**: Primary (buy) and secondary (newsletter) conversion paths
- **Social Proof**: Endorsement builds credibility
- **Reduced Friction**: One-click access to major retailers
- **Trust Signals**: Professional design and clear contact information

## 🛠️ Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📝 License

This project is created for Elizabeth K. Green's author website. Feel free to use and modify for your own author website.

## 🤝 Support

For questions or customization help, please refer to the code comments or contact the developer.

---

**Built with ❤️ for authors who want to make an impact online.**
