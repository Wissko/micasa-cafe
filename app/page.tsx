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
          src="/images/IMG_5795.jpeg"
          alt="Mi Casa Café — generous sharing feast"
          fill priority unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(42,31,20,0) 0%, rgba(42,31,20,0) 22%, rgba(42,31,20,0.85) 100%)',
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
              fontFamily: 'var(--font-dmsans)',
              fontWeight: 400,
              fontSize: 'clamp(0.6rem, 1.1vw, 0.75rem)',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--terra)',
              marginBottom: '0.75rem',
              display: 'inline-block',
              backgroundColor: 'rgba(42,31,20,0.55)',
              backdropFilter: 'blur(8px)',
              padding: '0.3rem 0.75rem',
              borderRadius: '2px',
            }}
          >
            All-day brunch · Brisbane
          </motion.p>

          {/* Mi in Dancing Script on top of Casa in Playfair — brand logo feel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.65, ease }}
          >
            <span style={{
              fontFamily: 'var(--font-dancing)',
              fontWeight: 600,
              fontSize: 'clamp(2.5rem, 7vw, 7rem)',
              color: 'var(--terra)',
              display: 'block',
              lineHeight: 1,
            }}>Mi</span>
            <span style={{
              fontFamily: 'var(--font-playfair)',
              fontWeight: 800,
              fontSize: 'clamp(4.5rem, 13vw, 13rem)',
              color: '#FAF6EF',
              display: 'block',
              lineHeight: 0.88,
              letterSpacing: '-0.02em',
            }}>Casa</span>
            <span style={{
              fontFamily: 'var(--font-dmsans)',
              fontWeight: 300,
              fontSize: 'clamp(0.65rem, 1.3vw, 0.9rem)',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(250,246,239,0.55)',
              display: 'block',
              marginTop: '0.75rem',
            }}>Southbank · Underwood · Brisbane</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.45, ease }}
            style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Link
              href="/menu"
              style={{
                display: 'inline-block',
                padding: '0.9rem 2.6rem',
                backgroundColor: 'var(--terra)',
                color: '#FAF6EF',
                fontFamily: 'var(--font-playfair)',
                fontWeight: 600,
                fontSize: '0.9rem',
                letterSpacing: '0.04em',
                transition: 'background-color 0.22s, color 0.22s',
                borderRadius: '3px',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = '#FAF6EF'
                el.style.color = 'var(--terra)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = 'var(--terra)'
                el.style.color = '#FAF6EF'
              }}
            >
              See the Menu
            </Link>
            <Link
              href="/locations"
              style={{
                display: 'inline-block',
                padding: '0.9rem 2.6rem',
                border: '1.5px solid rgba(250,246,239,0.4)',
                color: 'rgba(250,246,239,0.85)',
                fontFamily: 'var(--font-dmsans)',
                fontWeight: 400,
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                transition: 'border-color 0.22s, color 0.22s',
                borderRadius: '3px',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#FAF6EF'
                el.style.color = '#FAF6EF'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(250,246,239,0.4)'
                el.style.color = 'rgba(250,246,239,0.85)'
              }}
            >
              Find Us
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
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 1,
          }}
        >
          <span style={{
            fontFamily: 'var(--font-dmsans)', fontSize: '0.55rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(250,246,239,0.4)',
            writingMode: 'vertical-rl',
          }}>Scroll</span>
          <div style={{ width: '1px', height: '2.5rem', background: 'linear-gradient(to bottom, rgba(250,246,239,0.35), transparent)' }} />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          TRIPTYCH — 3 photos flush
      ══════════════════════════════════════════ */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr' }}>
        {[
          { src: '/images/IMG_5787.jpeg', alt: 'Lotus Biscoff pancakes stack', pos: 'center top' },
          { src: '/images/IMG_5798.jpeg', alt: 'Brunch flat lay — shakshuka, pancakes, smoothie', pos: 'center' },
          { src: '/images/IMG_5799.jpeg', alt: 'Rose chocolate cake with café signage', pos: 'center' },
        ].map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: i * 0.1, ease }}
            style={{ position: 'relative', height: 'clamp(240px, 35vw, 500px)', overflow: 'hidden' }}
          >
            <Image src={img.src} alt={img.alt} fill unoptimized
              style={{ objectFit: 'cover', objectPosition: img.pos }} />
          </motion.div>
        ))}
      </section>

      {/* ══════════════════════════════════════════
          STATEMENT — brand voice + story
      ══════════════════════════════════════════ */}
      <section style={{
        backgroundColor: 'var(--espresso)',
        padding: 'clamp(4rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
        gap: 'clamp(2rem, 5vw, 5rem)',
        alignItems: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
        >
          <span style={{
            fontFamily: 'var(--font-dancing)',
            fontWeight: 600,
            fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
            color: 'var(--terra)',
            display: 'block',
            marginBottom: '0.2rem',
          }}>fresh, gourmet food</span>
          <h2 style={{
            fontFamily: 'var(--font-playfair)',
            fontWeight: 800,
            fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
            lineHeight: 1.05,
            color: '#FAF6EF',
            letterSpacing: '-0.02em',
          }}>
            Made to satisfy.<br />
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
            fontFamily: 'var(--font-dmsans)',
            fontWeight: 300,
            fontSize: 'clamp(0.88rem, 1.4vw, 1rem)',
            lineHeight: 1.85,
            color: 'rgba(250,246,239,0.52)',
            maxWidth: '38ch',
            marginBottom: '2.25rem',
          }}>
            Mi Casa is a place where generosity meets craft. Whether you're here for a slow weekend brunch, a shared feast with your squad, or just great coffee on a Tuesday. You're family.
          </p>
          <Link
            href="/story"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              fontFamily: 'var(--font-dmsans)', fontWeight: 400,
              fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--terra)',
              transition: 'gap 0.22s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = '1.1rem' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = '0.75rem' }}
          >
            Our Story
            <span style={{ display: 'block', width: '2rem', height: '1px', backgroundColor: 'var(--terra)' }} />
          </Link>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          FULL-BLEED SIGNATURE DISH with caption
      ══════════════════════════════════════════ */}
      <section style={{ position: 'relative', height: 'clamp(360px, 56vw, 680px)', overflow: 'hidden' }}>
        <Image
          src="/images/IMG_5790.jpeg"
          alt="Berry waffle with fresh fruit and cream"
          fill unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(42,31,20,0.68) 0%, rgba(42,31,20,0) 55%)',
        }} />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          style={{
            position: 'absolute',
            bottom: 'clamp(2rem, 5vw, 4rem)',
            left: 'clamp(1.5rem, 5vw, 4.5rem)',
            zIndex: 1,
          }}
        >
          <p style={{
            fontFamily: 'var(--font-dmsans)', fontWeight: 400,
            fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'var(--terra)', marginBottom: '0.6rem',
          }}>Breakfast</p>
          <p style={{
            fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(1.6rem, 4vw, 3rem)',
            color: '#FAF6EF', lineHeight: 1.1,
          }}>
            Belgian waffle,<br />fresh berries
          </p>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          INFO BAR — sand, light
      ══════════════════════════════════════════ */}
      <section style={{
        backgroundColor: 'var(--sand)',
        padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 6vw, 5rem)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '2rem',
      }}>
        {[
          { label: 'Coffee', value: 'Campos specialty' },
          { label: 'Southbank', value: 'Southpoint, QLD' },
          { label: 'Underwood', value: 'Logan Road, QLD' },
          { label: 'Certified', value: '100% Halal' },
        ].map(({ label, value }) => (
          <div key={label}>
            <p style={{
              fontFamily: 'var(--font-dmsans)', fontWeight: 400,
              fontSize: '0.55rem', letterSpacing: '0.26em', textTransform: 'uppercase',
              color: 'var(--espresso)', opacity: 0.4, marginBottom: '0.45rem',
            }}>{label}</p>
            <p style={{
              fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontWeight: 400,
              fontSize: '1.15rem', color: 'var(--espresso)', lineHeight: 1.3,
            }}>{value}</p>
          </div>
        ))}
      </section>

      {/* ══════════════════════════════════════════
          SPLIT — french toast + CTA locations
      ══════════════════════════════════════════ */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
      }}>
        <div style={{ position: 'relative', minHeight: 'clamp(320px, 45vw, 560px)', overflow: 'hidden' }}>
          <Image
            src="/images/IMG_5794.jpeg"
            alt="Pistachio French toast"
            fill unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>

        <div style={{
          backgroundColor: 'var(--blush)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: 'clamp(3rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
          >
            <span style={{
              fontFamily: 'var(--font-dancing)', fontWeight: 600,
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              color: 'var(--terra)', display: 'block', marginBottom: '0.25rem',
            }}>two homes,</span>
            <h2 style={{
              fontFamily: 'var(--font-playfair)', fontWeight: 800,
              fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
              lineHeight: 1.0, color: 'var(--espresso)',
              letterSpacing: '-0.02em', marginBottom: '1.25rem',
            }}>one familia</h2>
            <p style={{
              fontFamily: 'var(--font-dmsans)', fontWeight: 300,
              fontSize: '0.9rem', color: 'var(--espresso)', opacity: 0.58,
              lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '30ch',
            }}>
              Southbank & Underwood. Two spots, same heart. Come as you are.
            </p>
            <Link
              href="/locations"
              style={{
                display: 'inline-block',
                padding: '0.85rem 2.4rem',
                border: '1.5px solid var(--espresso)',
                color: 'var(--espresso)',
                fontFamily: 'var(--font-dmsans)', fontWeight: 400,
                fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase',
                borderRadius: '3px',
                transition: 'background-color 0.22s, color 0.22s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = 'var(--espresso)'
                el.style.color = '#FAF6EF'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = 'transparent'
                el.style.color = 'var(--espresso)'
              }}
            >
              Find Us
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
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem' }}>
          <span style={{ fontFamily: 'var(--font-dancing)', fontWeight: 600, fontSize: '1rem', color: 'var(--terra)' }}>Mi</span>
          <span style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1rem', color: 'rgba(250,246,239,0.45)' }}>Casa</span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['@micasacafe_', '@micasacafesb'].map(h => (
            <a key={h} href={`https://instagram.com/${h.slice(1)}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-dmsans)', fontWeight: 300,
                fontSize: '0.68rem', letterSpacing: '0.06em',
                color: 'rgba(250,246,239,0.3)', transition: 'color 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--terra)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(250,246,239,0.3)' }}
            >{h}</a>
          ))}
        </div>
      </footer>
    </>
  )
}
