/* =========================================================================
   Blackwings — Pricing configuration.

   ⚠️⚠️  PLACEHOLDER RATES — CONFIRM / REPLACE WITH REAL BLACKWINGS TARIFFS  ⚠️⚠️
   These numbers are reasonable defaults so the estimator works end-to-end.
   They are NOT the real Blackwings prices. Change them here in ONE place;
   the whole app follows. The shown price is an *estimate* only.
   ========================================================================= */

import type { ServiceId } from './services'

export const PRICING = {
  currency: 'EUR',
  currencySymbol: '€',

  /** Fixed start fee, applied once per trip. (CONFIRM) */
  baseFare: 5,
  /** Price per kilometre. (CONFIRM) */
  perKm: 1.8,
  /** Price per minute of travel time. (CONFIRM) */
  perMin: 0.4,
  /** Floor price — a trip never costs less than this. (CONFIRM) */
  minimumFare: 15,

  /**
   * Per-service modifier. Shuttle is shared, so it is cheaper. Ride and taxi
   * use the full fare. (CONFIRM)
   */
  serviceModifier: {
    ride: 1.0,
    taxi: 1.0,
    shuttle: 0.6,
  } satisfies Record<ServiceId, number>,
} as const
