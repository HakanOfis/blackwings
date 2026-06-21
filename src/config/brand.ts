/* =========================================================================
   Blackwings — Brand & company constants.

   ⚠️ The contact / legal / address values below are the REAL Blackwings
   details. They are PRESERVED verbatim from the original site. Do not
   invent or change them.
   ========================================================================= */

export const BRAND = {
  /** Consumer-facing brand name (wordmark). */
  name: 'Blackwings',

  /** Legal entity — keep exactly as registered. */
  legalName: 'BlackWings International & Consulting BV',

  /** Contact — preserved from the original site. */
  email: 'info@blackwings.be',
  phone: '+32 491 25 59 54',
  /** Phone digits only, for WhatsApp / tel: links. */
  phoneE164: '32491255954',

  address: {
    street: 'Excelsiorlaan 31',
    postalCode: '1930',
    city: 'Zaventem',
    country: 'Belgium',
  },

  copyright: '© BlackWings International & Consulting BV',
} as const

export type Brand = typeof BRAND
