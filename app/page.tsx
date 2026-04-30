'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const notes = ['Italian instinct', 'Brisbane light', 'Generous plates']

const chapters = [
  {
    eyebrow: 'Breakfast hero',
    title: 'Signature stacks',
    text: 'IMG_5789 and IMG_5793 carry the sweet side of the menu with close framing and visible texture.',
    image: '/images/IMG_5793.jpeg',
    alt: 'Mi Casa Café pancake tower with fruit and cream',
    position: 'center',
  },
  {
    eyebrow: 'Room energy',
    title: 'The table feels lived in',
    text: 'IMG_5795 works best when it sets the rhythm of the page instead of sitting in a small decorative slot.',
    image: '/images/IMG_5795.jpeg',
    alt: 'Mi Casa Café brunch editorial flat lay',
    position: 'center',
  },
  {
    eyebrow: 'Dessert finish',
    title: 'Rich, playful close-ups',
    text: 'IMG_5794 gives the home page a proper finish and bridges cleanly into the dessert story on the menu page.',
    image: '/images/IMG_5794.jpeg',
    alt: 'Mi Casa Café waffle bowl dessert',
    position: 'center',
  },
]

export default function HomePage() {
  return (
    <>
      <section style={{ background: 'var(--paper)', padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
        <div className="home-hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease }}
            style={{
              background: 'var(--ink)',
              color: 'var(--paper)',
              borderRadius: '28px',
              padding: 'clamp(2rem, 6vw, 4.5rem)',
              minHeight: 'clamp(360px, 72svh, 860px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-dmsans)',
                  fontWeight: 800,
                  fontSize: '0.64rem',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'rgba(244,236,225,0.68)',
                  marginBottom: '1rem',
                }}
              >
                Brisbane · Australian brand · Italian soul
              </p>

              <h1
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 900,
                  fontSize: 'clamp(3rem, 11vw, 7.8rem)',
                  lineHeight: 0.88,
                  letterSpacing: '-0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                  maxWidth: '8ch',
                }}
              >
                Product first. House full.
              </h1>

              <p
                style={{
                  fontFamily: 'var(--font-dmsans)',
                  fontWeight: 500,
                  fontSize: 'clamp(0.98rem, 1.8vw, 1.1rem)',
                  lineHeight: 1.8,
                  color: 'rgba(244,236,225,0.76)',
                  maxWidth: '34ch',
                }}
              >
                Mi Casa Café is built around appetite: premium brunch plates, bright coffee moments, and a warm room that feels generous before the first bite lands.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link
                  href="/menu"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '52px',
                    padding: '0.95rem 2rem',
                    background: 'var(--paper)',
                    color: 'var(--ink)',
                    fontFamily: 'var(--font-dmsans)',
                    fontWeight: 800,
                    fontSize: '0.72rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    borderRadius: '999px',
                  }}
                >
                  Explore the menu
                </Link>
                <Link
                  href="/locations"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '52px',
                    padding: '0.95rem 2rem',
                    background: 'transparent',
                    color: 'var(--paper)',
                    fontFamily: 'var(--font-dmsans)',
                    fontWeight: 800,
                    fontSize: '0.72rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    borderRadius: '999px',
                    border: '1px solid rgba(244,236,225,0.18)',
                  }}
                >
                  Visit the house
                </Link>
              </div>

              <div className="home-note-grid">
                {notes.map((item) => (
                  <div
                    key={item}
                    style={{
                      border: '1px solid rgba(244,236,225,0.1)',
                      borderRadius: '18px',
                      padding: '0.9rem 1rem',
                      background: 'rgba(244,236,225,0.04)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-dmsans)',
                        fontWeight: 700,
                        fontSize: '0.65rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'rgba(244,236,225,0.78)',
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease }}
            className="home-photo-stack"
          >
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '28px', minHeight: 'clamp(320px, 48svh, 560px)' }}>
              <Image
                src="/images/IMG_5786.jpeg"
                alt="Mi Casa Café sharing table with premium brunch plates"
                fill
                priority
                unoptimized
                style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
              />
            </div>
            <div className="home-photo-row">
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '24px', minHeight: '220px' }}>
                <Image
                  src="/images/IMG_5789.jpeg"
                  alt="Biscoff pancake stack with fruit"
                  fill
                  unoptimized
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '24px', minHeight: '220px' }}>
                <Image
                  src="/images/IMG_5795.jpeg"
                  alt="Mi Casa Café brunch editorial flat lay"
                  fill
                  unoptimized
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ background: 'var(--paper)', padding: '0 1rem 1rem' }}>
        <div className="home-editorial-grid">
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '28px', minHeight: 'clamp(320px, 52vw, 720px)' }}>
            <Image
              src="/images/IMG_5795.jpeg"
              alt="Mi Casa Café brunch spread with multiple dishes"
              fill
              unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            />
          </div>

          <div
            style={{
              background: 'var(--cream)',
              borderRadius: '28px',
              padding: 'clamp(2rem, 5vw, 3rem)',
              minHeight: 'clamp(320px, 52vw, 720px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-dmsans)',
                  fontWeight: 800,
                  fontSize: '0.62rem',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--ochre)',
                  marginBottom: '0.9rem',
                }}
              >
                House rhythm
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 900,
                  fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  maxWidth: '9ch',
                }}
              >
                The photos set the pace now.
              </h2>
            </div>

            <p
              style={{
                marginTop: '1.25rem',
                fontFamily: 'var(--font-dmsans)',
                fontWeight: 500,
                fontSize: '0.96rem',
                lineHeight: 1.8,
                color: 'rgba(24,15,11,0.68)',
                maxWidth: '36ch',
              }}
            >
              Instead of leaning on placeholder gradients, the home page now moves from a full-table hero to close product shots and room energy. The layout reads like a visit: arrival, appetite, then atmosphere.
            </p>

            <div className="home-chapter-list">
              {chapters.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45, ease }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '110px 1fr',
                    gap: '1rem',
                    alignItems: 'stretch',
                    borderTop: index === 0 ? '1px solid rgba(24,15,11,0.08)' : 'none',
                    paddingTop: '1rem',
                  }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '18px', minHeight: '110px' }}>
                    <Image src={item.image} alt={item.alt} fill unoptimized style={{ objectFit: 'cover', objectPosition: item.position }} />
                  </div>
                  <div>
                    <span
                      style={{
                        display: 'inline-block',
                        marginBottom: '0.5rem',
                        fontFamily: 'var(--font-dmsans)',
                        fontWeight: 800,
                        fontSize: '0.58rem',
                        letterSpacing: '0.24em',
                        textTransform: 'uppercase',
                        color: 'rgba(24,15,11,0.45)',
                      }}
                    >
                      0{index + 1} · {item.eyebrow}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-playfair)',
                        fontWeight: 800,
                        fontSize: '1.4rem',
                        lineHeight: 1,
                        letterSpacing: '-0.03em',
                        marginBottom: '0.55rem',
                        color: 'var(--ink)',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-dmsans)',
                        fontWeight: 500,
                        fontSize: '0.9rem',
                        lineHeight: 1.75,
                        color: 'rgba(24,15,11,0.64)',
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--paper)', padding: '0 1rem clamp(4rem, 8vw, 6rem)' }}>
        <div className="home-gallery-band">
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '28px', minHeight: 'clamp(280px, 34vw, 420px)' }}>
            <Image src="/images/IMG_5793.jpeg" alt="Mi Casa Café pancake tower with fruit and cream" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '28px', minHeight: 'clamp(280px, 34vw, 420px)' }}>
            <Image src="/images/IMG_5794.jpeg" alt="Mi Casa Café waffle bowl dessert" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>
          <div
            style={{
              background: 'var(--ink)',
              color: 'var(--paper)',
              borderRadius: '28px',
              padding: 'clamp(2rem, 5vw, 3rem)',
              minHeight: 'clamp(280px, 34vw, 420px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(244,236,225,0.58)', marginBottom: '0.9rem' }}>
              Continue inside
            </p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 0.98, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Menu, story, locations, contact.
            </h2>
            <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 500, fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(244,236,225,0.72)', maxWidth: '30ch' }}>
              Every supporting page now inherits the same rule: imagery should shape the reading flow, not sit on top of it.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-hero-grid,
        .home-editorial-grid,
        .home-gallery-band {
          display: grid;
          gap: 1rem;
        }

        .home-note-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.75rem;
          margin-top: 2rem;
        }

        .home-photo-stack {
          display: grid;
          gap: 1rem;
          min-height: clamp(360px, 72svh, 860px);
        }

        .home-photo-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .home-chapter-list {
          display: grid;
          gap: 1rem;
          margin-top: 2rem;
        }

        @media (min-width: 768px) {
          .home-hero-grid,
          .home-editorial-grid {
            grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          }

          .home-gallery-band {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .home-note-grid,
          .home-photo-row,
          .home-gallery-band {
            grid-template-columns: 1fr;
          }

          .home-chapter-list :global(article) {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
