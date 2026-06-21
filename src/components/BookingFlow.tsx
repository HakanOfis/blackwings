import { useMemo, useState } from 'react'
import { Field } from './Field'
import { Stepper } from './Stepper'
import { RouteStep } from './steps/RouteStep'
import { VEHICLES } from '../config/vehicles'
import { BRAND } from '../config/brand'
import type { ServiceId } from '../config/services'
import { EMPTY_BOOKING, type BookingState } from '../lib/booking'
import { estimatePrice, formatPrice } from '../lib/pricing'
import { sendByEmail, sendByWhatsApp } from '../lib/send'
import { useI18n } from '../i18n'

const TOTAL_STEPS = 6

export function BookingFlow({ service }: { service: ServiceId }) {
  const { t, lang } = useI18n()
  const [step, setStep] = useState(0)
  const [booking, setBooking] = useState<BookingState>(EMPTY_BOOKING)

  const patch = (p: Partial<BookingState>) => setBooking((b) => ({ ...b, ...p }))

  const vehicle = VEHICLES.find((v) => v.id === booking.vehicleId) ?? null

  const price = useMemo(() => {
    if (booking.distanceKm == null || booking.durationMin == null || !vehicle) return null
    return estimatePrice({
      distanceKm: booking.distanceKm,
      durationMin: booking.durationMin,
      vehicleMultiplier: vehicle.multiplier,
      service,
    })
  }, [booking.distanceKm, booking.durationMin, vehicle, service])

  const titles = [
    t.step1.title,
    t.step2.title,
    t.step3.title,
    t.step4.title,
    t.step5.title,
    t.step6.title,
  ]

  // Per-step gate for the Next button.
  const canAdvance = (() => {
    switch (step) {
      case 0:
        return booking.distanceKm != null && booking.durationMin != null
      case 1:
        return Boolean(booking.date && booking.time)
      case 2:
        return Boolean(booking.vehicleId)
      case 3:
        return Boolean(booking.name.trim() && booking.email.trim())
      default:
        return true
    }
  })()

  const go = (delta: number) => setStep((s) => Math.min(TOTAL_STEPS - 1, Math.max(0, s + delta)))

  function summaryText(): string {
    const lines = [
      `${t.service[service].name}`,
      `${t.step5.route}: ${booking.pickup} → ${booking.dropoff}`,
      `${t.step5.when}: ${booking.date} ${booking.time} · ${booking.passengers} pax`,
      `${t.step5.vehicle}: ${vehicle?.name ?? '-'}`,
      `${t.step4.name}: ${booking.name}`,
      `${t.step4.email}: ${booking.email}`,
      `${t.step4.phone}: ${booking.phone}`,
      booking.notes ? `${t.step4.notes}: ${booking.notes}` : '',
      price != null ? `${t.step5.price}: ${formatPrice(price, lang)}` : '',
    ]
    return lines.filter(Boolean).join('\n')
  }

  const subject = `${BRAND.name} — ${t.service[service].name}`

  return (
    <div className="booking">
      <Stepper current={step} total={TOTAL_STEPS} titles={titles} />

      {/* STEP 1 — Route */}
      {step === 0 && (
        <RouteStep
          pickup={booking.pickup}
          dropoff={booking.dropoff}
          distanceKm={booking.distanceKm}
          durationMin={booking.durationMin}
          onField={patch}
        />
      )}

      {/* STEP 2 — Date & time */}
      {step === 1 && (
        <div className="step-body">
          <h2 className="step-title">{t.step2.title}</h2>
          <p className="step-sub">{t.step2.sub}</p>
          <div className="grid-3">
            <Field
              label={t.step2.date}
              type="date"
              value={booking.date}
              onChange={(e) => patch({ date: e.target.value })}
            />
            <Field
              label={t.step2.time}
              type="time"
              value={booking.time}
              onChange={(e) => patch({ time: e.target.value })}
            />
            <Field
              label={t.step2.passengers}
              type="number"
              min={1}
              value={booking.passengers}
              onChange={(e) => patch({ passengers: Math.max(1, Number(e.target.value) || 1) })}
            />
          </div>
        </div>
      )}

      {/* STEP 3 — Vehicle */}
      {step === 2 && (
        <div className="step-body">
          <h2 className="step-title">{t.step3.title}</h2>
          <p className="step-sub">{t.step3.sub}</p>
          <div className="vehicles" role="radiogroup" aria-label={t.step3.title}>
            {VEHICLES.map((v) => {
              const selected = booking.vehicleId === v.id
              return (
                <button
                  key={v.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  className={'vehicle' + (selected ? ' is-selected' : '')}
                  onClick={() => patch({ vehicleId: v.id })}
                >
                  <img className="vehicle__img" src={v.image} alt={v.name} />
                  <span className="vehicle__name">
                    {v.name} · ×{v.multiplier.toFixed(2)}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* STEP 4 — Contact */}
      {step === 3 && (
        <div className="step-body">
          <h2 className="step-title">{t.step4.title}</h2>
          <p className="step-sub">{t.step4.sub}</p>
          <div className="grid-2">
            <Field
              label={t.step4.name}
              value={booking.name}
              onChange={(e) => patch({ name: e.target.value })}
            />
            <Field
              label={t.step4.email}
              type="email"
              value={booking.email}
              onChange={(e) => patch({ email: e.target.value })}
            />
          </div>
          <div className="grid-2">
            <Field
              label={t.step4.phone}
              type="tel"
              value={booking.phone}
              onChange={(e) => patch({ phone: e.target.value })}
            />
            <Field
              label={t.step4.notes}
              placeholder={t.step4.notesPh}
              value={booking.notes}
              onChange={(e) => patch({ notes: e.target.value })}
            />
          </div>
        </div>
      )}

      {/* STEP 5 — Review */}
      {step === 4 && (
        <div className="step-body">
          <h2 className="step-title">{t.step5.title}</h2>
          <dl className="summary">
            <div>
              <dt>{t.step5.route}</dt>
              <dd>
                {booking.pickup} → {booking.dropoff}
              </dd>
            </div>
            <div>
              <dt>{t.step5.when}</dt>
              <dd>
                {booking.date} {booking.time} · {booking.passengers}
              </dd>
            </div>
            <div>
              <dt>{t.step5.vehicle}</dt>
              <dd>{vehicle?.name ?? '-'}</dd>
            </div>
            <div>
              <dt>{t.step5.contact}</dt>
              <dd>
                {booking.name} · {booking.email}
              </dd>
            </div>
          </dl>
          {price != null && (
            <p className="price">
              {t.step5.price}: <b>{formatPrice(price, lang)}</b>
            </p>
          )}
        </div>
      )}

      {/* STEP 6 — Payment / Send */}
      {step === 5 && (
        <div className="step-body">
          <h2 className="step-title">{t.step6.title}</h2>
          <p className="note">{t.step6.note}</p>
          {price != null && (
            <p className="price">
              {t.step5.price}: <b>{formatPrice(price, lang)}</b>
            </p>
          )}
          <div className="actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => sendByEmail(subject, summaryText())}
            >
              {t.step6.sendEmail}
            </button>
            <button
              type="button"
              className="btn btn--whatsapp"
              onClick={() => sendByWhatsApp(`${subject}\n\n${summaryText()}`)}
            >
              {t.step6.sendWhatsApp}
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="booking__nav">
        {step > 0 && (
          <button type="button" className="btn btn--ghost" onClick={() => go(-1)}>
            {t.common.back}
          </button>
        )}
        {step < TOTAL_STEPS - 1 && (
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => go(1)}
            disabled={!canAdvance}
          >
            {t.common.next}
          </button>
        )}
      </div>
    </div>
  )
}
