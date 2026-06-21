/* =========================================================================
   Blackwings — Vehicle catalogue, per service.
   Ride & Taxi share the cars (multipliers preserved from the original site:
     Lexus ×1.00 · Tesla Model Y ×1.15 · Renault Arkana ×0.95).
   Shuttle uses the minibus fleet.
   ========================================================================= */

import type { ServiceId } from './services'

import lexus from '../assets/img/lexus.jpg'
import teslaModelY from '../assets/img/tesla-model-y.jpg'
import renaultArkana from '../assets/img/renault-arkana.jpg'
import minibusMercedes from '../assets/img/minibus-mercedes.svg'
import minibusVw from '../assets/img/minibus-vw.svg'

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

// Shuttle fleet. Images are placeholder illustrations — replace with real
// photos by dropping JPGs into src/assets/img and updating the imports above.
const MINIBUSES: Vehicle[] = [
  { id: 'mercedes-minibus', name: 'Mercedes Minibus', multiplier: 1.0, capacity: 18, image: minibusMercedes },
  { id: 'vw-minibus-1', name: 'Volkswagen Minibus (1)', multiplier: 1.0, capacity: 24, image: minibusVw },
  { id: 'vw-minibus-2', name: 'Volkswagen Minibus (2)', multiplier: 1.0, capacity: 24, image: minibusVw },
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
