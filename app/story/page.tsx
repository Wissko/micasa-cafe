'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export default function StoryPage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — rose chocolate cake, Mi Casa sign
      ══════════════════════════════════════════ */}
      <section style={{ position: 'relative', height: 'clamp(480px, 72svh, 820px)', overflow: 'hidden' }}>
        <Image
          src="/images/IMG_5796.jpeg"
          alt="Mi Casa Café rose chocolate cake with café signage"
          fill priority unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(42,31,20,0) 20%, rgba(42,31,20,0.85) 100%)',
        }} />

        <div style={{
          position: 'absolute',
          bottom: 'clamp(2.5rem, 6vw, 5rem)',
          left: 'clamp(1.5rem, 5vw, 4.5rem)',
          zIndex: 1,
        }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            style={{
              fontFamily: 'var(--font-dmsans)', fontWeight: 400,
              fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase',
              color: 'var(--terra)', marginBottom: '0.75rem',
              display: 'inline-block',
              backgroundColor: 'rgba(42,31,20,0.55)',
              backdropFilter: 'blur(8px)',
              padding: '0.3rem 0.75rem',
              borderRadius: '2px',
            }}
          >
            Brisbane · Since day one
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease }}
          >
            <span style={{
              fontFamily: 'var(--font-dancing)', fontWeight: 600,
              fontSize: 'clamp(1.8rem, 5vw, 4.5rem)',
              color: 'var(--terra)', display: 'block', lineHeight: 1,
            }}>our</span>
            <span style={{
              fontFamily: 'var(--font-playfair)', fontWeight: 800,
              fontSize: 'clamp(3.5rem, 10vw, 9rem)',
              color: '#FAF6EF', display: 'block',
              lineHeight: 0.88, letterSpacing: '-0.02em',
            }}>Story</span>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTRO — centered, no frills
      ══════════════════════════════════════════ */}
      <section style={{
        backgroundColor: 'var(--cream)',
        padding: 'clamp(4rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)',
      }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
            style={{
              fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontWeight: 400,
              fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
              color: 'var(--terra)', marginBottom: '2rem', lineHeight: 1.2,
            }}
          >
            Mi Casa es tu Casa.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease }}
            style={{
              fontFamily: 'var(--font-dmsans)', fontWeight: 300,
              fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
              color: 'var(--espresso)', lineHeight: 1.85,
              marginBottom: '1.5rem',
            }}
          >
            My home is your home. That phrase is more than a name. It is the promise behind everything we do at Mi Casa Café. From the first coffee poured at sunrise to the last waffle stacked in the afternoon, every dish is made with the generosity of someone cooking for the people they love.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18, duration: 0.5, ease }}
            style={{
              fontFamily: 'var(--font-dmsans)', fontWeight: 300,
              fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
              color: 'var(--espresso)', lineHeight: 1.85,
            }}
          >
            We were born in Brisbane with a warm heart. Generous portions, real ingredients, and the kind of welcome that makes you want to linger. Whether you are at Southbank or Underwood, you are home.
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SPLIT — Biscoff pancake + values list
      ══════════════════════════════════════════ */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
      }}>
        {/* Photo */}
        <div style={{ position: 'relative', minHeight: 'clamp(320px, 48vw, 600px)', overflow: 'hidden' }}>
          <Image
            src="/images/IMG_5789.jpeg"
            alt="Mi Casa Café Biscoff pancake stack"
            fill unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>

        {/* Values — list style, no cards */}
        <div style={{
          backgroundColor: 'var(--espresso)',
          padding: 'clamp(3rem, 7vw, 6rem) clamp(2rem, 5vw, 4.5rem)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
          >
            <p style={{
              fontFamily: 'var(--font-dmsans)', fontWeight: 400,
              fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase',
              color: 'var(--terra)', marginBottom: '1.75rem',
            }}>What we stand for</p>

            {[
              { title: 'Generosity', text: 'Every plate is built to satisfy. You leave full, in every sense.' },
              { title: 'Freshness', text: 'Real ingredients. No shortcuts. The açaï is blended fresh, the juice pressed to order.' },
              { title: 'Warmth', text: 'Brisbane is warm. So are we. Everything at Mi Casa radiates a little sun.' },
              { title: 'Community', text: 'Two neighbourhoods, one familia. Southbank and Underwood. Same spirit, different street.' },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.42, ease }}
                style={{
                  borderBottom: '1px solid rgba(250,246,239,0.07)',
                  padding: '1.25rem 0',
                  display: 'grid',
                  gridTemplateColumns: '7rem 1fr',
                  gap: '1.25rem',
                  alignItems: 'start',
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-playfair)', fontWeight: 600,
                  fontSize: '0.95rem', color: '#FAF6EF',
                  paddingTop: '0.1rem',
                }}>{v.title}</p>
                <p style={{
                  fontFamily: 'var(--font-dmsans)', fontWeight: 300,
                  fontSize: '0.85rem', color: 'rgba(250,246,239,0.5)',
                  lineHeight: 1.65,
                }}>{v.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FULL BLEED — feast platter with quote
      ══════════════════════════════════════════ */}
      <section style={{ position: 'relative', height: 'clamp(320px, 48vw, 580px)', overflow: 'hidden' }}>
        <Image
          src="/images/IMG_5797.jpeg"
          alt="Mi Casa Café sharing feast platter"
          fill unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
        />
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: 'rgba(42,31,20,0.45)',
        }} />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center', zIndex: 1,
            width: '90%', maxWidth: '600px',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-dancing)', fontWeight: 600,
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            color: 'var(--terra)', display: 'block', marginBottom: '0.5rem',
          }}>always,</span>
          <span style={{
            fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(1.3rem, 3.5vw, 2.5rem)',
            color: '#FAF6EF', display: 'block', lineHeight: 1.3,
          }}>
            Come as you are.<br />Leave satisfied.
          </span>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          HALAL SECTION — split photo + text
      ══════════════════════════════════════════ */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
      }}>
        {/* Text */}
        <div style={{
          backgroundColor: 'var(--sand)',
          padding: 'clamp(3rem, 7vw, 6rem) clamp(2rem, 5vw, 4.5rem)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
          >
            <p style={{
              fontFamily: 'var(--font-dmsans)', fontWeight: 400,
              fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase',
              color: 'var(--terra)', marginBottom: '1rem',
            }}>Certified</p>
            <h2 style={{
              fontFamily: 'var(--font-playfair)', fontWeight: 800,
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              color: 'var(--espresso)', lineHeight: 1.05,
              letterSpacing: '-0.02em', marginBottom: '1.5rem',
            }}>
              100% Halal.<br />No exceptions.
            </h2>
            <p style={{
              fontFamily: 'var(--font-dmsans)', fontWeight: 300,
              fontSize: '0.9rem', color: 'var(--espresso)', opacity: 0.6,
              lineHeight: 1.8, maxWidth: '34ch',
            }}>
              Both our Southbank and Underwood locations are fully certified Halal. Every ingredient, every supplier, every dish. That is a promise we make to our community and we take it seriously.
            </p>
          </motion.div>
        </div>

        {/* Photo */}
        <div style={{ position: 'relative', minHeight: 'clamp(280px, 42vw, 540px)', overflow: 'hidden' }}>
          <Image
            src="/images/IMG_5794.jpeg"
            alt="100% Halal certified cafés Queensland"
            fill unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FOOTER
      ══════════════════════════════════════════ */}
      <section style={{
        backgroundColor: 'var(--espresso)',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '2rem',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
        >
          <p style={{
            fontFamily: 'var(--font-dmsans)', fontWeight: 400,
            fontSize: '0.58rem', letterSpacing: '0.26em', textTransform: 'uppercase',
            color: 'var(--terra)', marginBottom: '1rem',
          }}>Ready to visit</p>
          <h2 style={{
            fontFamily: 'var(--font-playfair)', fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#FAF6EF', letterSpacing: '-0.02em',
            marginBottom: '2.5rem', lineHeight: 1,
          }}>Come find us.</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link
              href="/menu"
              style={{
                display: 'inline-block', padding: '0.85rem 2.4rem',
                backgroundColor: 'var(--terra)', color: '#FAF6EF',
                fontFamily: 'var(--font-playfair)', fontWeight: 600,
                fontSize: '0.9rem', borderRadius: '3px',
                transition: 'background-color 0.22s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#a84e2e' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--terra)' }}
            >
              See the Menu
            </Link>
            <Link
              href="/locations"
              style={{
                display: 'inline-block', padding: '0.85rem 2.4rem',
                border: '1.5px solid rgba(250,246,239,0.3)', color: 'rgba(250,246,239,0.75)',
                fontFamily: 'var(--font-dmsans)', fontWeight: 400,
                fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                borderRadius: '3px',
                transition: 'border-color 0.22s, color 0.22s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#FAF6EF'; el.style.color = '#FAF6EF'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(250,246,239,0.3)'; el.style.color = 'rgba(250,246,239,0.75)'
              }}
            >
              Find Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: 'var(--espresso)',
        borderTop: '1px solid rgba(250,246,239,0.06)',
        padding: '2rem clamp(1.5rem, 6vw, 5rem)',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem' }}>
          <span style={{ fontFamily: 'var(--font-dancing)', fontWeight: 600, fontSize: '1rem', color: 'var(--terra)' }}>Mi</span>
          <span style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1rem', color: 'rgba(250,246,239,0.4)' }}>Casa Café</span>
        </div>
        <p style={{
          fontFamily: 'var(--font-dmsans)', fontWeight: 300,
          fontSize: '0.65rem', color: 'rgba(250,246,239,0.22)',
        }}>© {new Date().getFullYear()} · Brisbane</p>
      </footer>
    </>
  )
}
