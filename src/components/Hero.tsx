import airport from '../assets/img/airport.jpg'
import { useI18n } from '../i18n'

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="hero" id="top">
      <img className="hero__bg" src={airport} alt="" aria-hidden="true" />
      <div className="hero__overlay" />
      <div className="app-container hero__inner">
        <p className="hero__tagline">{t.brand.tagline}</p>
        <h1 className="hero__title">{t.hero.title}</h1>
        <p className="hero__subtitle">{t.hero.subtitle}</p>
      </div>
    </section>
  )
}
