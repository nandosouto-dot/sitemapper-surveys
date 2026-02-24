/* ============================================================
   SITEMAPPER SURVEYS — Main JavaScript
   Fragment loader, mobile menu, scroll effects
   ============================================================ */

(function () {
  'use strict';

  // ---------- Fragment Loader ----------
  // Loads HTML fragments from /includes/ into elements with [data-include]
  async function loadIncludes() {
    const includes = document.querySelectorAll('[data-include]');
    const promises = Array.from(includes).map(async (el) => {
      const path = el.getAttribute('data-include');
      try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Failed to load ${path}: ${response.status}`);
        const html = await response.text();
        el.innerHTML = html;
        el.removeAttribute('data-include');
      } catch (err) {
        console.error(`[SMS] Include error: ${err.message}`);
        el.innerHTML = `<!-- Failed to load: ${path} -->`;
      }
    });

    await Promise.all(promises);

    // After includes are loaded, initialise components that depend on them
    initMobileMenu();
    setActiveNavLink();
  }

  // ---------- Mobile Menu ----------
  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- Active Nav Link ----------
  function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  // ---------- Scroll Fade-In ----------
  function initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
  }

  // ---------- Init ----------
  document.addEventListener('DOMContentLoaded', async () => {
    await loadIncludes();
    initScrollAnimations();
  });
})();
