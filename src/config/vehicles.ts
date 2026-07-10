/* =========================================================================
   Blackwings — Vehicle catalogue, per service.
   Ride & Taxi share the cars (multipliers preserved from the original site:
     Lexus ×1.00 · Tesla Model Y ×1.15 · Renault Arkana ×0.95).
   Shuttle uses a single service vehicle — the Mercedes Vito.
   ========================================================================= */

import type { ServiceId } from './services'

import lexus from '../assets/img/lexus.jpg'
import teslaModelY from '../assets/img/tesla-model-y.jpg'
import renaultArkana from '../assets/img/renault-arkana.jpg'
import mercedesVito from '../assets/img/mercedes-vito.jpg'

export interface Vehicle {
  id: string
  name: string
  /** Price multiplier applied to the base fare. */
  multiplier: number
  /** Passenger capacity (shown for minibuses). */
  capacity?: number
  image: string
}

const CARS: Vehicle[] = [
  { id: 'lexus', name: 'Lexus', multiplier: 1.0, image: lexus },
  { id: 'tesla-model-y', name: 'Tesla Model Y', multiplier: 1.15, image: teslaModelY },
  { id: 'renault-arkana', name: 'Renault Arkana', multiplier: 0.95, image: renaultArkana },
]

// Shuttle — a single service vehicle.
const MINIBUSES: Vehicle[] = [
  { id: 'mercedes-vito', name: 'Mercedes Vito', multiplier: 1.0, capacity: 8, image: mercedesVito },
]

const VEHICLES_BY_SERVICE: Record<ServiceId, Vehicle[]> = {
  ride: CARS,
  taxi: CARS,
  shuttle: MINIBUSES,
}

/** Vehicles available for a given service. */
export function vehiclesFor(service: ServiceId): Vehicle[] {
  return VEHICLES_BY_SERVICE[service]
}
