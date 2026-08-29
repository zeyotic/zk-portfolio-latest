import { motion } from 'framer-motion'

const img =
  'https://oz21ot1xfsvjumll.private.blob.vercel-storage.com/760d380f79a60a8c4fc0bc3adaf47380_1.jpg?vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfT1oyMU90MXhGU3ZqVU1sbCIsIm93bmVySWQiOiJ0ZWFtXzNPUlFUQUY5S0oySkFzRDBUVm1CNGVnWCIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzg4MDcwNDk3OTE2LCJpYXQiOjE3ODgwMjcyOTgwNzh9.1SQYGQ8bkjY9ta36ci7S-gGky1S__G8W90-9YRG_OOY&vercel-blob-signature=pUU0AaOt0ab0TbVpweL6R3v6lNYEDcQVWuxgyQ40do8'

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
              I ship modern interfaces and connect them to reliable AI workflows
              so products feel fast, clear, and human.
            </motion.p>
            <motion.div className="hero__meta" variants={item}>
              <span>WordPress</span>
              <span>Advanced Web Development</span>
              <span>AI Automation · n8n · Python </span>
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
