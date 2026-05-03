import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const payload = {
      name: String(fd.get('name') ?? ''),
      email: String(fd.get('email') ?? ''),
      message: String(fd.get('message') ?? ''),
    }
    setStatus('loading')
    setMessage('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus('error')
        setMessage(
          typeof data.error === 'string'
            ? data.error
            : 'Could not send — check fields and try again.',
        )
        return
      }
      setStatus('success')
      setMessage("Thanks — I'll get back to you shortly.")
      form.reset()
    } catch {
      setStatus('error')
      setMessage('Network error. Is the API running? Try npm run dev (starts both).')
    }
  }

  return (
    <section className="section" id="contact">
      <div className="shell">
        <p className="section__label">Contact</p>
        <h2 className="section__title">Let&apos;s build the next release.</h2>
        <p className="section__desc">
          Share a short brief: timeline, stack, and what success looks like. This
          form posts to a small Hono API (validated with Zod) — ready to swap for
          email or CRM webhooks.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              Name
              <input name="name" type="text" autoComplete="name" required maxLength={120} />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
              />
            </label>
            <label>
              Message
              <textarea name="message" required minLength={10} maxLength={4000} />
            </label>
            <button className="btn" type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending…' : 'Send message'}
            </button>
            {message ? (
              <p
                className={`form-status ${status === 'success' ? 'form-status--ok' : ''} ${status === 'error' ? 'form-status--err' : ''}`}
              >
                {message}
              </p>
            ) : null}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
