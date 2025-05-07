document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('start-modal');
    const startNowBtn = document.getElementById('start-now');
    const quickStartBtn = document.getElementById('quick-start');
    const closeModal = document.querySelector('.close-modal');
    const projectForm = document.getElementById('project-form');

    // Scroll animations
    const initScrollAnimations = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

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

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    };

    initScrollAnimations();

    // Open modal
    startNowBtn?.addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = 'flex';
        modal.classList.add('show');
    });

    // Quick Start closes modal
    quickStartBtn?.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 400);
    });

    // Close modal by X
    closeModal?.addEventListener('click', function () {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 400);
    });

    // Click outside modal content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.style.display = 'none', 400);
        }
    });

    // Optional: handle form submit
    projectForm?.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Projeto enviado com sucesso!');
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 400);
    });
});
