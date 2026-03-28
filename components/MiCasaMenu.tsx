'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'The Menu' },
  { href: '/locations', label: 'Find Us' },
  { href: '/story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function MiCasaMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Lock scroll when open
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
      {/* ── TRIGGER — pill cream with terra accent ── */}
      <motion.button
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        aria-expanded={open}
        animate={{ opacity: open ? 0 : 1, pointerEvents: open ? 'none' : 'auto' }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'fixed',
          top: '1.1rem',
          left: '1.1rem',
          zIndex: 200,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(244,239,230,0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(28,20,16,0.12)',
          borderRadius: '999px',
          padding: '9px 18px',
          boxShadow: '0 2px 16px rgba(28,20,16,0.10)',
          touchAction: 'manipulation',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        {/* Initials */}
        <span style={{
          fontFamily: 'var(--font-cormorant)',
          fontStyle: 'italic',
          fontWeight: 600,
          fontSize: '14px',
          color: 'var(--terra)',
          lineHeight: 1,
          letterSpacing: '0.02em',
        }}>MC</span>

        {/* Separator */}
        <span style={{ display: 'block', width: '1px', height: '13px', background: 'rgba(28,20,16,0.18)' }} />

        {/* Label */}
        <span style={{
          fontFamily: 'var(--font-jost)',
          fontWeight: 500,
          fontSize: '9px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--espresso)',
        }}>Menu</span>

        {/* Hamburger lines */}
        <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ display: 'block', height: '1.5px', width: '15px', background: 'var(--espresso)' }} />
          <span style={{ display: 'block', height: '1.5px', width: '9px', background: 'var(--espresso)' }} />
        </span>
      </motion.button>

      {/* ── OVERLAY — slides in from top ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.44, ease }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 190,
              backgroundColor: 'var(--espresso)',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
            }}
            onClick={() => setOpen(false)}
          >
            {/* Close button — top right */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
              style={{
                position: 'absolute',
                top: '1.1rem',
                right: '1.5rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
                zIndex: 10,
              }}
            >
              <span style={{
                fontFamily: 'var(--font-jost)',
                fontWeight: 500,
                fontSize: '0.55rem',
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: 'rgba(250,247,242,0.55)',
              }}>Close</span>
              <span style={{ display: 'block', width: '1.1rem', height: '1px', backgroundColor: 'rgba(250,247,242,0.55)' }} />
            </button>

            {/* Nav links */}
            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
                padding: 'clamp(5rem, 12vw, 8rem) clamp(1.5rem, 6vw, 3.5rem) clamp(3rem, 8vw, 5rem)',
              }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.38, ease }}
                  style={{ borderBottom: '1px solid rgba(250,247,242,0.07)' }}
                >
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontStyle: 'italic',
                      fontWeight: 300,
                      display: 'block',
                      fontSize: 'clamp(2.5rem, 9vw, 6rem)',
                      lineHeight: 1.18,
                      padding: 'clamp(0.5rem, 1.8vw, 0.9rem) 0',
                      color: pathname === link.href ? 'var(--terra)' : '#FAF7F2',
                      transition: 'color 0.15s',
                      WebkitTapHighlightColor: 'transparent',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--terra)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = pathname === link.href ? 'var(--terra)' : '#FAF7F2')}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom info */}
            <div
              style={{
                padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1.5rem, 6vw, 3.5rem)',
                borderTop: '1px solid rgba(250,247,242,0.07)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div style={{
                fontFamily: 'var(--font-jost)',
                fontWeight: 300,
                fontSize: '0.78rem',
                color: 'rgba(250,247,242,0.4)',
                lineHeight: 1.8,
              }}>
                <p>Southbank · Southpoint</p>
                <p>Underwood · Logan Road</p>
              </div>
              <div style={{ display: 'flex', gap: '1.25rem' }}>
                {['@micasacafe_', '@micasacafesb'].map(handle => (
                  <a
                    key={handle}
                    href={`https://instagram.com/${handle.slice(1)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-jost)',
                      fontWeight: 300,
                      fontSize: '0.72rem',
                      color: 'var(--terra)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {handle}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
