import type { NextWebVitalsMetric } from 'next/app'
import { GA_TRACKING_ID } from '@/lib/gtag'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (!GA_TRACKING_ID || typeof window === 'undefined') return
  const value =
    metric.name === 'CLS'
      ? Math.round(metric.value * 1000) / 1000
      : Math.round(metric.value)
  window.gtag?.('event', metric.name, {
    value,
    event_label: metric.id,
    event_category: 'Web Vitals',
    non_interaction: true,
  })
}
