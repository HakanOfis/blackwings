# Blackwings

One brand, three services — **Ride**, **Taxi** and **Shuttle** — in a single
booking flow: pick pickup & drop-off on the map, get an instant price estimate,
choose date/time and vehicle, then confirm by email or WhatsApp.

Built with **Vite + React + TypeScript**. Dark-first "Obsidian & Ember" brand.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build
```

## Before launch — things to fill in

1. **Google Maps API key.** Copy `.env.example` → `.env` and set
   `VITE_GOOGLE_MAPS_API_KEY`. Create a **new** key in Google Cloud Console and
   restrict it by HTTP referrer (your domain) + APIs (Maps JavaScript, Places,
   Directions). Do not reuse the old unrestricted key. Without a key the app
   falls back to manual distance entry so the estimator still works.
2. **Pricing.** `src/config/pricing.ts` holds **placeholder** rates clearly
   flagged `CONFIRM`. Replace them with the real Blackwings tariffs — one file,
   the whole app follows.

## Where things live

| What | File |
| --- | --- |
| Brand colours, type, spacing (single source) | `src/styles/tokens.css` |
| Logo / wordmark (inline SVG) | `src/brand/Logo.tsx` |
| Real company details (legal, address, phone, email) | `src/config/brand.ts` |
| Vehicles & price multipliers | `src/config/vehicles.ts` |
| Pricing rates & formula | `src/config/pricing.ts`, `src/lib/pricing.ts` |
| Translations (NL / FR / EN / TR) | `src/i18n/*.ts` |
| Booking steps | `src/components/BookingFlow.tsx`, `src/components/steps/` |

## Languages

NL / FR / EN / TR. Strings are type-checked against the English master
(`src/i18n/en.ts`) — a missing key in any language is a **build error**, so no
language can fall out of sync.

## Notes

- The real Blackwings contact, legal and address details are preserved verbatim
  in `src/config/brand.ts`. The original single static prototype is kept under
  `legacy/` for reference only.
- Online payment is not wired yet — the flow confirms via email/WhatsApp. A real
  payment provider (Stripe/Mollie) is a separate, deliberate step.
