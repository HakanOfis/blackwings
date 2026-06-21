import { SERVICES, type ServiceId } from '../config/services'
import { useI18n } from '../i18n'

interface Props {
  value: ServiceId
  onChange: (service: ServiceId) => void
}

export function ServiceSwitcher({ value, onChange }: Props) {
  const { t } = useI18n()

  return (
    <div className="service-switcher" role="tablist" aria-label="Blackwings services">
      {SERVICES.map((id) => (
        <button
          key={id}
          role="tab"
          type="button"
          aria-selected={value === id}
          className={`service-tab${value === id ? ' is-active' : ''}`}
          onClick={() => onChange(id)}
        >
          {t.nav[id]}
        </button>
      ))}
    </div>
  )
}
