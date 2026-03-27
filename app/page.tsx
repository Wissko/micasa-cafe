‘use client’

import Link from ‘next/link’
import { motion } from ‘framer-motion’

const fadeUp = {
hidden: { opacity: 0, y: 32 },
show: (i: number) => ({
opacity: 1,
y: 0,
transition: { duration: 0.65, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
}),
}

export default function HomePage() {
return (
<>
{/* Hero */}
<section
style={{
minHeight: ‘100svh’,
background: ‘linear-gradient(160deg, #C8603A 0%, #D4734E 30%, #E8DCC8 70%, #FAF6EF 100%)’,
display: ‘flex’,
flexDirection: ‘column’,
alignItems: ‘center’,
justifyContent: ‘center’,
position: ‘relative’,
overflow: ‘hidden’,
padding: ‘2rem’,
textAlign: ‘center’,
}}
>
{/* Tile pattern */}
<div
className=“tile-pattern”
style={{ position: ‘absolute’, inset: 0, opacity: 0.3, pointerEvents: ‘none’ }}
/>

```
    {/* Decorative circles */}
    <div style={{
      position: 'absolute', top: '-10rem', right: '-10rem',
      width: '40rem', height: '40rem',
      borderRadius: '50%',
      background: 'rgba(250,246,239,0.12)',
      pointerEvents: 'none',
    }} />
    <div style={{
      position: 'absolute', bottom: '-8rem', left: '-8rem',
      width: '30rem', height: '30rem',
      borderRadius: '50%',
      background: 'rgba(250,246,239,0.08)',
      pointerEvents: 'none',
    }} />

    <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
      {/* Signature wordmark */}
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        style={{ marginBottom: '0.5rem' }}
      >
        <span style={{
          fontFamily: 'var(--font-dancing)',
          fontSize: 'clamp(3rem, 10vw, 7rem)',
          color: 'var(--cream)',
          display: 'block',
          lineHeight: 1,
          textShadow: '0 2px 24px rgba(42,31,20,0.18)',
        }}>Mi</span>
      </motion.div>

      <motion.div
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <span style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(3.5rem, 12vw, 9rem)',
          fontWeight: 800,
          color: 'var(--cream)',
          display: 'block',
          lineHeight: 0.9,
          letterSpacing: '-0.02em',
          textShadow: '0 4px 32px rgba(42,31,20,0.2)',
        }}>Casa</span>
      </motion.div>

      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        style={{
          fontFamily: 'var(--font-dmsans)',
          fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
          fontWeight: 300,
          color: 'rgba(250,246,239,0.88)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginTop: '1.5rem',
          marginBottom: '2.5rem',
        }}
      >
        Southbank &amp; Underwood · Brisbane
      </motion.p>

      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <Link
          href="/menu"
          style={{
            display: 'inline-block',
            backgroundColor: 'var(--cream)',
            color: 'var(--terra)',
            fontFamily: 'var(--font-playfair)',
            fontSize: '1rem',
            fontWeight: 600,
            padding: '0.9rem 2.5rem',
            borderRadius: '4px',
            textDecoration: 'none',
            letterSpacing: '0.03em',
            transition: 'background-color 0.25s ease, color 0.25s ease',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.backgroundColor = 'var(--espresso)'
            el.style.color = 'var(--cream)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.backgroundColor = 'var(--cream)'
            el.style.color = 'var(--terra)'
          }}
        >
          See the Menu
        </Link>
      </motion.div>
    </div>

    {/* Scroll hint */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.4rem',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-dmsans)',
        fontSize: '0.7rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'rgba(250,246,239,0.6)',
      }}>Discover</span>
      <div style={{
        width: '1px',
        height: '2.5rem',
        background: 'linear-gradient(to bottom, rgba(250,246,239,0.6), transparent)',
      }} />
    </motion.div>
  </section>

  {/* Tagline strip */}
  <section style={{ backgroundColor: 'var(--sand)', padding: '3rem 2rem', textAlign: 'center' }}>
    <motion.p
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        fontFamily: 'var(--font-playfair)',
        fontStyle: 'italic',
        fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
        color: 'var(--espresso)',
        maxWidth: '680px',
        margin: '0 auto',
      }}
    >
      &ldquo;Fresh, gourmet food — made to satisfy.&rdquo;
    </motion.p>
  </section>

  {/* Features grid */}
  <section style={{ backgroundColor: 'var(--cream)', padding: '5rem 2rem' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          color: 'var(--espresso)',
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        All day. Every day.
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2rem',
      }}>
        {[
          {
            icon: '☕',
            title: 'Campos Coffee',
            desc: "Brisbane's favourite specialty coffee, brewed with care every morning.",
          },
          {
            icon: '🥞',
            title: 'Crave-worthy Pancakes',
            desc: 'Buttermilk, blueberry, Nutella — stacked high and made to impress.',
          },
          {
            icon: '🥗',
            title: 'Açaï & Fit Shakes',
            desc: 'Tropical Colada, Super Green, Berry Breaky — fresh and full of life.',
          },
          {
            icon: '🍕',
            title: 'Dessert Pizzas',
            desc: "Nutella Madness, White Heaven — sweet finishes you won't forget.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              backgroundColor: 'var(--blush)',
              borderRadius: '8px',
              padding: '2rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
            <h3 style={{
              fontFamily: 'var(--font-playfair)',
              fontWeight: 700,
              fontSize: '1.2rem',
              color: 'var(--espresso)',
              marginBottom: '0.6rem',
            }}>{item.title}</h3>
            <p style={{
              fontFamily: 'var(--font-dmsans)',
              fontSize: '0.9rem',
              color: 'var(--espresso)',
              opacity: 0.75,
              lineHeight: 1.6,
            }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* Two locations CTA */}
  <section style={{ backgroundColor: 'var(--espresso)', padding: '5rem 2rem', textAlign: 'center' }}>
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <span style={{
        fontFamily: 'var(--font-dancing)',
        fontSize: '1.4rem',
        color: 'var(--terra)',
        display: 'block',
        marginBottom: '0.5rem',
      }}>two homes,</span>
      <h2 style={{
        fontFamily: 'var(--font-playfair)',
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: 700,
        color: 'var(--cream)',
        marginBottom: '1rem',
      }}>one familia</h2>
      <p style={{
        fontFamily: 'var(--font-dmsans)',
        fontSize: '1rem',
        color: 'rgba(250,246,239,0.7)',
        marginBottom: '2.5rem',
      }}>
        Southbank (Southpoint) &amp; Underwood (Logan Road)
      </p>
      <Link
        href="/locations"
        style={{
          display: 'inline-block',
          border: '1.5px solid var(--terra)',
          color: 'var(--terra)',
          fontFamily: 'var(--font-playfair)',
          fontSize: '1rem',
          fontWeight: 600,
          padding: '0.85rem 2.2rem',
          borderRadius: '4px',
          textDecoration: 'none',
          transition: 'background-color 0.25s ease, color 0.25s ease',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.backgroundColor = 'var(--terra)'
          el.style.color = 'var(--cream)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.backgroundColor = 'transparent'
          el.style.color = 'var(--terra)'
        }}
      >
        Find Us
      </Link>
    </motion.div>
  </section>

  {/* Footer */}
  <footer style={{
    backgroundColor: 'var(--espresso)',
    borderTop: '1px solid rgba(250,246,239,0.08)',
    padding: '2rem',
    textAlign: 'center',
  }}>
    <p style={{
      fontFamily: 'var(--font-dmsans)',
      fontSize: '0.8rem',
      color: 'rgba(250,246,239,0.4)',
      letterSpacing: '0.05em',
    }}>
      © {new Date().getFullYear()} Mi Casa Café · Brisbane · All day brunch
    </p>
  </footer>
</>
```

)
}