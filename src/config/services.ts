/* =========================================================================
   Blackwings — Service tiers. One brand, three services that share one
   booking flow with small differences.
   ========================================================================= */

export const SERVICES = ['ride', 'taxi', 'shuttle'] as const
export type ServiceId = (typeof SERVICES)[number]

export const DEFAULT_SERVICE: ServiceId = 'ride'
