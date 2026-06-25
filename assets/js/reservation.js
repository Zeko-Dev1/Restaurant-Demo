/* ==========================================================================
   Restaurant — reservation.js
   Reservation form: validation, time slots, confirmation
   DEMO TEMPLATE — All content is fictional. Not connected to a real booking
   system. Confirmation numbers are simulated only.
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   Time Slot Configuration — matches opening hours in main.js
   NOTE: Placeholder — replace with real system integration
   -------------------------------------------------------------------------- */
const TIME_SLOTS = {
  2: ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'],   // Tue
  3: ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'],   // Wed
  4: ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'],   // Thu
  5: ['17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'], // Fri
  6: ['17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'], // Sat
  0: ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'], // Sun
};

const DAY_LABELS_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function formatDisplayTime(time24) {
  const [h, m] = time24.split(':').map(Number);
  const ampm   = h >= 12 ? 'PM' : 'AM';
  const hour   = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, '0')} ${ampm}`;
}

function generateConfirmationNumber() {
  const chars  = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let   result = 'VRD-';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/* --------------------------------------------------------------------------
   Date Input Setup
   -------------------------------------------------------------------------- */
function initDateInput() {
  const dateInput = document.getElementById('res-date');
  if (!dateInput) return;

  // Set min date to today
  const today = new Date();
  const yyyy  = today.getFullYear();
  const mm    = String(today.getMonth() + 1).padStart(2, '0');
  const dd    = String(today.getDate()).padStart(2, '0');
  dateInput.min = `${yyyy}-${mm}-${dd}`;

  // Set max date to 90 days from now
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 90);
  const mmx = String(maxDate.getMonth() + 1).padStart(2, '0');
  const ddx = String(maxDate.getDate()).padStart(2, '0');
  dateInput.max = `${maxDate.getFullYear()}-${mmx}-${ddx}`;

  const timeSelect = document.getElementById('res-time');
  if (timeSelect) {
    timeSelect.addEventListener('change', () => validateTimeSelect(timeSelect));
  }

  dateInput.addEventListener('change', () => {
    validateDate(dateInput);
    updateTimeSlots(dateInput.value);
    updateGuestNote();
  });
}

function validateDate(input) {
  const val = input.value;
  if (!val) {
    setFieldError(input, 'Please select a date.');
    return false;
  }

  const selected = new Date(val + 'T00:00:00');
  const today    = new Date();
  today.setHours(0, 0, 0, 0);

  if (selected < today) {
    setFieldError(input, 'Please select a future date.');
    return false;
  }

  const dayOfWeek = selected.getDay();

  if (dayOfWeek === 1) {
    setFieldError(input, 'We are closed on Mondays. Please choose another day.');
    return false;
  }

  setFieldSuccess(input);
  return true;
}

/* --------------------------------------------------------------------------
   Dynamic Time Slots
   -------------------------------------------------------------------------- */
function updateTimeSlots(dateValue) {
  const timeSelect = document.getElementById('res-time');
  if (!timeSelect) return;

  timeSelect.innerHTML = '<option value="">Select a time</option>';
  timeSelect.disabled  = true;

  if (!dateValue) return;

  const selected  = new Date(dateValue + 'T00:00:00');
  const dayOfWeek = selected.getDay();

  if (dayOfWeek === 1) return; // Monday closed

  const slots = TIME_SLOTS[dayOfWeek];
  if (!slots || slots.length === 0) {
    const opt    = document.createElement('option');
    opt.value    = '';
    opt.textContent = 'No availability — please call us';
    opt.disabled = true;
    timeSelect.appendChild(opt);
    return;
  }

  // For Sunday, add group labels
  if (dayOfWeek === 0) {
    const lunchGroup  = document.createElement('optgroup');
    lunchGroup.label  = 'Lunch Service (12:00 PM – 4:00 PM)';
    const dinnerGroup = document.createElement('optgroup');
    dinnerGroup.label = 'Dinner Service (6:00 PM – 10:00 PM)';

    slots.forEach(slot => {
      const [h] = slot.split(':').map(Number);
      const opt = document.createElement('option');
      opt.value       = slot;
      opt.textContent = formatDisplayTime(slot);
      if (h < 16) {
        lunchGroup.appendChild(opt);
      } else {
        dinnerGroup.appendChild(opt);
      }
    });

    if (lunchGroup.children.length)  timeSelect.appendChild(lunchGroup);
    if (dinnerGroup.children.length) timeSelect.appendChild(dinnerGroup);
  } else {
    slots.forEach(slot => {
      const opt = document.createElement('option');
      opt.value       = slot;
      opt.textContent = formatDisplayTime(slot);
      timeSelect.appendChild(opt);
    });
  }

  timeSelect.disabled = false;
}

function validateTimeSelect(input) {
  if (!input.value) {
    setFieldError(input, 'Please select a time.');
    return false;
  }
  setFieldSuccess(input);
  return true;
}

/* --------------------------------------------------------------------------
   Guest Count — 10+ call-us note
   -------------------------------------------------------------------------- */
function updateGuestNote() {
  const guestSelect = document.getElementById('res-guests');
  const guestNote   = document.getElementById('res-guest-note');
  if (!guestSelect || !guestNote) return;

  const val = parseInt(guestSelect.value, 10);
  if (val >= 10 || guestSelect.value === '10+') {
    guestNote.style.display = 'flex';
  } else {
    guestNote.style.display = 'none';
  }
}

function initGuestSelect() {
  const guestSelect = document.getElementById('res-guests');
  if (!guestSelect) return;

  // Build options 1–9, then "10+" option
  guestSelect.innerHTML = '<option value="">Number of guests</option>';
  for (let i = 1; i <= 9; i++) {
    const opt = document.createElement('option');
    opt.value       = i;
    opt.textContent = i === 1 ? '1 Guest' : `${i} Guests`;
    guestSelect.appendChild(opt);
  }
  const bigOpt = document.createElement('option');
  bigOpt.value       = '10+';
  bigOpt.textContent = '10+ Guests (Large Party)';
  guestSelect.appendChild(bigOpt);

  guestSelect.addEventListener('change', () => {
    updateGuestNote();
    validateGuestSelect(guestSelect);
  });
}

function validateGuestSelect(input) {
  if (!input.value) {
    setFieldError(input, 'Please select the number of guests.');
    return false;
  }
  setFieldSuccess(input);
  return true;
}

/* --------------------------------------------------------------------------
   Special Occasion
   -------------------------------------------------------------------------- */
function initOccasionSelect() {
  const select    = document.getElementById('res-occasion');
  const extraWrap = document.getElementById('res-occasion-extra');
  if (!select || !extraWrap) return;

  select.addEventListener('change', () => {
    const val = select.value;
    if (val === 'Birthday' || val === 'Anniversary') {
      extraWrap.style.display = 'block';
      const label = extraWrap.querySelector('label');
      if (label) {
        label.textContent = val === 'Birthday'
          ? 'Who is celebrating? (optional)'
          : 'Any special requests for the occasion? (optional)';
      }
    } else if (val === 'Business Dinner') {
      extraWrap.style.display = 'block';
      const label = extraWrap.querySelector('label');
      if (label) label.textContent = 'Company / Event name (optional)';
    } else if (val === 'Other') {
      extraWrap.style.display = 'block';
      const label = extraWrap.querySelector('label');
      if (label) label.textContent = 'Tell us more (optional)';
    } else {
      extraWrap.style.display = 'none';
    }
  });
}

/* --------------------------------------------------------------------------
   Field State Helpers
   -------------------------------------------------------------------------- */
function setFieldError(input, message) {
  input.classList.remove('is-valid');
  input.classList.add('is-invalid');

  let feedback = input.nextElementSibling;
  if (!feedback || !feedback.classList.contains('invalid-feedback')) {
    feedback = document.createElement('div');
    feedback.className = 'invalid-feedback';
    input.parentNode.insertBefore(feedback, input.nextSibling);
  }
  feedback.textContent = message;
  feedback.style.display = 'block';
}

function setFieldSuccess(input) {
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');

  const feedback = input.nextElementSibling;
  if (feedback && feedback.classList.contains('invalid-feedback')) {
    feedback.style.display = 'none';
  }
}

function clearFieldState(input) {
  input.classList.remove('is-valid', 'is-invalid');
}

/* --------------------------------------------------------------------------
   Validate Full Form
   -------------------------------------------------------------------------- */
function validateReservationForm(form) {
  let valid = true;

  const fields = {
    'res-name':   (v) => v.trim().length >= 2    ? null : 'Please enter your full name (at least 2 characters).',
    'res-email':  (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : 'Please enter a valid email address.',
    'res-phone':  (v) => /^[\d\s\+\-\(\)]{7,}$/.test(v.trim()) ? null : 'Please enter a valid phone number.',
    'res-guests': (v) => v ? null : 'Please select the number of guests.',
    'res-time':   (v) => v ? null : 'Please select a time.',
  };

  Object.entries(fields).forEach(([id, validator]) => {
    const input = form.querySelector(`#${id}`);
    if (!input) return;
    const error = validator(input.value);
    if (error) {
      setFieldError(input, error);
      valid = false;
    } else {
      setFieldSuccess(input);
    }
  });

  // Date — special validation
  const dateInput = form.querySelector('#res-date');
  if (dateInput) {
    if (!validateDate(dateInput)) valid = false;
  }

  return valid;
}

