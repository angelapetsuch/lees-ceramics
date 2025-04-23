// Animate numbers when scrolling into view
document.addEventListener('DOMContentLoaded', () => {
    const reasons = document.querySelectorAll('.reason');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animate the number
                const number = entry.target.querySelector('.reason-number');
                number.style.opacity = '0.1';
                
                // Add hover effect after animation
                entry.target.addEventListener('mouseenter', () => {
                    number.style.opacity = '0.2';
                });
                
                entry.target.addEventListener('mouseleave', () => {
                    number.style.opacity = '0.1';
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    // Set initial state and observe each reason
    reasons.forEach(reason => {
        reason.style.opacity = '0';
        reason.style.transform = 'translateY(20px)';
        reason.style.transition = 'all 0.6s ease-out';
        observer.observe(reason);
    });
});
