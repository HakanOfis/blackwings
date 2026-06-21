import { useEffect, useRef, useState } from 'react'
import { Field } from '../Field'
import { useI18n } from '../../i18n'
import {
  computeRoute,
  hasMapsKey,
  loadGoogleMaps,
  mapsAuthFailed,
  onMapsAuthFailure,
} from '../../lib/maps'
import type { BookingState } from '../../lib/booking'

interface Props {
  pickup: string
  dropoff: string
  distanceKm: number | null
  durationMin: number | null
  onField: (patch: Partial<BookingState>) => void
}

type Status = 'idle' | 'loading' | 'error'

export function RouteStep({ pickup, dropoff, distanceKm, durationMin, onField }: Props) {
  const { t } = useI18n()
  const mapEnabled = hasMapsKey()

  const mapRef = useRef<HTMLDivElement | null>(null)
  const rendererRef = useRef<google.maps.DirectionsRenderer | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  // True if the key is invalid / domain not allowed, or the map failed to load.
  const [mapsBroken, setMapsBroken] = useState<boolean>(mapsAuthFailed())

  const useManual = !mapEnabled || mapsBroken

  // Listen for Google's auth failure (RefererNotAllowedMapError, bad key…).
  useEffect(() => onMapsAuthFailure(() => setMapsBroken(true)), [])

  // Initialise the map once, while it's still usable.
  useEffect(() => {
    if (useManual || !mapRef.current) return
    let cancelled = false

    loadGoogleMaps()
      .then((g) => {
        if (cancelled || !mapRef.current) return
        const map = new g.maps.Map(mapRef.current, {
          center: { lat: 50.85, lng: 4.35 }, // Brussels
          zoom: 9,
          disableDefaultUI: true,
          zoomControl: true,
        })
        rendererRef.current = new g.maps.DirectionsRenderer({
          map,
          polylineOptions: { strokeColor: '#E5B53F', strokeWeight: 5 },
        })
      })
      .catch((err) => {
        console.error('[Blackwings] Google Maps failed to load:', err)
        setMapsBroken(true)
      })

    return () => {
      cancelled = true
    }
  }, [useManual])

  async function handleCalculate() {
    if (!pickup.trim() || !dropoff.trim()) return
    setStatus('loading')
    try {
      const route = await computeRoute(pickup, dropoff)
      onField({ distanceKm: route.distanceKm, durationMin: route.durationMin })
      rendererRef.current?.setDirections(route.directions)
      setStatus('idle')
    } catch (err) {
      console.error('[Blackwings] Route calculation failed:', err)
      setStatus('error')
    }
  }

  return (
    <div className="step-body">
      <h2 className="step-title">{t.step1.title}</h2>
      <p className="step-sub">{t.step1.sub}</p>

      <div className="grid-2">
        <Field
          label={t.step1.pickup}
          value={pickup}
          placeholder={t.step1.pickupPh}
          autoComplete="off"
          onChange={(e) => onField({ pickup: e.target.value })}
        />
        <Field
          label={t.step1.dropoff}
          value={dropoff}
          placeholder={t.step1.dropoffPh}
          autoComplete="off"
          onChange={(e) => onField({ dropoff: e.target.value })}
        />
      </div>

      {!useManual ? (
        <>
          <button
            type="button"
            className="btn btn--primary"
            onClick={handleCalculate}
            disabled={status === 'loading' || !pickup.trim() || !dropoff.trim()}
          >
            {status === 'loading' ? t.step1.loading : t.common.calculate}
          </button>
          <div className="map" ref={mapRef} role="img" aria-label={t.step1.mapLabel} />
        </>
      ) : (
        <>
          {/* Maps key missing or rejected → manual entry so pricing still works. */}
          {mapEnabled && mapsBroken && (
            <p className="note note--error" role="alert">
              {t.step1.mapsUnavailable}
            </p>
          )}
          <div className="grid-2">
            <Field
              label={`${t.step1.distance} (km)`}
              type="number"
              min={0}
              value={distanceKm ?? ''}
              onChange={(e) =>
                onField({ distanceKm: e.target.value ? Number(e.target.value) : null })
              }
            />
            <Field
              label={`${t.step1.duration} (min)`}
              type="number"
              min={0}
              value={durationMin ?? ''}
              onChange={(e) =>
                onField({ durationMin: e.target.value ? Number(e.target.value) : null })
              }
            />
          </div>
        </>
      )}

      {status === 'error' && (
        <p className="note note--error" role="alert">
          {t.step1.error}
        </p>
      )}

      {status === 'idle' && distanceKm != null && durationMin != null && (
        <p className="note note--ok">
          {t.step1.distance}: <b>{distanceKm.toFixed(1)} km</b> · {t.step1.duration}:{' '}
          <b>{durationMin} min</b>
        </p>
      )}

      {status === 'idle' && distanceKm == null && !useManual && (
        <p className="note">{t.step1.empty}</p>
      )}
    </div>
  )
}
