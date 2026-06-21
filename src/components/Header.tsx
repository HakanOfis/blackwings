import { Wordmark } from '../brand/Logo'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ServiceSwitcher } from './ServiceSwitcher'
import type { ServiceId } from '../config/services'

interface Props {
  service: ServiceId
  onServiceChange: (service: ServiceId) => void
}

export function Header({ service, onServiceChange }: Props) {
  return (
    <header className="site-header">
      <div className="app-container site-header__bar">
        <a href="#top" className="site-header__brand" aria-label="Blackwings — home">
          <Wordmark />
        </a>

        <div className="site-header__nav">
          <ServiceSwitcher value={service} onChange={onServiceChange} />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
