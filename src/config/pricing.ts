/* =========================================================================
   Blackwings — Pricing configuration, per service.
   Each service is priced independently. The shown price is an *estimate*.

   ride / taxi:  ⚠️ PLACEHOLDER rates — CONFIRM / REPLACE with real tariffs.
   shuttle:      set by the owner — base €50 + €12/km.
   ========================================================================= */

import type { ServiceId } from './services'

export interface ServiceRates {
  /** Fixed start fee, applied once per trip. */
  baseFare: number
  /** Price per kilometre. */
  perKm: number
  /** Price per minute of travel time. */
  perMin: number
  /** Floor price — a trip never costs less than this. */
  minimumFare: number
}

export const PRICING = {
  currency: 'EUR',
  currencySymbol: '€',

  byService: {
    // ⚠️ PLACEHOLDER — CONFIRM
    ride: { baseFare: 5, perKm: 1.8, perMin: 0.4, minimumFare: 15 },
    // ⚠️ PLACEHOLDER — CONFIRM
    taxi: { baseFare: 5, perKm: 1.8, perMin: 0.4, minimumFare: 15 },
    // Shuttle — set by owner: opening €50, €12 per km.
    shuttle: { baseFare: 50, perKm: 12, perMin: 0, minimumFare: 50 },
  } satisfies Record<ServiceId, ServiceRates>,
} as const
