/* Blackwings — Nederlands. */

import type { Dict } from './en'

export const nl: Dict = {
  languageName: 'Nederlands',

  brand: {
    tagline: 'Elke rit, één vleugel.',
  },

  nav: {
    ride: 'Rit',
    taxi: 'Taxi',
    shuttle: 'Shuttle',
    switchLanguage: 'Taal wijzigen',
    skipToContent: 'Naar inhoud',
  },

  service: {
    ride: { name: 'Blackwings Ride', tagline: 'Boek een privérit, op jouw moment.' },
    taxi: { name: 'Blackwings Taxi', tagline: 'Een klassieke taxi, met één tik.' },
    shuttle: { name: 'Blackwings Shuttle', tagline: 'Gedeelde shuttletransfers, eenvoudig geboekt.' },
  },

  hero: {
    title: 'Rit, taxi & shuttle — één merk.',
    subtitle: 'Live route op de kaart • Directe prijsindicatie • Snelle bevestiging',
  },

  stepper: {
    step: 'Stap',
    of: 'van',
  },

  common: {
    next: 'Volgende',
    back: 'Terug',
    calculate: 'Berekenen',
    continue: 'Doorgaan',
    required: 'Dit veld is verplicht',
  },

  step1: {
    title: 'Route',
    sub: 'Kies ophaal- en afzetpunt. We tekenen de route en schatten afstand en tijd.',
    pickup: 'Ophaallocatie',
    pickupPh: 'bv. Mortsel, België',
    dropoff: 'Afzetlocatie',
    dropoffPh: 'bv. Luchthaven Brussel (BRU)',
    mapLabel: 'Kaart met jouw route',
    distance: 'Afstand',
    duration: 'Duur',
    estimate: 'Geschatte prijs',
    loading: 'Route berekenen…',
    error: 'We konden die route niet berekenen. Controleer beide locaties.',
    empty: 'Vul beide locaties in om je route en prijs te zien.',
    mapsUnavailable:
      'De live kaart is momenteel niet beschikbaar — voer de afstand en tijd handmatig in voor een schatting.',
  },

  step2: {
    title: 'Datum & tijd',
    sub: 'Kies je datum en tijd en geef het aantal passagiers door.',
    date: 'Datum',
    time: 'Tijd',
    passengers: 'Passagiers',
  },

  step3: {
    title: 'Kies je voertuig',
    sub: 'Selecteer een wagen. Op de basisprijs geldt een prijsfactor.',
  },

  step4: {
    title: 'Contact',
    sub: 'We bevestigen je boeking zodra we je aanvraag ontvangen.',
    name: 'Volledige naam',
    email: 'E-mail',
    phone: 'Telefoon (WhatsApp)',
    notes: 'Opmerkingen',
    notesPh: 'Vluchtnummer, bagage, kinderzitje…',
  },

  step5: {
    title: 'Controleer & bevestig',
    route: 'Route',
    when: 'Datum & tijd',
    vehicle: 'Voertuig',
    contact: 'Contact',
    price: 'Geschat totaal',
  },

  step6: {
    title: 'Betaling',
    note: 'Online betalen komt binnenkort. Voorlopig bevestigen we je boeking via e-mail of WhatsApp en regelen we de betaling rechtstreeks met jou.',
    sendEmail: 'Versturen per e-mail',
    sendWhatsApp: 'Bericht via WhatsApp',
  },

  footer: {
    contact: 'Contact',
    address: 'Adres',
    phone: 'Telefoon (WhatsApp)',
    email: 'E-mail',
  },
}
