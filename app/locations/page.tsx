'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

export default function LocationsPage() {
  return (
    <>
      <section style={{ background: 'var(--paper)', padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1rem' }}>
          <motion.div
            {...fadeUp(0)}
            style={{
              background: 'var(--espresso)',
              borderRadius: '28px',
              padding: 'clamp(2rem, 6vw, 4.2rem)',
              minHeight: 'clamp(340px, 58svh, 720px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.9rem' }}>
              Come find us
            </p>
            <span style={{ fontFamily: 'var(--font-dancing)', fontSize: 'clamp(1.7rem, 4vw, 3rem)', color: 'rgba(250,246,239,0.84)', display: 'block', lineHeight: 1 }}>our</span>
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(3rem, 10vw, 6.5rem)', fontWeight: 800, color: 'var(--cream)', lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: '1rem' }}>
              Locations
            </h1>
            <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 400, fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)', lineHeight: 1.85, color: 'rgba(250,246,239,0.7)', maxWidth: '34ch' }}>
              The page now uses real place-linked photography as the primary structure: a wide house image up front, then each location anchored by its own signage-led shot with the copy kept off-image.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateRows: '1.1fr 0.9fr', gap: '1rem', minHeight: 'clamp(340px, 58svh, 720px)' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '28px' }}>
              <Image src="/images/IMG_5795.jpeg" alt="Mi Casa Café brunch spread hero" fill priority unoptimized style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '22px', minHeight: '180px' }}>
                <Image src="/images/IMG_5790.jpeg" alt="Mi Casa Southbank waffle with signage" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '22px', minHeight: '180px' }}>
                <Image src="/images/IMG_5792.jpeg" alt="Mi Casa Underwood pancake stack with signage" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--cream)', padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 2rem)' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
          <motion.article {...fadeUp(0.1)} style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 18px 40px rgba(42,31,20,0.08)', background: 'var(--blush)' }}>
            <div style={{ position: 'relative', minHeight: '300px', overflow: 'hidden' }}>
              <Image src="/images/IMG_5790.jpeg" alt="Mi Casa Southbank strawberry waffle with café signage" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </div>
            <div style={{ padding: '2rem' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.9rem', fontWeight: 700, color: 'var(--espresso)', marginBottom: '1rem' }}>Southbank</h2>
              <div style={{ display: 'grid', gap: '0.9rem' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', display: 'block', marginBottom: '0.15rem' }}>Address</span>
                  <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.95rem', color: 'var(--espresso)' }}>Southpoint, South Brisbane QLD</p>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', display: 'block', marginBottom: '0.15rem' }}>Hours</span>
                  <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.95rem', color: 'var(--espresso)' }}>Open all day — breakfast through late lunch</p>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', display: 'block', marginBottom: '0.15rem' }}>Instagram</span>
                  <a href="https://instagram.com/micasacafesb" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.95rem', color: 'var(--terra)', textDecoration: 'none' }}>@micasacafesb</a>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article {...fadeUp(0.2)} style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 18px 40px rgba(42,31,20,0.08)', background: 'var(--sand)' }}>
            <div style={{ position: 'relative', minHeight: '300px', overflow: 'hidden' }}>
              <Image src="/images/IMG_5792.jpeg" alt="Mi Casa Underwood pancake tower with café signage" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </div>
            <div style={{ padding: '2rem' }}>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.9rem', fontWeight: 700, color: 'var(--espresso)', marginBottom: '1rem' }}>Underwood</h2>
              <div style={{ display: 'grid', gap: '0.9rem' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', display: 'block', marginBottom: '0.15rem' }}>Address</span>
                  <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.95rem', color: 'var(--espresso)' }}>Logan Road, Underwood QLD</p>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', display: 'block', marginBottom: '0.15rem' }}>Hours</span>
                  <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.95rem', color: 'var(--espresso)' }}>Open all day — breakfast through late lunch</p>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', display: 'block', marginBottom: '0.15rem' }}>Instagram</span>
                  <a href="https://instagram.com/micasacafe_" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.95rem', color: 'var(--terra)', textDecoration: 'none' }}>@micasacafe_</a>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', backgroundColor: 'var(--paper)' }}>
        <div style={{ position: 'relative', minHeight: 'clamp(300px, 42vw, 520px)', overflow: 'hidden' }}>
          <Image src="/images/IMG_5799.jpeg" alt="Mi Casa Café Queensland halal pastries and certification signage" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </div>
        <div style={{ padding: 'clamp(3rem, 7vw, 6rem) clamp(2rem, 5vw, 4.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.9rem' }}>House standard</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: 'var(--espresso)', lineHeight: 1.04, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Shared identity, cleanly framed.
            </h2>
            <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 400, fontSize: '0.95rem', lineHeight: 1.85, color: 'rgba(42,31,20,0.68)', maxWidth: '34ch' }}>
              This image contains its own readable halal messaging, so the page keeps it free of overlay text and places the supporting brand note alongside it.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--sand)', padding: '4rem 2rem', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}>
          <p style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'var(--espresso)', marginBottom: '2rem' }}>
            Two places, one feeling — welcome home.
          </p>
          <Link href="/menu" style={{ display: 'inline-block', backgroundColor: 'var(--terra)', color: 'var(--cream)', fontFamily: 'var(--font-playfair)', fontSize: '1rem', fontWeight: 600, padding: '0.9rem 2.2rem', borderRadius: '999px', textDecoration: 'none' }}>
            See the Menu
          </Link>
        </motion.div>
      </section>
    </>
  )
}
