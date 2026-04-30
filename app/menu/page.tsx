'use client'

import Image from 'next/image'
import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

interface MenuItem {
  name: string
  desc?: string
  note?: string
}

const breakfast: MenuItem[] = [
  { name: 'Buttermilk Pancakes', desc: 'Classic stack, maple syrup & whipped butter' },
  { name: 'Blueberry Pancakes', desc: 'Fresh blueberries, fluffy batter' },
  { name: 'Strawberry Pancakes', desc: 'Seasonal strawberries, lemon cream' },
  { name: 'Lotus Biscoff Pancakes', desc: 'Biscoff sauce, banana, crushed speculoos, edible flower', note: 'Signature' },
  { name: 'Classic Waffles', desc: 'Golden Belgian waffles, choice of toppings' },
  { name: 'Berry Waffle', desc: 'Mixed berries, chantilly, coulis, edible flower', note: 'Signature' },
  { name: 'Açaï Bowl: Super Green', desc: 'Spinach, banana, mango, granola, coconut flakes' },
  { name: 'Açaï Bowl: Pitaya Passion', desc: 'Dragon fruit, passionfruit, chia, honey' },
  { name: 'Açaï Bowl: Tropical Colada', desc: 'Coconut, pineapple, mango, toasted granola' },
]

const brunch: MenuItem[] = [
  { name: 'Pistachio French Toast', desc: 'Brioche, pistachio cream, white choc, strawberries, Turkish delight', note: 'Signature' },
  { name: 'Sujak Sensation', desc: 'House-spiced sujak, poached eggs, grilled sourdough, house relish' },
  { name: 'Haloumi Bruschetta', desc: 'Pan-seared haloumi, heirloom tomato, basil oil, toasted ciabatta' },
  { name: 'Herb-Crusted Schnitzel', desc: 'Creamy mushroom sauce, crinkle fries, garden salad' },
  { name: 'Fish Tacos', desc: 'Crispy battered fish, pickled onions, jalapeños, pico de gallo, lime' },
]

const desserts: MenuItem[] = [
  { name: 'Dessert Pizza: Nutella Madness', desc: 'Crispy base, Nutella, banana, strawberry, crushed Oreo' },
  { name: 'Dessert Pizza: White Heaven', desc: 'White choc spread, mixed berries, toasted almond' },
  { name: 'PB Banana Waffle Bowl', desc: "Peanut butter ice cream, banana, Reese's, chocolate drizzle", note: 'Best-seller' },
  { name: 'Sundae: Strawberry Dream', desc: 'Vanilla ice cream, fresh strawberries, whipped cream' },
]

const drinks: MenuItem[] = [
  { name: 'Fit Shake: Berry Breaky', desc: 'Mixed berries, banana, almond milk, protein boost' },
  { name: 'Fit Shake: Mango Muscle', desc: 'Mango, pineapple, coconut water, vanilla protein' },
  { name: 'Fresh Juice: Green Dream', desc: 'Cucumber, apple, celery, spinach, lemon' },
  { name: 'Fresh Juice: Detoxer', desc: 'Beetroot, carrot, ginger, orange' },
  { name: 'Fresh Juice: Feel Good', desc: 'Watermelon, strawberry, lemon' },
  { name: 'Classic Milkshake', desc: 'Your choice of flavour, thick and creamy' },
  { name: 'Frappe', desc: 'Iced coffee or flavoured frappe' },
]

const coffee = ['Espresso', 'Long Black', 'Flat White', 'Cappuccino', 'Latte', 'Piccolo', 'Cold Brew', 'Iced Latte']

const itemRow: CSSProperties = {
  padding: '1rem 0',
  borderBottom: '1px solid rgba(42,31,20,0.08)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '1rem',
}

const itemRowDark: CSSProperties = {
  ...itemRow,
  borderBottomColor: 'rgba(250,246,239,0.08)',
}

function Badge({ text }: { text: string }) {
  return (
    <span
      style={{
        flexShrink: 0,
        fontFamily: 'var(--font-dmsans)',
        fontWeight: 700,
        fontSize: '0.52rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--terra)',
        border: '1px solid rgba(196,99,51,0.5)',
        padding: '0.24rem 0.5rem',
        borderRadius: '999px',
        whiteSpace: 'nowrap',
        marginTop: '0.25rem',
      }}
    >
      {text}
    </span>
  )
}

function ItemName({ name, dark = false }: { name: string; dark?: boolean }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-playfair)',
        fontWeight: 700,
        fontSize: '1.06rem',
        color: dark ? '#FAF6EF' : 'var(--espresso)',
      }}
    >
      {name}
    </p>
  )
}

function ItemDesc({ desc, dark = false }: { desc: string; dark?: boolean }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-dmsans)',
        fontWeight: 400,
        fontSize: '0.8rem',
        color: dark ? 'rgba(250,246,239,0.52)' : 'rgba(42,31,20,0.56)',
        lineHeight: 1.6,
        marginTop: '0.22rem',
      }}
    >
      {desc}
    </p>
  )
}

