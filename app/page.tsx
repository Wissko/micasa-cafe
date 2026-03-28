'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — feast platter, text bottom-left
      ══════════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '100svh', overflow: 'hidden' }}>
        <Image
          src="/images/IMG_5786.jpeg"
          alt="Mi Casa Café — generous sharing feast"
          fill priority unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(28,20,16,0) 0%, rgba(28,20,16,0) 25%, rgba(28,20,16,0.82) 100%)',
        }} />

        <div style={{
          position: 'relative', zIndex: 1,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          minHeight: '100svh',
          padding: 'clamp(1.5rem, 5vw, 4.5rem)',
          paddingTop: '7rem',
          paddingBottom: 'clamp(2.5rem, 6vw, 5rem)',
        }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            style={{
              fontFamily: 'var(--font-jost)',
              fontWeight: 400,
              fontSize: 'clamp(0.58rem, 1.1vw, 0.75rem)',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--terra)',
              marginBottom: '0.8rem',
            }}
          >
            All-day brunch · Brisbane
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.65, ease }}
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(4.5rem, 15vw, 14rem)',
              lineHeight: 0.86,
              color: '#FAF7F2',
              letterSpacing: '-0.02em',
              maxWidth: '14ch',
            }}
          >
            Mi Casa<br />Café
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.45, ease }}
            style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Link
              href="/menu"
              style={{
                display: 'inline-block',
                padding: '0.9rem 2.6rem',
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
                el.style.backgroundColor = 'var(--terra)'
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
            <Link
              href="/locations"
              style={{
                display: 'inline-block',
                padding: '0.9rem 2.6rem',
                border: '1px solid rgba(250,247,242,0.35)',
                color: 'rgba(250,247,242,0.8)',
                fontFamily: 'var(--font-jost)',
                fontWeight: 400,
                fontSize: '0.6rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                transition: 'border-color 0.22s, color 0.22s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(250,247,242,0.7)'
                el.style.color = '#FAF7F2'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(250,247,242,0.35)'
                el.style.color = 'rgba(250,247,242,0.8)'
              }}
            >
              Find us
            </Link>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          style={{
            position: 'absolute', bottom: '2rem', right: 'clamp(1.5rem, 5vw, 4.5rem)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
            zIndex: 1,
          }}
        >
          <span style={{
            fontFamily: 'var(--font-jost)', fontSize: '0.55rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(250,247,242,0.45)',
            writingMode: 'vertical-rl',
          }}>Scroll</span>
          <div style={{ width: '1px', height: '3rem', background: 'linear-gradient(to bottom, rgba(250,247,242,0.4), transparent)' }} />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          TRIPTYCH — 3 photos flush, editorial
      ══════════════════════════════════════════ */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr' }}>
        {[
          { src: '/images/IMG_5789.jpeg', alt: 'Lotus Biscoff pancakes stack', pos: 'center top' },
          { src: '/images/IMG_5795.jpeg', alt: 'Brunch flat lay — shakshuka, pancakes, smoothie', pos: 'center' },
          { src: '/images/IMG_5788.jpeg', alt: 'Rose chocolate cake with Mi Casa signage', pos: 'center' },
        ].map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12, ease }}
            style={{ position: 'relative', height: 'clamp(260px, 38vw, 520px)', overflow: 'hidden' }}
          >
            <Image
              src={img.src} alt={img.alt} fill unoptimized
              style={{ objectFit: 'cover', objectPosition: img.pos }}
            />
          </motion.div>
        ))}
      </section>

      {/* ══════════════════════════════════════════
          STATEMENT — big italic tagline
      ══════════════════════════════════════════ */}
      <section style={{
        backgroundColor: 'var(--espresso)',
        padding: 'clamp(4rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
        gap: 'clamp(2rem, 5vw, 4rem)',
        alignItems: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
        >
          <p style={{
            fontFamily: 'var(--font-jost)',
            fontWeight: 400,
            fontSize: '0.58rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--terra)',
            marginBottom: '1.25rem',
          }}>
            The Mi Casa spirit
          </p>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(2rem, 5.5vw, 4rem)',
            lineHeight: 1.1,
            color: '#FAF7F2',
            letterSpacing: '-0.01em',
          }}>
            Fresh, gourmet food<br />
            made to satisfy —<br />
            all day, every day.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1, ease }}
        >
          <p style={{
            fontFamily: 'var(--font-jost)',
            fontWeight: 300,
            fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
            lineHeight: 1.85,
            color: 'rgba(250,247,242,0.55)',
            maxWidth: '38ch',
          }}>
            Mi Casa is a place where generosity meets craft — whether you're here for a slow weekend brunch, a shared feast with family, or just a great coffee and pancakes on a Tuesday morning.
          </p>
          <Link
            href="/story"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginTop: '2rem',
              fontFamily: 'var(--font-jost)',
              fontWeight: 400,
              fontSize: '0.6rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--terra)',
              transition: 'gap 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = '1.1rem' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = '0.75rem' }}
          >
            Our story
            <span style={{ display: 'block', width: '2rem', height: '1px', backgroundColor: 'var(--terra)' }} />
          </Link>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          FULL-BLEED SIGNATURE DISH
      ══════════════════════════════════════════ */}
      <section style={{ position: 'relative', height: 'clamp(380px, 58vw, 700px)', overflow: 'hidden' }}>
        <Image
          src="/images/IMG_5787.jpeg"
          alt="Berry waffle with fresh fruit"
          fill unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(28,20,16,0.65) 0%, rgba(28,20,16,0.0) 55%)',
        }} />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{
            position: 'absolute',
            bottom: 'clamp(2rem, 5vw, 4rem)',
            left: 'clamp(1.5rem, 5vw, 4.5rem)',
            zIndex: 1,
          }}
        >
          <p style={{
            fontFamily: 'var(--font-jost)',
            fontWeight: 400,
            fontSize: '0.58rem',
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: 'var(--terra)',
            marginBottom: '0.6rem',
          }}>
            Breakfast
          </p>
          <p style={{
            fontFamily: 'var(--font-cormorant)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(1.6rem, 4vw, 3rem)',
            color: '#FAF7F2',
            lineHeight: 1.1,
          }}>
            Belgian waffle<br />fresh berries
          </p>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          INFO BAR — dark minimal
      ══════════════════════════════════════════ */}
      <section style={{
        backgroundColor: 'var(--sand)',
        padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 6vw, 5rem)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '2rem',
        borderTop: '1px solid rgba(28,20,16,0.08)',
      }}>
        {[
          { label: 'Coffee', value: 'Campos specialty' },
          { label: 'Southbank', value: 'Southpoint, QLD' },
          { label: 'Underwood', value: 'Logan Road, QLD' },
          { label: 'Certified', value: '100% Halal' },
        ].map(({ label, value }) => (
          <div key={label}>
            <p style={{
              fontFamily: 'var(--font-jost)',
              fontWeight: 500,
              fontSize: '0.55rem',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'var(--espresso)',
              opacity: 0.4,
              marginBottom: '0.5rem',
            }}>{label}</p>
            <p style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '1.15rem',
              color: 'var(--espresso)',
              lineHeight: 1.3,
            }}>{value}</p>
          </div>
        ))}
      </section>

      {/* ══════════════════════════════════════════
          SPLIT — pancake close-up + CTA
      ══════════════════════════════════════════ */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))' }}>
        <div style={{ position: 'relative', minHeight: 'clamp(320px, 45vw, 560px)', overflow: 'hidden' }}>
          <Image
            src="/images/IMG_5793.jpeg"
            alt="Pistachio French toast"
            fill unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>

        <div style={{
          backgroundColor: 'var(--cream)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(3rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
          >
            <p style={{
              fontFamily: 'var(--font-jost)',
              fontWeight: 400,
              fontSize: '0.58rem',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'var(--terra)',
              marginBottom: '1.25rem',
            }}>
              Two homes
            </p>
            <h2 style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
              lineHeight: 1.05,
              color: 'var(--espresso)',
              marginBottom: '1.5rem',
            }}>
              One familia
            </h2>
            <p style={{
              fontFamily: 'var(--font-jost)',
              fontWeight: 300,
              fontSize: '0.88rem',
              color: 'var(--espresso)',
              opacity: 0.55,
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              maxWidth: '32ch',
            }}>
              Southbank & Underwood. Two spots, same heart. Come as you are.
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
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer style={{
        backgroundColor: 'var(--espresso)',
        padding: '2rem clamp(1.5rem, 6vw, 5rem)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem',
      }}>
        <p style={{
          fontFamily: 'var(--font-cormorant)',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: '1.05rem',
          color: 'rgba(250,247,242,0.45)',
        }}>Mi Casa Café</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['@micasacafe_', '@micasacafesb'].map(h => (
            <a key={h} href={`https://instagram.com/${h.slice(1)}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-jost)',
                fontWeight: 300,
                fontSize: '0.68rem',
                letterSpacing: '0.06em',
                color: 'rgba(250,247,242,0.3)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--terra)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(250,247,242,0.3)' }}
            >{h}</a>
          ))}
        </div>
      </footer>
    </>
  )
}
