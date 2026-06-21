/* =========================================================================
   Blackwings — Logo system (inline SVG).
   WingMark   : icon only (favicon / compact).
   Wordmark   : wing + "Blackwings" text lockup.
   Colour is driven by CSS `color` (currentColor) so the mark adapts.
   ========================================================================= */

interface MarkProps {
  size?: number
  title?: string
  className?: string
}

/**
 * The "wing": three swept blades ascending to the right — wings + forward
 * motion. Uses currentColor; default gold comes from the consumer.
 */
export function WingMark({ size = 28, title, className }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 32"
      fill="currentColor"
      className={className}
      role={title ? 'img' : 'presentation'}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <path d="M1 27 L21 27 L27 20 L7 20 Z" opacity="0.55" />
      <path d="M8 17 L26 17 L31 11 L13 11 Z" opacity="0.8" />
      <path d="M16 8 L30 8 L34 3 L20 3 Z" />
    </svg>
  )
}

interface WordmarkProps {
  size?: number
  className?: string
}

/** Wing + "Blackwings" lockup. */
export function Wordmark({ size = 26, className }: WordmarkProps) {
  return (
    <span
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--bw-primary)' }}
    >
      <WingMark size={size * 1.25} />
      <span
        style={{
          fontFamily: 'var(--bw-font-display)',
          fontWeight: 700,
          fontSize: size,
          letterSpacing: '-0.02em',
          color: 'var(--bw-text)',
        }}
      >
        Black<span style={{ color: 'var(--bw-primary)' }}>wings</span>
      </span>
    </span>
  )
}
