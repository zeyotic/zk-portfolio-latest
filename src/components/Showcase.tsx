import { motion } from 'framer-motion'

const imgBots =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80&auto=format&fit=crop'
const imgTawasol =
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop'

const cardMotion = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Showcase() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <p className="section__label">Portfolio</p>
        <h2 className="section__title">Live products &amp; client ecosystems.</h2>
        <p className="section__desc">
          A snapshot of public-facing work: health-industry automation on the web,
          and multi-site delivery alongside a regional digital partner.
        </p>
        <div className="showcase-grid">
          <motion.article
            className="showcase-item"
            custom={0}
            variants={cardMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="showcase-item__img">
              <img
                src={imgBots}
                alt="Pharma and laboratory aesthetic — representative imagery for Bots Pharma project"
                loading="lazy"
              />
            </div>
            <div className="showcase-item__body">
              <h3>Bots Pharma — web &amp; assistant</h3>
              <p>
                Built and styled frontend components/pages, including bilingual support English/Arabic.
                Implemented an AI-powered chatbot widget using n8n, enabling automated visitor engagement,
                and quote requests, and routing to the sales team directly from the site.
              </p>
              <a
                className="link-arrow"
                href="https://botspharma.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit botspharma.com →
              </a>
            </div>
          </motion.article>
          <motion.article
            className="showcase-item"
            custom={1}
            variants={cardMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="showcase-item__img">
              <img
                src={imgTawasol}
                alt="Abstract data and growth — representative of Tawasol365 client delivery"
                loading="lazy"
              />
            </div>
            <div className="showcase-item__body">
              <h3>Tawasol365 — client websites</h3>
              <p>
                Part of the web footprint behind Tawasol365&apos;s WordPress and
                software practice: marketing sites, IT positioning pages, and
                funnels for teams operating across multiple countries — aligned
                with their &quot;ideas to impact&quot; positioning.
              </p>
              <a
                className="link-arrow"
                href="https://tawasol365.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit tawasol365.com →
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
