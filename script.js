// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('start-modal');
    const startNowBtn = document.getElementById('start-now');
    const quickStartBtn = document.getElementById('quick-start');
    const closeModal = document.querySelector('.close-modal');
    const projectForm = document.getElementById('project-form');
    
    // Initialize Intersection Observer for scroll animations
    const initScrollAnimations = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // For link cards with individual delays
                    if (entry.target.classList.contains('link-card')) {
                        const delay = entry.target.style.getPropertyValue('--delay') || '0s';
                        entry.target.style.transitionDelay = delay;
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe all elements with animate-on-scroll class
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    };
    
    // Open modal when "Start Now" is clicked
    startNowBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Trigger modal animation after display is set
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    });
    
    // Open modal when "Quick Start Guide" is clicked
    quickStartBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    });
    
    // Close modal when X is clicked
    closeModal.addEventListener('click', function() {
        modal.classList.remove('show');
        
        // Wait for animation to complete before hiding
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    });
    
    // Close modal when clicking outside content
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
            
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }
    });
    
    // Form submission
   const projectForm = document.getElementById('project-form');
const modal = document.getElementById('start-modal');

projectForm.addEventListener('submit', function () {
    // Pequeno delay para garantir que o Formspree processe o envio antes de esconder o modal
    setTimeout(() => {
        // Mostrar alerta (opcional)
        alert('Obrigado! Recebemos seu projeto. Em breve entraremos em contato.');

        // Fechar o modal
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';

        // Resetar o formulário
        projectForm.reset();
    }, 100); // tempo bem curto, só para garantir que o submit vá
});
    
    // Add hover animation to link cards
    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const arrow = this.querySelector('.link-arrow');
            arrow.style.transform = 'translateX(4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            const arrow = this.querySelector('.link-arrow');
            arrow.style.transform = 'translateX(0)';
        });
    });
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Make sure footer is visible if user scrolls to bottom directly
    const checkFooterVisibility = () => {
        const footer = document.querySelector('footer');
        const footerPosition = footer.getBoundingClientRect();
        const screenPosition = window.innerHeight;
        
        if (footerPosition.top < screenPosition) {
            footer.classList.add('visible');
        }
    };
    
    window.addEventListener('scroll', checkFooterVisibility);
    window.addEventListener('load', checkFooterVisibility);
});
