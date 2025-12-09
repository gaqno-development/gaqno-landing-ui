interface SectionPlaceholderProps {
  height?: string
}

export function SectionPlaceholder({ height }: SectionPlaceholderProps) {
  return (
    <div
      className="w-full animate-pulse rounded-3xl border border-foreground/10 bg-secondary/40"
      style={{ minHeight: height || '320px' }}
    />
  )
}
