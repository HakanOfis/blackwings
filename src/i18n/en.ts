/* Blackwings — English (source dictionary & type master). */

export const en = {
  languageName: 'English',

  brand: {
    tagline: 'Every ride, one wing.',
  },

  nav: {
    ride: 'Ride',
    taxi: 'Taxi',
    shuttle: 'Shuttle',
    switchLanguage: 'Change language',
    skipToContent: 'Skip to content',
  },

  service: {
    ride: { name: 'Blackwings Ride', tagline: 'Book a private ride, on your schedule.' },
    taxi: { name: 'Blackwings Taxi', tagline: 'A classic taxi, one tap away.' },
    shuttle: { name: 'Blackwings Shuttle', tagline: 'Shared shuttle transfers, simply booked.' },
  },

  hero: {
    title: 'Ride, taxi & shuttle — one brand.',
    subtitle: 'Live route on the map • Instant price estimate • Fast confirmation',
  },

  stepper: {
    step: 'Step',
    of: 'of',
  },

  common: {
    next: 'Next',
    back: 'Back',
    calculate: 'Calculate',
    continue: 'Continue',
    required: 'This field is required',
  },

  step1: {
    title: 'Route',
    sub: 'Choose pickup & drop-off. We’ll draw the route and estimate distance and time.',
    pickup: 'Pickup location',
    pickupPh: 'e.g. Mortsel, Belgium',
    dropoff: 'Drop-off location',
    dropoffPh: 'e.g. Brussels Airport (BRU)',
    mapLabel: 'Map showing your route',
    distance: 'Distance',
    duration: 'Duration',
    estimate: 'Estimated price',
    loading: 'Calculating route…',
    error: 'We couldn’t calculate that route. Please check both locations.',
    empty: 'Enter both locations to see your route and price.',
    mapsUnavailable:
      'The live map is unavailable right now — enter the distance and time manually to get an estimate.',
  },

  step2: {
    title: 'Date & time',
    sub: 'Pick your date and time and tell us how many passengers.',
    date: 'Date',
    time: 'Time',
    passengers: 'Passengers',
  },

  step3: {
    title: 'Choose your vehicle',
    sub: 'Select a car. A price multiplier applies to the base fare.',
  },

  step4: {
    title: 'Contact',
    sub: 'We’ll confirm your booking as soon as we receive your request.',
    name: 'Full name',
    email: 'Email',
    phone: 'Phone (WhatsApp)',
    notes: 'Notes',
    notesPh: 'Flight number, luggage, child seat…',
  },

  step5: {
    title: 'Review & confirm',
    route: 'Route',
    when: 'Date & time',
    vehicle: 'Vehicle',
    contact: 'Contact',
    price: 'Estimated total',
  },

  step6: {
    title: 'Payment',
    note: 'Online payment is coming soon. For now we confirm your booking by email or WhatsApp and arrange payment with you directly.',
    sendEmail: 'Send by email',
    sendWhatsApp: 'Message on WhatsApp',
  },

  footer: {
    contact: 'Contact',
    address: 'Address',
    phone: 'Phone (WhatsApp)',
    email: 'Email',
  },
}

export type Dict = typeof en
