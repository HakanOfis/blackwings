/* =========================================================================
   Blackwings — Vehicle catalogue.
   Multipliers are PRESERVED from the original site:
     Lexus ×1.00 · Tesla Model Y ×1.15 · Renault Arkana ×0.95
   ========================================================================= */

import lexus from '../assets/img/lexus.jpg'
import teslaModelY from '../assets/img/tesla-model-y.jpg'
import renaultArkana from '../assets/img/renault-arkana.jpg'

export interface Vehicle {
  id: string
  name: string
  /** Price multiplier applied to the base fare. */
  multiplier: number
  image: string
}

export const VEHICLES: Vehicle[] = [
  { id: 'lexus', name: 'Lexus', multiplier: 1.0, image: lexus },
  { id: 'tesla-model-y', name: 'Tesla Model Y', multiplier: 1.15, image: teslaModelY },
  { id: 'renault-arkana', name: 'Renault Arkana', multiplier: 0.95, image: renaultArkana },
]
