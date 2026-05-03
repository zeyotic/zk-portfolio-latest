import { motion } from 'framer-motion'

const img =
  'https://images.unsplash.com/photo-1497215842969-222cb4301878?w=1200&q=80&auto=format&fit=crop'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  return (
    <section className="hero">
      <div className="shell">
        <div className="hero__grid">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
          >
            <motion.p className="section__label" variants={item}>
              Zeyad Khaled
            </motion.p>
            <motion.h1 className="hero__title" variants={item}>
              Frontend craft
              <br />&amp; intelligent automation.
            </motion.h1>
            <motion.p className="hero__lead" variants={item}>
              I&apos;m <strong style={{ color: 'var(--text-strong)' }}>Zeyad Khaled</strong>
              — I ship modern interfaces and connect them to reliable AI workflows
              so products feel fast, clear, and human.
            </motion.p>
            <motion.div className="hero__meta" variants={item}>
              <span>WordPress · since 2023</span>
              <span>React &amp; design systems</span>
              <span>n8n · Python</span>
            </motion.div>
          </motion.div>
          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.15 }}
          >
            <img
              src={img}
              alt="Minimal studio workspace with warm light"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
