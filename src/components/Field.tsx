import { useId } from 'react'
import type { InputHTMLAttributes, ReactNode } from 'react'

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode
}

/** Labelled input with a proper for/id association (accessibility). */
export function Field({ label, ...inputProps }: FieldProps) {
  const id = useId()
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input id={id} className="field__input" {...inputProps} />
    </div>
  )
}
