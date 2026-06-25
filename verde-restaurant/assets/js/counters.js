/* ==========================================================================
   Verde Restaurant — counters.js
   Animated counter with Intersection Observer trigger
   DEMO TEMPLATE — All content is fictional placeholder data
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   Ease-out cubic easing function
   -------------------------------------------------------------------------- */
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

/* --------------------------------------------------------------------------
   Animate a single counter element
   Supports:
     data-target  — final numeric value
     data-suffix  — text appended after number ("+", "★", " Years", etc.)
     data-prefix  — text prepended before number ("$", etc.)
     data-decimals — decimal places (default 0)
     data-duration — animation duration in ms (default 2200)
   -------------------------------------------------------------------------- */
function animateCounter(el) {
  const target    = parseFloat(el.dataset.target || '0');
  const suffix    = el.dataset.suffix    || '';
  const prefix    = el.dataset.prefix    || '';
  const decimals  = parseInt(el.dataset.decimals || '0', 10);
  const duration  = parseInt(el.dataset.duration || '2200', 10);
  const separator = el.dataset.separator !== 'false'; // comma-separate thousands by default

  let startTime = null;

  function formatNumber(value) {
    const fixed = value.toFixed(decimals);

    if (separator && decimals === 0) {
      return parseInt(fixed, 10).toLocaleString('en-US');
    }

    return fixed;
  }

  function step(timestamp) {
    if (!startTime) startTime = timestamp;

    const elapsed  = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = easeOutCubic(progress);
    const current  = eased * target;

    el.textContent = prefix + formatNumber(current) + suffix;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = prefix + formatNumber(target) + suffix;
    }
  }

  requestAnimationFrame(step);
}

/* --------------------------------------------------------------------------
   Intersection Observer — trigger counters when visible
   -------------------------------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      if (el.dataset.counted) return; // prevent re-trigger

      el.dataset.counted = 'true';

      // Stagger by sibling index for visual wave effect
      const parent   = el.closest('.stats-card, [data-counter-wrap]') || el.parentElement;
      const siblings = Array.from(document.querySelectorAll('[data-counter]'));
      const index    = siblings.indexOf(el);

      const staggerDelay = index * 120; // 120ms between each counter

      setTimeout(() => {
        // Fade in the parent card
        const card = el.closest('.counter-wrap');
        if (card) card.classList.add('counted');

        animateCounter(el);
      }, staggerDelay);

      observer.unobserve(el);
    });
  }, {
    threshold: 0.3,
    rootMargin: '0px 0px -60px 0px',
  });

  counters.forEach(counter => {
    observer.observe(counter);
  });
}

/* --------------------------------------------------------------------------
   Init
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', initCounters);
