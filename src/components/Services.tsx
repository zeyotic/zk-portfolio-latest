import { motion } from 'framer-motion'

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Services() {
  return (
    <section className="section" id="services">
      <div className="shell">
        <p className="section__label">What I do</p>
        <h2 className="section__title">Websites that sell the story.</h2>
        <p className="section__desc">
          From editorial layouts to conversion-focused product pages, I focus on
          typography, spacing, and motion so the work feels intentional — not
          templated.
        </p>
        <div className="cards-2">
          <motion.article
            className="card"
            id="wordpress"
            custom={0}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3>WordPress &amp; marketing sites</h3>
            <p>
              Building modern, responsive, user-friendly sites since 2023.
              Comfortable owning digital product and ingredient-supplier style
              experiences — structured content, fast loads, and CMS workflows
              your team can actually use.
            </p>
            <div className="card__tags">
              <span className="tag">Gutenberg / builders</span>
              <span className="tag">SEO-ready</span>
              <span className="tag">Performance</span>
            </div>
          </motion.article>
          <motion.article
            className="card"
            custom={1}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3>Frontend engineering</h3>
            <p>
              React-first thinking: component boundaries, predictable state, and
              APIs that stay small. I pair UI polish with pragmatic architecture
              so features are easy to extend.
            </p>
            <div className="card__tags">
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Design tokens</span>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
