'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const values = [
  { title: 'Generosity', text: 'Every plate is built to satisfy. You leave full, in every sense.' },
  { title: 'Freshness', text: 'Real ingredients, no shortcuts, and food that still feels alive when it lands.' },
  { title: 'Warmth', text: 'Brisbane light, Italian appetite, and a room that never feels cold or over-designed.' },
  { title: 'Community', text: 'Southbank and Underwood share the same house spirit: easy welcome, strong rhythm.' },
]

export default function StoryPage() {
  return (
    <>
      <section style={{ background: 'var(--paper)', padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, ease }}
            style={{
              backgroundColor: 'var(--espresso)',
              borderRadius: '28px',
              padding: 'clamp(2rem, 6vw, 4.5rem)',
              minHeight: 'clamp(360px, 62svh, 760px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>
              Brisbane · Since day one
            </p>
            <span style={{ fontFamily: 'var(--font-dancing)', fontWeight: 600, fontSize: 'clamp(1.8rem, 5vw, 4rem)', color: 'var(--terra)', display: 'block', lineHeight: 1 }}>our</span>
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(3.2rem, 10vw, 7rem)', color: '#FAF6EF', lineHeight: 0.88, letterSpacing: '-0.04em', marginBottom: '1rem' }}>
              Story
            </h1>
            <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 400, fontSize: 'clamp(0.96rem, 1.8vw, 1.08rem)', lineHeight: 1.85, color: 'rgba(250,246,239,0.7)', maxWidth: '34ch' }}>
              The story page now opens with the words beside the image, not on top of it, so the café signage and product texture can stay readable where they matter.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateRows: '1.05fr 0.95fr', gap: '1rem', minHeight: 'clamp(360px, 62svh, 760px)' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '28px' }}>
              <Image src="/images/IMG_5788.jpeg" alt="Mi Casa Café cake with visible café signage" fill priority unoptimized style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '22px', minHeight: '180px' }}>
                <Image src="/images/IMG_5798.jpeg" alt="Mi Casa Café Biscoff pancake stack" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '22px', minHeight: '180px' }}>
                <Image src="/images/IMG_5786.jpeg" alt="Mi Casa Café sharing feast platter" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--cream)', padding: 'clamp(4rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', color: 'var(--terra)', marginBottom: '2rem', lineHeight: 1.2 }}>
            Mi Casa es tu Casa.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08, duration: 0.48, ease }} style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 400, fontSize: 'clamp(0.95rem, 1.6vw, 1.08rem)', color: 'var(--espresso)', lineHeight: 1.9, marginBottom: '1.4rem' }}>
            My home is your home. That phrase is more than a name. It is the promise behind everything we do at Mi Casa Café. From the first coffee poured at sunrise to the last waffle stacked in the afternoon, every dish is made with the generosity of someone cooking for the people they love.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16, duration: 0.48, ease }} style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 400, fontSize: 'clamp(0.95rem, 1.6vw, 1.08rem)', color: 'var(--espresso)', lineHeight: 1.9 }}>
            Born in Brisbane, shaped by appetite, and carried by community, the brand feels strongest when the real room and the real plates are allowed to do the talking.
          </motion.p>
        </div>
      </section>

      <section style={{ padding: 'clamp(1rem, 3vw, 1.5rem)', background: 'var(--paper)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1rem' }}>
          {values.map((value, i) => (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: i * 0.08, ease }}
              style={{ background: i % 2 === 0 ? '#efe4d5' : 'var(--espresso)', color: i % 2 === 0 ? 'var(--ink)' : '#FAF6EF', borderRadius: '24px', padding: '1.5rem', minHeight: '220px' }}
            >
              <span style={{ display: 'inline-block', marginBottom: '0.85rem', fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.58rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: i % 2 === 0 ? 'rgba(24,15,11,0.45)' : 'var(--terra)' }}>
                0{i + 1}
              </span>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.4rem', lineHeight: 1, marginBottom: '0.85rem' }}>{value.title}</h3>
              <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 400, fontSize: '0.92rem', lineHeight: 1.8, color: i % 2 === 0 ? 'rgba(24,15,11,0.66)' : 'rgba(250,246,239,0.68)' }}>{value.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', backgroundColor: 'var(--sand)' }}>
        <div style={{ position: 'relative', minHeight: 'clamp(300px, 44vw, 540px)', overflow: 'hidden' }}>
          <Image src="/images/IMG_5799.jpeg" alt="100% Halal certified cafés Queensland signage and pastries" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </div>
        <div style={{ padding: 'clamp(3rem, 7vw, 6rem) clamp(2rem, 5vw, 4.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease }}>
            <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Certified</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: 'var(--espresso)', lineHeight: 1.04, letterSpacing: '-0.02em', marginBottom: '1.4rem' }}>
              100% Halal.<br />No exceptions.
            </h2>
            <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 400, fontSize: '0.94rem', color: 'rgba(42,31,20,0.68)', lineHeight: 1.85, maxWidth: '34ch' }}>
              Because this image already carries visible certification text, the page leaves it clean and shifts the explanation into its own adjacent panel.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--espresso)', padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '2rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease }}>
          <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.58rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>Ready to visit</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#FAF6EF', letterSpacing: '-0.02em', marginBottom: '2rem', lineHeight: 1 }}>Come find us.</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/menu" style={{ display: 'inline-block', padding: '0.9rem 2.2rem', backgroundColor: 'var(--terra)', color: '#FAF6EF', fontFamily: 'var(--font-playfair)', fontWeight: 600, fontSize: '0.95rem', borderRadius: '999px' }}>
              See the Menu
            </Link>
            <Link href="/locations" style={{ display: 'inline-block', padding: '0.9rem 2.2rem', border: '1px solid rgba(250,246,239,0.28)', color: 'rgba(250,246,239,0.82)', fontFamily: 'var(--font-dmsans)', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', borderRadius: '999px' }}>
              Find Us
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
