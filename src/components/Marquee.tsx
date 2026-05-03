const items = [
  'Responsive UI',
  'WordPress',
  'Product marketing sites',
  'n8n orchestration',
  'Python backends',
  'Chat & support bots',
  'Performance',
  'Accessibility-aware',
]

export function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {doubled.map((t, i) => (
          <span key={`${t}-${i}`}>{t}</span>
        ))}
      </div>
    </div>
  )
}
