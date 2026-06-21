import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'
import { BookingFlow } from './components/BookingFlow'
import { DEFAULT_SERVICE, type ServiceId } from './config/services'
import { useI18n } from './i18n'

export default function App() {
  const { t } = useI18n()
  const [service, setService] = useState<ServiceId>(DEFAULT_SERVICE)

  return (
    <>
      <a className="skip-link" href="#main">
        {t.nav.skipToContent}
      </a>

      <Header service={service} onServiceChange={setService} />

      <main id="main">
        <Hero />

        <div className="app-container">
          <section className="booking-card" aria-labelledby="service-heading">
            <p className="booking-card__eyebrow">{t.nav[service]}</p>
            <h2 id="service-heading" className="booking-card__title">
              {t.service[service].name}
            </h2>
            <p className="booking-card__sub">{t.service[service].tagline}</p>

            <BookingFlow key={service} service={service} />
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
