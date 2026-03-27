'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

export default function LocationsPage() {
  return (
    <>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, #C8603A 0%, #D4734E 100%)',
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
              color: 'rgba(250,246,239,0.85)',
              display: 'block',
              marginBottom: '0.3rem',
            }}
          >
            come find us,
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
            Our Locations
          </motion.h1>
        </div>
      </section>

      {/* Locations */}
      <section style={{ backgroundColor: 'var(--cream)', padding: 'clamp(3rem, 6vw, 5rem) 2rem' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
        }}>
          {/* Southbank */}
          <motion.article
            {...fadeUp(0.1)}
            style={{
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 40px rgba(42,31,20,0.08)',
            }}
          >
            {/* Photo — strawberry waffle + MI CASA sign */}
            <div style={{
              height: '280px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <Image
                src="/images/IMG_5790.jpeg"
                alt="Mi Casa Southbank — strawberry waffle with café signage"
                fill
                unoptimized
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>

            <div style={{ backgroundColor: 'var(--blush)', padding: '2rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.8rem',
                fontWeight: 700,
                color: 'var(--espresso)',
                marginBottom: '1rem',
              }}>Southbank</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-dmsans)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--terra)',
                    display: 'block',
                    marginBottom: '0.15rem',
                  }}>Address</span>
                  <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.95rem', color: 'var(--espresso)' }}>
                    Southpoint, South Brisbane QLD
                  </p>
                </div>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-dmsans)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--terra)',
                    display: 'block',
                    marginBottom: '0.15rem',
                  }}>Hours</span>
                  <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.95rem', color: 'var(--espresso)' }}>
                    Open all day — breakfast through late lunch
                  </p>
                </div>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-dmsans)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--terra)',
                    display: 'block',
                    marginBottom: '0.15rem',
                  }}>Instagram</span>
                  <a
                    href="https://instagram.com/micasacafesb"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.95rem', color: 'var(--terra)', textDecoration: 'none' }}
                  >
                    @micasacafesb
                  </a>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Underwood */}
          <motion.article
            {...fadeUp(0.2)}
            style={{
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 40px rgba(42,31,20,0.08)',
            }}
          >
            {/* Photo — Kinder Bueno pancakes + MI CASA sign */}
            <div style={{
              height: '280px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <Image
                src="/images/IMG_5792.jpeg"
                alt="Mi Casa Underwood — Kinder Bueno pancake tower with café signage"
                fill
                unoptimized
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>

            <div style={{ backgroundColor: 'var(--sand)', padding: '2rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.8rem',
                fontWeight: 700,
                color: 'var(--espresso)',
                marginBottom: '1rem',
              }}>Underwood</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-dmsans)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--terra)',
                    display: 'block',
                    marginBottom: '0.15rem',
                  }}>Address</span>
                  <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.95rem', color: 'var(--espresso)' }}>
                    Logan Road, Underwood QLD
                  </p>
                </div>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-dmsans)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--terra)',
                    display: 'block',
                    marginBottom: '0.15rem',
                  }}>Hours</span>
                  <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.95rem', color: 'var(--espresso)' }}>
                    Open all day — breakfast through late lunch
                  </p>
                </div>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-dmsans)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--terra)',
                    display: 'block',
                    marginBottom: '0.15rem',
                  }}>Instagram</span>
                  <a
                    href="https://instagram.com/micasacafe_"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.95rem', color: 'var(--terra)', textDecoration: 'none' }}
                  >
                    @micasacafe_
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--sand)', padding: '4rem 2rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p style={{
            fontFamily: 'var(--font-playfair)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            color: 'var(--espresso)',
            marginBottom: '2rem',
          }}>
            Two places, one feeling — welcome home.
          </p>
          <Link
            href="/menu"
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--terra)',
              color: 'var(--cream)',
              fontFamily: 'var(--font-playfair)',
              fontSize: '1rem',
              fontWeight: 600,
              padding: '0.85rem 2.2rem',
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            See the Menu
          </Link>
        </motion.div>
      </section>
    </>
  )
}
