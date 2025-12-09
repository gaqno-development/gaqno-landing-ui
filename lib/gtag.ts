export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type GtagEventArgs = {
  action: string
  category: string
  label?: string
  value?: number
}

export const pageview = (url: string) => {
  if (!GA_TRACKING_ID) return
  window.gtag?.('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }: GtagEventArgs) => {
  if (!GA_TRACKING_ID) return
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}
