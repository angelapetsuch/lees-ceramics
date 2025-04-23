document.addEventListener('DOMContentLoaded', function() {
    const serviceTabs = document.querySelectorAll('.service-tab');
    const serviceCards = document.querySelectorAll('.service-card');
    const servicesGrid = document.querySelector('.services-grid');
    
    function showServices(isCommercial) {
        // Update grid layout
        servicesGrid.dataset.view = isCommercial ? 'commercial' : 'residential';
        
        // First hide all cards with a small delay to allow for transition
        serviceCards.forEach(card => {
            card.style.opacity = '0';
            card.hidden = true;
        });
        
        // After a small delay, show the relevant cards
        setTimeout(() => {
            serviceCards.forEach(card => {
                const title = card.querySelector('.service-title').textContent.toLowerCase();
                const isCommercialCard = title.includes('commercial') || 
                                       title.includes('marble') || 
                                       title.includes('mosaic');
                
                if (isCommercial === isCommercialCard) {
                    card.hidden = false;
                    // Use a small delay to trigger the transition
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 50);
                }
            });
        }, 300);
    }
    
    serviceTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            serviceTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            showServices(tab.textContent === 'Commercial');
        });
    });
    
    // Set initial state
    serviceTabs[0].classList.add('active');
    showServices(true);
});
