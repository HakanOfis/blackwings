import { useI18n, type Lang } from '../i18n'

export function LanguageSwitcher() {
  const { lang, setLang, langs, nameOf, t } = useI18n()

  return (
    <label className="lang-switcher">
      <span className="sr-only">{t.nav.switchLanguage}</span>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as Lang)}
        aria-label={t.nav.switchLanguage}
      >
        {langs.map((l) => (
          <option key={l} value={l}>
            {l.toUpperCase()} — {nameOf(l)}
          </option>
        ))}
      </select>
    </label>
  )
}
