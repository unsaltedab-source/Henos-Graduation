document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to('.eyebrow', { opacity: 1, y: 0, duration: 1 })
      .to('.bell-container', { opacity: 1, scale: 1, duration: 1 }, '-=0.5')
      .to('h1', { opacity: 1, y: 0, duration: 1 }, '-=0.5')
      .to('.divider', { opacity: 1, width: 150, duration: 0.8 }, '-=0.5')
      .to('.subtitle', { opacity: 1, y: 0, duration: 1 }, '-=0.5')
      .to('.cta-group', { opacity: 1, y: 0, duration: 1 }, '-=0.5');

    // Bell Sway Animation
    gsap.to('#graduation-bell', {
        rotation: 10,
        transformOrigin: '50% 10%',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    // Parallax Stars
    const createStars = () => {
        const hero = document.getElementById('hero');
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const size = Math.random() * 3 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            hero.appendChild(star);

            // Subtle twinkle
            gsap.to(star, {
                opacity: Math.random(),
                duration: Math.random() * 2 + 1,
                repeat: -1,
                yoyo: true
            });
        }
    };
    createStars();

    // Scroll Trigger Animations for Detail Cards
    gsap.from('.detail-card', {
        scrollTrigger: {
            trigger: '.details-cards-container',
            start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2
    });

    // Modal Logic
    const openBtn = document.getElementById('open-invitation');
    const closeBtn = document.querySelector('.close-modal');
    const overlay = document.getElementById('invitation-overlay');
    const modal = document.getElementById('invitation-modal');

    openBtn.addEventListener('click', () => {
        overlay.classList.remove('hidden');
        gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.5 });
        gsap.fromTo(modal, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power4.out' });
        document.body.style.overflow = 'hidden';
    });

    const closeModal = () => {
        gsap.to(modal, { y: 100, opacity: 0, duration: 0.5 });
        gsap.to(overlay, { opacity: 0, duration: 0.5, onComplete: () => {
            overlay.classList.add('hidden');
            document.body.style.overflow = '';
        }});
    };

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    // Smooth Scroll for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
