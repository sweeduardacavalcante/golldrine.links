document.addEventListener('DOMContentLoaded', function() {
    // Elementos dos modais
    const startModal = document.getElementById('start-modal');
    const guideModal = document.getElementById('guide-modal');
    const methodologyModal = document.getElementById('methodology-modal');
    const successModal = document.getElementById('success-modal');
    
    // Botões para abrir modais
    const startNowBtn = document.getElementById('start-now');
    const quickStartBtn = document.getElementById('quick-start');
    const methodologyBtn = document.getElementById('methodology');
    const successCasesBtn = document.getElementById('success-cases');
    const contactAfterMethodBtn = document.getElementById('contact-after-method');
    const contactAfterSuccessBtn = document.getElementById('contact-after-success');
    
    // Botões para fechar modais
    const closeModalButtons = document.querySelectorAll('.close-modal');
    
    // Formulários
    const projectForm = document.querySelector('#start-modal form');
    const guideForm = document.querySelector('#guide-modal form');

    // Inicializa animações de scroll
    const initScrollAnimations = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Para link cards com delays individuais
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
        
        // Observa todos os elementos com a classe animate-on-scroll
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    };

    // Função para abrir modal
    const openModal = (modal) => {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Dispara animação após o display ser setado
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    };

    // Função para fechar modal
    const closeModal = (modal) => {
        modal.classList.remove('show');
        
        // Espera a animação completar antes de esconder
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    };

    // Event listeners para abrir modais
    if (startNowBtn) {
        startNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(startModal);
        });
    }

    if (quickStartBtn) {
        quickStartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(guideModal);
        });
    }

    if (methodologyBtn) {
        methodologyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(methodologyModal);
        });
    }

    if (successCasesBtn) {
        successCasesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(successModal);
        });
    }

    // Event listeners para botões de call-to-action dentro dos modais
    if (contactAfterMethodBtn) {
        contactAfterMethodBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal(methodologyModal);
            openModal(startModal);
        });
    }

    if (contactAfterSuccessBtn) {
        contactAfterSuccessBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal(successModal);
            openModal(startModal);
        });
    }

    // Event listeners para fechar modais
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });

    // Fechar modal ao clicar fora do conteúdo
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });

    // Fechar modal com tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal.show');
            if (openModal) {
                closeModal(openModal);
            }
        }
    });

    // Submissão de formulários
    if (projectForm) {
        projectForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const projectName = document.getElementById('project-name').value;
            const businessGoal = document.getElementById('business-goal').value;
            const email = document.getElementById('email').value;

            // Simulação de envio - substituir por código real
            alert(`Obrigado! Recebemos os detalhes do projeto "${projectName}". Em breve entraremos em contato pelo e-mail ${email}.`);

            closeModal(startModal);
            this.reset();
        });
    }

    if (guideForm) {
        guideForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('guide-name').value;
            const email = document.getElementById('guide-email').value;
            const businessType = document.getElementById('business-type').value;

            // Simulação de envio - substituir por código real
            alert(`Obrigado, ${name}! Seu guia exclusivo será enviado para ${email}.`);

            closeModal(guideModal);
            this.reset();
        });
    }

    // Animações nos link cards
    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const arrow = this.querySelector('.link-arrow');
            if (arrow) arrow.style.transform = 'translateX(4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            const arrow = this.querySelector('.link-arrow');
            if (arrow) arrow.style.transform = 'translateX(0)';
        });
    });

    // Verifica visibilidade do footer
    const checkFooterVisibility = () => {
        const footer = document.querySelector('footer');
        if (!footer) return;
        
        const footerPosition = footer.getBoundingClientRect();
        const screenPosition = window.innerHeight;
        
        if (footerPosition.top < screenPosition) {
            footer.classList.add('visible');
        }
    };
    
    // Inicializações
    initScrollAnimations();
    window.addEventListener('scroll', checkFooterVisibility);
    window.addEventListener('load', checkFooterVisibility);
});
