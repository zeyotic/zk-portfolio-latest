import { motion } from 'framer-motion'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#automation', label: 'Automation' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <div className="site-header__inner">
        <a href="#" className="logo-mark">
          Zeyad Khaled
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}
