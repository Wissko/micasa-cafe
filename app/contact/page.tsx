'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const handles = [
  { name: 'Southbank', handle: '@micasacafesb', href: 'https://instagram.com/micasacafesb' },
  { name: 'Underwood', handle: '@micasacafe_', href: 'https://instagram.com/micasacafe_' },
]

export default function ContactPage() {
  return (
    <>
      <section style={{ background: 'var(--paper)', padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
        <div className="contact-hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, ease }}
            style={{
              background: 'var(--cream)',
              borderRadius: '30px',
              padding: 'clamp(2rem, 6vw, 4rem)',
              minHeight: 'clamp(360px, 68svh, 780px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '1rem' }}>
                Bookings · events · general enquiries
              </p>
              <h1 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(3.2rem, 10vw, 7rem)', lineHeight: 0.88, letterSpacing: '-0.05em', color: 'var(--espresso)', marginBottom: '1rem', textTransform: 'uppercase', maxWidth: '7ch' }}>
                Say hello like a guest, not a form.
              </h1>
              <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 500, fontSize: 'clamp(0.96rem, 1.8vw, 1.08rem)', lineHeight: 1.85, color: 'rgba(42,31,20,0.68)', maxWidth: '35ch' }}>
                Contact now opens as a real arrival sequence: location-led imagery, a calm writing panel, and practical details kept in the same visual language as the rest of the site.
              </p>
            </div>

            <div className="contact-handle-row">
              {handles.map((item) => (
                <a key={item.handle} href={item.href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '1rem 1.1rem', borderRadius: '18px', background: 'rgba(196,99,51,0.08)', textDecoration: 'none' }}>
                  <span style={{ display: 'block', marginBottom: '0.24rem', fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(42,31,20,0.42)' }}>{item.name}</span>
                  <span style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 700, fontSize: '0.92rem', color: 'var(--espresso)' }}>{item.handle}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <div className="contact-hero-media">
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '30px', minHeight: 'clamp(320px, 48svh, 520px)' }}>
              <Image src="/images/IMG_5789.jpeg" alt="Mi Casa Café Biscoff pancake stack" fill priority unoptimized style={{ objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            <div className="contact-hero-row">
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '24px', minHeight: '220px' }}>
                <Image src="/images/IMG_5790.jpeg" alt="Mi Casa Southbank dessert plate with café signage" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '24px', minHeight: '220px' }}>
                <Image src="/images/IMG_5792.jpeg" alt="Mi Casa Underwood pancake stack with café signage" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--paper)', padding: '0 1rem 1rem' }}>
        <div className="contact-main-grid">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
            style={{
              background: 'var(--cream)',
              borderRadius: '30px',
              padding: 'clamp(2rem, 5vw, 3rem)',
            }}
          >
            <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.58rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.9rem' }}>Write to us</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(2rem, 4.3vw, 3.2rem)', lineHeight: 0.96, letterSpacing: '-0.03em', color: 'var(--espresso)', marginBottom: '0.9rem', maxWidth: '10ch' }}>
              Send the details clearly.
            </h2>
            <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 500, fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(42,31,20,0.68)', maxWidth: '34ch', marginBottom: '2rem' }}>
              For bookings, collaborations, events, or general questions. The form stays simple and spacious so it feels like the site, not a plugin drop-in.
            </p>

            <form style={{ display: 'grid', gap: '1.15rem' }}>
              {[
                { id: 'name', label: 'Your name', type: 'text', placeholder: 'Ana García' },
                { id: 'email', label: 'Email address', type: 'email', placeholder: 'ana@example.com' },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} style={{ display: 'block', marginBottom: '0.45rem', fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.64rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(42,31,20,0.42)' }}>
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    style={{ width: '100%', border: '1px solid rgba(42,31,20,0.1)', borderRadius: '16px', padding: '0.95rem 1rem', background: '#fbf6ef', fontFamily: 'var(--font-dmsans)', fontSize: '0.95rem', color: 'var(--espresso)', boxSizing: 'border-box', outline: 'none' }}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.45rem', fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.64rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(42,31,20,0.42)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us what you need..."
                  style={{ width: '100%', border: '1px solid rgba(42,31,20,0.1)', borderRadius: '16px', padding: '0.95rem 1rem', background: '#fbf6ef', fontFamily: 'var(--font-dmsans)', fontSize: '0.95rem', color: 'var(--espresso)', boxSizing: 'border-box', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <button type="submit" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '52px', width: 'fit-content', padding: '0.9rem 1.8rem', background: 'var(--espresso)', color: '#FAF6EF', border: 'none', borderRadius: '999px', fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer' }}>
                Send message
              </button>
            </form>
          </motion.div>

          <div className="contact-side-stack">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }} style={{ position: 'relative', overflow: 'hidden', borderRadius: '30px', minHeight: 'clamp(280px, 38vw, 420px)' }}>
              <Image src="/images/IMG_5799.jpeg" alt="Mi Casa Café halal pastries and certification signage" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08, ease }} style={{ background: 'var(--sand)', borderRadius: '30px', padding: 'clamp(2rem, 5vw, 2.6rem)', minHeight: 'clamp(280px, 38vw, 420px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.58rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.9rem' }}>Visit instead</p>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--espresso)', marginBottom: '1rem', maxWidth: '9ch' }}>
                  Two locations, same welcome.
                </h2>
                <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 500, fontSize: '0.95rem', lineHeight: 1.82, color: 'rgba(42,31,20,0.68)', maxWidth: '33ch' }}>
                  The halal image already carries its own messaging, so this panel handles the practical follow-up: where to go, what to expect, and which account to message first.
                </p>
              </div>

              <div style={{ display: 'grid', gap: '0.9rem', marginTop: '1.4rem' }}>
                <div>
                  <span style={{ display: 'inline-block', marginBottom: '0.28rem', fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(42,31,20,0.42)' }}>Southbank</span>
                  <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 500, fontSize: '0.95rem', color: 'var(--espresso)' }}>Southpoint, South Brisbane QLD</p>
                </div>
                <div>
                  <span style={{ display: 'inline-block', marginBottom: '0.28rem', fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(42,31,20,0.42)' }}>Underwood</span>
                  <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 500, fontSize: '0.95rem', color: 'var(--espresso)' }}>Logan Road, Underwood QLD</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-hero-grid,
        .contact-main-grid,
        .contact-hero-media,
        .contact-side-stack {
          display: grid;
          gap: 1rem;
        }

        .contact-handle-row,
        .contact-hero-row {
          display: grid;
          gap: 0.85rem;
        }

        @media (min-width: 768px) {
          .contact-hero-grid,
          .contact-main-grid {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          }

          .contact-handle-row,
          .contact-hero-row {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .contact-handle-row,
          .contact-hero-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
