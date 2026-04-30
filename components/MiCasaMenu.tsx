'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/locations', label: 'Locations' },
  { href: '/story', label: 'Story' },
  { href: '/contact', label: 'Contact' },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function MiCasaMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [open])

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        aria-expanded={open}
        animate={{ opacity: open ? 0 : 1, pointerEvents: open ? 'none' : 'auto' }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 220,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.9rem',
          minHeight: '56px',
          padding: '0.9rem 1.15rem',
          borderRadius: '999px',
          border: '1px solid rgba(244, 236, 225, 0.2)',
          background: 'rgba(26, 15, 11, 0.78)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          boxShadow: '0 18px 50px rgba(10, 6, 4, 0.28)',
          touchAction: 'manipulation',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.9 }}>
          <span style={{
            fontFamily: 'var(--font-playfair)',
            fontWeight: 900,
            fontSize: '1.05rem',
            letterSpacing: '-0.04em',
            color: 'var(--paper)',
          }}>MI CASA</span>
          <span style={{
            fontFamily: 'var(--font-dmsans)',
            fontWeight: 700,
            fontSize: '0.48rem',
            letterSpacing: '0.34em',
            textTransform: 'uppercase',
            color: 'rgba(244,236,225,0.66)',
            marginTop: '0.28rem',
          }}>Brisbane House</span>
        </div>

        <span style={{ display: 'block', width: '1px', height: '22px', background: 'rgba(244,236,225,0.18)' }} />

        <span style={{
          fontFamily: 'var(--font-dmsans)',
          fontWeight: 800,
          fontSize: '0.62rem',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--ochre)',
        }}>Menu</span>

        <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginLeft: '0.1rem' }}>
          <span style={{ display: 'block', height: '2px', width: '18px', background: 'var(--paper)' }} />
          <span style={{ display: 'block', height: '2px', width: '12px', background: 'var(--ochre)', marginLeft: '6px' }} />
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.42, ease }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 210,
              background: 'linear-gradient(180deg, rgba(17,10,7,0.98) 0%, rgba(32,18,13,0.98) 48%, rgba(127,49,25,0.96) 100%)',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
            }}
            onClick={() => setOpen(false)}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 15% 18%, rgba(196,99,51,0.26), transparent 30%), radial-gradient(circle at 82% 78%, rgba(120,149,111,0.18), transparent 26%), linear-gradient(135deg, transparent 0%, rgba(244,236,225,0.03) 100%)',
                pointerEvents: 'none',
              }}
            />

            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
              style={{
                position: 'absolute',
                top: '1.2rem',
                right: '1.5rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.75rem 0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
                zIndex: 10,
              }}
            >
              <span style={{
                fontFamily: 'var(--font-dmsans)',
                fontWeight: 700,
                fontSize: '0.6rem',
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: 'rgba(244,236,225,0.6)',
              }}>Close</span>
              <span style={{ display: 'block', width: '1.2rem', height: '1px', backgroundColor: 'rgba(244,236,225,0.55)' }} />
            </button>

            <nav
              style={{
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.15fr) minmax(280px, 0.85fr)',
                gap: 'clamp(2rem, 4vw, 4rem)',
                alignItems: 'end',
                minHeight: '100svh',
                padding: 'clamp(5.5rem, 10vw, 7rem) clamp(1.5rem, 6vw, 4rem) clamp(2rem, 5vw, 3rem)',
              }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.07 * i + 0.08, duration: 0.4, ease }}
                    style={{ borderBottom: '1px solid rgba(244,236,225,0.08)' }}
                  >
                    <Link
                      href={link.href}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        padding: 'clamp(0.8rem, 2vw, 1rem) 0',
                        color: pathname === link.href ? 'var(--ochre)' : 'var(--paper)',
                        transition: 'color 0.18s ease',
                        WebkitTapHighlightColor: 'transparent',
                      }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--ochre)')}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = pathname === link.href ? 'var(--ochre)' : 'var(--paper)')}
                    >
                      <span style={{
                        fontFamily: 'var(--font-playfair)',
                        fontWeight: 900,
                        fontSize: 'clamp(2.8rem, 8vw, 6.8rem)',
                        lineHeight: 0.94,
                        letterSpacing: '-0.05em',
                      }}>{link.label}</span>
                      <span style={{
                        fontFamily: 'var(--font-dmsans)',
                        fontWeight: 700,
                        fontSize: '0.6rem',
                        letterSpacing: '0.24em',
                        textTransform: 'uppercase',
                        color: 'rgba(244,236,225,0.42)',
                      }}>{String(i + 1).padStart(2, '0')}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.45, ease }}
                style={{
                  alignSelf: 'stretch',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '2rem',
                  borderLeft: '1px solid rgba(244,236,225,0.08)',
                  paddingLeft: 'clamp(1.4rem, 3vw, 2rem)',
                }}
              >
                <div>
                  <p style={{
                    fontFamily: 'var(--font-dmsans)',
                    fontWeight: 700,
                    fontSize: '0.55rem',
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: 'rgba(244,236,225,0.46)',
                    marginBottom: '0.9rem',
                  }}>House Notes</p>
                  <p style={{
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 700,
                    fontSize: 'clamp(1.35rem, 2.5vw, 2.1rem)',
                    lineHeight: 1.12,
                    color: 'var(--paper)',
                    maxWidth: '12ch',
                  }}>
                    Brutal brunch. Fine produce. An Italian pulse in Brisbane.
                  </p>
                </div>

                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-dmsans)',
                      fontWeight: 700,
                      fontSize: '0.52rem',
                      letterSpacing: '0.24em',
                      textTransform: 'uppercase',
                      color: 'rgba(244,236,225,0.4)',
                      marginBottom: '0.45rem',
                    }}>Locations</p>
                    <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 600, fontSize: '0.86rem', color: 'rgba(244,236,225,0.82)', lineHeight: 1.7 }}>
                      Southbank · Southpoint<br />
                      Underwood · Logan Road
                    </p>
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-dmsans)',
                      fontWeight: 700,
                      fontSize: '0.52rem',
                      letterSpacing: '0.24em',
                      textTransform: 'uppercase',
                      color: 'rgba(244,236,225,0.4)',
                      marginBottom: '0.45rem',
                    }}>Instagram</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem' }}>
                      {['@micasacafe_', '@micasacafesb'].map(handle => (
                        <a
                          key={handle}
                          href={`https://instagram.com/${handle.slice(1)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: 'var(--font-dmsans)',
                            fontWeight: 700,
                            fontSize: '0.72rem',
                            color: 'var(--ochre)',
                            letterSpacing: '0.08em',
                          }}
                        >
                          {handle}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
