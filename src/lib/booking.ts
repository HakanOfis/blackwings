/* Blackwings — Booking state shared across the step flow. */

export interface BookingState {
  pickup: string
  dropoff: string
  distanceKm: number | null
  durationMin: number | null
  date: string
  time: string
  passengers: number
  vehicleId: string
  name: string
  email: string
  phone: string
  notes: string
}

export const EMPTY_BOOKING: BookingState = {
  pickup: '',
  dropoff: '',
  distanceKm: null,
  durationMin: null,
  date: '',
  time: '',
  passengers: 1,
  vehicleId: '',
  name: '',
  email: '',
  phone: '',
  notes: '',
}
