// Ensure service links are clickable
document.addEventListener('DOMContentLoaded', function() {
    // Get all service links
    const serviceLinks = document.querySelectorAll('.service-link');
    
    // Add click event listeners to each link
    serviceLinks.forEach(link => {
        // Make the entire service card clickable
        const serviceCard = link.closest('.service-card');
        if (serviceCard) {
            serviceCard.addEventListener('click', function(e) {
                // Only trigger if the click wasn't directly on the link
                if (!e.target.closest('.service-link')) {
                    // Get the href from the link
                    const href = link.getAttribute('href');
                    if (href) {
                        window.location.href = href;
                    }
                }
            });
            
            // Add cursor pointer to indicate clickable area
            serviceCard.style.cursor = 'pointer';
        }
    });
});
