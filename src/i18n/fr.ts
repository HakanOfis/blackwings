/* Blackwings — Français. */

import type { Dict } from './en'

export const fr: Dict = {
  languageName: 'Français',

  brand: {
    tagline: 'Chaque trajet, une seule aile.',
  },

  nav: {
    ride: 'Course',
    taxi: 'Taxi',
    shuttle: 'Navette',
    switchLanguage: 'Changer de langue',
    skipToContent: 'Aller au contenu',
  },

  service: {
    ride: { name: 'Blackwings Ride', tagline: 'Réservez une course privée, à votre rythme.' },
    taxi: { name: 'Blackwings Taxi', tagline: 'Un taxi classique, en un geste.' },
    shuttle: { name: 'Blackwings Shuttle', tagline: 'Transferts en navette partagée, simplement réservés.' },
  },

  hero: {
    title: 'Course, taxi & navette — une seule marque.',
    subtitle: 'Itinéraire en direct sur la carte • Estimation instantanée • Confirmation rapide',
  },

  stepper: {
    step: 'Étape',
    of: 'sur',
  },

  common: {
    next: 'Suivant',
    back: 'Retour',
    calculate: 'Calculer',
    continue: 'Continuer',
    required: 'Ce champ est obligatoire',
  },

  step1: {
    title: 'Itinéraire',
    sub: 'Choisissez le départ et l’arrivée. Nous traçons l’itinéraire et estimons la distance et la durée.',
    pickup: 'Lieu de prise en charge',
    pickupPh: 'ex. Mortsel, Belgique',
    dropoff: 'Lieu de dépose',
    dropoffPh: 'ex. Aéroport de Bruxelles (BRU)',
    mapLabel: 'Carte montrant votre itinéraire',
    distance: 'Distance',
    duration: 'Durée',
    estimate: 'Prix estimé',
    loading: 'Calcul de l’itinéraire…',
    error: 'Impossible de calculer cet itinéraire. Vérifiez les deux adresses.',
    empty: 'Saisissez les deux adresses pour voir votre itinéraire et le prix.',
  },

  step2: {
    title: 'Date & heure',
    sub: 'Choisissez la date et l’heure et indiquez le nombre de passagers.',
    date: 'Date',
    time: 'Heure',
    passengers: 'Passagers',
  },

  step3: {
    title: 'Choisissez votre véhicule',
    sub: 'Sélectionnez une voiture. Un coefficient s’applique au tarif de base.',
  },

  step4: {
    title: 'Contact',
    sub: 'Nous confirmons votre réservation dès réception de votre demande.',
    name: 'Nom complet',
    email: 'E-mail',
    phone: 'Téléphone (WhatsApp)',
    notes: 'Remarques',
    notesPh: 'Numéro de vol, bagages, siège enfant…',
  },

  step5: {
    title: 'Vérifier & confirmer',
    route: 'Itinéraire',
    when: 'Date & heure',
    vehicle: 'Véhicule',
    contact: 'Contact',
    price: 'Total estimé',
  },

  step6: {
    title: 'Paiement',
    note: 'Le paiement en ligne arrive bientôt. Pour l’instant, nous confirmons votre réservation par e-mail ou WhatsApp et organisons le paiement directement avec vous.',
    sendEmail: 'Envoyer par e-mail',
    sendWhatsApp: 'Message sur WhatsApp',
  },

  footer: {
    contact: 'Contact',
    address: 'Adresse',
    phone: 'Téléphone (WhatsApp)',
    email: 'E-mail',
  },
}
