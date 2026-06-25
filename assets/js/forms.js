/* ==========================================================================
   Restaurant — forms.js
   Universal form validation: contact, private dining, newsletter
   DEMO TEMPLATE — Forms are simulated. Ready to connect to a real backend.
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   Validation rules
   -------------------------------------------------------------------------- */
const VALIDATORS = {
  required: (v)    => v.trim().length > 0 ? null : 'This field is required.',
  email:    (v)    => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? null : 'Please enter a valid email address.',
  phone:    (v)    => /^[\d\s\+\-\(\)]{7,20}$/.test(v.trim()) ? null : 'Please enter a valid phone number.',
  minlength: (min) => (v) => v.trim().length >= min ? null : `Minimum ${min} characters required.`,
  maxlength: (max) => (v) => v.trim().length <= max ? null : `Maximum ${max} characters allowed.`,
  name:     (v)    => v.trim().length >= 2 ? null : 'Please enter your name (at least 2 characters).',
};

/* --------------------------------------------------------------------------
   Field state helpers
   -------------------------------------------------------------------------- */
function setError(field, message) {
  field.classList.remove('is-valid');
  field.classList.add('is-invalid');

  let feedback = field.parentNode.querySelector('.invalid-feedback');
  if (!feedback) {
    feedback = document.createElement('div');
    feedback.className = 'invalid-feedback';
    field.parentNode.appendChild(feedback);
  }
  feedback.textContent = message;
  feedback.style.display = 'block';
}

function setSuccess(field) {
  field.classList.remove('is-invalid');
  field.classList.add('is-valid');

  const feedback = field.parentNode.querySelector('.invalid-feedback');
  if (feedback) feedback.style.display = 'none';
}

function clearState(field) {
  field.classList.remove('is-valid', 'is-invalid');
  const feedback = field.parentNode.querySelector('.invalid-feedback');
  if (feedback) feedback.style.display = 'none';
}

/* --------------------------------------------------------------------------
   Validate single field against its data attributes
   -------------------------------------------------------------------------- */
function validateField(field) {
  const value   = field.value;
  const type    = field.type;
  const tagName = field.tagName.toLowerCase();

  // Skip hidden, disabled, or type=submit fields
  if (field.disabled || type === 'submit' || type === 'hidden') return true;

  // Check required
  if (field.hasAttribute('required') || field.dataset.required) {
    const err = VALIDATORS.required(value);
    if (err) { setError(field, err); return false; }
  } else if (!value.trim()) {
    // Optional, empty — clear and pass
    clearState(field);
    return true;
  }

  // Email
  if (type === 'email' || field.dataset.validate === 'email') {
    const err = VALIDATORS.email(value);
    if (err) { setError(field, err); return false; }
  }

  // Tel / Phone
  if (type === 'tel' || field.dataset.validate === 'phone') {
    const err = VALIDATORS.phone(value);
    if (err) { setError(field, err); return false; }
  }

  // Name
  if (field.dataset.validate === 'name') {
    const err = VALIDATORS.name(value);
    if (err) { setError(field, err); return false; }
  }

  // Min length
  if (field.dataset.minlength) {
    const min = parseInt(field.dataset.minlength, 10);
    const err = VALIDATORS.minlength(min)(value);
    if (err) { setError(field, err); return false; }
  }

  // Min length from HTML attribute
  if (field.getAttribute('minlength')) {
    const min = parseInt(field.getAttribute('minlength'), 10);
    const err = VALIDATORS.minlength(min)(value);
    if (err) { setError(field, err); return false; }
  }

  setSuccess(field);
  return true;
}

/* --------------------------------------------------------------------------
   Validate entire form
   -------------------------------------------------------------------------- */
function validateForm(form) {
  let valid = true;
  const fields = form.querySelectorAll('input, textarea, select');

  fields.forEach(field => {
    if (!validateField(field)) valid = false;
  });

  return valid;
}

/* --------------------------------------------------------------------------
   Bind real-time blur validation on all form fields
   -------------------------------------------------------------------------- */
