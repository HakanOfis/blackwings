import { useI18n } from '../i18n'

interface Props {
  current: number
  total: number
  titles: string[]
}

export function Stepper({ current, total, titles }: Props) {
  const { t } = useI18n()
  return (
    <div className="stepper">
      <p className="stepper__label">
        {t.stepper.step} {current + 1} {t.stepper.of} {total} — <b>{titles[current]}</b>
      </p>
      <ol className="stepper__dots" aria-hidden="true">
        {Array.from({ length: total }, (_, i) => (
          <li
            key={i}
            className={
              'stepper__dot' +
              (i === current ? ' is-current' : '') +
              (i < current ? ' is-done' : '')
            }
          />
        ))}
      </ol>
    </div>
  )
}
