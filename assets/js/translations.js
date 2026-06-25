/* ==========================================================================
   Restaurant — translations.js
   Albanian (sq) + Macedonian (mk) language support
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   Translation Dictionary
   Keys match data-i18n or data-i18n-html attributes.
   Text-walking also replaces exact-match simple strings.
   -------------------------------------------------------------------------- */
const VERDE_TRANSLATIONS = {

  en: {
    /* ---- Navigation ---- */
    'nav.home':          'Home',
    'nav.menu':          'Menu',
    'nav.about':         'About',
    'nav.private':       'Private Dining',
    'nav.events':        'Events',
    'nav.gallery':       'Gallery',
    'nav.contact':       'Contact',
    'nav.press':         'Press',
    'nav.reserve':       'Reserve A Table',
    'nav.enquire':       'Enquire Now',

    /* ---- Footer ---- */
    'footer.navigate':   'Navigate',
    'footer.hours':      'Opening Hours',
    'footer.find':       'Find Us',
    'footer.tue-thu':    'Tue – Thu',
    'footer.fri-sat':    'Fri – Sat',
    'footer.sunday':     'Sunday',
    'footer.monday':     'Monday',
    'footer.closed':     'Closed',
    'footer.privacy':    'Privacy',
    'footer.terms':      'Terms',

    /* ---- Cookie ---- */
    'cookie.text':       'We use cookies to improve your experience.',
    'cookie.learn':      'Learn more',
    'cookie.accept':     'Accept',
    'cookie.decline':    'Decline',

    /* ---- Common buttons ---- */
    'btn.reserve':       'Reserve A Table',
    'btn.view-menu':     'View Menu',
    'btn.full-menu':     'View Full Menu',
    'btn.book-seats':    'Book Seats',
    'btn.enquire':       'Enquire Now',
    'btn.experience':    'Experience It Yourself',
    'btn.our-story':     'Our Full Story',
    'btn.meet-team':     'Meet the Team',
    'btn.all-events':    'All Events',
    'btn.subscribe':     'Subscribe',
    'btn.send':          'Send Message',
    'btn.send-enquiry':        'Send Enquiry',
    'btn.check-avail':         'Check Availability',
    'btn.print-menu':          'Print Menu',
    'btn.confirm-reservation': 'Confirm Reservation',
    'btn.confirm-rsvp':        'Confirm RSVP',

    /* ---- INDEX hero ---- */
    'index.hero.label':  'Modern European Dining',
    'index.hero.title':  'Modern Cooking,<br />Honest Ingredients',
    'index.hero.lead':   'A seasonal table driven by what grows well and tastes right — crafted by Chef Marko Ilievski in the heart of the city.',
    'index.hero.years':  'Years',
    'index.hero.seats':  'Seats',
    'index.hero.rating': 'Rating',

    /* ---- INDEX about split ---- */
    'index.about.label': 'Our Story',
    'index.about.title': 'Where honest cooking<br />meets a considered table',
    'index.about.lead':  'Founded in 2015 by Chef Marko Ilievski, Your Restaurant was born from a simple belief: that the best meal is one that respects its ingredients, its seasons, and its guests.',
    'index.about.body':  "We don't follow trends. We follow what grows. Our menu changes with the markets, driven by relationships with local farms and producers who share our values. Every dish on the table started as a conversation — with a farmer, a fisherman, a grower.",
    'index.about.b1':    'Seasonal menus — updated weekly, not quarterly',
    'index.about.b2':    'Relationships with producers within 150km where possible',
    'index.about.b3':    '60 covers — intimate enough to cook with care',
    'index.about.b4':    'Seasonal drinks menu crafted to complement every dish',

    /* ---- INDEX chef ---- */
    'index.chef.label':  'The Kitchen',
    'index.chef.title':  'Cooking from<br />the ground up',
    'index.chef.body1':  'Chef Marko Ilievski trained across kitchens in Lyon, Copenhagen, and Barcelona before returning home to open Your Restaurant in 2015. His cooking is deeply rooted in the produce itself — minimal intervention, maximum clarity of flavour.',
    'index.chef.body2':  'Working closely with Sous Chef Elena Petrov, the kitchen at Your Restaurant operates with a rare combination of precision and warmth. Dishes are designed to be genuinely delicious — never clever for its own sake.',
    'index.chef.quote':  "The best thing I can do with a perfect piece of fish is get out of its way. Seasoning, heat, and a plate that lets it speak. That's cooking.",
    'index.chef.cite':   '— Chef Marko Ilievski',

    /* ---- INDEX menu preview ---- */
    'index.menu.label':  'The Menu',
    'index.menu.title':  'A taste of what awaits',
    'index.menu.lead':   'Seasonal. Modern. Grounded. Our menu changes with the harvest — here is a glimpse of what we are currently serving.',

    /* ---- INDEX stats ---- */
    'index.stats.s1': 'In the Heart of the City',
    'index.stats.s2': 'Intimate Main Dining Room',
    'index.stats.s3': 'Average Guest Rating',
    'index.stats.s4': 'Verified Reviews',

    /* ---- INDEX private preview ---- */
    'index.pd.label':  'Private Dining',
    'index.pd.title':  'Your own table.<br />Your own evening.',
    'index.pd.lead':   'Whether it\'s a birthday, an anniversary, a corporate dinner, or simply a reason to gather well — our private rooms are designed to make the occasion feel singular.',

    /* ---- INDEX newsletter ---- */
    'index.news.label':    'Stay Connected',
    'index.news.title':    'Seasonal menus. Special events. No noise.',
    'index.news.input':    'Your email address',

    /* ---- INDEX reservation widget ---- */
    'index.widget.title':    'Reserve Your Table',
    'index.widget.subtitle': 'For full options and special requests, use the reservations page.',
    'index.widget.date':     'Date',
    'index.widget.guests':   'Guests',
    'index.widget.note':     'Closed Mondays. For parties of 10+, please call us directly.',

    /* ---- INDEX events + press previews ---- */
    'index.events.title': 'Upcoming Events',
    'index.press.label':  'As Featured In',

    /* ---- ABOUT hero ---- */
    'about.hero.label':    'Our Story',
    'about.hero.title':    'Cooking with conviction<br />since 2015',
    'about.hero.lead':     'Your Restaurant was founded on a single belief: that a great meal starts long before it reaches the table — with the relationships, the seasons, and the hands that grow the food.',

    /* ---- ABOUT sections ---- */
    'about.story.label':   'The Beginning',
    'about.story.title':   'From a single conviction<br />to sixty seats',
    'about.team.label':    'The People',
    'about.team.title':    'The team behind<br />every plate',
    'about.pillars.label': 'What We Stand For',
    'about.pillars.title': 'The pillars we cook by',
    'about.source.label':  'Sourcing & Sustainability',
    'about.source.title':  'Where our food<br />comes from',
    'about.time.label':    'Timeline',
    'about.time.title':    'Nine years in the making',

    /* ---- ABOUT stats ---- */
    'about.stats.s1': 'Open Since 2015',
    'about.stats.s2': 'Team Members',
    'about.stats.s3': 'Producer Partners',
    'about.stats.s4': 'Covers Per Evening',

    /* ---- ABOUT pillars ---- */
    'pillar.1.title': 'Seasonality',
    'pillar.2.title': 'Relationships',
    'pillar.3.title': 'Transparency',
    'pillar.4.title': 'Genuine Hospitality',

    /* ---- PRIVATE DINING hero ---- */
    'pd.hero.label': 'Private Dining',
    'pd.hero.title': 'Your own table.<br />Your own evening.',
    'pd.hero.lead':  'Whether a birthday, an anniversary, a team dinner, or simply a reason to gather around something special — our private spaces are designed for moments that matter.',
    'pd.hero.btn2':  'See Our Spaces',
    'pd.hero.t1':    'Responds within 24 hours',
    'pd.hero.t2':    'Bespoke menus with Chef Marko',
    'pd.hero.t3':    'Fully private — dedicated service team',
    'pd.card1.name': 'The Garden Room',
    'pd.card1.cap1': 'Up to 18 guests',
    'pd.card1.cap2': 'Tue – Sat evenings',
    'pd.card1.desc': 'Warmly lit private room with dedicated service, custom menus, and full AV capability.',
    'pd.card2.name': 'The Chef\'s Table',
    'pd.card2.cap1': 'Up to 8 guests',
    'pd.card2.cap2': 'Most exclusive',
    'pd.card2.desc': 'Dine at the kitchen pass — exclusive menu presented course by course by the team.',
    'pd.enquire-cta': 'Enquire',

    /* ---- PRIVATE DINING spaces section ---- */
    'pd.spaces.label': 'Our Private Spaces',
    'pd.spaces.title': 'Two rooms. One standard of care.',
    'pd.gr.label':     'The Garden Room',
    'pd.gr.title':     'A room designed for celebration',
    'pd.ct.label':     'The Chef\'s Table',
    'pd.ct.title':     'Ringside to the kitchen',
    'pd.form.label':   'Get In Touch',
    'pd.form.title':   'Enquire about private dining',

    /* ---- EVENTS hero ---- */
    'events.hero.label': 'At Your Restaurant',
    'events.hero.title': 'Events worth clearing<br />the calendar for',

    /* ---- GALLERY hero ---- */
    'gallery.hero.label': 'Gallery',
    'gallery.hero.title': 'A glimpse inside Your Restaurant',
    'gallery.filter.all':      'All',
    'gallery.filter.food':     'Food',
    'gallery.filter.interior': 'Interior',
    'gallery.filter.events':   'Events',
    'gallery.filter.team':     'Team',

    /* ---- CONTACT hero ---- */
    'contact.hero.label': 'Get In Touch',
    'contact.hero.title': 'We\'d love to<br />hear from you',
    'contact.send':       'Send Message',

    /* ---- RESERVATIONS hero ---- */
    'res.hero.label': 'Reservations',
    'res.hero.title': 'Reserve your table<br />at Your Restaurant',
    'res.hero.lead':  'We open Tuesday through Sunday. Monday we rest. Select your date and we\'ll find you the perfect seat.',

    /* ---- PRESS hero ---- */
    'press.hero.label': 'Press & Recognition',
    'press.hero.title': 'What the world<br />is saying about Your Restaurant',

    /* ---- MENU hero ---- */
    'menu.label':  'Your Restaurant · Seasonal Menu',
    'menu.title':  'The Menu',
    'menu.lead':   'Driven by what grows well and what tastes right. Our menu changes weekly — this is our current selection.',
  },

  /* ======================================================================
     ALBANIAN — Shqip
     ====================================================================== */
  sq: {
    /* ---- Navigation ---- */
    'nav.home':    'Ballina',
    'nav.menu':    'Menyja',
    'nav.about':   'Rreth Nesh',
    'nav.private': 'Darkë Private',
    'nav.events':  'Ngjarje',
    'nav.gallery': 'Galeria',
    'nav.contact': 'Kontakti',
    'nav.press':   'Shtyp',
    'nav.reserve': 'Rezervo Tavolinën',
    'nav.enquire': 'Pyet Tani',

    /* ---- Footer ---- */
    'footer.navigate': 'Navigim',
    'footer.hours':    'Oraret e Punës',
    'footer.find':     'Na Gjeni',
    'footer.tue-thu':  'Mar – Enj',
    'footer.fri-sat':  'Pre – Sht',
    'footer.sunday':   'E Diel',
    'footer.monday':   'E Hënë',
    'footer.closed':   'Mbyllur',
    'footer.privacy':  'Privatësia',
    'footer.terms':    'Kushtet',

    /* ---- Cookie ---- */
    'cookie.text':    'Ne përdorim cookies për të përmirësuar përvojën tuaj.',
    'cookie.learn':   'Mëso më shumë',
    'cookie.accept':  'Pranoj',
    'cookie.decline': 'Refuzoj',

    /* ---- Common buttons ---- */
    'btn.reserve':      'Rezervo Tavolinën',
    'btn.view-menu':    'Shiko Menynë',
    'btn.full-menu':    'Shiko Menynë të Plotë',
    'btn.book-seats':   'Rezervo Vendet',
    'btn.enquire':      'Pyet Tani',
    'btn.experience':   'Përjeto Vetë',
    'btn.our-story':    'Historia Jonë e Plotë',
    'btn.meet-team':    'Takoni Ekipin',
    'btn.all-events':   'Të Gjitha Ngjarjet',
    'btn.subscribe':    'Abonohu',
    'btn.send':         'Dërgo Mesazh',
    'btn.send-enquiry':        'Dërgo Pyetje',
    'btn.check-avail':         'Kontrollo Disponueshmërinë',
    'btn.print-menu':          'Printo Menynë',
    'btn.confirm-reservation': 'Konfirmo Rezervimin',
    'btn.confirm-rsvp':        'Konfirmo RSVP',

    /* ---- INDEX hero ---- */
    'index.hero.label':  'Gastronomia Moderne Europiane',
    'index.hero.title':  'Gatim Modern,<br />Përbërës të Ndershëm',
    'index.hero.lead':   'Një tryezë sezonale e udhëhequr nga ajo që rritet mirë dhe ka shije të mirë — krijuar nga Shef Marko Ilievski në zemrën e qytetit.',
    'index.hero.years':  'Vite',
    'index.hero.seats':  'Vende',
    'index.hero.rating': 'Vlerësim',

    /* ---- INDEX about split ---- */
    'index.about.label': 'Historia Jonë',
    'index.about.title': 'Ku gatimi i ndershëm<br />takon tryezën e menduar',
    'index.about.lead':  'I themeluar në vitin 2015 nga Shef Marko Ilievski, Restoranti lindi nga një besim i thjeshtë: se vakti më i mirë është ai që respekton përbërësit, stinët dhe mysafirët e tij.',
    'index.about.body':  'Ne nuk ndjekim trendet. Ne ndjekim atë që rritet. Menyja jonë ndryshon me tregjet, e nxitur nga marrëdhëniet me fermat lokale dhe prodhuesit që ndajnë vlerat tona. Çdo pjatë në tavolinë filloi si një bisedë — me një fermer, një peshkatar, një kultivues.',
    'index.about.b1':    'Menyja sezonale — përditësohet çdo javë, jo çdo tremujor',
    'index.about.b2':    'Marrëdhënie me prodhuesit brenda 150km ku është e mundur',
    'index.about.b3':    '60 vende — mjaftueshëm intimate për të gatuar me kujdes',
    'index.about.b4':    'Meny pijesh sezonale e krijuar për të plotësuar çdo pjatë',

    /* ---- INDEX chef ---- */
    'index.chef.label':  'Kuzhina',
    'index.chef.title':  'Gatim nga<br />themelet',
    'index.chef.body1':  'Kuzhinieri Marko Ilievski u trajnua në kuzhina në Lyon, Kopenhagen dhe Barcelonë para se të kthehej në shtëpi për të hapur Restorantin Tonë në 2015. Gatimi i tij është i rrënjosur thellë në vetë produktet — ndërhyrje minimale, qartësi maksimale e shijes.',
    'index.chef.body2':  'Duke punuar ngushtë me Sous Chef Elena Petrov, kuzhina jonë funksionon me një kombinim të rrallë precizioni dhe ngrohtësie. Pjatat janë projektuar të jenë vërtet të shijshme — kurrë të mprehta për vetë mprehjen.',
    'index.chef.quote':  'Gjëja më e mirë që mund të bëj me një copë peshku të përsosur është të tërhiqem mënjanë. Erëza, nxehtësi dhe një pjatë që e lë të flasë. Kjo është kuzhina.',
    'index.chef.cite':   '— Kuzhinieri Marko Ilievski',

    /* ---- INDEX menu preview ---- */
    'index.menu.label':  'Menyja',
    'index.menu.title':  'Një shije e asaj që ju pret',
    'index.menu.lead':   'Sezonal. Modern. I bazuar. Menyja jonë ndryshon me korrjen — ja një vështrim i asaj që po shërbejmë aktualisht.',

    /* ---- INDEX stats ---- */
    'index.stats.s1': 'Në Zemrën e Qytetit',
    'index.stats.s2': 'Sallë Ngrënieje Intime',
    'index.stats.s3': 'Vlerësimi Mesatar i Mysafirëve',
    'index.stats.s4': 'Komente të Verifikuara',

    /* ---- INDEX private preview ---- */
    'index.pd.label':  'Darkë Private',
    'index.pd.title':  'Tryeza jote.<br />Mbrëmja jote.',
    'index.pd.lead':   'Qoftë për ditëlindje, përvjetor, darkë korporative ose thjesht një arsye për t\'u mbledhur mirë — dhomat tona private janë krijuar për ta bërë rastin unik.',

    /* ---- INDEX newsletter ---- */
    'index.news.label':    'Qëndroni të Lidhur',
    'index.news.title':    'Menytë sezonale. Ngjarje speciale. Pa zhurmë.',
    'index.news.input':    'Adresa juaj e emailit',

    /* ---- INDEX reservation widget ---- */
    'index.widget.title':    'Rezervo Tavolinën Tënde',
    'index.widget.subtitle': 'Për opsione të plota dhe kërkesa të veçanta, përdorni faqen e rezervimeve.',
    'index.widget.date':     'Data',
    'index.widget.guests':   'Mysafirët',
    'index.widget.note':     'Mbyllur të Hënave. Për grupe 10+, ju lutemi na telefononi drejtpërdrejt.',

    /* ---- INDEX events + press previews ---- */
    'index.events.title': 'Ngjarjet e Ardhshme',
    'index.press.label':  'E Raportuar Nga',

    /* ---- ABOUT hero ---- */
    'about.hero.label':    'Historia Jonë',
    'about.hero.title':    'Gatim me bindje<br />që nga viti 2015',
    'about.hero.lead':     'Restoranti u themelua mbi një besim të vetëm: se një vakt i madh fillon shumë para se të arrijë në tryezë — me marrëdhëniet, stinët dhe duart që rrisin ushqimin.',

    /* ---- ABOUT sections ---- */
    'about.story.label':   'Fillimi',
    'about.story.title':   'Nga një bindje e vetme<br />deri në gjashtëdhjetë vende',
    'about.team.label':    'Njerëzit',
    'about.team.title':    'Ekipi pas<br />çdo pjate',
    'about.pillars.label': 'Çfarë Mbrojmë',
    'about.pillars.title': 'Parimet tona të gatimit',
    'about.source.label':  'Burimet dhe Qëndrueshmëria',
    'about.source.title':  'Ku vjen<br />ushqimi ynë',
    'about.time.label':    'Kronologjia',
    'about.time.title':    'Nëntë vjet në të bërit',

    /* ---- ABOUT stats ---- */
    'about.stats.s1': 'Hapur Që Nga 2015',
    'about.stats.s2': 'Anëtarë të Ekipit',
    'about.stats.s3': 'Partnerë Prodhuesish',
    'about.stats.s4': 'Vende Çdo Mbrëmje',

    /* ---- ABOUT pillars ---- */
    'pillar.1.title': 'Sezonshmëria',
    'pillar.2.title': 'Marrëdhëniet',
    'pillar.3.title': 'Transparenca',
    'pillar.4.title': 'Mikpritje e Vërtetë',

    /* ---- PRIVATE DINING ---- */
    'pd.hero.label': 'Darkë Private',
    'pd.hero.title': 'Tryeza jote.<br />Mbrëmja jote.',
    'pd.hero.lead':  'Qoftë ditëlindje, përvjetor, darkë ekipi ose thjesht arsye për t\'u mbledhur — hapësirat tona private janë krijuar për momente të veçanta.',
    'pd.hero.btn2':  'Shiko Hapësirat Tona',
    'pd.hero.t1':    'Përgjigjet brenda 24 orësh',
    'pd.hero.t2':    'Menytë me porosi me Shef Markon',
    'pd.hero.t3':    'Tërësisht private — ekip shërbimi i dedikuar',
    'pd.card1.name': 'Dhoma e Kopshtit',
    'pd.card1.cap1': 'Deri në 18 mysafirë',
    'pd.card1.cap2': 'Mar – Sht mbrëmje',
    'pd.card1.desc': 'Dhomë private me ndriçim të ngrohtë, shërbim të dedikuar, menytë me porosi dhe pajisje AV.',
    'pd.card2.name': 'Tryeza e Shefit',
    'pd.card2.cap1': 'Deri në 8 mysafirë',
    'pd.card2.cap2': 'Përvoja më ekskluzive',
    'pd.card2.desc': 'Hani pranë kuzhinës — meny ekskluzive e prezantuar kurs pas kursi nga ekipi.',
    'pd.enquire-cta': 'Pyet',

    'pd.spaces.label': 'Hapësirat Tona Private',
    'pd.spaces.title': 'Dy dhoma. Një standard kujdesi.',
    'pd.gr.label':     'Dhoma e Kopshtit',
    'pd.gr.title':     'Dhomë e krijuar për festime',
    'pd.ct.label':     'Tryeza e Shefit',
    'pd.ct.title':     'Pranë kuzhinës',
    'pd.form.label':   'Na Kontaktoni',
    'pd.form.title':   'Pyesni për darkën private',

    /* ---- EVENTS ---- */
    'events.hero.label': 'Në Restorantin Tonë',
    'events.hero.title': 'Ngjarje për të cilat ia vlen<br />të lironi kalendarin',

    /* ---- GALLERY ---- */
    'gallery.hero.label': 'Galeria',
    'gallery.hero.title': 'Një vështrim brenda Restorantit Tonë',
    'gallery.filter.all':      'Të Gjitha',
    'gallery.filter.food':     'Ushqim',
    'gallery.filter.interior': 'Interier',
    'gallery.filter.events':   'Ngjarje',
    'gallery.filter.team':     'Ekipi',

    /* ---- CONTACT ---- */
    'contact.hero.label': 'Na Kontaktoni',
    'contact.hero.title': 'Do të donim<br />të dëgjonim nga ju',
    'contact.send':       'Dërgo Mesazh',

    /* ---- RESERVATIONS hero ---- */
    'res.hero.label': 'Rezervime',
    'res.hero.title': 'Rezervoni tryezën tuaj<br />në Restorantin Tonë',
    'res.hero.lead':  'Hapim nga e Marta deri të Dielën. Të Hënën pushojmë. Zgjidhni datën dhe do t\'ju gjejmë vendin perfekt.',

    /* ---- PRESS hero ---- */
    'press.hero.label': 'Shtyp &amp; Njohje',
    'press.hero.title': 'Çfarë thotë bota<br />për Restorantin Tonë',

    /* ---- MENU ---- */
    'menu.label':  'Restoranti Ynë · Menyja Sezonale',
    'menu.title':  'Menyja',
    'menu.lead':   'Nën drejtimin e asaj që rritet mirë dhe ka shije të mirë. Menyja jonë ndryshon çdo javë — ky është përzgjedhja jonë aktuale.',
  },

  /* ======================================================================
     MACEDONIAN — Македонски
     ====================================================================== */
  mk: {
    /* ---- Navigation ---- */
    'nav.home':    'Почетна',
    'nav.menu':    'Мени',
    'nav.about':   'За Нас',
    'nav.private': 'Приватна Вечера',
    'nav.events':  'Настани',
    'nav.gallery': 'Галерија',
    'nav.contact': 'Контакт',
    'nav.press':   'Прес',
    'nav.reserve': 'Резервирај Маса',
    'nav.enquire': 'Прашај Сега',

    /* ---- Footer ---- */
    'footer.navigate': 'Навигација',
    'footer.hours':    'Работно Време',
    'footer.find':     'Најди Не',
    'footer.tue-thu':  'Вт – Чет',
    'footer.fri-sat':  'Пет – Саб',
    'footer.sunday':   'Недела',
    'footer.monday':   'Понеделник',
    'footer.closed':   'Затворено',
    'footer.privacy':  'Приватност',
    'footer.terms':    'Услови',

    /* ---- Cookie ---- */
    'cookie.text':    'Ние користиме колачиња за да го подобриме вашето искуство.',
    'cookie.learn':   'Дознај повеќе',
    'cookie.accept':  'Прифати',
    'cookie.decline': 'Одбиј',

    /* ---- Common buttons ---- */
    'btn.reserve':      'Резервирај Маса',
    'btn.view-menu':    'Погледни Мени',
    'btn.full-menu':    'Погледни Цело Мени',
    'btn.book-seats':   'Резервирај Места',
    'btn.enquire':      'Прашај Сега',
    'btn.experience':   'Доживеј Сам',
    'btn.our-story':    'Нашата Целосна Приказна',
    'btn.meet-team':    'Запознај го Тимот',
    'btn.all-events':   'Сите Настани',
    'btn.subscribe':    'Претплати се',
    'btn.send':         'Испрати Порака',
    'btn.send-enquiry':        'Испрати Барање',
    'btn.check-avail':         'Провери Достапност',
    'btn.print-menu':          'Печати Мени',
    'btn.confirm-reservation': 'Потврди Резервација',
    'btn.confirm-rsvp':        'Потврди RSVP',

    /* ---- INDEX hero ---- */
    'index.hero.label':  'Модерна Европска Гастрономија',
    'index.hero.title':  'Модерна Кујна,<br />Чесни Состојки',
    'index.hero.lead':   'Сезонска трпеза водена од она што расте добро и има добар вкус — создадена од Готвачот Марко Илиевски во срцето на градот.',
    'index.hero.years':  'Години',
    'index.hero.seats':  'Места',
    'index.hero.rating': 'Оцена',

    /* ---- INDEX about split ---- */
    'index.about.label': 'Нашата Приказна',
    'index.about.title': 'Каде чесното готвење<br />се среќава со промислена трпеза',
    'index.about.lead':  'Основан во 2015 година од Готвачот Марко Илиевски, Ресторанот е роден од едноставно верување: дека најдобриот оброк е оној кој ги почитува состојките, сезоните и своите гости.',
    'index.about.body':  'Не следиме трендови. Ние следиме она што расте. Нашето мени се менува со пазарите, водено од односите со локалните фарми и производители кои ги споделуваат нашите вредности. Секое јадење на трпезата почнало како разговор — со фармер, рибар, одгледувач.',
    'index.about.b1':    'Сезонски менија — ажурирани неделно, а не квартално',
    'index.about.b2':    'Односи со производители во рамките на 150км каде е можно',
    'index.about.b3':    '60 места — доволно интимно за да се готви со грижа',
    'index.about.b4':    'Сезонско мени со пијалоци создадено да го надополни секое јадење',

    /* ---- INDEX chef ---- */
    'index.chef.label':  'Кујната',
    'index.chef.title':  'Готвење од<br />основите',
    'index.chef.body1':  'Главниот готвач Марко Илиевски се обучувал во кујни во Лион, Копенхаген и Барселона пред да се врати дома и да го отвори Ресторанот во 2015. Неговото готвење е длабоко вкоренето во самите состојки — минимална интервенција, максимална јасност на вкусот.',
    'index.chef.body2':  'Работејќи во тесна соработка со помошниот готвач Елена Петров, нашата кујна работи со редок спој на прецизност и топлина. Јадењата се дизајнирани да бидат навистина вкусни — никогаш паметни за самата паметност.',
    'index.chef.quote':  'Најдоброто нешто што можам да направам со совршено парче риба е да се тргнам на страна. Зачини, топлина и чинија која го остава да зборува. Тоа е готвење.',
    'index.chef.cite':   '— Главен Готвач Марко Илиевски',

    /* ---- INDEX menu preview ---- */
    'index.menu.label':  'Менито',
    'index.menu.title':  'Вкус на она што ве очекува',
    'index.menu.lead':   'Сезонско. Модерно. Темелно. Нашето мени се менува со жетвата — еве поглед на она што моментално го сервираме.',

    /* ---- INDEX stats ---- */
    'index.stats.s1': 'Во Срцето на Градот',
    'index.stats.s2': 'Интимна Главна Трпезарија',
    'index.stats.s3': 'Просечна Оцена на Гостите',
    'index.stats.s4': 'Верификувани Рецензии',

    /* ---- INDEX private preview ---- */
    'index.pd.label':  'Приватна Вечера',
    'index.pd.title':  'Твојата маса.<br />Твојата вечер.',
    'index.pd.lead':   'Без разлика дали е роденден, годишнина, корпоративна вечера или едноставно причина да се соберете добро — нашите приватни соби се создадени за да го направат настанот посебен.',

    /* ---- INDEX newsletter ---- */
    'index.news.label':    'Останете Поврзани',
    'index.news.title':    'Сезонски менија. Специјални настани. Без шум.',
    'index.news.input':    'Вашата е-маил адреса',

    /* ---- INDEX reservation widget ---- */
    'index.widget.title':    'Резервирај Своја Маса',
    'index.widget.subtitle': 'За целосни опции и специјални барања, користете ја страницата за резервации.',
    'index.widget.date':     'Датум',
    'index.widget.guests':   'Гости',
    'index.widget.note':     'Затворено во понеделник. За групи 10+, ве молиме јавете ни се директно.',

    /* ---- INDEX events + press previews ---- */
    'index.events.title': 'Претстојни Настани',
    'index.press.label':  'Споменато Во',

    /* ---- ABOUT hero ---- */
    'about.hero.label':    'Нашата Приказна',
    'about.hero.title':    'Готвење со убедување<br />од 2015 година',
    'about.hero.lead':     'Ресторанот е основан врз едно верување: дека одличен оброк почнува долго пред да стигне на трпезата — со односите, сезоните и рацете кои го одгледуваат храната.',

    /* ---- ABOUT sections ---- */
    'about.story.label':   'Почетокот',
    'about.story.title':   'Од едно убедување<br />до шеесет места',
    'about.team.label':    'Луѓето',
    'about.team.title':    'Тимот зад<br />секој чинија',
    'about.pillars.label': 'Она Што Го Застапуваме',
    'about.pillars.title': 'Столбовите по кои готвиме',
    'about.source.label':  'Набавка и Одржливост',
    'about.source.title':  'Откаде доаѓа<br />нашата храна',
    'about.time.label':    'Временска Линија',
    'about.time.title':    'Девет години во правење',

    /* ---- ABOUT stats ---- */
    'about.stats.s1': 'Отворено Од 2015',
    'about.stats.s2': 'Членови на Тимот',
    'about.stats.s3': 'Партнери Производители',
    'about.stats.s4': 'Места Секоја Вечер',

    /* ---- ABOUT pillars ---- */
    'pillar.1.title': 'Сезонност',
    'pillar.2.title': 'Односи',
    'pillar.3.title': 'Транспарентност',
    'pillar.4.title': 'Вистинско Гостопримство',

    /* ---- PRIVATE DINING ---- */
    'pd.hero.label': 'Приватна Вечера',
    'pd.hero.title': 'Твојата маса.<br />Твојата вечер.',
    'pd.hero.lead':  'Без разлика дали е роденден, годишнина, тимска вечера или едноставно причина да се соберете — нашите приватни простори се создадени за моменти кои имаат значење.',
    'pd.hero.btn2':  'Погледни Ги Нашите Простори',
    'pd.hero.t1':    'Одговара во рок од 24 часа',
    'pd.hero.t2':    'Менија по нарачка со Готвачот Марко',
    'pd.hero.t3':    'Целосно приватно — посветен тим за услуга',
    'pd.card1.name': 'Градинската Соба',
    'pd.card1.cap1': 'До 18 гости',
    'pd.card1.cap2': 'Вт – Саб вечери',
    'pd.card1.desc': 'Топло осветлена приватна соба со посветена услуга, менија по нарачка и целосна AV опрема.',
    'pd.card2.name': 'Готвачката Маса',
    'pd.card2.cap1': 'До 8 гости',
    'pd.card2.cap2': 'Најексклузивно искуство',
    'pd.card2.desc': 'Вечерајте при кујнскиот пас — ексклузивно мени презентирано курс по курс од тимот.',
    'pd.enquire-cta': 'Прашај',

    'pd.spaces.label': 'Нашите Приватни Простори',
    'pd.spaces.title': 'Две соби. Еден стандард на грижа.',
    'pd.gr.label':     'Градинската Соба',
    'pd.gr.title':     'Соба создадена за прослава',
    'pd.ct.label':     'Готвачката Маса',
    'pd.ct.title':     'Пред кујната',
    'pd.form.label':   'Контактирајте Не',
    'pd.form.title':   'Прашајте за приватна вечера',

    /* ---- EVENTS ---- */
    'events.hero.label': 'Во Вашиот Ресторан',
    'events.hero.title': 'Настани вредни да го<br />исчистите календарот',

    /* ---- GALLERY ---- */
    'gallery.hero.label': 'Галерија',
    'gallery.hero.title': 'Поглед внатре во Вашиот Ресторан',
    'gallery.filter.all':      'Сите',
    'gallery.filter.food':     'Храна',
    'gallery.filter.interior': 'Ентериер',
    'gallery.filter.events':   'Настани',
    'gallery.filter.team':     'Тимот',

    /* ---- CONTACT ---- */
    'contact.hero.label': 'Контактирајте Не',
    'contact.hero.title': 'Би сакале<br />да слушнеме од вас',
    'contact.send':       'Испрати Порака',

    /* ---- RESERVATIONS hero ---- */
    'res.hero.label': 'Резервации',
    'res.hero.title': 'Резервирајте маса<br />во Вашиот Ресторан',
    'res.hero.lead':  'Отворени вторник до недела. Понеделник одмараме. Изберете датум и ќе ви најдеме совршено место.',

    /* ---- PRESS hero ---- */
    'press.hero.label': 'Прес &amp; Признанија',
    'press.hero.title': 'Што светот<br />зборува за Вашиот Ресторан',

    /* ---- MENU ---- */
    'menu.label':  'Вашиот Ресторан · Сезонско Мени',
    'menu.title':  'Менито',
    'menu.lead':   'Водено од она што расте добро и има добар вкус. Нашето мени се менува неделно — ова е нашиот тековен избор.',
  },
};

