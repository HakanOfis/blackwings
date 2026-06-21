import { BRAND } from '../config/brand'
import { useI18n } from '../i18n'

export function Footer() {
  const { t } = useI18n()
  const { street, postalCode, city, country } = BRAND.address

  return (
    <footer className="site-footer">
      <div className="app-container site-footer__inner">
        <div>
          <h4 className="site-footer__name">{BRAND.legalName}</h4>
          <p className="site-footer__addr">
            {street}, <b>{postalCode} {city}</b>, {country}
          </p>
        </div>

        <div className="site-footer__contact">
          <div>
            {t.footer.phone}:{' '}
            <a href={`tel:+${BRAND.phoneE164}`}>{BRAND.phone}</a>
          </div>
          <div>
            {t.footer.email}: <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          </div>
          <p className="site-footer__copy">{BRAND.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
