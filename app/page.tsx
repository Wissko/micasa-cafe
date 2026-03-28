'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── full bleed, text bottom-left editorial */}
      <section style={{ position: 'relative', minHeight: '100svh', overflow: 'hidden' }}>
        <Image
          src="/images/IMG_5786.jpeg"
          alt="Mi Casa Café — feast platter"
          fill
          priority
          unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />

        {/* gradient: transparent top → espresso bottom */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(28,20,16,0.0) 0%, rgba(28,20,16,0.0) 30%, rgba(28,20,16,0.75) 100%)',
        }} />

        {/* content — bottom left */}
        <div style={{
          position: 'relative', zIndex: 1,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          minHeight: '100svh',
          padding: 'clamp(1.5rem, 5vw, 4rem)',
          paddingTop: '6rem',
          paddingBottom: 'clamp(2.5rem, 6vw, 5rem)',
        }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(4rem, 14vw, 13rem)',
              lineHeight: 0.88,
              color: '#FAF7F2',
              letterSpacing: '-0.02em',
            }}
          >
            Mi Casa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.5, ease }}
            style={{
              marginTop: '1.5rem',
              fontFamily: 'var(--font-jost)',
              fontWeight: 400,
              fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(250,247,242,0.72)',
            }}
          >
            Southbank · Underwood · Brisbane
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.45, ease }}
            style={{ marginTop: '2rem' }}
          >
            <Link
              href="/menu"
              style={{
                display: 'inline-block',
                padding: '0.85rem 2.4rem',
                backgroundColor: '#FAF7F2',
                color: '#1C1410',
                fontFamily: 'var(--font-jost)',
                fontWeight: 500,
                fontSize: '0.6rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                transition: 'background-color 0.22s, color 0.22s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = '#BF5730'
                el.style.color = '#FAF7F2'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = '#FAF7F2'
                el.style.color = '#1C1410'
              }}
            >
              See the menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SPLIT — tagline + food photo ── */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
      }}>
        {/* Left — sand colour block */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          style={{
            backgroundColor: 'var(--sand)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(3rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)',
            minHeight: 'clamp(280px, 42vw, 520px)',
          }}
        >
          <div>
            <p style={{
              fontFamily: 'var(--font-jost)',
              fontWeight: 400,
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--terra)',
              marginBottom: '1.25rem',
            }}>
              All day. Every day.
            </p>
            <p style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              lineHeight: 1.15,
              color: 'var(--espresso)',
              letterSpacing: '-0.01em',
            }}>
              Fresh, gourmet food —<br />
              made to satisfy.
            </p>
          </div>
        </motion.div>

        {/* Right — food photo */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          style={{
            position: 'relative',
            minHeight: 'clamp(280px, 42vw, 520px)',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/images/IMG_5795.jpeg"
            alt="Mi Casa Café food spread"
            fill
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </motion.div>
      </section>

      {/* ── INFO BAR — dark, minimal ── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--espresso)',
        padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '2.5rem',
      }}>
        {/* Subtle grain */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <Image
            src="/images/IMG_5792.jpeg"
            alt=""
            fill
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.07 }}
          />
        </div>

        {[
          { label: 'Coffee', value: 'Campos specialty' },
          { label: 'Southbank', value: 'Southpoint, QLD' },
          { label: 'Underwood', value: 'Logan Road, QLD' },
          { label: 'Certified', value: '100% Halal' },
        ].map(({ label, value }) => (
          <div key={label} style={{ position: 'relative', zIndex: 1 }}>
            <p style={{
              fontFamily: 'var(--font-jost)',
              fontWeight: 500,
              fontSize: '0.55rem',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: '#FAF7F2',
              opacity: 0.45,
              marginBottom: '0.5rem',
            }}>
              {label}
            </p>
            <p style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: '1.1rem',
              color: '#FAF7F2',
              lineHeight: 1.4,
            }}>
              {value}
            </p>
          </div>
        ))}
      </section>

      {/* ── PHOTO BREAK — full width ── */}
      <section style={{ position: 'relative', width: '100%', height: 'clamp(300px, 50vw, 580px)', overflow: 'hidden' }}>
        <Image
          src="/images/IMG_5793.jpeg"
          alt="Mi Casa Café atmosphere"
          fill
          unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{
        backgroundColor: 'var(--cream)',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '2rem',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
        >
          <p style={{
            fontFamily: 'var(--font-jost)',
            fontWeight: 400,
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--terra)',
            marginBottom: '1rem',
          }}>
            Two homes
          </p>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
            lineHeight: 1,
            color: 'var(--espresso)',
            letterSpacing: '-0.02em',
            marginBottom: '0.5rem',
          }}>
            One familia
          </h2>
          <p style={{
            fontFamily: 'var(--font-jost)',
            fontWeight: 300,
            fontSize: '0.85rem',
            color: 'var(--espresso)',
            opacity: 0.6,
            marginBottom: '2rem',
          }}>
            Southbank · Underwood
          </p>
          <Link
            href="/locations"
            style={{
              display: 'inline-block',
              padding: '0.85rem 2.4rem',
              border: '1px solid var(--espresso)',
              color: 'var(--espresso)',
              fontFamily: 'var(--font-jost)',
              fontWeight: 500,
              fontSize: '0.6rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              transition: 'background-color 0.22s, color 0.22s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = 'var(--espresso)'
              el.style.color = '#FAF7F2'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = 'transparent'
              el.style.color = 'var(--espresso)'
            }}
          >
            Find us
          </Link>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        backgroundColor: 'var(--espresso)',
        borderTop: '1px solid rgba(250,247,242,0.06)',
        padding: '2rem clamp(1.5rem, 5vw, 4rem)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem',
      }}>
        <p style={{
          fontFamily: 'var(--font-cormorant)',
          fontStyle: 'italic',
          fontSize: '1rem',
          color: 'rgba(250,247,242,0.5)',
        }}>
          Mi Casa Café
        </p>
        <p style={{
          fontFamily: 'var(--font-jost)',
          fontWeight: 300,
          fontSize: '0.65rem',
          letterSpacing: '0.12em',
          color: 'rgba(250,247,242,0.3)',
        }}>
          © {new Date().getFullYear()} · Brisbane
        </p>
      </footer>
    </>
  )
}
