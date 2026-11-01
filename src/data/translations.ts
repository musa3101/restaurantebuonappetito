// web/src/data/translations.ts
// Sistema de Traducción Multilingüe (i18nstack) para Buon Appetito (Port d'Andratx)
// Español (es), Inglés (en), Alemán (de) con estricto respeto de diseño y ritmo visual.

export type Language = 'es' | 'en' | 'de';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  es: {
    // Nav
    nav_inicio: "Inicio",
    nav_sobre_nosotros: "Sobre nosotros",
    nav_menu: "Menú",
    nav_donde_estamos: "Dónde estamos",
    nav_reservar: "Reservar mesa",
    
    // Hero
    hero_location: "AV. MATEO BOSCH 24 · PORT D'ANDRATX",
    hero_title_part1: "Cocina mediterránea",
    hero_title_part2: "con alma italiana",
    hero_btn_reservar: "RESERVAR MESA",
    hero_btn_menu: "VER MENÚ",
    
    // Sobre Nosotros
    about_eyebrow: "Sobre nosotros",
    about_title: "El placer de compartir una buena mesa",
    about_location: "Port d’Andratx · Mallorca",
    about_p1: "Buon Appetito nace como un lugar para reunirse alrededor de la mesa y disfrutar de la gastronomía en un ambiente cercano, en pleno Port d’Andratx. Nuestra propuesta une sabores de la cocina italiana y mediterránea, con una carta variada pensada para que cada persona encuentre su manera de disfrutar.",
    about_p2: "A ello se suma nuestra amplia terraza junto al puerto, donde el ambiente marinero y los atardeceres de Mallorca crean el escenario perfecto para compartir una comida, una cena o simplemente un buen rato en compañía.",
    about_p3: "Nos gustan los momentos sencillos: una mesa compartida, una buena conversación y el placer de disfrutar sin mirar el reloj. Esa es la esencia que queremos transmitir en Buon Appetito.",
    about_stat1_desc: "Pescado fresco de lonja",
    about_stat2_desc: "Línea frente al puerto",
    about_stat3_desc: "Sabor mediterráneo",

    // La Nostra Pizza (Il Nostro Calzone)
    pizza_eyebrow: "Especialidad • Tradición Italiana",
    pizza_title: "Il Nostro Calzone Tradizionale",
    pizza_desc: "Doblado a mano y horneado a fuego vivo para concentrar todo el vapor, fundir el relleno y lograr una masa ligera e irresistible.",
    pizza_c1_title: "Plegado artesanal en media luna",
    pizza_c1_desc: "Masa madre sellada a mano que guarda todo el vapor, aroma y jugosidad en su interior.",
    pizza_c2_title: "Horneado al punto crujiente",
    pizza_c2_desc: "Borde dorado y aireado a alta temperatura para un contraste crujiente por fuera y tierno por dentro.",
    pizza_c3_title: "Corazón fundido y toque fresco",
    pizza_c3_desc: "Mozzarella fundida en su interior coronada con salsa natural, hierbas aromáticas y aceite de oliva virgen.",

    // Menú
    menu_eyebrow: "Gastronomía Artesanal",
    menu_title: "Nuestra Carta & Especialidades",
    menu_desc: "Tradición ítalo-mediterránea en cada creación. Desde ensaladas frescas y pastas con trufa negra, hasta pizzas artesanales crujientes, carnes selectas y postres caseros.",
    menu_btn_food: "Carta de Comida",
    menu_btn_wine: "Vinos y Bodega",
    menu_wine_badge: "En sala",
    menu_wine_toast: "🍷 Nuestra carta de vinos y bodega se presenta directamente en sala",
    
    // Reseñas
    reviews_eyebrow: "Experiencias en Port d'Andratx",
    reviews_title: "Qué Dicen de Nosotros",
    reviews_desc: "Opiniones reales de vecinos, locales y viajeros que disfrutan de nuestra cocina italiana y terraza junto al puerto.",
    reviews_badge_sub: "opiniones en Google Maps",
    reviews_verified_tag: "Opinión verificada en Google Maps",
    reviews_photos_title: "Fotos de clientes:",
    reviews_cta_title: "¿Has probado nuestras pizzas o cenado en nuestra terraza?",
    reviews_cta_desc: "Tu valoración ayuda a otros comensales a descubrir la auténtica cocina mediterránea en Port d'Andratx.",
    reviews_btn_write: "Escribir una reseña en Google",
    reviews_btn_all: "Ver las +240 reseñas en Google",
    
    // Dónde estamos / Contacto
    contact_eyebrow: "Visítanos • Port d'Andratx",
    contact_title: "Dónde Encontrarnos",
    contact_desc: "Frente al puerto deportivo de Port d'Andratx. Terraza exterior con vistas al mar y acogedor salón interior climatizado.",
    contact_panel_brand: "Buon Appetito • Port d'Andratx",
    contact_panel_title: "Información",
    contact_panel_and: "&",
    contact_panel_title2: "Contacto",
    contact_panel_desc: "Atención personalizada de sala, reservas y ubicación frente al puerto.",
    contact_btn_reservar: "Reservar Mesa",
    contact_schedule_label: "Horario",
    contact_schedule_val: "11:30 – 23:30 h",
    contact_schedule_sub: "Lunes a Domingo",
    contact_phone_label: "Teléfono de Sala",
    contact_phone_sub: "Atención directa",
    contact_email_label: "Correo Electrónico",
    contact_email_sub: "Eventos privados y grupos",
    contact_btn_maps: "Abrir en Google Maps",
    
    // Footer
    footer_desc: "Sabor mediterráneo con alma italiana",
    footer_nav_title: "Enlaces Rápidos",
    footer_legal_title: "Avisos Legales",
    footer_legal_aviso: "Aviso legal",
    footer_legal_privacidad: "Política de privacidad",
    footer_legal_cookies: "Política de cookies",
    footer_legal_cookie_config: "Configurar cookies",
    footer_rights: "Todos los derechos reservados.",
    footer_made_with: "Hecho con",

    // Legal Header & Pages
    legal_back: "Volver atrás",
    legal_info_badge: "Información Legal y LSSI-CE",
    legal_aviso_badge: "Información Legal y LSSI-CE",
    legal_privacidad_badge: "Protección de Datos Personales",
    legal_cookies_badge: "Transparencia y Navegación",
    legal_updated: "Última actualización: Octubre 2026",
    legal_aviso_title: "Aviso Legal",
    legal_privacidad_title: "Política de Privacidad",
    legal_cookies_title: "Política de Cookies"
  },
  en: {
    // Nav
    nav_inicio: "Home",
    nav_sobre_nosotros: "About us",
    nav_menu: "Menu",
    nav_donde_estamos: "Location",
    nav_reservar: "Book a table",
    
    // Hero
    hero_location: "AV. MATEO BOSCH 24 · PORT D'ANDRATX",
    hero_title_part1: "Mediterranean cuisine",
    hero_title_part2: "with an Italian soul",
    hero_btn_reservar: "BOOK A TABLE",
    hero_btn_menu: "VIEW MENU",
    
    // Sobre Nosotros
    about_eyebrow: "About us",
    about_title: "The pleasure of sharing a fine table",
    about_location: "Port d’Andratx · Mallorca",
    about_p1: "Buon Appetito was born as a gathering place to share food and conversation in a warm, welcoming atmosphere right in Port d'Andratx. Our kitchen blends the authentic flavors of Italian and Mediterranean cuisine, offering a varied menu crafted so everyone finds their perfect taste.",
    about_p2: "Complementing this is our spacious harbor terrace, where sea breezes and Mallorcan sunsets provide the ideal backdrop for a memorable lunch, a relaxed dinner, or simply an aperitif in great company.",
    about_p3: "We believe in life's simple pleasures: a shared table, great conversation, and the joy of dining without watching the clock. That is the soul we share with you at Buon Appetito.",
    about_stat1_desc: "Fresh harbor fish",
    about_stat2_desc: "Front harbor line",
    about_stat3_desc: "Mediterranean taste",

    // La Nostra Pizza (Il Nostro Calzone)
    pizza_eyebrow: "Specialty • Italian Tradition",
    pizza_title: "Il Nostro Calzone Tradizionale",
    pizza_desc: "Hand-folded and baked over a live fire to seal in all the steam, melt the fillings, and create a light, irresistible crust.",
    pizza_c1_title: "Handcrafted half-moon fold",
    pizza_c1_desc: "Hand-sealed slow sourdough that seals all steam, aroma, and juiciness within.",
    pizza_c2_title: "Baked to crispy perfection",
    pizza_c2_desc: "High-temperature golden crust, wonderfully crisp on the outside and tender within.",
    pizza_c3_title: "Melting heart & fresh touch",
    pizza_c3_desc: "Melting mozzarella inside topped with fresh tomato sauce, aromatic herbs, and extra virgin olive oil.",

    // Menú
    menu_eyebrow: "Artisanal Gastronomy",
    menu_title: "Our Menu & Specialties",
    menu_desc: "Italo-Mediterranean tradition in every creation. From crisp salads and black truffle pasta to handcrafted crispy pizzas, prime grilled cuts, and homemade desserts.",
    menu_btn_food: "Food Menu",
    menu_btn_wine: "Wines & Cellar",
    menu_wine_badge: "In room",
    menu_wine_toast: "🍷 Our wine list and cellar selection is presented directly at your table",
    
    // Reseñas
    reviews_eyebrow: "Experiences in Port d'Andratx",
    reviews_title: "What Guests Say About Us",
    reviews_desc: "Authentic reviews from neighbors, locals, and travelers who enjoy our Italian cuisine and harbor terrace.",
    reviews_badge_sub: "reviews on Google Maps",
    reviews_verified_tag: "Verified review on Google Maps",
    reviews_photos_title: "Guest photos:",
    reviews_cta_title: "Have you tried our pizzas or dined on our terrace?",
    reviews_cta_desc: "Your review helps other diners discover authentic Mediterranean cuisine in Port d'Andratx.",
    reviews_btn_write: "Write a review on Google",
    reviews_btn_all: "View all 240+ reviews on Google",
    
    // Dónde estamos / Contacto
    contact_eyebrow: "Visit Us • Port d'Andratx",
    contact_title: "Where to Find Us",
    contact_desc: "Facing the marina of Port d'Andratx. Outdoor sea-view terrace and a cozy climate-controlled indoor dining room.",
    contact_panel_brand: "Buon Appetito • Port d'Andratx",
    contact_panel_title: "Information",
    contact_panel_and: "&",
    contact_panel_title2: "Contact",
    contact_panel_desc: "Personalized table service, bookings, and prime harbor-front location.",
    contact_btn_reservar: "Book a Table",
    contact_schedule_label: "Hours",
    contact_schedule_val: "11:30 AM – 11:30 PM",
    contact_schedule_sub: "Monday to Sunday",
    contact_phone_label: "Dining Room Phone",
    contact_phone_sub: "Direct assistance",
    contact_email_label: "Email Address",
    contact_email_sub: "Private events & groups",
    contact_btn_maps: "Open in Google Maps",
    
    // Footer
    footer_desc: "Mediterranean flavor with an Italian soul",
    footer_nav_title: "Quick Links",
    footer_legal_title: "Legal Information",
    footer_legal_aviso: "Legal notice",
    footer_legal_privacidad: "Privacy policy",
    footer_legal_cookies: "Cookie policy",
    footer_legal_cookie_config: "Cookie settings",
    footer_rights: "All rights reserved.",
    footer_made_with: "Made with",

    // Legal Header & Pages
    legal_back: "Go back",
    legal_info_badge: "Legal Information & Compliance",
    legal_aviso_badge: "Legal Information & Compliance",
    legal_privacidad_badge: "Personal Data Protection",
    legal_cookies_badge: "Transparency & Cookie Policy",
    legal_updated: "Last updated: October 2026",
    legal_aviso_title: "Legal Notice",
    legal_privacidad_title: "Privacy Policy",
    legal_cookies_title: "Cookie Policy"
  },
  de: {
    // Nav
    nav_inicio: "Start",
    nav_sobre_nosotros: "Über uns",
    nav_menu: "Speisekarte",
    nav_donde_estamos: "Standort",
    nav_reservar: "Tisch reservieren",
    
    // Hero
    hero_location: "AV. MATEO BOSCH 24 · PORT D'ANDRATX",
    hero_title_part1: "Mediterrane Küche",
    hero_title_part2: "mit italienischer Seele",
    hero_btn_reservar: "TISCH RESERVIEREN",
    hero_btn_menu: "SPEISEKARTE",
    
    // Sobre Nosotros
    about_eyebrow: "Über uns",
    about_title: "Die Freude an einem guten Tisch",
    about_location: "Port d’Andratx · Mallorca",
    about_p1: "Buon Appetito entstand als herzlicher Treffpunkt, um gemeinsam an einem Tisch gutes Essen und beste Gesellschaft zu genießen – mitten in Port d'Andratx. Unsere Küche vereint italienische und mediterrane Aromen in einer vielseitigen Karte.",
    about_p2: "Dazu kommt unsere herrliche Terrasse direkt am Hafen, wo das maritime Flair und Mallorcas Sonnenuntergänge die perfekte Kulisse für ein Mittagessen, ein Abendessen oder ein Glas Wein bieten.",
    about_p3: "Wir schätzen die einfachen Momente: eine geteilte Tafel, anregende Gespräche und Genuss ohne Blick auf die Uhr. Das ist das Lebensgefühl von Buon Appetito.",
    about_stat1_desc: "Frischer Fisch vom Hafen",
    about_stat2_desc: "Erste Meereslinie am Hafen",
    about_stat3_desc: "Mediterraner Geschmack",

    // La Nostra Pizza (Il Nostro Calzone)
    pizza_eyebrow: "Spezialität • Italienische Tradition",
    pizza_title: "Il Nostro Calzone Tradizionale",
    pizza_desc: "Von Hand gefaltet und bei lebendigem Feuer gebacken, um das gesamte Aroma einzuschließen, den Käse zu schmelzen und einen herrlich leichten Teig zu kreieren.",
    pizza_c1_title: "Handwerklicher Halbmond",
    pizza_c1_desc: "Handversiegelter Sauerteig, der den gesamten Dampf, Duft und die Saftigkeit im Inneren bewahrt.",
    pizza_c2_title: "Knusprig auf den Punkt gebacken",
    pizza_c2_desc: "Goldbraun gebackener Rand bei hoher Temperatur für perfekten Knuspergenuss.",
    pizza_c3_title: "Zartschmelzendes Herz & Frische",
    pizza_c3_desc: "Geschmolzener Mozzarella im Inneren, gekrönt mit frischer Tomatensauce, Kräutern und Olivenöl.",

    // Menú
    menu_eyebrow: "Handwerkliche Gastronomie",
    menu_title: "Unsere Speisekarte & Spezialitäten",
    menu_desc: "Italo-mediterrane Tradition in jeder Kreation. Von frischen Salaten und Pasta mit schwarzem Trüffel bis hin zu hausgemachten knusprigen Pizzen, feinem Fleisch vom Grill und hausgemachten Desserts.",
    menu_btn_food: "Speisekarte",
    menu_btn_wine: "Weine & Keller",
    menu_wine_badge: "Am Tisch",
    menu_wine_toast: "🍷 Unsere Wein- und Kellerkarte wird Ihnen direkt am Tisch präsentiert",
    
    // Reseñas
    reviews_eyebrow: "Erlebnisse in Port d'Andratx",
    reviews_title: "Was Gäste über uns sagen",
    reviews_desc: "Echte Bewertungen von Nachbarn, Einheimischen und Reisenden, die unsere italienische Küche und Hafenterrasse genießen.",
    reviews_badge_sub: "Bewertungen auf Google Maps",
    reviews_verified_tag: "Verifizierte Google Maps Bewertung",
    reviews_photos_title: "Gästefotos:",
    reviews_cta_title: "Haben Sie unsere Pizzen probiert oder auf unserer Terrasse gespeist?",
    reviews_cta_desc: "Ihre Bewertung hilft anderen Gästen, authentische mediterrane Küche in Port d'Andratx zu entdecken.",
    reviews_btn_write: "Google-Bewertung schreiben",
    reviews_btn_all: "Alle 240+ Bewertungen auf Google",
    
    // Dónde estamos / Contacto
    contact_eyebrow: "Besuchen Sie uns • Port d'Andratx",
    contact_title: "Wo Sie uns finden",
    contact_desc: "Direkt gegenüber dem Yachthafen von Port d'Andratx. Außenterrasse mit Meerblick und gemütlicher klimatisierter Innenraum.",
    contact_panel_brand: "Buon Appetito • Port d'Andratx",
    contact_panel_title: "Information",
    contact_panel_and: "&",
    contact_panel_title2: "Kontakt",
    contact_panel_desc: "Persönlicher Service, Reservierungen und beste Lage direkt am Hafen.",
    contact_btn_reservar: "Tisch reservieren",
    contact_schedule_label: "Öffnungszeiten",
    contact_schedule_val: "11:30 – 23:30 Uhr",
    contact_schedule_sub: "Montag bis Sonntag",
    contact_phone_label: "Restaurant-Telefon",
    contact_phone_sub: "Direkter Service",
    contact_email_label: "E-Mail-Adresse",
    contact_email_sub: "Private Feiern & Gruppen",
    contact_btn_maps: "In Google Maps öffnen",
    
    // Footer
    footer_desc: "Mediterraner Geschmack mit italienischer Seele",
    footer_nav_title: "Schnelllinks",
    footer_legal_title: "Rechtliche Hinweise",
    footer_legal_aviso: "Impressum",
    footer_legal_privacidad: "Datenschutzerklärung",
    footer_legal_cookies: "Cookie-Richtlinie",
    footer_legal_cookie_config: "Cookie-Einstellungen",
    footer_rights: "Alle Rechte vorbehalten.",
    footer_made_with: "Erstellt mit",

    // Legal Header & Pages
    legal_back: "Zurück",
    legal_info_badge: "Rechtliche Angaben & LSSI-CE",
    legal_aviso_badge: "Rechtliche Angaben & LSSI-CE",
    legal_privacidad_badge: "Schutz personenbezogener Daten",
    legal_cookies_badge: "Transparenz & Cookie-Richtlinie",
    legal_updated: "Zuletzt aktualisiert: Oktober 2026",
    legal_aviso_title: "Impressum",
    legal_privacidad_title: "Datenschutzerklärung",
    legal_cookies_title: "Cookie-Richtlinie"
  }
};
