(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.reveal');
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      navLinks.classList.toggle('open', open);
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
      navLinks.classList.remove('open');
    }));
  }

  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    reveals.forEach(element => observer.observe(element));
  } else {
    reveals.forEach(element => element.classList.add('visible'));
  }

  const dashboard = document.querySelector('.dashboard-shell');
  if (dashboard && window.matchMedia('(pointer: fine)').matches && !reducedMotion) {
    dashboard.addEventListener('pointermove', event => {
      const bounds = dashboard.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      dashboard.style.transform = `perspective(1600px) rotateY(${-2 + x * 1.7}deg) rotateX(${1 - y * 1.2}deg)`;
    });
    dashboard.addEventListener('pointerleave', () => {
      dashboard.style.transform = 'perspective(1600px) rotateY(-2deg) rotateX(1deg)';
    });
  }
})();
