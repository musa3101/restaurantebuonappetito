/**
 * ==========================================================================
 * SISTEMA DE RESERVAS — BUON APPETITO (PORT D'ANDRATX)
 * Inspirado en la interfaz y experiencia de usuario de Cappuccino Gstaad & MyRestoo
 * Multi-idioma (ES / EN / DE), Fechas Vivas, Acordeón de Horas y Flujo Responsivo
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. DICCIONARIO MULTIIDIOMA (ES / EN / DE)
  // ==========================================
  const translations = {
    es: {
      bookingTitle: "Reserve en Buon Appetito.",
      bookingAddress: "Avenida Mateo Bosch, 24",
      guestsLabel: "Personas",
      stepperHint: "Para más de 8 comensales consulta nuestra reserva para grupos.",
      dateLabel: "Fecha",
      reservationForLabel: "Reserva para",
      lunchName: "COMIDA",
      dinnerName: "CENA",
      exactTimeLabel: "Hora exacta",
      continueBtn: "CONTINUAR",
      groupOrGiftCard: "RESERVAR PARA GRUPOS O EVENTO",
      callHelp: "Llámenos al",
      callHelpSuffix: "si tiene cualquier duda.",
      changeLanguage: "Change language",
      termsOfUse: "Condiciones de Uso",
      privacyPolicy: "Política de Privacidad",
      cookiesPolicy: "Política de Cookies",
      techBy: "Con la tecnología de",
      techTagline: "Tu tecnología de reserva inteligente sin comisiones.",
      backBtn: "Volver",
      headerBack: "Volver",
      step2Indicator: "Paso 2 de 2",
      editBtn: "Modificar",
      guestDetailsTitle: "Tus Datos de Contacto",
      guestDetailsSub: "Por favor completa tus datos para preparar tu mesa.",
      nameLabel: "Nombre y Apellidos *",
      phoneLabel: "Teléfono de contacto *",
      emailLabel: "Correo electrónico (Opcional)",
      zoneLabel: "Preferencia de espacio",
      terraceZone: "Terraza Puerto",
      interiorZone: "Salón Interior",
      occasionLabel: "Ocasión especial (Opcional)",
      occRegular: "Comida o cena habitual",
      occBirthday: "Cumpleaños",
      occAnniversary: "Aniversario",
      occDate: "Cita especial",
      occBusiness: "Comida o cena de empresa",
      occFamily: "Celebración familiar",
      notesLabel: "Alergias o peticiones especiales (Opcional)",
      confirmBtn: "CONFIRMAR RESERVA",
      directBookingNotice: "Sin intermediarios ni comisiones",
      groupModalTitle: "Reservas para Grupos y Eventos",
      groupModalDesc: "Para reservas de más de 8 personas, menús cerrados o celebraciones especiales, contacta directamente con nuestro equipo de sala para garantizar la mejor atención y disponibilidad.",
      closeBtn: "Cerrar",
      cancelBtn: "Volver",
      channelModalTitle: "¿Cómo prefieres confirmar tu reserva?",
      channelModalDesc: "Hemos detectado que navegas desde tablet u ordenador. Puedes enviar tu solicitud al instante mediante WhatsApp o por Correo Electrónico:",
      channelWhatsAppTitle: "Confirmar por WhatsApp",
      channelWhatsAppSub: "Abre chat directo con los datos de tu reserva",
      channelEmailTitle: "Confirmar por Email",
      channelEmailSub: "Envía un correo con tu reserva a Buon Appetito",
      errName: "Por favor introduce un nombre válido (al menos 2 letras, sin números).",
      errPhone: "Por favor introduce un teléfono de contacto válido (mínimo 9 dígitos).",
      errEmail: "Por favor introduce un correo electrónico válido o déjalo en blanco.",
      errTime: "Por favor selecciona una hora exacta para tu reserva.",
      personUnit: "Personas",
      personUnitSingle: "Persona",
      daysShort: ['DOM.', 'LUN.', 'MAR.', 'MIÉ.', 'JUE.', 'VIE.', 'SÁB.'],
      monthsShort: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
      monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    },
    en: {
      bookingTitle: "Book at Buon Appetito.",
      bookingAddress: "Avenida Mateo Bosch, 24",
      guestsLabel: "Guests",
      stepperHint: "For parties of more than 8 guests, please check our group booking.",
      dateLabel: "Date",
      reservationForLabel: "Reservation for",
      lunchName: "LUNCH",
      dinnerName: "DINNER",
      exactTimeLabel: "Exact Time",
      continueBtn: "CONTINUE",
      groupOrGiftCard: "GROUP BOOKING OR EVENT",
      callHelp: "Call us at",
      callHelpSuffix: "if you have any questions.",
      changeLanguage: "Cambiar idioma",
      termsOfUse: "Terms of Use",
      privacyPolicy: "Privacy Policy",
      cookiesPolicy: "Cookie Policy",
      techBy: "Powered by",
      techTagline: "Your commission-free smart booking technology.",
      backBtn: "Back",
      headerBack: "Back",
      step2Indicator: "Step 2 of 2",
      editBtn: "Edit",
      guestDetailsTitle: "Your Contact Details",
      guestDetailsSub: "Please fill in your details to prepare your table.",
      nameLabel: "Full Name *",
      phoneLabel: "Contact Phone *",
      emailLabel: "Email (Optional)",
      zoneLabel: "Seating Preference",
      terraceZone: "Harbour Terrace",
      interiorZone: "Indoor Dining",
      occasionLabel: "Special Occasion (Optional)",
      occRegular: "Casual lunch / dinner",
      occBirthday: "Birthday celebration",
      occAnniversary: "Anniversary",
      occDate: "Romantic date",
      occBusiness: "Business meal",
      occFamily: "Family gathering",
      notesLabel: "Allergies or special requests (Optional)",
      confirmBtn: "CONFIRM RESERVATION",
      directBookingNotice: "Direct booking, no commissions",
      groupModalTitle: "Group & Event Bookings",
      groupModalDesc: "For parties of more than 8 guests, custom menus or private celebrations, please contact our team directly for availability.",
      closeBtn: "Close",
      cancelBtn: "Back",
      channelModalTitle: "How would you prefer to confirm your reservation?",
      channelModalDesc: "We noticed you are on a tablet or computer. You can submit your reservation directly via WhatsApp or by Email:",
      channelWhatsAppTitle: "Confirm via WhatsApp",
      channelWhatsAppSub: "Opens direct chat with your booking details",
      channelEmailTitle: "Confirmar via Email",
      channelEmailSub: "Sends an email with your booking to Buon Appetito",
      errName: "Please enter a valid name (at least 2 letters, no numbers).",
      errPhone: "Please enter a valid contact phone number (min. 8 digits).",
      errEmail: "Please enter a valid email address or leave it blank.",
      errTime: "Please select an exact time slot for your table.",
      personUnit: "Guests",
      personUnitSingle: "Guest",
      daysShort: ['SUN.', 'MON.', 'TUE.', 'WED.', 'THU.', 'FRI.', 'SAT.'],
      monthsShort: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      monthsFull: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    de: {
      bookingTitle: "Reservieren im Buon Appetito.",
      bookingAddress: "Avenida Mateo Bosch, 24",
      guestsLabel: "Personen",
      stepperHint: "Für mehr als 8 Personen nutzen Sie bitte unsere Gruppenreservierung.",
      dateLabel: "Datum",
      reservationForLabel: "Reservierung für",
      lunchName: "MITTAGESSEN",
      dinnerName: "ABENDESSEN",
      exactTimeLabel: "Genaue Uhrzeit",
      continueBtn: "WEITER",
      groupOrGiftCard: "GRUPPENRESERVIERUNG ODER EVENT",
      callHelp: "Rufen Sie uns an unter",
      callHelpSuffix: "wenn Sie Fragen haben.",
      changeLanguage: "Change language",
      termsOfUse: "Nutzungsbedingungen",
      privacyPolicy: "Datenschutzerklärung",
      cookiesPolicy: "Cookie-Richtlinie",
      techBy: "Bereitgestellt von",
      techTagline: "Ihre provisionsfreie smarte Reservierungstechnologie.",
      backBtn: "Zurück",
      headerBack: "Zurück",
      step2Indicator: "Schritt 2 von 2",
      editBtn: "Ändern",
      guestDetailsTitle: "Ihre Kontaktdaten",
      guestDetailsSub: "Bitte geben Sie Ihre Kontaktdaten ein, um Ihren Tisch vorzubereiten.",
      nameLabel: "Vollständiger Name *",
      phoneLabel: "Telefonnummer *",
      emailLabel: "E-Mail (Optional)",
      zoneLabel: "Sitzplatzpräferenz",
      terraceZone: "Hafenterrasse",
      interiorZone: "Innenbereich",
      occasionLabel: "Besonderer Anlass (Optional)",
      occRegular: "Reguläres Essen",
      occBirthday: "Geburtstag",
      occAnniversary: "Jubiläum",
      occDate: "Besonderes Date",
      occBusiness: "Geschäftsessen",
      occFamily: "Familienfeier",
      notesLabel: "Allergien oder Wünsche (Optional)",
      confirmBtn: "RESERVIERUNG BESTÄTIGEN",
      directBookingNotice: "Direktbuchung ohne Provisionen",
      groupModalTitle: "Gruppen- und Eventreservierungen",
      groupModalDesc: "Für Reservierungen von mehr als 8 Personen oder Events wenden Sie sich bitte direkt an unser Serviceteam.",
      closeBtn: "Schließen",
      cancelBtn: "Zurück",
      channelModalTitle: "Wie möchten Sie Ihre Reservierung bestätigen?",
      channelModalDesc: "Sie navigieren von einem Tablet oder Computer. Sie können Ihre Reservierung per WhatsApp oder E-Mail senden:",
      channelWhatsAppTitle: "Per WhatsApp bestätigen",
      channelWhatsAppSub: "Öffnet direkten Chat mit Ihren Reservierungsdaten",
      channelEmailTitle: "Per E-Mail bestätigen",
      channelEmailSub: "Sendet eine E-Mail mit Ihrer Reservierung an Buon Appetito",
      errName: "Bitte geben Sie einen gültigen Namen ein (mind. 2 Buchstaben, keine Zahlen).",
      errPhone: "Bitte geben Sie eine gültige Telefonnummer an (mind. 8 Ziffern).",
      errEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein oder leer lassen.",
      errTime: "Bitte wählen Sie eine genaue Uhrzeit für Ihren Tisch.",
      personUnit: "Personen",
      personUnitSingle: "Person",
      daysShort: ['SO.', 'MO.', 'DI.', 'MI.', 'DO.', 'FR.', 'SA.'],
      monthsShort: ['JAN', 'FEB', 'MÄR', 'APR', 'MAI', 'JUN', 'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEZ'],
      monthsFull: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
    }
  };

  let currentLang = 'es';

  // ==========================================
  // 2. CONFIGURACIÓN DE TURNOS Y HORARIOS
  // ==========================================
  const TIME_SLOTS = {
    lunch: [
      '11:30', '12:00', '12:30', '13:00',
      '13:30', '14:00', '14:30', '15:00',
      '15:30', '16:00'
    ],
    dinner: [
      '19:30', '20:00', '20:30', '21:00',
      '21:30', '22:00', '22:30', '23:00',
      '23:30'
    ]
  };

  // ESTADO DE LA RESERVA
  const reservationState = {
    guests: 2,
    dateIso: '', // YYYY-MM-DD
    dateFormatted: '',
    shift: '',   // 'lunch' | 'dinner'
    time: '',    // '13:30'
    name: '',
    phone: '',
    email: '',
    zone: 'Terraza Puerto',
    occasion: 'Comida o cena habitual',
    notes: ''
  };

  // ==========================================
  // 3. GENERADOR DE FECHAS VIVAS (6 DÍAS + '...')
  // ==========================================
  const dateChipsContainer = document.getElementById('date-chips-container');
  const nativeDateInput = document.getElementById('native-date-input');
  const selectedDateValueInput = document.getElementById('selected-date-value');

  function renderDateChips() {
    if (!dateChipsContainer) return;
    dateChipsContainer.innerHTML = '';

    const langData = translations[currentLang];
    const today = new Date();

    // Fila 1: 5 días
    const row1 = document.createElement('div');
    row1.className = 'date-row';

    // Fila 2: 6º día + botón '...'
    const row2 = document.createElement('div');
    row2.className = 'date-row';

    // Min date para el input nativo
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    if (nativeDateInput) {
      nativeDateInput.min = `${yyyy}-${mm}-${dd}`;
    }

    let isDefaultDateSet = false;

    for (let i = 0; i < 6; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);

      const iso = d.toISOString().split('T')[0];
      const dayName = langData.daysShort[d.getDay()];
      const dayNum = d.getDate();
      const monthName = langData.monthsShort[d.getMonth()];

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'date-chip';
      btn.setAttribute('data-date', iso);

      // Si aún no hay fecha elegida, seleccionamos hoy por defecto
      if (!reservationState.dateIso && i === 0) {
        reservationState.dateIso = iso;
        btn.classList.add('active');
        isDefaultDateSet = true;
      } else if (reservationState.dateIso === iso) {
        btn.classList.add('active');
      }

      btn.innerHTML = `
        <span class="date-chip-day">${dayName}</span>
        <span class="date-chip-num">${dayNum}</span>
        <span class="date-chip-month">${monthName}</span>
      `;

      btn.addEventListener('click', () => {
        selectDate(iso);
      });

      if (i < 5) {
        row1.appendChild(btn);
      } else {
        row2.appendChild(btn);
      }
    }

    // Botón '...' para más fechas en el calendario
    const moreBtn = document.createElement('div');
    moreBtn.className = 'date-chip date-chip-more';
    moreBtn.id = 'btn-date-more';
    moreBtn.setAttribute('title', 'Elegir otra fecha');
    moreBtn.innerHTML = `
      <span class="date-chip-dots">...</span>
      <input type="date" class="chip-native-date" id="native-date-input-chip" aria-label="Seleccionar fecha" />
    `;

    // Si la fecha elegida está fuera de los primeros 6 días, marcamos '...' como activo
    const renderedIsos = [];
    for (let i = 0; i < 6; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      renderedIsos.push(d.toISOString().split('T')[0]);
    }
    if (reservationState.dateIso && !renderedIsos.includes(reservationState.dateIso)) {
      moreBtn.classList.add('active');
    }

    const inputDate = moreBtn.getElementsByTagName('input')[0];
    if (inputDate) {
      if (reservationState.dateIso) {
        inputDate.value = reservationState.dateIso;
      }
      const todayIso = today.toISOString().split('T')[0];
      inputDate.min = todayIso;

      inputDate.addEventListener('change', (e) => {
        if (e.target.value) {
          selectDate(e.target.value);
        }
      });
    }

    row2.appendChild(moreBtn);
    dateChipsContainer.appendChild(row1);
    dateChipsContainer.appendChild(row2);

    updateFormattedDate();
  }

  function selectDate(isoDate) {
    reservationState.dateIso = isoDate;
    if (selectedDateValueInput) selectedDateValueInput.value = isoDate;

    // Actualizar clases activas en los chips
    const chips = dateChipsContainer.querySelectorAll('.date-chip');
    let matched = false;

    chips.forEach(chip => {
      const d = chip.getAttribute('data-date');
      if (d === isoDate) {
        chip.classList.add('active');
        matched = true;
      } else {
        chip.classList.remove('active');
      }
    });

    const moreBtn = document.getElementById('btn-date-more');
    if (moreBtn) {
      if (!matched) {
        moreBtn.classList.add('active');
      } else {
        moreBtn.classList.remove('active');
      }
    }

    updateFormattedDate();
  }

  function updateFormattedDate() {
    if (!reservationState.dateIso) return;
    const parts = reservationState.dateIso.split('-');
    const year = parseInt(parts[0], 10);
    const monthIndex = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);

    const langData = translations[currentLang];
    reservationState.dateFormatted = `${day} ${langData.monthsShort[monthIndex]}, ${year}`;
  }

  // ==========================================
  // 4. SELECTOR DE PERSONAS (CHIPS 1..6 + '...')
  // ==========================================
  const personChips = document.querySelectorAll('.person-chip');
  const stepperExpandable = document.getElementById('stepper-expandable');
  const customGuestsVal = document.getElementById('val-custom-guests');
  const btnCustomMinus = document.getElementById('btn-custom-minus');
  const btnCustomPlus = document.getElementById('btn-custom-plus');
  const selectedGuestsInput = document.getElementById('selected-guests-value');
  const modalGroups = document.getElementById('modal-groups');

  let customCount = 6;

  personChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const g = chip.getAttribute('data-guests');

      personChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      if (g === 'more') {
        // Mostrar stepper a partir de 6 (tras los 5 chips)
        customCount = 6;
        if (customGuestsVal) customGuestsVal.textContent = 6;
        stepperExpandable?.classList.remove('hidden');
        reservationState.guests = customCount;
        if (selectedGuestsInput) selectedGuestsInput.value = customCount;
      } else {
        stepperExpandable?.classList.add('hidden');
        const num = parseInt(g, 10);
        reservationState.guests = num;
        if (selectedGuestsInput) selectedGuestsInput.value = num;
      }
    });
  });

  btnCustomMinus?.addEventListener('click', () => {
    if (customCount > 6) {
      customCount--;
      customGuestsVal.textContent = customCount;
      reservationState.guests = customCount;
      if (selectedGuestsInput) selectedGuestsInput.value = customCount;
    } else {
      // Si baja de 6, se pliega el stepper y se vuelve a marcar el chip de 5
      customCount = 6;
      customGuestsVal.textContent = 6;
      stepperExpandable?.classList.add('hidden');
      personChips.forEach(c => {
        if (c.getAttribute('data-guests') === '5') c.classList.add('active');
        else c.classList.remove('active');
      });
      reservationState.guests = 5;
      if (selectedGuestsInput) selectedGuestsInput.value = 5;
    }
  });

  btnCustomPlus?.addEventListener('click', () => {
    if (customCount < 8) {
      customCount++;
      customGuestsVal.textContent = customCount;
      reservationState.guests = customCount;
      if (selectedGuestsInput) selectedGuestsInput.value = customCount;
    } else {
      // Para más de 8 comensales, desplegar modal de grupos y eventos
      modalGroups?.classList.remove('hidden');
    }
  });

  // ==========================================
  // 5. TURNOS DE RESERVA Y ACORDEÓN DE HORAS
  // ==========================================
  const shiftLunchBtn = document.getElementById('shift-lunch');
  const shiftDinnerBtn = document.getElementById('shift-dinner');
  const timeSlotsAccordion = document.getElementById('time-slots-accordion');
  const timeSlotsContainer = document.getElementById('time-slots-container');
  const selectedTimeInput = document.getElementById('selected-time-value');

  function renderTimeSlots(shiftKey) {
    if (!timeSlotsContainer) return;
    timeSlotsContainer.innerHTML = '';

    const slots = TIME_SLOTS[shiftKey] || [];
    let hasPreselected = false;

    slots.forEach(time => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'time-chip';
      btn.textContent = time;

      // Mantener la hora si coincide, o seleccionar por defecto la más habitual
      if (reservationState.time === time) {
        btn.classList.add('active');
        hasPreselected = true;
      }

      btn.addEventListener('click', () => {
        timeSlotsContainer.querySelectorAll('.time-chip').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        reservationState.time = time;
        if (selectedTimeInput) selectedTimeInput.value = time;
      });

      timeSlotsContainer.appendChild(btn);
    });

    // Si aún no hay hora elegida, preseleccionamos la primera hora recomendada del turno
    if (!hasPreselected && slots.length > 0) {
      const defaultTime = shiftKey === 'lunch' ? '13:30' : '20:30';
      const defaultBtn = Array.from(timeSlotsContainer.querySelectorAll('.time-chip')).find(b => b.textContent === defaultTime) || timeSlotsContainer.querySelector('.time-chip');
      if (defaultBtn) {
        defaultBtn.classList.add('active');
        reservationState.time = defaultBtn.textContent;
        if (selectedTimeInput) selectedTimeInput.value = defaultBtn.textContent;
      }
    }
  }

  function selectShift(shiftKey) {
    reservationState.shift = shiftKey;

    if (shiftKey === 'lunch') {
      shiftLunchBtn?.classList.add('active');
      shiftDinnerBtn?.classList.remove('active');
    } else {
      shiftDinnerBtn?.classList.add('active');
      shiftLunchBtn?.classList.remove('active');
    }

    renderTimeSlots(shiftKey);

    // Desplegar acordeón suavemente
    timeSlotsAccordion?.classList.remove('is-collapsed');
  }

  shiftLunchBtn?.addEventListener('click', () => selectShift('lunch'));
  shiftDinnerBtn?.addEventListener('click', () => selectShift('dinner'));

  // ==========================================
  // 6. NAVEGACIÓN PASO 1 -> PASO 2
  // ==========================================
  const step1 = document.getElementById('step-1');
  const step2 = document.getElementById('step-2');
  const btnStep1Continue = document.getElementById('btn-step1-continue');
  const btnBackToStep1 = document.getElementById('btn-back-to-step1');
  const btnEditSummary = document.getElementById('btn-edit-summary');

  const summaryGuests = document.getElementById('summary-guests');
  const summaryDate = document.getElementById('summary-date');
  const summaryTime = document.getElementById('summary-time');

  function updateStep2Summary() {
    const langData = translations[currentLang];
    const unit = reservationState.guests === 1 ? langData.personUnitSingle : langData.personUnit;
    if (summaryGuests) summaryGuests.textContent = `${reservationState.guests} ${unit}`;
    if (summaryDate) summaryDate.textContent = reservationState.dateFormatted;
    
    const shiftLabel = reservationState.shift === 'lunch' ? langData.lunchName : langData.dinnerName;
    if (summaryTime) summaryTime.textContent = `${reservationState.time} (${shiftLabel})`;
  }

  btnStep1Continue?.addEventListener('click', () => {
    // Si no ha elegido turno todavía, forzamos la apertura de Comida
    if (!reservationState.shift) {
      selectShift('lunch');
      return;
    }

    if (!reservationState.time) {
      alert(translations[currentLang].errTime);
      return;
    }

    updateStep2Summary();
    step1?.classList.remove('active');
    step2?.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function goToStep1() {
    step2?.classList.remove('active');
    step1?.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  btnBackToStep1?.addEventListener('click', goToStep1);
  btnEditSummary?.addEventListener('click', goToStep1);

  // BOTÓN DE VOLVER EN LA CABECERA
  const headerBackBtn = document.getElementById('header-back-btn');
  headerBackBtn?.addEventListener('click', () => {
    // Si estamos en el Paso 2, vuelve fluidamente al Paso 1
    if (step2?.classList.contains('active')) {
      goToStep1();
      return;
    }
    // Si estamos en el Paso 1, vuelve a la web previa o a la sección de reservas/contacto
    if (window.history.length > 1 && document.referrer && document.referrer.includes(window.location.host)) {
      window.history.back();
    } else {
      window.location.href = '/#donde-estamos';
    }
  });

  // ==========================================
  // 7. PREFERENCIA DE ESPACIO (SOLO TERRAZA vs SALÓN)
  // ==========================================
  const zonePills = document.querySelectorAll('.zone-pill');
  const selectedZoneInput = document.getElementById('selected-zone-value');

  zonePills.forEach(pill => {
    pill.addEventListener('click', () => {
      zonePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const z = pill.getAttribute('data-zone') || 'Terraza Puerto';
      reservationState.zone = z;
      if (selectedZoneInput) selectedZoneInput.value = z;
    });
  });

  // ==========================================
  // 8. FLUJO DE CONFIRMACIÓN RESPONSIVO (MÓVIL vs TABLET/PC)
  // ==========================================
  const btnConfirmBooking = document.getElementById('btn-confirm-booking');
  const confirmSpinner = document.getElementById('confirm-spinner');
  const guestNameInput = document.getElementById('guest-name');
  const guestPhoneInput = document.getElementById('guest-phone');
  const guestEmailInput = document.getElementById('guest-email');
  const guestOccasionSelect = document.getElementById('guest-occasion');
  const guestNotesInput = document.getElementById('guest-notes');
  const errName = document.getElementById('err-name');
  const errPhone = document.getElementById('err-phone');
  const errEmail = document.getElementById('err-email');

  const modalChannelChoice = document.getElementById('modal-channel-choice');
  const btnChannelWhatsApp = document.getElementById('btn-channel-whatsapp');
  const btnChannelEmail = document.getElementById('btn-channel-email');
  const btnCloseChannelModal = document.getElementById('btn-close-channel-modal');

  const RESTAURANT_PHONE = '34632446064'; // Teléfono para WhatsApp (+34 632 44 60 64)
  const RESTAURANT_EMAIL = 'info@buonappetitocuisine.com';

  // Sanitizadores y utilidades de formato
  function sanitizeName(val) {
    // Permite solo letras (con acentos, diéresis, ñ), espacios, apóstrofes y guiones
    return (val || '').replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜçÇàèìòùÀÈÌÒÙäëïöÄËÏÖ'\- ]/g, '');
  }

  function formatTitleCase(val) {
    return (val || '')
      .trim()
      .split(/\s+/)
      .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(' ');
  }

  function sanitizePhone(val) {
    // Permite solo números, +, espacios y guiones
    let clean = (val || '').replace(/[^\d+ \-()]/g, '');
    if (clean.indexOf('+') > 0) {
      clean = clean.charAt(0) + clean.slice(1).replace(/\+/g, '');
    }
    return clean;
  }

  function isValidEmail(val) {
    if (!val) return true; // El email es opcional
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val.trim());
  }

  // Filtrado reactivo en tiempo real al escribir
  guestNameInput?.addEventListener('input', (e) => {
    const clean = sanitizeName(e.target.value);
    if (e.target.value !== clean) {
      e.target.value = clean;
    }
    if (clean.trim().length >= 2) {
      errName?.classList.add('hidden');
      guestNameInput?.classList.remove('input-error');
    }
  });

  guestNameInput?.addEventListener('blur', (e) => {
    if (e.target.value.trim()) {
      e.target.value = formatTitleCase(e.target.value);
    }
  });

  guestPhoneInput?.addEventListener('input', (e) => {
    const clean = sanitizePhone(e.target.value);
    if (e.target.value !== clean) {
      e.target.value = clean;
    }
    const digits = clean.replace(/\D/g, '');
    if (digits.length >= 8) {
      errPhone?.classList.add('hidden');
      guestPhoneInput?.classList.remove('input-error');
    }
  });

  guestEmailInput?.addEventListener('input', () => {
    const val = guestEmailInput.value.trim();
    if (!val || isValidEmail(val)) {
      errEmail?.classList.add('hidden');
      guestEmailInput?.classList.remove('input-error');
    }
  });

  function isMobileDevice() {
    // Si es un smartphone (iPhone, Android, etc.) O si la pantalla está en formato móvil (< 768px):
    const isMobileUA = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isSmallScreen = window.innerWidth < 768;
    return isMobileUA || isSmallScreen;
  }

  function buildReservationText() {
    const langData = translations[currentLang];
    const unit = reservationState.guests === 1 ? langData.personUnitSingle : langData.personUnit;
    const shiftLabel = reservationState.shift === 'lunch' ? langData.lunchName : langData.dinnerName;

    let lines = [
      `*Reserva Buon Appetito*`,
      ``,
      `👤 ${reservationState.name}`,
      `📞 ${reservationState.phone}`
    ];

    if (reservationState.email) {
      lines.push(`✉️ ${reservationState.email}`);
    }

    lines.push(
      ``,
      `Comensales: ${reservationState.guests} ${unit}`,
      `Fecha: ${reservationState.dateFormatted}`,
      `Hora: ${reservationState.time} (${shiftLabel})`,
      `Lugar: ${reservationState.zone}`
    );

    if (reservationState.occasion && reservationState.occasion !== 'Comida o cena habitual' && reservationState.occasion !== 'Casual lunch / dinner' && reservationState.occasion !== 'Reguläres Essen') {
      lines.push(`Ocasión: ${reservationState.occasion}`);
    } else if (reservationState.occasion) {
      lines.push(`Ocasión: ${reservationState.occasion}`);
    }

    if (reservationState.notes) {
      lines.push(`Peticiones: ${reservationState.notes}`);
    }

    lines.push(
      ``,
      `_Tecnología Nexoo_`
    );

    return lines.join('\n');
  }

  function sendViaWhatsApp(isWeb = false) {
    const text = buildReservationText();
    const encoded = encodeURIComponent(text);
    if (!isWeb) {
      // En móvil: lanzamiento directo nativo a la app de WhatsApp
      window.location.href = `https://wa.me/${RESTAURANT_PHONE}?text=${encoded}`;
    } else {
      // En tablet/PC: abre WhatsApp Web en pestaña nueva
      window.open(`https://web.whatsapp.com/send?phone=${RESTAURANT_PHONE}&text=${encoded}`, '_blank');
    }
  }

  function sendViaEmail() {
    const subject = encodeURIComponent(`Reserva de Mesa — ${reservationState.name} (${reservationState.dateFormatted} ${reservationState.time})`);
    const body = encodeURIComponent(buildReservationText().replace(/\*/g, '').replace(/_/g, ''));
    
    // mailto abre el cliente nativo o Gmail
    const mailtoUrl = `mailto:${RESTAURANT_EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  }

  btnConfirmBooking?.addEventListener('click', () => {
    // Validación rigurosa de datos reales
    let isValid = true;

    // 1. Nombre: solo letras, mín. 2 caracteres, sin números
    const rawName = guestNameInput?.value.trim() || '';
    const cleanName = sanitizeName(rawName).trim();
    if (!cleanName || cleanName.length < 2) {
      errName?.classList.remove('hidden');
      guestNameInput?.classList.add('input-error');
      guestNameInput?.focus();
      isValid = false;
    } else {
      errName?.classList.add('hidden');
      guestNameInput?.classList.remove('input-error');
      guestNameInput.value = formatTitleCase(cleanName);
    }

    // 2. Teléfono: al menos 8-9 dígitos numéricos reales
    const rawPhone = guestPhoneInput?.value.trim() || '';
    const cleanPhone = sanitizePhone(rawPhone).trim();
    const phoneDigits = cleanPhone.replace(/\D/g, '');
    if (!cleanPhone || phoneDigits.length < 8) {
      errPhone?.classList.remove('hidden');
      guestPhoneInput?.classList.add('input-error');
      if (isValid) guestPhoneInput?.focus();
      isValid = false;
    } else {
      errPhone?.classList.add('hidden');
      guestPhoneInput?.classList.remove('input-error');
    }

    // 3. Email (opcional, pero si se escribe debe ser un email con formato válido)
    const rawEmail = guestEmailInput?.value.trim() || '';
    if (rawEmail && !isValidEmail(rawEmail)) {
      errEmail?.classList.remove('hidden');
      guestEmailInput?.classList.add('input-error');
      if (isValid) guestEmailInput?.focus();
      isValid = false;
    } else {
      errEmail?.classList.add('hidden');
      guestEmailInput?.classList.remove('input-error');
    }

    if (!isValid) return;

    // Guardar datos perfectamente limpios y formateados en el estado
    reservationState.name = formatTitleCase(cleanName);
    reservationState.phone = cleanPhone;
    reservationState.email = rawEmail ? rawEmail.toLowerCase() : '';
    reservationState.occasion = guestOccasionSelect?.value || 'Comida o cena habitual';
    reservationState.notes = guestNotesInput?.value.trim() || '';

    // En Móvil: va directo por WhatsApp
    if (isMobileDevice()) {
      confirmSpinner?.classList.remove('hidden');
      setTimeout(() => {
        confirmSpinner?.classList.add('hidden');
        sendViaWhatsApp(false);
      }, 350);
    } 
    // En Tablet / Ordenador: muestra el modal con las 2 opciones (WhatsApp o Email)
    else {
      modalChannelChoice?.classList.remove('hidden');
    }
  });

  btnChannelWhatsApp?.addEventListener('click', () => {
    modalChannelChoice?.classList.add('hidden');
    sendViaWhatsApp(true);
  });

  btnChannelEmail?.addEventListener('click', () => {
    modalChannelChoice?.classList.add('hidden');
    sendViaEmail();
  });

  btnCloseChannelModal?.addEventListener('click', () => {
    modalChannelChoice?.classList.add('hidden');
  });

  // ==========================================
  // 9. MODAL DE GRUPOS O EVENTOS (>8)
  // ==========================================
  const btnGroupInfo = document.getElementById('btn-group-info');
  const btnCloseModal = document.getElementById('btn-close-modal');

  btnGroupInfo?.addEventListener('click', () => {
    modalGroups?.classList.remove('hidden');
  });

  btnCloseModal?.addEventListener('click', () => {
    modalGroups?.classList.add('hidden');
  });

  // Cerrar modales al hacer clic fuera del card
  window.addEventListener('click', (e) => {
    if (e.target === modalGroups) modalGroups?.classList.add('hidden');
    if (e.target === modalChannelChoice) modalChannelChoice?.classList.add('hidden');
  });

  // ==========================================
  // 10. GESTIÓN DEL IDIOMA (ES / EN / DE)
  // ==========================================
  const langToggle = document.getElementById('lang-toggle');
  const langMenu = document.getElementById('lang-menu');
  const currentLangText = document.getElementById('current-lang-text');
  const changeLangFooter = document.getElementById('change-lang-footer');
  const langOptions = document.querySelectorAll('.lang-option');

  langToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu?.classList.toggle('hidden');
  });

  changeLangFooter?.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu?.classList.toggle('hidden');
    langToggle?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  document.addEventListener('click', (e) => {
    if (!langMenu?.contains(e.target) && e.target !== langToggle) {
      langMenu?.classList.add('hidden');
    }
  });

  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    const data = translations[lang];

    if (currentLangText) currentLangText.textContent = lang.toUpperCase();

    // Actualizar textos con atributo data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (data[key]) {
        el.textContent = data[key];
      }
    });

    langOptions.forEach(opt => {
      if (opt.getAttribute('data-lang') === lang) opt.classList.add('active');
      else opt.classList.remove('active');
    });

    // Re-renderizar fechas con el nuevo idioma
    renderDateChips();
    if (reservationState.shift) {
      renderTimeSlots(reservationState.shift);
    }
  }

  langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const l = opt.getAttribute('data-lang');
      applyLanguage(l);
      langMenu?.classList.add('hidden');
    });
  });

  // ==========================================
  // 11. INICIALIZACIÓN
  // ==========================================
  renderDateChips();
  // Plantilla limpia de serie: turnos en reposo y acordeón de horas 100% plegado hasta pulsar Comida o Cena
});
