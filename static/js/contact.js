// FAQ Accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });
        
        // Toggle current FAQ item
        faqItem.classList.toggle('active');
    });
});

// Close alert messages
document.querySelectorAll('.alert-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        const alert = this.parentElement;
        alert.style.animation = 'slideUp 0.3s ease-out forwards';
        setTimeout(() => alert.remove(), 300);
    });
});

// Auto-close success messages after 5 seconds
document.querySelectorAll('.alert.alert-success').forEach(alert => {
    setTimeout(() => {
        alert.style.animation = 'slideUp 0.3s ease-out forwards';
        setTimeout(() => alert.remove(), 300);
    }, 5000);
});

// Form validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const email = this.querySelector('#email');
        const message = this.querySelector('#message');
        
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            e.preventDefault();
            alert('Please enter a valid email address');
            return;
        }
        
        // Message length validation
        if (message.value.trim().length < 10) {
            e.preventDefault();
            alert('Message must be at least 10 characters long');
            return;
        }
    });
}

// Add slide up animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);

console.log('Contact page initialized');
