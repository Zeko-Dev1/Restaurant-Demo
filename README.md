# Restaurant — Premium Website Demo Template

> **This is a design demonstration template** built to show a real local restaurant owner what a modern, premium custom website could look like — without the need for a €10,000 agency contract.

---

## What This Is

This is a fully-built, pixel-perfect restaurant website template — 10 complete HTML pages, 4 CSS files, and 5 JavaScript files — designed to look and feel like a genuinely expensive custom build.

The design philosophy: **modern European, not dated fine-dining**. Deep forest green, warm gold accents, and soft cream tones replace the tired black-and-gold cliché. Typography is editorial and warm (Fraunces + Work Sans). Every button works. Every form validates. The reservation system generates real confirmation numbers. The open/closed status updates dynamically based on actual time.

**This can be shown directly to a restaurant owner as a live demo** — open it in a browser, click around, try the reservation form. It works.

---

## ⚠️ Important Disclaimers

**ALL of the following are entirely fictional, placeholder data created for demonstration only:**

- Restaurant name: "Verde"
- Staff names: Chef Marko Ilievski, Chef Elena Petrov, Ana Dimovska
- Address, phone number, email address
- Menu items, prices, and descriptions
- Press quotes, publication names, and awards
- Guest review names and content
- Event names, dates, and prices
- Rating figures and review counts

**None of this represents a real restaurant, real people, or real reviews.** Replace every piece of it with the real restaurant's actual information before presenting it live or publishing it online.

---

## Pages Included

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Full homepage with hero, menu preview, chef spotlight, stats, testimonials, events preview |
| About | `about.html` | Founding story, full team, value pillars, sourcing, timeline 2015–2024 |
| Menu | `menu.html` | Full seasonal menu with sticky sidebar, allergen badges, wine pairing suggestions |
| Private Dining | `private-dining.html` | Two spaces (Garden Room + Chef's Table), pricing, enquiry form |
| Events | `events.html` | Featured event, 6 upcoming events, recurring monthly events, RSVP modal |
| Reservations | `reservations.html` | Full booking form with dynamic time slots, date validation, confirmation card |
| Gallery | `gallery.html` | Filterable masonry grid (Food/Interior/Events/Team), working lightbox |
| Press | `press.html` | Awards section, 6 press quote cards — all clearly marked fictional |
| Contact | `contact.html` | 4 info cards, contact form, map placeholder, directions section |
| 404 | `404.html` | Custom error page with quick-links back into the site |

---

## Tech Stack

- **HTML5** — semantic, accessible, well-commented
- **Bootstrap 5.3.3** (via CDN)
- **Bootstrap Icons 1.11** (via CDN)
- **Google Fonts** — Fraunces + Work Sans (via CDN)
- **AOS (Animate On Scroll)** (via CDN)
- **Swiper.js** (via CDN) — testimonials carousel
- **Vanilla JavaScript only** — no jQuery, no frameworks
- **CSS Custom Properties** — full design system in variables
- **3-language support** — English, Albanian (Shqip), Macedonian (Македонски) via `data-i18n` + `translations.js`

---

## How to Preview It

No build step needed. Simply open any `.html` file in a browser.

For the best experience with AOS animations:
1. Use a local server (e.g. VS Code Live Server extension)
2. Or use Python: `python -m http.server 8000` in the project folder
3. Open `http://localhost:8000` in your browser

The site works by opening `index.html` directly, but some animation timing works better on a local server.

---

## File Structure

```
/
├── index.html              ← Home page
├── about.html
├── menu.html
├── private-dining.html
├── events.html
├── reservations.html
├── gallery.html
├── press.html
├── contact.html
├── 404.html
├── assets/
│   ├── css/
│   │   ├── style.css       ← Core design system & variables
│   │   ├── components.css  ← Navbar, buttons, cards, footer
│   │   ├── menu-style.css  ← Menu page specific styles
│   │   └── animations.css  ← AOS, hover effects, transitions
│   └── js/
│       ├── main.js         ← Loader, navbar, AOS, status, lightbox
│       ├── reservation.js  ← Booking form with time slots & confirmation
│       ├── counters.js     ← Animated counter on scroll
│       ├── forms.js        ← Validation for contact/private dining/newsletter
│       └── translations.js ← EN / Albanian / Macedonian translations (data-i18n)
└── README.md
```

---

## Before Presenting or Publishing

Replace the following placeholder content with the real restaurant's actual details:

### Essential Replacements

- [ ] **Restaurant name** — search-replace "Verde" throughout all files
- [ ] **Tagline** — "Modern Cooking, Honest Ingredients"
- [ ] **Address** — all instances of `[Sample Street Address — Placeholder]`
- [ ] **Phone number** — all instances of `[Sample Phone — Placeholder]`
- [ ] **Email address** — `hello@yourrestaurant.com`
- [ ] **Chef and staff names** — Marko Ilievski, Elena Petrov, Ana Dimovska
- [ ] **Menu items, descriptions, and prices** — all fictional placeholders
- [ ] **Opening hours** — update in `main.js` (OPENING_HOURS object) AND in all HTML files
- [ ] **Founded year** — currently 2015

### Photography

All images are CSS gradient placeholders. For the live site:
- Replace `.img-placeholder` divs with real `<img>` tags
- Or set real `background-image` URLs on the placeholder elements
- Recommended: high-quality food and interior photography (at least 8–12 images)

### Map

Replace the map placeholder in `contact.html` with a real Google Maps embed:
```html
<iframe src="https://www.google.com/maps/embed?pb=..." 
  width="100%" height="380" style="border:0;" allowfullscreen loading="lazy">
</iframe>
```

### Reservation System

The booking form is fully built and validated — it generates a simulated confirmation number. To connect it to a real system:
- Integrate with a booking platform (OpenTable, Resy, SevenRooms, etc.)
- Or add a backend form handler to send confirmation emails
- The `reservation.js` file has a clear placeholder comment at the form submission point

### Press & Awards

Remove or replace all content in `press.html` — every press quote and award is fictional.

### Social Media

Replace the `#` placeholder hrefs in footer social links with real social media URLs.

---

## Design System

The entire visual identity is controlled through CSS custom properties in `style.css`. To rebrand:

```css
:root {
  --forest:  #1F3A2E;  /* Primary dark color — change for rebrand */
  --gold:    #C19A4B;  /* Accent color */
  --cream:   #FAF6EE;  /* Background */
}
```

---

## Browser Support

Tested and designed for:
- Chrome / Edge (latest)
- Firefox (latest)
- Safari 14+
- Mobile: iOS Safari, Android Chrome

---

*Built as a premium design demo. All fictional content clearly marked in code comments throughout. Not for public publishing without replacing placeholder data.*