export default function MenuPage() {
  return (
    <>
      <section style={{ background: 'var(--paper)', padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '1rem',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
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
              <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.9rem' }}>
                All day · Every day
              </p>
              <span style={{ fontFamily: 'var(--font-dancing)', fontWeight: 600, fontSize: 'clamp(1.7rem, 4vw, 3rem)', color: 'var(--terra)', display: 'block', lineHeight: 1 }}>
                the
              </span>
              <h1 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(3rem, 10vw, 6.5rem)', color: 'var(--espresso)', lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: '1rem' }}>
                Menu
              </h1>
              <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 500, fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)', lineHeight: 1.8, color: 'rgba(42,31,20,0.66)', maxWidth: '34ch' }}>
                Real dishes now lead every chapter: stacked pancakes for breakfast, hot plates for brunch, and dessert/drink moments placed beside the list instead of hidden behind it.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
              <div style={{ position: 'relative', minHeight: '180px', overflow: 'hidden', borderRadius: '22px' }}>
                <Image src="/images/IMG_5787.jpeg" alt="Berry waffle with fresh fruit and cream" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div style={{ position: 'relative', minHeight: '180px', overflow: 'hidden', borderRadius: '22px' }}>
                <Image src="/images/IMG_5796.jpeg" alt="Herb-crusted schnitzel with sauce being poured" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
              </div>
            </div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateRows: '1.1fr 0.9fr', gap: '1rem', minHeight: 'clamp(340px, 58svh, 720px)' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '28px' }}>
              <Image src="/images/IMG_5795.jpeg" alt="Mi Casa Café brunch spread" fill priority unoptimized style={{ objectFit: 'cover', objectPosition: 'center 25%' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '22px', minHeight: '170px' }}>
                <Image src="/images/IMG_5797.jpeg" alt="Fish tacos with pico de gallo and jalapeños" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '22px', minHeight: '170px' }}>
                <Image src="/images/IMG_5794.jpeg" alt="PB banana waffle bowl dessert" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))' }}>
        <div style={{ position: 'relative', minHeight: 'clamp(320px, 46vw, 620px)', overflow: 'hidden' }}>
          <Image src="/images/IMG_5787.jpeg" alt="Berry waffle with fresh fruit and cream" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease }} style={{ backgroundColor: 'var(--cream)', padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4.5rem)' }}>
          <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.35rem' }}>Start the day</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--espresso)', lineHeight: 1, marginBottom: '2.2rem' }}>Breakfast</h2>
          {breakfast.map((item, i) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04, duration: 0.36, ease }} style={itemRow}>
              <div>
                <ItemName name={item.name} />
                {item.desc && <ItemDesc desc={item.desc} />}
              </div>
              {item.note && <Badge text={item.note} />}
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))' }}>
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease }} style={{ backgroundColor: 'var(--blush)', padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4.5rem)' }}>
          <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.35rem' }}>Gourmet & generous</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--espresso)', lineHeight: 1, marginBottom: '2.2rem' }}>Brunch</h2>
          {brunch.map((item, i) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.36, ease }} style={itemRow}>
              <div>
                <ItemName name={item.name} />
                {item.desc && <ItemDesc desc={item.desc} />}
              </div>
              {item.note && <Badge text={item.note} />}
            </motion.div>
          ))}
        </motion.div>

        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', minHeight: 'clamp(320px, 46vw, 620px)' }}>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Image src="/images/IMG_5796.jpeg" alt="Herb-crusted schnitzel with sauce being poured" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Image src="/images/IMG_5797.jpeg" alt="Fish tacos with pico de gallo, pickled onions and jalapeños" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', backgroundColor: 'var(--sand)' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease }} style={{ padding: 'clamp(3rem, 7vw, 5rem) clamp(2rem, 5vw, 4.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.8rem' }}>Product-led layout</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', color: 'var(--espresso)', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '1rem', maxWidth: '10ch' }}>Big plates. Real appetite.</h2>
          <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 400, fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(42,31,20,0.66)', maxWidth: '34ch' }}>
            The menu now uses actual product photography as its mid-page architecture so the reading rhythm feels richer and the brand looks less templated.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', minHeight: 'clamp(280px, 42vw, 520px)' }}>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Image src="/images/IMG_5786.jpeg" alt="Generous Mi Casa Café sharing feast platter" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
          </div>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Image src="/images/IMG_5793.jpeg" alt="Mi Casa Café pancake tower with fruit and cream" fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--espresso)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))' }}>
        <div style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4.5rem)', borderRight: '1px solid rgba(250,246,239,0.06)' }}>
          <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.35rem' }}>Sweet finishes</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FAF6EF', lineHeight: 1, marginBottom: '2.2rem' }}>Desserts</h2>
          {desserts.map((item) => (
            <div key={item.name} style={itemRowDark}>
              <div>
                <ItemName name={item.name} dark />
                {item.desc && <ItemDesc desc={item.desc} dark />}
              </div>
              {item.note && <Badge text={item.note} />}
            </div>
          ))}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', marginTop: '2rem', borderRadius: '20px' }}>
            <Image src="/images/IMG_5794.jpeg" alt="PB banana waffle bowl" fill unoptimized style={{ objectFit: 'cover' }} />
          </div>
        </div>

        <div style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4.5rem)' }}>
          <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.35rem' }}>Fresh pressed & blended</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FAF6EF', lineHeight: 1, marginBottom: '2.2rem' }}>Drinks</h2>
          {drinks.map((item) => (
            <div key={item.name} style={itemRowDark}>
              <div>
                <ItemName name={item.name} dark />
                {item.desc && <ItemDesc desc={item.desc} dark />}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--sand)', padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-dmsans)', fontWeight: 800, fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.35rem' }}>Campos specialty</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--espresso)', lineHeight: 1, marginBottom: '2.5rem' }}>Coffee</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))' }}>
            {coffee.map((name) => (
              <div key={name} style={{ padding: '1.1rem 0', borderBottom: '1px solid rgba(42,31,20,0.08)' }}>
                <p style={{ fontFamily: 'var(--font-playfair)', fontWeight: 600, fontSize: '1rem', color: 'var(--espresso)' }}>{name}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2.5rem', fontFamily: 'var(--font-dmsans)', fontWeight: 400, fontSize: '0.72rem', color: 'rgba(42,31,20,0.38)', letterSpacing: '0.04em' }}>
            Menu may vary by location · Please advise of any allergies or dietary requirements
          </p>
        </div>
      </section>
    </>
  )
}
