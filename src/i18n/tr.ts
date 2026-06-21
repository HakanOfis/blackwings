/* Blackwings — Türkçe. */

import type { Dict } from './en'

export const tr: Dict = {
  languageName: 'Türkçe',

  brand: {
    tagline: 'Her yolculuk, tek kanat.',
  },

  nav: {
    ride: 'Yolculuk',
    taxi: 'Taksi',
    shuttle: 'Servis',
    switchLanguage: 'Dili değiştir',
    skipToContent: 'İçeriğe geç',
  },

  service: {
    ride: { name: 'Blackwings Ride', tagline: 'Kendi planına göre özel yolculuk ayırt.' },
    taxi: { name: 'Blackwings Taxi', tagline: 'Klasik taksi, tek dokunuş uzağında.' },
    shuttle: { name: 'Blackwings Shuttle', tagline: 'Paylaşımlı servis transferleri, kolayca ayrılır.' },
  },

  hero: {
    title: 'Yolculuk, taksi ve servis — tek marka.',
    subtitle: 'Haritada canlı rota • Anında fiyat tahmini • Hızlı onay',
  },

  stepper: {
    step: 'Adım',
    of: '/',
  },

  common: {
    next: 'İleri',
    back: 'Geri',
    calculate: 'Hesapla',
    continue: 'Devam',
    required: 'Bu alan zorunludur',
  },

  step1: {
    title: 'Rota',
    sub: 'Biniş ve iniş noktasını seç. Rotayı çizip mesafe ve süreyi tahmin edelim.',
    pickup: 'Biniş noktası',
    pickupPh: 'örn. Mortsel, Belçika',
    dropoff: 'İniş noktası',
    dropoffPh: 'örn. Brüksel Havalimanı (BRU)',
    mapLabel: 'Rotanı gösteren harita',
    distance: 'Mesafe',
    duration: 'Süre',
    estimate: 'Tahmini fiyat',
    loading: 'Rota hesaplanıyor…',
    error: 'Bu rotayı hesaplayamadık. Lütfen iki noktayı da kontrol et.',
    empty: 'Rota ve fiyatı görmek için iki noktayı da gir.',
  },

  step2: {
    title: 'Tarih & saat',
    sub: 'Tarih ve saati seç, kaç yolcu olduğunu belirt.',
    date: 'Tarih',
    time: 'Saat',
    passengers: 'Yolcu',
  },

  step3: {
    title: 'Aracını seç',
    sub: 'Bir araç seç. Taban ücrete bir fiyat çarpanı uygulanır.',
  },

  step4: {
    title: 'İletişim',
    sub: 'Talebini alır almaz rezervasyonunu onaylayacağız.',
    name: 'Ad soyad',
    email: 'E-posta',
    phone: 'Telefon (WhatsApp)',
    notes: 'Notlar',
    notesPh: 'Uçuş numarası, bagaj, çocuk koltuğu…',
  },

  step5: {
    title: 'Gözden geçir & onayla',
    route: 'Rota',
    when: 'Tarih & saat',
    vehicle: 'Araç',
    contact: 'İletişim',
    price: 'Tahmini toplam',
  },

  step6: {
    title: 'Ödeme',
    note: 'Online ödeme çok yakında. Şimdilik rezervasyonunu e-posta veya WhatsApp ile onaylıyor, ödemeyi seninle doğrudan ayarlıyoruz.',
    sendEmail: 'E-posta ile gönder',
    sendWhatsApp: 'WhatsApp’tan yaz',
  },

  footer: {
    contact: 'İletişim',
    address: 'Adres',
    phone: 'Telefon (WhatsApp)',
    email: 'E-posta',
  },
}