/* --------------------------------------------------------------------------
   Apply translations to the current page
   -------------------------------------------------------------------------- */
function applyTranslations(lang) {
  const t = VERDE_TRANSLATIONS[lang];
  if (!t) return;

  // 1. data-i18n → textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // 2. data-i18n-html → innerHTML (for headings with <br>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // 3. data-i18n-placeholder → placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  // 4. data-i18n-label → aria-label attribute
  document.querySelectorAll('[data-i18n-label]').forEach(el => {
    const key = el.dataset.i18nLabel;
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  // 5. Update <html lang> attribute
  document.documentElement.lang = lang;
}

/* --------------------------------------------------------------------------
   Update active state on all switcher buttons (desktop + mobile)
   -------------------------------------------------------------------------- */
function updateSwitcherUI(lang) {
  document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
  });
}

/* --------------------------------------------------------------------------
   Public: set language, persist, update UI
   -------------------------------------------------------------------------- */
function setLanguage(lang) {
  if (!VERDE_TRANSLATIONS[lang]) return;
  applyTranslations(lang);
  updateSwitcherUI(lang);
  localStorage.setItem('verde-lang', lang);
}

/* --------------------------------------------------------------------------
   Init
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Restore saved language (default: en)
  const saved = localStorage.getItem('verde-lang') || 'en';
  setLanguage(saved);

  // Wire up desktop switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Wire up mobile drawer switcher buttons
  document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
});
