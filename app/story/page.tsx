'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

export default function StoryPage() {
  return (
    <>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(160deg, var(--terra) 0%, #D4734E 40%, var(--sand) 100%)',
        padding: 'clamp(6rem, 12vw, 10rem) 2rem clamp(3rem, 6vw, 5rem)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="tile-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.span
            {...fadeUp(0)}
            style={{
              fontFamily: 'var(--font-dancing)',
              fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
              color: 'rgba(250,246,239,0.9)',
              display: 'block',
              marginBottom: '0.3rem',
            }}
          >
            our story,
          </motion.span>
          <motion.h1
            {...fadeUp(0.1)}
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.8rem, 7vw, 5rem)',
              fontWeight: 800,
              color: 'var(--cream)',
              lineHeight: 1,
            }}
          >
            La Casa
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: 'var(--cream)', padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2
            {...fadeUp(0)}
            style={{
              fontFamily: 'var(--font-playfair)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: 'var(--terra)',
              marginBottom: '1.5rem',
              lineHeight: 1.2,
            }}
          >
            Mi Casa es tu casa.
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            style={{
              fontFamily: 'var(--font-dmsans)',
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              color: 'var(--espresso)',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
            }}
          >
            My home is your home. That phrase is more than a name — it is the promise behind everything we do at Mi Casa Café. From the first coffee poured at sunrise to the last waffle stacked in the afternoon, every dish and every cup is made with the generosity of someone cooking for the people they love.
          </motion.p>
          <motion.p
            {...fadeUp(0.2)}
            style={{
              fontFamily: 'var(--font-dmsans)',
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              color: 'var(--espresso)',
              lineHeight: 1.8,
            }}
          >
            We were born in Brisbane with a Mediterranean heart — warm colours, generous portions, and the kind of welcome that makes you want to linger a little longer. Whether you are at Southbank overlooking the river or at Underwood on Logan Road, you are home.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: 'var(--sand)', padding: 'clamp(3rem, 6vw, 5rem) 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.h2
            {...fadeUp(0)}
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--espresso)',
              textAlign: 'center',
              marginBottom: '3rem',
            }}
          >
            What we stand for
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
          }}>
            {[
              {
                title: 'Generosity',
                icon: '🍽️',
                text: 'Every plate is built to satisfy. We do not believe in small portions or half-measures. You leave full — in every sense.',
              },
              {
                title: 'Freshness',
                icon: '🌿',
                text: 'Real ingredients. No shortcuts. The açaï is blended fresh, the juice is pressed to order, the haloumi is golden from the pan.',
              },
              {
                title: 'Warmth',
                icon: '☀️',
                text: 'Brisbane is warm. So are we. The colours, the food, the welcome — everything at Mi Casa radiates a little sun.',
              },
              {
                title: 'Community',
                icon: '🏡',
                text: 'Two neighbourhoods, one familia. Southbank and Underwood — different streets, the same spirit. Pull up a chair.',
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  backgroundColor: 'var(--cream)',
                  borderRadius: '8px',
                  padding: '2rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{v.icon}</div>
                <h3 style={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: 'var(--terra)',
                  marginBottom: '0.75rem',
                }}>{v.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-dmsans)',
                  fontSize: '0.9rem',
                  color: 'var(--espresso)',
                  lineHeight: 1.65,
                  opacity: 0.8,
                }}>{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section style={{
        background: 'linear-gradient(135deg, var(--espresso) 0%, #3D2C1E 100%)',
        padding: 'clamp(4rem, 8vw, 7rem) 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="tile-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.15 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto' }}>
          <motion.span
            {...fadeUp(0)}
            style={{
              fontFamily: 'var(--font-dancing)',
              fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
              color: 'var(--terra)',
              display: 'block',
              marginBottom: '0.5rem',
            }}
          >
            always,
          </motion.span>
          <motion.p
            {...fadeUp(0.1)}
            style={{
              fontFamily: 'var(--font-playfair)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
              color: 'var(--cream)',
              lineHeight: 1.4,
            }}
          >
            "Come as you are. Leave satisfied. Come back soon."
          </motion.p>
        </div>
      </section>
    </>
  )
}
