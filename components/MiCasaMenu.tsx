'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/locations', label: 'Find Us' },
  { href: '/story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
]

export default function MiCasaMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* MC Button — terracotta square, top-left */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        style={{
          position: 'fixed',
          top: '1.25rem',
          left: '1.25rem',
          zIndex: 1000,
          width: '3rem',
          height: '3rem',
          backgroundColor: 'var(--terra)',
          color: 'var(--cream)',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '0',
          fontFamily: 'var(--font-playfair)',
          fontSize: '0.65rem',
          fontWeight: '700',
          letterSpacing: '0.05em',
          transition: 'background-color 0.2s ease',
        }}
      >
        {open ? (
          <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>×</span>
        ) : (
          <span style={{ fontFamily: 'var(--font-dancing)', fontSize: '1rem', fontWeight: 700 }}>MC</span>
        )}
      </button>

      {/* Overlay — light cream background */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              backgroundColor: 'var(--cream)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.25rem',
            }}
          >
            {/* Subtle tile pattern overlay */}
            <div
              className="tile-pattern"
              style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }}
            />

            {/* Logo mark */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                marginBottom: '2.5rem',
                textAlign: 'center',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-dancing)',
                fontSize: '1.5rem',
                color: 'var(--terra)',
                display: 'block',
                lineHeight: 1.2,
              }}>Mi</span>
              <span style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--espresso)',
                display: 'block',
                lineHeight: 1.2,
              }}>Casa</span>
            </motion.div>

            {/* Nav links */}
            <nav>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.07,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  style={{ textAlign: 'center', marginBottom: '0.5rem' }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: 'clamp(2.2rem, 6vw, 4rem)',
                      fontWeight: 600,
                      color: 'var(--espresso)',
                      textDecoration: 'none',
                      lineHeight: 1.15,
                      display: 'block',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--terra)')}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--espresso)')}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Instagram handles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{
                marginTop: '2.5rem',
                display: 'flex',
                gap: '1.5rem',
                fontFamily: 'var(--font-dmsans)',
                fontSize: '0.8rem',
                color: 'var(--terra)',
                letterSpacing: '0.05em',
              }}
            >
              <a
                href="https://instagram.com/micasacafe_"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--terra)', textDecoration: 'none' }}
              >
                @micasacafe_
              </a>
              <span style={{ color: 'var(--sand)' }}>·</span>
              <a
                href="https://instagram.com/micasacafesb"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--terra)', textDecoration: 'none' }}
              >
                @micasacafesb
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