/* --------------------------------------------------------------------------
   Success Confirmation Card
   -------------------------------------------------------------------------- */
function showConfirmationCard(formData) {
  const confirmEl = document.getElementById('res-confirmation');
  if (!confirmEl) return;

  const confNum = generateConfirmationNumber();

  const dateObj    = new Date(formData.date + 'T00:00:00');
  const dateLabel  = dateObj.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const timeLabel  = formatDisplayTime(formData.time);
  const guestLabel = formData.guests === '1' ? '1 Guest' : formData.guests === '10+' ? '10+ Guests (Large Party)' : `${formData.guests} Guests`;

  confirmEl.innerHTML = `
    <div class="res-confirm-card">
      <div class="res-confirm-card__icon">
        <i class="bi bi-check-circle"></i>
      </div>
      <div class="res-confirm-card__conf-num">
        Confirmation #<strong>${confNum}</strong>
      </div>
      <h3 class="res-confirm-card__title">Your table is reserved</h3>
      <p class="res-confirm-card__subtitle">
        We look forward to welcoming you. A confirmation has been noted below.
      </p>
      <div class="res-confirm-card__details">
        <div class="res-confirm-card__detail-row">
          <span><i class="bi bi-person"></i> Guest</span>
          <strong>${formData.name}</strong>
        </div>
        <div class="res-confirm-card__detail-row">
          <span><i class="bi bi-calendar3"></i> Date</span>
          <strong>${dateLabel}</strong>
        </div>
        <div class="res-confirm-card__detail-row">
          <span><i class="bi bi-clock"></i> Time</span>
          <strong>${timeLabel}</strong>
        </div>
        <div class="res-confirm-card__detail-row">
          <span><i class="bi bi-people"></i> Party Size</span>
          <strong>${guestLabel}</strong>
        </div>
        ${formData.occasion && formData.occasion !== 'None' ? `
        <div class="res-confirm-card__detail-row">
          <span><i class="bi bi-stars"></i> Occasion</span>
          <strong>${formData.occasion}</strong>
        </div>
        ` : ''}
      </div>
      <p class="res-confirm-card__note">
        <i class="bi bi-info-circle"></i>
        <em>This is a simulated confirmation for demonstration purposes. In production, this system connects to the restaurant's real booking platform and sends a confirmation to ${formData.email}.</em>
      </p>
      <div class="res-confirm-card__actions">
        <button class="btn-verde btn-primary-verde" onclick="window.print()">
          <i class="bi bi-printer"></i> Print Confirmation
        </button>
        <a href="index.html" class="btn-verde btn-secondary-verde">
          Return Home
        </a>
      </div>
    </div>
  `;

  confirmEl.style.display = 'block';

  // Smooth scroll to confirmation
  setTimeout(() => {
    confirmEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}

/* --------------------------------------------------------------------------
   Confirmation Card Styles (injected dynamically)
   -------------------------------------------------------------------------- */
function injectConfirmationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .res-confirm-card {
      background: var(--white);
      border-radius: var(--radius-lg);
      padding: 3rem 2.5rem;
      text-align: center;
      box-shadow: var(--shadow-lg);
      border: 1px solid rgba(79, 122, 94, 0.25);
      max-width: 560px;
      margin: 2rem auto;
    }
    .res-confirm-card__icon {
      font-size: 3rem;
      color: var(--success);
      margin-bottom: 1rem;
      display: block;
    }
    .res-confirm-card__conf-num {
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 0.75rem;
      background: rgba(193, 154, 75, 0.08);
      display: inline-block;
      padding: 0.35rem 1rem;
      border-radius: var(--radius-full);
      border: 1px solid rgba(193, 154, 75, 0.2);
    }
    .res-confirm-card__title {
      font-family: var(--font-heading);
      font-size: 1.75rem;
      font-weight: 400;
      font-style: italic;
      color: var(--forest);
      margin-bottom: 0.5rem;
    }
    .res-confirm-card__subtitle {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin-bottom: 2rem;
    }
    .res-confirm-card__details {
      background: var(--cream);
      border-radius: var(--radius-md);
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      text-align: left;
    }
    .res-confirm-card__detail-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.625rem 0;
      border-bottom: 1px solid var(--cream-dark);
      font-size: 0.9rem;
      gap: 1rem;
    }
    .res-confirm-card__detail-row:last-child {
      border-bottom: none;
    }
    .res-confirm-card__detail-row span {
      color: var(--text-light);
      display: flex;
      align-items: center;
      gap: 0.4rem;
      flex-shrink: 0;
    }
    .res-confirm-card__detail-row strong {
      color: var(--text-primary);
      font-weight: 600;
      text-align: right;
    }
    .res-confirm-card__note {
      font-size: 0.8rem;
      color: var(--text-light);
      margin-bottom: 2rem;
      display: flex;
      gap: 0.5rem;
      align-items: flex-start;
      text-align: left;
      line-height: 1.55;
    }
    .res-confirm-card__note i {
      flex-shrink: 0;
      margin-top: 2px;
    }
    .res-confirm-card__actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
  `;
  document.head.appendChild(style);
}

/* --------------------------------------------------------------------------
   Form Submission
   -------------------------------------------------------------------------- */
function initReservationForm() {
  const form = document.getElementById('reservation-form');
  if (!form) return;

  injectConfirmationStyles();
  initDateInput();
  initGuestSelect();
  initOccasionSelect();

  let submitting = false;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (submitting) return;
    if (!validateReservationForm(form)) {
      // Scroll to first error
      const firstError = form.querySelector('.is-invalid');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    submitting = true;

    const submitBtn = form.querySelector('[type="submit"]');
    const btnText   = submitBtn ? submitBtn.querySelector('.btn-text') : null;
    const btnSpin   = submitBtn ? submitBtn.querySelector('.btn-spinner') : null;

    if (submitBtn) submitBtn.disabled = true;
    if (btnText)   btnText.style.opacity = '0';
    if (btnSpin)   btnSpin.style.display = 'inline-block';

    // Simulate async submission (ready to connect to real API)
    await new Promise(resolve => setTimeout(resolve, 1500));

    const formData = {
      name:     form.querySelector('#res-name')?.value || '',
      email:    form.querySelector('#res-email')?.value || '',
      phone:    form.querySelector('#res-phone')?.value || '',
      date:     form.querySelector('#res-date')?.value || '',
      time:     form.querySelector('#res-time')?.value || '',
      guests:   form.querySelector('#res-guests')?.value || '',
      occasion: form.querySelector('#res-occasion')?.value || '',
      notes:    form.querySelector('#res-notes')?.value || '',
    };

    form.style.display = 'none';
    showConfirmationCard(formData);
    submitting = false;
  });
}

/* --------------------------------------------------------------------------
   Init
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', initReservationForm);
