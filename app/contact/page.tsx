'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

export default function ContactPage() {
  return (
    <>
      <section style={{ background: 'var(--paper)', padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1rem' }}>
          <motion.div
            {...fadeUp(0)}
            style={{
              background: 'var(--cream)',
              borderRadius: '28px',
              padding: 'clamp(2rem, 6vw, 4rem)',
              minHeight: 'clamp(340px, 58svh, 720px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.9rem' }}>
                Come home
              </p>
              <span style={{ fontFamily: 'var(--font-dancing)', fontSize: 'clamp(1.7rem, 4vw, 3rem)', color: 'var(--terra)', display: 'block', lineHeight: 1 }}>say</span>
              <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(3rem, 10vw, 6.5rem)', fontWeight: 800, color: 'var(--espresso)', lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: '1rem' }}>
                Hello
              </h1>
              <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 400, fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)', lineHeight: 1.85, color: 'rgba(42,31,20,0.68)', maxWidth: '34ch' }}>
                Contact now feels less like a plain form page and more like a visit: the writing sits in its own quiet panel while real location imagery and brand cues hold the right side.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
              <div style={{ position: 'relative', minHeight: '180px', overflow: 'hidden', borderRadius: '22px' }}>
                <Image src="/images/IMG_5790.jpeg" alt="Mi Casa Southbank dessert plate and café signage" fill priority unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ position: 'relative', minHeight: '180px', overflow: 'hidden', borderRadius: '22px' }}>
                <Image src="/images/IMG_5792.jpeg" alt="Mi Casa Underwood pancake stack and café signage" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
              </div>
            </div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateRows: '1fr auto', gap: '1rem', minHeight: 'clamp(340px, 58svh, 720px)' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '28px' }}>
              <Image src="/images/IMG_5789.jpeg" alt="Mi Casa Café biscoff pancake stack" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '22px', minHeight: '180px' }}>
              <Image src="/images/IMG_5799.jpeg" alt="Mi Casa Café halal pastries and certification signage" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--cream)', padding: 'clamp(3rem, 6vw, 5rem) 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          <motion.div {...fadeUp(0.1)} style={{ background: 'var(--paper)', borderRadius: '24px', padding: 'clamp(1.5rem, 4vw, 2rem)' }}>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.9rem', fontWeight: 700, color: 'var(--espresso)', marginBottom: '0.5rem' }}>Drop us a line</h2>
            <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.9rem', color: 'rgba(42,31,20,0.68)', marginBottom: '2rem' }}>
              For bookings, events, or just to say hola — we would love to hear from you.
            </p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {[
                { id: 'name', label: 'Your name', type: 'text', placeholder: 'Ana García' },
                { id: 'email', label: 'Email address', type: 'email', placeholder: 'ana@example.com' },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--terra)', display: 'block', marginBottom: '0.4rem' }}>
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    style={{ width: '100%', padding: '0.8rem 1rem', backgroundColor: 'var(--sand)', border: '1.5px solid transparent', borderRadius: '10px', fontFamily: 'var(--font-dmsans)', fontSize: '0.95rem', color: 'var(--espresso)', outline: 'none', transition: 'border-color 0.2s ease', boxSizing: 'border-box' }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--terra)')}
                    onBlur={(e) => (e.target.style.borderColor = 'transparent')}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--terra)', display: 'block', marginBottom: '0.4rem' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="We would love to hear from you..."
                  style={{ width: '100%', padding: '0.8rem 1rem', backgroundColor: 'var(--sand)', border: '1.5px solid transparent', borderRadius: '10px', fontFamily: 'var(--font-dmsans)', fontSize: '0.95rem', color: 'var(--espresso)', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s ease', boxSizing: 'border-box' }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--terra)')}
                  onBlur={(e) => (e.target.style.borderColor = 'transparent')}
                />
              </div>

              <button type="submit" style={{ backgroundColor: 'var(--terra)', color: 'var(--cream)', fontFamily: 'var(--font-playfair)', fontSize: '1rem', fontWeight: 600, padding: '0.95rem 2rem', border: 'none', borderRadius: '999px', cursor: 'pointer', alignSelf: 'flex-start' }}>
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div {...fadeUp(0.2)} style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div style={{ backgroundColor: 'var(--blush)', borderRadius: '20px', padding: '1.5rem', borderLeft: '4px solid var(--terra)' }}>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--espresso)', marginBottom: '0.9rem' }}>Southbank</h3>
                <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.9rem', color: 'var(--espresso)', lineHeight: 1.6 }}>Southpoint, South Brisbane QLD</p>
                <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.85rem', color: 'var(--terra)', marginTop: '0.4rem' }}>Open all day</p>
                <a href="https://instagram.com/micasacafesb" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '0.75rem', fontFamily: 'var(--font-dmsans)', fontSize: '0.85rem', color: 'var(--terra)', textDecoration: 'none' }}>@micasacafesb ↗</a>
              </div>

              <div style={{ backgroundColor: 'var(--sand)', borderRadius: '20px', padding: '1.5rem', borderLeft: '4px solid var(--olive)' }}>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--espresso)', marginBottom: '0.9rem' }}>Underwood</h3>
                <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.9rem', color: 'var(--espresso)', lineHeight: 1.6 }}>Logan Road, Underwood QLD</p>
                <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.85rem', color: 'var(--terra)', marginTop: '0.4rem' }}>Open all day</p>
                <a href="https://instagram.com/micasacafe_" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '0.75rem', fontFamily: 'var(--font-dmsans)', fontSize: '0.85rem', color: 'var(--terra)', textDecoration: 'none' }}>@micasacafe_ ↗</a>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--paper)', borderRadius: '24px', padding: '1.5rem' }}>
              <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.7rem' }}>Follow the casa</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {['@micasacafe_', '@micasacafesb'].map((handle) => (
                  <a key={handle} href={`https://instagram.com/${handle.replace('@', '')}`} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.85rem', color: 'var(--espresso)', textDecoration: 'none', backgroundColor: 'var(--sand)', padding: '0.55rem 1rem', borderRadius: '999px' }}>
                    {handle}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
