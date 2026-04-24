'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

export default function ContactPage() {
  return (
    <>
      {/* Header — biscoff pancake stack, immersive photo background */}
      <section style={{
        padding: 'clamp(6rem, 12vw, 10rem) 2rem clamp(3rem, 6vw, 5rem)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Image
          src="/images/IMG_5799.jpeg"
          alt="Mi Casa Café biscoff pancake stack"
          fill
          unoptimized
          priority
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, rgba(42,31,20,0.7) 0%, rgba(200,96,58,0.5) 100%)',
        }} />
        <div className="tile-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.18 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.span
            {...fadeUp(0)}
            style={{
              fontFamily: 'var(--font-dancing)',
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              color: 'rgba(250,246,239,0.9)',
              display: 'block',
              marginBottom: '0.3rem',
            }}
          >
            come home.
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
            Say Hello
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: 'var(--cream)', padding: 'clamp(3rem, 6vw, 5rem) 2rem' }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Contact form */}
          <motion.div {...fadeUp(0.1)}>
            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.8rem',
              fontWeight: 700,
              color: 'var(--espresso)',
              marginBottom: '0.5rem',
            }}>Drop us a line</h2>
            <p style={{
              fontFamily: 'var(--font-dmsans)',
              fontSize: '0.9rem',
              color: 'var(--espresso)',
              opacity: 0.7,
              marginBottom: '2rem',
            }}>
              For bookings, events, or just to say hola — we would love to hear from you.
            </p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { id: 'name', label: 'Your name', type: 'text', placeholder: 'Ana García' },
                { id: 'email', label: 'Email address', type: 'email', placeholder: 'ana@example.com' },
              ].map(field => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    style={{
                      fontFamily: 'var(--font-dmsans)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--terra)',
                      display: 'block',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'var(--sand)',
                      border: '1.5px solid transparent',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-dmsans)',
                      fontSize: '0.95rem',
                      color: 'var(--espresso)',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'var(--terra)')}
                    onBlur={e => (e.target.style.borderColor = 'transparent')}
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  style={{
                    fontFamily: 'var(--font-dmsans)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--terra)',
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="We would love to hear from you..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'var(--sand)',
                    border: '1.5px solid transparent',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-dmsans)',
                    fontSize: '0.95rem',
                    color: 'var(--espresso)',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--terra)')}
                  onBlur={e => (e.target.style.borderColor = 'transparent')}
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: 'var(--terra)',
                  color: 'var(--cream)',
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  padding: '0.9rem 2rem',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={e => ((e.target as HTMLElement).style.opacity = '0.85')}
                onMouseLeave={e => ((e.target as HTMLElement).style.opacity = '1')}
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Info panel */}
          <motion.div {...fadeUp(0.2)} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Southbank */}
            <div style={{
              backgroundColor: 'var(--blush)',
              borderRadius: '8px',
              padding: '1.75rem',
              borderLeft: '4px solid var(--terra)',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: 'var(--espresso)',
                marginBottom: '1rem',
              }}>Southbank</h3>
              <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.9rem', color: 'var(--espresso)', lineHeight: 1.6 }}>
                Southpoint, South Brisbane QLD
              </p>
              <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.85rem', color: 'var(--terra)', marginTop: '0.4rem' }}>
                Open all day
              </p>
              <a
                href="https://instagram.com/micasacafesb"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '0.75rem',
                  fontFamily: 'var(--font-dmsans)',
                  fontSize: '0.85rem',
                  color: 'var(--terra)',
                  textDecoration: 'none',
                }}
              >
                @micasacafesb ↗
              </a>
            </div>

            {/* Underwood */}
            <div style={{
              backgroundColor: 'var(--sand)',
              borderRadius: '8px',
              padding: '1.75rem',
              borderLeft: '4px solid var(--olive)',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: 'var(--espresso)',
                marginBottom: '1rem',
              }}>Underwood</h3>
              <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.9rem', color: 'var(--espresso)', lineHeight: 1.6 }}>
                Logan Road, Underwood QLD
              </p>
              <p style={{ fontFamily: 'var(--font-dmsans)', fontSize: '0.85rem', color: 'var(--terra)', marginTop: '0.4rem' }}>
                Open all day
              </p>
              <a
                href="https://instagram.com/micasacafe_"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '0.75rem',
                  fontFamily: 'var(--font-dmsans)',
                  fontSize: '0.85rem',
                  color: 'var(--terra)',
                  textDecoration: 'none',
                }}
              >
                @micasacafe_ ↗
              </a>
            </div>

            {/* Instagram */}
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <p style={{
                fontFamily: 'var(--font-dancing)',
                fontSize: '1.3rem',
                color: 'var(--terra)',
                marginBottom: '0.5rem',
              }}>Follow the casa</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['@micasacafe_', '@micasacafesb'].map(handle => (
                  <a
                    key={handle}
                    href={`https://instagram.com/${handle.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-dmsans)',
                      fontSize: '0.85rem',
                      color: 'var(--espresso)',
                      textDecoration: 'none',
                      backgroundColor: 'var(--sand)',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      transition: 'background-color 0.2s ease',
                    }}
                  >
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