function bindRealTimeValidation(form) {
  const fields = form.querySelectorAll('input, textarea, select');

  fields.forEach(field => {
    // Validate on blur (when user leaves the field)
    field.addEventListener('blur', () => {
      // Don't validate if field was never touched (no value and no class)
      if (!field.value.trim() && !field.classList.contains('is-invalid')) return;
      validateField(field);
    });

    // Clear error on input (give user immediate feedback as they type)
    field.addEventListener('input', () => {
      if (field.classList.contains('is-invalid')) {
        validateField(field);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Show loading state on submit button
   -------------------------------------------------------------------------- */
function setButtonLoading(btn, loading) {
  if (!btn) return;
  const textEl = btn.querySelector('.btn-text');
  const spinEl = btn.querySelector('.btn-spinner');

  btn.disabled = loading;

  if (textEl) textEl.style.opacity = loading ? '0' : '1';
  if (spinEl) spinEl.style.display = loading ? 'inline-block' : 'none';
}

/* --------------------------------------------------------------------------
   Show success message for form
   -------------------------------------------------------------------------- */
function showFormSuccess(form, message, detail) {
  const successEl = form.querySelector('.form-success') || createSuccessEl(form);

  successEl.innerHTML = `
    <div class="form-success-inner">
      <i class="bi bi-check-circle-fill"></i>
      <div>
        <strong>${message}</strong>
        ${detail ? `<p>${detail}</p>` : ''}
      </div>
    </div>
  `;
  successEl.style.display = 'flex';

  // Hide form fields (keep submit visible for demo)
  form.querySelectorAll('.form-group, .row').forEach(el => {
    el.style.display = 'none';
  });

  successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function createSuccessEl(form) {
  const el       = document.createElement('div');
  el.className   = 'form-success';
  el.style.cssText = `
    display: none;
    background: rgba(79, 122, 94, 0.08);
    border: 1px solid rgba(79, 122, 94, 0.3);
    border-radius: var(--radius-md);
    padding: 1.5rem;
    margin-top: 1rem;
    align-items: flex-start;
    gap: 1rem;
    font-size: 0.9rem;
    color: var(--success);
  `;
  form.appendChild(el);
  return el;
}

/* Inject form success icon styles */
(function injectFormStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .form-success-inner {
      display: flex;
      align-items: flex-start;
      gap: 0.875rem;
    }
    .form-success-inner .bi {
      font-size: 1.5rem;
      flex-shrink: 0;
      margin-top: 1px;
    }
    .form-success-inner strong {
      display: block;
      font-size: 0.9375rem;
      margin-bottom: 0.25rem;
    }
    .form-success-inner p {
      font-size: 0.85rem;
      margin: 0;
      color: var(--text-secondary);
    }
    .btn-spinner {
      display: none;
      width:  18px;
      height: 18px;
      border: 2px solid rgba(255,255,255,0.3);
      border-top-color: currentColor;
      border-radius: 50%;
      animation: spin 0.6s linear infinite;
      vertical-align: middle;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
})();

/* --------------------------------------------------------------------------
   Contact Form
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  bindRealTimeValidation(form);

  let submitting = false;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!validateForm(form)) {
      form.querySelector('.is-invalid')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    submitting = true;
    const submitBtn = form.querySelector('[type="submit"]');
    setButtonLoading(submitBtn, true);

    // Simulate async submit — ready to connect to backend
    await new Promise(resolve => setTimeout(resolve, 1400));

    setButtonLoading(submitBtn, false);
    showFormSuccess(
      form,
      'Message received — thank you.',
      'We aim to respond within one business day. For urgent enquiries, please call us directly.'
    );

    submitting = false;
  });
}

/* --------------------------------------------------------------------------
   Private Dining Enquiry Form
   -------------------------------------------------------------------------- */
function initPrivateDiningForm() {
  const form = document.getElementById('private-dining-form');
  if (!form) return;

  bindRealTimeValidation(form);

  let submitting = false;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!validateForm(form)) {
      form.querySelector('.is-invalid')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    submitting = true;
    const submitBtn = form.querySelector('[type="submit"]');
    setButtonLoading(submitBtn, true);

    await new Promise(resolve => setTimeout(resolve, 1600));

    setButtonLoading(submitBtn, false);
    showFormSuccess(
      form,
      'Enquiry submitted.',
      'Our events team will be in touch within 24 hours to discuss your private dining experience.'
    );

    submitting = false;
  });
}

/* --------------------------------------------------------------------------
   Newsletter Signup
   -------------------------------------------------------------------------- */
function initNewsletterForms() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    const emailField = form.querySelector('input[type="email"]');
    const submitBtn  = form.querySelector('[type="submit"]');

    if (!emailField || !submitBtn) return;

    let submitting = false;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (submitting) return;

      const emailErr = VALIDATORS.email(emailField.value);
      if (emailErr) {
        setError(emailField, emailErr);
        return;
      }
      setSuccess(emailField);

      submitting = true;
      setButtonLoading(submitBtn, true);

      await new Promise(resolve => setTimeout(resolve, 1200));

      setButtonLoading(submitBtn, false);

      // Replace form with thank-you message
      const parent = form.parentElement;
      form.style.display = 'none';

      const thanks = document.createElement('p');
      thanks.style.cssText = 'font-size:0.9rem; color: var(--gold); font-family: var(--font-heading); font-style: italic;';
      thanks.textContent   = 'Thank you — you\'re on the list.';
      parent.appendChild(thanks);

      submitting = false;
    });
  });
}

/* --------------------------------------------------------------------------
   Init All Forms
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initPrivateDiningForm();
  initNewsletterForms();
});
