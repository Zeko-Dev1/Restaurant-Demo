/* ==========================================================================
   Verde Restaurant — main.js
   Core site JavaScript: loader, navbar, scroll, AOS, lightbox, status
   DEMO TEMPLATE — All content is fictional placeholder data
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   Opening Hours Configuration
   Used throughout the site for dynamic status + reservation validation
   NOTE: Placeholder hours — replace with real restaurant schedule
   -------------------------------------------------------------------------- */
const OPENING_HOURS = {
  0: null,                          // Sunday lunch
  1: null,                          // Monday — Closed
  2: { open: '18:00', close: '23:00' }, // Tuesday
  3: { open: '18:00', close: '23:00' }, // Wednesday
  4: { open: '18:00', close: '23:00' }, // Thursday
  5: { open: '17:30', close: '00:00' }, // Friday (midnight)
  6: { open: '17:30', close: '00:00' }, // Saturday (midnight)
};

// Sunday has two service periods
const SUNDAY_HOURS = {
  lunch:  { open: '12:00', close: '16:00' },
  dinner: { open: '18:00', close: '22:00' },
};

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/* --------------------------------------------------------------------------
   Helpers
   -------------------------------------------------------------------------- */
function timeToMinutes(timeStr) {
  if (!timeStr) return null;
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

function getCurrentStatus() {
  const now   = new Date();
  const day   = now.getDay();
  const mins  = now.getHours() * 60 + now.getMinutes();

  if (day === 1) {
    return { open: false, label: 'Closed Today', next: 'Opens Tuesday at 6:00 PM' };
  }

  if (day === 0) {
    const lunch  = SUNDAY_HOURS.lunch;
    const dinner = SUNDAY_HOURS.dinner;
    const lStart = timeToMinutes(lunch.open);
    const lEnd   = timeToMinutes(lunch.close);
    const dStart = timeToMinutes(dinner.open);
    const dEnd   = timeToMinutes(dinner.close);

    if (mins >= lStart && mins < lEnd) {
      return { open: true,  label: 'Open Now', detail: `Until ${lunch.close} (Lunch)` };
    }
    if (mins >= dStart && mins < dEnd) {
      return { open: true,  label: 'Open Now', detail: `Until ${dinner.close} (Dinner)` };
    }
    if (mins < lStart) {
      return { open: false, label: 'Opens at 12:00 PM', detail: 'Sunday Lunch Service' };
    }
    if (mins >= lEnd && mins < dStart) {
      return { open: false, label: 'Reopens at 6:00 PM', detail: 'Sunday Dinner Service' };
    }
    return { open: false, label: 'Closed', detail: 'Opens Tuesday at 6:00 PM' };
  }

  const hours = OPENING_HOURS[day];
  if (!hours) return { open: false, label: 'Closed', next: 'See opening hours' };

  const openMins  = timeToMinutes(hours.open);
  let   closeMins = timeToMinutes(hours.close);
  // Handle midnight (00:00) = next day
  if (closeMins === 0) closeMins = 24 * 60;

  if (mins >= openMins && mins < closeMins) {
    const closeDisplay = hours.close === '00:00' ? '12:00 AM' : formatTime12(hours.close);
    return { open: true, label: 'Open Now', detail: `Until ${closeDisplay}` };
  }

  if (mins < openMins) {
    return { open: false, label: `Opens at ${formatTime12(hours.open)}`, detail: DAY_NAMES[day] };
  }

  // Find next open day
  let nextDay = (day + 1) % 7;
  let count   = 0;
  while (!OPENING_HOURS[nextDay] && nextDay !== 0 && count < 7) {
    nextDay = (nextDay + 1) % 7;
    count++;
  }
  return { open: false, label: 'Closed for the evening', detail: `Next: ${DAY_NAMES[nextDay]}` };
}

function formatTime12(time24) {
  const [h, m] = time24.split(':').map(Number);
  const ampm   = h >= 12 ? 'PM' : 'AM';
  const hour   = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, '0')} ${ampm}`;
}

/* --------------------------------------------------------------------------
   Page Loader
   -------------------------------------------------------------------------- */
function initPageLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('loaded');
      document.body.classList.add('page-fade-in');
    }, 800);
  });
}

/* --------------------------------------------------------------------------
   Scroll Progress Bar
   -------------------------------------------------------------------------- */
function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop  = document.documentElement.scrollTop;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width  = pct + '%';
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   Navbar — scroll state + active link
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.verde-navbar');
  if (!navbar) return;

  const heroEl = document.querySelector('.site-hero, .page-hero, .menu-hero, .pd-hero');
  const isLightNav = navbar.classList.contains('verde-navbar--light');
  let heroHeight = heroEl
    ? heroEl.offsetHeight * (isLightNav ? 0.85 : 0.4)
    : 100;

  function updateNav() {
    if (window.scrollY > heroHeight) {
      navbar.classList.add('nav-scrolled');
      navbar.classList.remove('nav-top');
    } else {
      navbar.classList.remove('nav-scrolled');
      navbar.classList.add('nav-top');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // Active link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link-item').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* --------------------------------------------------------------------------
   Mobile Menu
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const hamburger   = document.querySelector('.nav-hamburger');
  const drawer      = document.querySelector('.nav-mobile-drawer');
  const mobileLinks = document.querySelectorAll('.nav-mobile-drawer .mobile-link, .nav-mobile-drawer .mobile-reserve');

  if (!hamburger || !drawer) return;

  function openMenu() {
    hamburger.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => {
    drawer.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Close on link click
  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeMenu();
  });

  // Outside click
  drawer.addEventListener('click', e => {
    if (e.target === drawer) closeMenu();
  });
}

/* --------------------------------------------------------------------------
   AOS Initialization
   -------------------------------------------------------------------------- */
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      offset:   80,
      once:     true,
      easing:   'ease-out-cubic',
    });
  }
}

/* --------------------------------------------------------------------------
   Back to Top
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------------
   Smooth Scroll for Anchor Links
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 90; // navbar height
        const top    = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Current Year in Footer
   -------------------------------------------------------------------------- */
function initCurrentYear() {
  document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

/* --------------------------------------------------------------------------
   Dynamic Open / Closed Status
   -------------------------------------------------------------------------- */
function initOpenStatus() {
  const status = getCurrentStatus();

  // Update all status badges on the page
  document.querySelectorAll('.js-status-badge').forEach(badge => {
    badge.className = `status-badge ${status.open ? 'status-badge--open' : 'status-badge--closed'}`;
    badge.innerHTML = `
      <span class="status-dot"></span>
      ${status.label}
    `;
  });

  // Update floating card text
  document.querySelectorAll('.js-status-detail').forEach(el => {
    el.textContent = status.detail || '';
  });

  // Update hero floating card
  const heroCard = document.querySelector('.js-hero-status');
  if (heroCard) {
    const isOpen = status.open;
    heroCard.innerHTML = `
      <div class="floating-card__label">Status</div>
      <div class="floating-card__value d-flex align-items-center gap-2">
        <span class="status-badge ${isOpen ? 'status-badge--open' : 'status-badge--closed'}">
          <span class="status-dot"></span>
          ${status.label}
        </span>
      </div>
      ${status.detail ? `<div style="font-size:0.8rem;color:var(--text-light);margin-top:0.35rem;">${status.detail}</div>` : ''}
    `;
  }
}

/* --------------------------------------------------------------------------
   Current Day Highlight in Hours Tables
   -------------------------------------------------------------------------- */
function initTodayHighlight() {
  const dayName = DAY_NAMES[new Date().getDay()];
  // Tue/Wed/Thu share a row keyed to "Tuesday"; Fri/Sat share one keyed to "Friday"
  const dayGroupMap = { Wednesday: 'Tuesday', Thursday: 'Tuesday', Saturday: 'Friday' };
  const groupKey = dayGroupMap[dayName] || dayName;

  document.querySelectorAll('.footer-hours-row[data-day-check]').forEach(row => {
    row.classList.toggle('today', row.dataset.dayCheck === groupKey);
  });
}

/* --------------------------------------------------------------------------
   Gallery Lightbox
   -------------------------------------------------------------------------- */
function initLightbox() {
  const overlay  = document.getElementById('lightbox-overlay');
  if (!overlay) return;

  const imgEl    = overlay.querySelector('.lightbox-image');
  const closeBtn = overlay.querySelector('.lightbox-close');
  const prevBtn  = overlay.querySelector('.lightbox-prev');
  const nextBtn  = overlay.querySelector('.lightbox-next');
  const captionEl = overlay.querySelector('.lightbox-caption');

  const galleryItems = Array.from(document.querySelectorAll('[data-lightbox]'));
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    const item   = galleryItems[index];
    if (!item) return;

    const bg      = item.dataset.bg || '';
    const caption = item.dataset.caption || '';

    if (imgEl) {
      imgEl.style.background   = bg;
      imgEl.style.width        = '70vw';
      imgEl.style.height       = '55vw';
      imgEl.style.maxHeight    = '80vh';
      imgEl.style.borderRadius = 'var(--radius-lg)';
    }

    if (captionEl) captionEl.textContent = caption;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    currentIndex = (currentIndex + dir + galleryItems.length) % galleryItems.length;
    openLightbox(currentIndex);
  }

  // Attach to gallery items
  galleryItems.forEach((item, i) => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => openLightbox(i));
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn)  prevBtn.addEventListener('click',  () => navigate(-1));
  if (nextBtn)  nextBtn.addEventListener('click',  () => navigate(+1));

  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(+1);
  });

  // Touch/swipe support
  let touchStartX = 0;
  overlay.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  overlay.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1);
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   Cookie Consent Banner
   -------------------------------------------------------------------------- */
function initCookieBanner() {
  const banner    = document.querySelector('.cookie-banner');
  const acceptBtn = document.querySelector('.js-cookie-accept');
  const declineBtn = document.querySelector('.js-cookie-decline');

  if (!banner) return;

  // Don't show if already consented
  if (localStorage.getItem('verde-cookie-consent')) {
    banner.classList.add('hidden');
    return;
  }

  // Show after brief delay
  setTimeout(() => {
    banner.classList.remove('hidden');
  }, 2000);

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('verde-cookie-consent', 'accepted');
      banner.classList.add('hidden');
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      localStorage.setItem('verde-cookie-consent', 'declined');
      banner.classList.add('hidden');
    });
  }
}

/* --------------------------------------------------------------------------
   Testimonials Swiper
   -------------------------------------------------------------------------- */
function initTestimonialsSwiper() {
  const el = document.querySelector('.swiper-testimonials');
  if (!el || typeof Swiper === 'undefined') return;

  new Swiper('.swiper-testimonials', {
    slidesPerView:  1,
    spaceBetween:   24,
    loop:           true,
    autoplay: {
      delay:            5000,
      disableOnInteraction: false,
    },
    pagination: {
      el:        '.swiper-testimonials .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-testimonials .swiper-button-next',
      prevEl: '.swiper-testimonials .swiper-button-prev',
    },
    breakpoints: {
      640:  { slidesPerView: 1 },
      768:  { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}

/* --------------------------------------------------------------------------
   Stagger Grid Observer
   -------------------------------------------------------------------------- */
function initStaggerGrids() {
  const grids = document.querySelectorAll('.stagger-grid');
  if (!grids.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('stagger-triggered');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  grids.forEach(g => observer.observe(g));
}

/* --------------------------------------------------------------------------
   Init All
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initPageLoader();
  initScrollProgress();
  initNavbar();
  initMobileMenu();
  initAOS();
  initBackToTop();
  initSmoothScroll();
  initCurrentYear();
  initOpenStatus();
  initTodayHighlight();
  initLightbox();
  initCookieBanner();
  initTestimonialsSwiper();
  initStaggerGrids();
});
