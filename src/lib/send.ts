/* =========================================================================
   Blackwings — Send a booking request via email (mailto) or WhatsApp.
   No backend required. Uses the real Blackwings contact details.
   ========================================================================= */

import { BRAND } from '../config/brand'

/** Opens the user's email client with a prefilled booking request. */
export function sendByEmail(subject: string, body: string): void {
  const url = `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = url
}

/** Opens WhatsApp (app or web) with a prefilled booking request. */
export function sendByWhatsApp(body: string): void {
  const url = `https://wa.me/${BRAND.phoneE164}?text=${encodeURIComponent(body)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}
