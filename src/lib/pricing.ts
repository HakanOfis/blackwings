/* =========================================================================
   Blackwings — Price estimator. Pure functions, no side effects.
   estimate = max(minimumFare, (base + perKm·km + perMin·min) · vehicle · service)
   ========================================================================= */

import { PRICING } from '../config/pricing'
import type { ServiceId } from '../config/services'

export interface EstimateInput {
  distanceKm: number
  durationMin: number
  vehicleMultiplier: number
  service: ServiceId
}

/** Returns the estimated fare, rounded to whole currency units. */
export function estimatePrice({
  distanceKm,
  durationMin,
  vehicleMultiplier,
  service,
}: EstimateInput): number {
  const r = PRICING.byService[service]
  const raw = (r.baseFare + r.perKm * distanceKm + r.perMin * durationMin) * vehicleMultiplier

  return Math.max(r.minimumFare, Math.round(raw))
}

/** Format a number as a localised currency string. */
export function formatPrice(amount: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: PRICING.currency,
    maximumFractionDigits: 0,
  }).format(amount)
}
