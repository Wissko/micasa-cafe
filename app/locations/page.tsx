'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const locations = [
  {
    name: 'Southbank',
    address: 'Southpoint, South Brisbane QLD',
    hours: 'Open daily for breakfast, brunch & sweet afternoons',
    handle: '@micasacafesb',
    href: 'https://instagram.com/micasacafesb',
    image: '/images/IMG_5790.jpeg',
    alt: 'Mi Casa Southbank waffle with café signage',
    tone: 'var(--cream)',
  },
  {
    name: 'Underwood',
    address: 'Logan Road, Underwood QLD',
    hours: 'Open daily for breakfast, brunch & sweet afternoons',
    handle: '@micasacafe_',
    href: 'https://instagram.com/micasacafe_',
    image: '/images/IMG_5792.jpeg',
    alt: 'Mi Casa Underwood pancake stack with café signage',
    tone: '#efe2d2',
  },
]

export default function LocationsPage() {
  return (
    <>
      <section style={{ background: 'var(--paper)', padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
        <div className="locations-hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, ease }}
            style={{
              background: 'var(--espresso)',
              borderRadius: '30px',
              padding: 'clamp(2rem, 6vw, 4.4rem)',
              minHeight: 'clamp(360px, 68svh, 780px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(250,246,239,0.56)', marginBottom: '1rem' }}>
                Brisbane · Two houses · One appetite
              </p>
              <h1 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(3.2rem, 10vw, 7rem)', lineHeight: 0.88, letterSpacing: '-0.05em', color: '#FAF6EF', marginBottom: '1rem', textTransform: 'uppercase', maxWidth: '8ch' }}>
                Find the house that fits your day.
              </h1>
              <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 500, fontSize: 'clamp(0.96rem, 1.8vw, 1.08rem)', lineHeight: 1.85, color: 'rgba(250,246,239,0.72)', maxWidth: '35ch' }}>
                The location pages now start with real room-and-signage imagery, then move into each venue as its own editorial chapter instead of a generic listings block.
              </p>
            </div>

            <div className="locations-hero-notes">
              {['Southbank', 'Underwood', '100% halal cafés'].map((item) => (
                <div key={item} style={{ border: '1px solid rgba(250,246,239,0.1)', borderRadius: '18px', padding: '0.95rem 1rem', background: 'rgba(250,246,239,0.04)' }}>
                  <span style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(250,246,239,0.78)' }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="locations-hero-media">
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '30px', minHeight: 'clamp(340px, 48svh, 520px)' }}>
              <Image src="/images/IMG_5795.jpeg" alt="Mi Casa Café brunch spread" fill priority unoptimized style={{ objectFit: 'cover', objectPosition: 'center 28%' }} />
            </div>
            <div className="locations-hero-row">
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '24px', minHeight: '220px' }}>
                <Image src="/images/IMG_5790.jpeg" alt="Mi Casa Southbank waffle with café signage" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '24px', minHeight: '220px' }}>
                <Image src="/images/IMG_5792.jpeg" alt="Mi Casa Underwood pancake stack with café signage" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {locations.map((location, index) => (
        <section key={location.name} style={{ background: index % 2 === 0 ? 'var(--cream)' : 'var(--paper)', padding: '0 1rem 1rem' }}>
          <div className={`location-feature ${index % 2 === 1 ? 'reverse' : ''}`}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '30px', minHeight: 'clamp(320px, 52vw, 760px)' }}>
              <Image src={location.image} alt={location.alt} fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </div>

            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 18 : -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease }}
              style={{
                background: location.tone,
                borderRadius: '30px',
                padding: 'clamp(2rem, 5vw, 3.4rem)',
                minHeight: 'clamp(320px, 52vw, 760px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.58rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(42,31,20,0.42)', marginBottom: '0.9rem' }}>
                  0{index + 1} · Location
                </p>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', lineHeight: 0.92, letterSpacing: '-0.04em', color: 'var(--espresso)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                  {location.name}
                </h2>
                <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 500, fontSize: '0.96rem', lineHeight: 1.85, color: 'rgba(42,31,20,0.7)', maxWidth: '34ch' }}>
                  {location.name === 'Southbank'
                    ? 'The Southbank image already carries the Mi Casa identity in-frame, so the text sits beside it and lets the signage stay legible while the page handles the practical details.'
                    : 'Underwood gets the same treatment: a product-led frame with visible branding, paired with a clean information panel so the page feels premium instead of directory-like.'}
                </p>
              </div>

              <div className="location-meta-grid">
                <div>
                  <span className="location-meta-label">Address</span>
                  <p className="location-meta-copy">{location.address}</p>
                </div>
                <div>
                  <span className="location-meta-label">Hours</span>
                  <p className="location-meta-copy">{location.hours}</p>
                </div>
                <div>
                  <span className="location-meta-label">Instagram</span>
                  <a href={location.href} target="_blank" rel="noopener noreferrer" className="location-meta-link">
                    {location.handle}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section style={{ background: 'var(--paper)', padding: '0 1rem clamp(4rem, 8vw, 6rem)' }}>
        <div className="locations-standard-grid">
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '30px', minHeight: 'clamp(300px, 42vw, 520px)' }}>
            <Image src="/images/IMG_5799.jpeg" alt="Mi Casa Café halal pastries and certification signage" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>

          <div style={{ background: 'var(--sand)', borderRadius: '30px', padding: 'clamp(2rem, 5vw, 3rem)', minHeight: 'clamp(300px, 42vw, 520px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.58rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.9rem' }}>House standard</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(2rem, 4.2vw, 3.1rem)', lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--espresso)', marginBottom: '1rem', maxWidth: '10ch' }}>
              Shared values, cleanly shown.
            </h2>
            <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 500, fontSize: '0.95rem', lineHeight: 1.82, color: 'rgba(42,31,20,0.68)', maxWidth: '34ch' }}>
              The halal photo includes visible text, so it stays untouched. The supporting copy moves off-image and closes the page with a brand standard instead of another promotional panel.
            </p>
            <div style={{ marginTop: '1.8rem' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '52px', padding: '0.9rem 1.8rem', background: 'var(--espresso)', color: '#FAF6EF', borderRadius: '999px', fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Contact the house
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .locations-hero-grid,
        .locations-standard-grid,
        .location-feature,
        .locations-hero-media {
          display: grid;
          gap: 1rem;
        }

        .locations-hero-notes,
        .locations-hero-row,
        .location-meta-grid {
          display: grid;
          gap: 0.85rem;
        }

        .location-meta-label {
          display: inline-block;
          margin-bottom: 0.28rem;
          font-family: var(--font-dmsans);
          font-weight: 800;
          font-size: 0.58rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(42, 31, 20, 0.42);
        }

        .location-meta-copy,
        .location-meta-link {
          font-family: var(--font-dmsans);
          font-weight: 500;
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--espresso);
          text-decoration: none;
        }

        @media (min-width: 768px) {
          .locations-hero-grid,
          .location-feature,
          .locations-standard-grid {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          }

          .location-feature.reverse > :global(:first-child) {
            order: 2;
          }

          .location-feature.reverse > :global(:last-child) {
            order: 1;
          }

          .locations-hero-notes {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .locations-hero-row,
          .location-meta-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .location-meta-grid > :last-child {
            grid-column: 1 / span 2;
          }
        }

        @media (max-width: 767px) {
          .locations-hero-row,
          .locations-hero-notes,
          .location-meta-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
