/* =========================================================================
   Blackwings — Google Maps integration.
   Reads the key from import.meta.env.VITE_GOOGLE_MAPS_API_KEY (.env, never
   committed). When the key is absent the UI falls back to manual distance
   entry, so the estimator still works in development.
   ========================================================================= */

import { Loader } from '@googlemaps/js-api-loader'

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? ''

export function hasMapsKey(): boolean {
  return API_KEY.trim().length > 0
}

/* --- Auth-failure detection ---------------------------------------------
   Google calls window.gm_authFailure when the key is invalid or the current
   domain isn't allowed (RefererNotAllowedMapError). We surface that so the UI
   can fall back to manual entry instead of showing a broken grey map. */
type AuthListener = () => void
const authListeners = new Set<AuthListener>()
let authFailed = false

export function mapsAuthFailed(): boolean {
  return authFailed
}

export function onMapsAuthFailure(cb: AuthListener): () => void {
  authListeners.add(cb)
  if (authFailed) cb()
  return () => authListeners.delete(cb)
}

if (typeof window !== 'undefined') {
  ;(window as Window & { gm_authFailure?: () => void }).gm_authFailure = () => {
    authFailed = true
    authListeners.forEach((cb) => cb())
  }
}

let loaderPromise: Promise<typeof google> | null = null

/** Loads the Google Maps JS API once (singleton). */
export function loadGoogleMaps(): Promise<typeof google> {
  if (!hasMapsKey()) {
    return Promise.reject(new Error('Missing VITE_GOOGLE_MAPS_API_KEY'))
  }
  if (!loaderPromise) {
    const loader = new Loader({
      apiKey: API_KEY,
      version: 'weekly',
      libraries: ['places', 'routes'],
    })
    loaderPromise = loader.load()
  }
  return loaderPromise
}

export interface RouteResult {
  distanceKm: number
  durationMin: number
  directions: google.maps.DirectionsResult
}

/** Computes a driving route between two free-text locations. */
export async function computeRoute(origin: string, destination: string): Promise<RouteResult> {
  const g = await loadGoogleMaps()
  const service = new g.maps.DirectionsService()

  const result = await service.route({
    origin,
    destination,
    travelMode: g.maps.TravelMode.DRIVING,
  })

  const leg = result.routes[0]?.legs[0]
  if (!leg?.distance || !leg.duration) {
    throw new Error('No route found')
  }

  return {
    distanceKm: leg.distance.value / 1000,
    durationMin: Math.round(leg.duration.value / 60),
    directions: result,
  }
}
