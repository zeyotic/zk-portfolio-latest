import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Turn = { role: 'bot' | 'user'; text: string }

const script: Turn[] = [
  {
    role: 'bot',
    text: 'Hi — I’m the BOTS Pharma assistant. Are you looking for vitamins, minerals, or herbal extracts today?',
  },
  { role: 'user', text: 'We need collagen peptides for a new supplement line in MENA.' },
  {
    role: 'bot',
    text: 'Great. I’ll route you to specs, MOQs, and a quote path. One moment while I sync with inventory…',
  },
  {
    role: 'user',
    text: 'Also send coa-friendly documentation if available.',
  },
  {
    role: 'bot',
    text: 'Noted. I’ve tagged your request for COA packs. A specialist will follow up with validated docs.',
  },
]

export function ChatbotDemo() {
  const [visible, setVisible] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const fn = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])

  useEffect(() => {
    if (reducedMotion) {
      setVisible(script.length)
      return
    }
    setVisible(0)
    const id = window.setInterval(() => {
      setVisible((v) => (v >= script.length ? 0 : v + 1))
    }, 3200)
    return () => clearInterval(id)
  }, [reducedMotion])

  const shown = script.slice(0, visible)

  return (
    <section className="section" id="automation">
      <div className="shell">
        <p className="section__label">AI automation</p>
        <h2 className="section__title">Chat experiences powered by n8n &amp; Python.</h2>
        <p className="section__desc">
          The demo below is a stylized replay inspired by the Bots Pharma
          assistant — illustrating intent capture, routing, and handoff. The real
          deployment combines workflow orchestration with lightweight Python
          services for validation, retrieval, and integrations.
        </p>
        <div className="chatbot-section">
          <motion.div
            className="chat-mock"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="chat-mock__header">
              <span className="chat-mock__dot" aria-hidden />
              <span>Bots Pharma — assistant preview (mock)</span>
            </div>
            <div className="chat-mock__body" aria-live="polite">
              {shown.map((m, i) => (
                <div
                  key={`${i}-${m.text.slice(0, 12)}`}
                  className={`bubble bubble--${m.role}`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {m.text}
                </div>
              ))}
            </div>
            <p className="chat-mock__note">
              Not a live capture of botspharma.com — a motion prototype for your
              portfolio. Replace with a screen recording when you have one.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay: 0.08 }}
          >
            <h3 className="section__title" style={{ fontSize: '1.35rem', maxWidth: 'none' }}>
              How the stack behaves
            </h3>
            <p className="section__desc" style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--text-strong)' }}>n8n</strong> owns
              triggers, branching, and third-party hooks.{' '}
              <strong style={{ color: 'var(--text-strong)' }}>Python</strong>{' '}
              handles structured tasks: normalization, safety checks, and custom
              APIs. The React surface stays thin — mostly presentation and session
              UX.
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', color: 'var(--text)' }}>
              <li>Webhook or widget → workflow run with observability</li>
              <li>LLM or rules layer kept behind explicit gates</li>
              <li>Human handoff when confidence drops or for compliance</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
