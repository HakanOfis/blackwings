/* =========================================================================
   Blackwings — Pricing configuration, per service.
   Each service is priced independently. The shown price is an *estimate*.

   ride / taxi:  ⚠️ PLACEHOLDER rates — CONFIRM / REPLACE with real tariffs.
   shuttle:      set by the owner — opening €15, first 4 km included,
                 then €2.50 per km beyond the 4th.
   ========================================================================= */

import type { ServiceId } from './services'

export interface ServiceRates {
  /** Fixed start fee, applied once per trip (the "opening" fare). */
  baseFare: number
  /** Price per kilometre, charged only for distance beyond `freeKm`. */
  perKm: number
  /** Kilometres included in the base fare before per-km charging starts. */
  freeKm: number
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
    ride: { baseFare: 5, perKm: 1.8, freeKm: 0, perMin: 0.4, minimumFare: 15 },
    // ⚠️ PLACEHOLDER — CONFIRM
    taxi: { baseFare: 5, perKm: 1.8, freeKm: 0, perMin: 0.4, minimumFare: 15 },
    // Shuttle — set by owner: opening €15, first 4 km included, then €2.50/km.
    shuttle: { baseFare: 15, perKm: 2.5, freeKm: 4, perMin: 0, minimumFare: 15 },
  } satisfies Record<ServiceId, ServiceRates>,
} as const
