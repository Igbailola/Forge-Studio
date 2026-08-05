/* ============================================
   Forge Studio — App JavaScript
   Hash Router, Mobile Menu, FAQ Accordion,
   Scroll Animations, Portfolio Filter
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Elements ----
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile-menu');
  const navLinks = document.querySelectorAll('.navbar__link');
  const mobileLinks = document.querySelectorAll('.navbar__mobile-link');
  const pages = document.querySelectorAll('.page');
  const faqItems = document.querySelectorAll('.faq-item');
  const filterBtns = document.querySelectorAll('.portfolio-filter');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const contactForm = document.getElementById('contact-form');

  // ============================================
  // HASH ROUTER
  // ============================================
  const routes = {
    '': 'page-home',
    '#/': 'page-home',
    '#/home': 'page-home',
    '#/about': 'page-about',
    '#/services': 'page-services',
    '#/portfolio': 'page-portfolio',
    '#/testimonials': 'page-testimonials',
    '#/faq-contact': 'page-faq-contact',
  };

  function navigateTo(hash) {
    const pageId = routes[hash] || routes[''];

    // Hide all pages
    pages.forEach(p => p.classList.remove('active'));

    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add('active');
    }

    // Update nav active states
    const cleanHash = hash || '#/home';
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === cleanHash);
    });
    mobileLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === cleanHash);
    });

    // Close mobile menu
    closeMobileMenu();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Re-trigger animations
    requestAnimationFrame(() => {
      initScrollAnimations();
    });
  }

  window.addEventListener('hashchange', () => {
    navigateTo(window.location.hash);
  });

  // Initial route
  navigateTo(window.location.hash);

  // ============================================
  // NAVBAR SCROLL SHADOW
  // ============================================
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // ============================================
  // MOBILE MENU
  // ============================================
  function closeMobileMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // ============================================
  // FAQ ACCORDION
  // ============================================
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-item__question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      faqItems.forEach(i => i.classList.remove('open'));

      // Toggle clicked
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // ============================================
  // PORTFOLIO FILTER
  // ============================================
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.filter;

      // Update active filter
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter items
      portfolioItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // ============================================
  // CONTACT FORM
  // ============================================
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple validation
      const name = contactForm.querySelector('#contact-name');
      const email = contactForm.querySelector('#contact-email');
      const message = contactForm.querySelector('#contact-message');

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        return;
      }

      // Show success
      contactForm.style.display = 'none';
      document.querySelector('.contact-form__success').classList.add('show');

      // Reset after 3s
      setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'block';
        document.querySelector('.contact-form__success').classList.remove('show');
      }, 4000);
    });
  }

  // ============================================
  // SCROLL ANIMATIONS (IntersectionObserver)
  // ============================================
  function initScrollAnimations() {
    const animatedEls = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    animatedEls.forEach(el => {
      // Only observe if not already visible
      if (!el.classList.contains('visible')) {
        observer.observe(el);
      }
    });
  }

  initScrollAnimations();

  // ============================================
  // SMOOTH ANCHOR HANDLING (internal links)
  // ============================================
  document.querySelectorAll('a[href^="#/"]').forEach(link => {
    link.addEventListener('click', (e) => {
      // Let hashchange handle it
    });
  });

  // ============================================
  // COUNTER ANIMATION (for stats)
  // ============================================
  function animateCounter(el, target, suffix = '') {
    const duration = 1500;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // Observe stat counters
  const statNumbers = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, suffix);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => counterObserver.observe(el));
});
