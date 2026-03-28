'use client'

import Image from 'next/image'
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
  { name: 'Açaï Bowl — Super Green', desc: 'Spinach, banana, mango, granola, coconut flakes' },
  { name: 'Açaï Bowl — Pitaya Passion', desc: 'Dragon fruit, passionfruit, chia, honey' },
  { name: 'Açaï Bowl — Tropical Colada', desc: 'Coconut, pineapple, mango, toasted granola' },
]

const brunch: MenuItem[] = [
  { name: 'Pistachio French Toast', desc: 'Brioche, pistachio cream, white choc, strawberries, Turkish delight', note: 'Signature' },
  { name: 'Sujak Sensation', desc: 'House-spiced sujak, poached eggs, grilled sourdough, house relish' },
  { name: 'Haloumi Bruschetta', desc: 'Pan-seared haloumi, heirloom tomato, basil oil, toasted ciabatta' },
  { name: 'Herb-Crusted Schnitzel', desc: 'Creamy mushroom sauce, crinkle fries, garden salad' },
  { name: 'Fish Tacos', desc: 'Crispy battered fish, pickled onions, jalapeños, pico de gallo, lime' },
]

const desserts: MenuItem[] = [
  { name: 'Dessert Pizza — Nutella Madness', desc: 'Crispy base, Nutella, banana, strawberry, crushed Oreo' },
  { name: 'Dessert Pizza — White Heaven', desc: 'White choc spread, mixed berries, toasted almond' },
  { name: 'PB Banana Waffle Bowl', desc: 'Peanut butter ice cream, banana, Reese\'s, chocolate drizzle', note: 'Best-seller' },
  { name: 'Sundae — Strawberry Dream', desc: 'Vanilla ice cream, fresh strawberries, whipped cream' },
]

const drinks: MenuItem[] = [
  { name: 'Fit Shake — Berry Breaky', desc: 'Mixed berries, banana, almond milk, protein boost' },
  { name: 'Fit Shake — Mango Muscle', desc: 'Mango, pineapple, coconut water, vanilla protein' },
  { name: 'Fresh Juice — Green Dream', desc: 'Cucumber, apple, celery, spinach, lemon' },
  { name: 'Fresh Juice — Detoxer', desc: 'Beetroot, carrot, ginger, orange' },
  { name: 'Fresh Juice — Feel Good', desc: 'Watermelon, strawberry, lemon' },
  { name: 'Classic Milkshake', desc: 'Your choice of flavour, thick and creamy' },
  { name: 'Frappe', desc: 'Iced coffee or flavoured frappe' },
]

const coffee = ['Espresso', 'Long Black', 'Flat White', 'Cappuccino', 'Latte', 'Piccolo', 'Cold Brew', 'Iced Latte']

// Shared item row styles
const itemRow: React.CSSProperties = {
  padding: '1rem 0',
  borderBottom: '1px solid rgba(42,31,20,0.07)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '1rem',
}

const itemRowDark: React.CSSProperties = {
  ...itemRow,
  borderBottomColor: 'rgba(250,246,239,0.07)',
}

function Badge({ text }: { text: string }) {
  return (
    <span style={{
      flexShrink: 0,
      fontFamily: 'var(--font-dmsans)', fontWeight: 400,
      fontSize: '0.5rem', letterSpacing: '0.18em', textTransform: 'uppercase',
      color: 'var(--terra)',
      border: '1px solid var(--terra)',
      padding: '0.2rem 0.5rem',
      borderRadius: '2px',
      whiteSpace: 'nowrap',
      marginTop: '0.25rem',
    }}>{text}</span>
  )
}

function ItemName({ name, dark = false }: { name: string; dark?: boolean }) {
  return (
    <p style={{
      fontFamily: 'var(--font-playfair)', fontWeight: 600,
      fontSize: '1.05rem',
      color: dark ? '#FAF6EF' : 'var(--espresso)',
    }}>{name}</p>
  )
}

function ItemDesc({ desc, dark = false }: { desc: string; dark?: boolean }) {
  return (
    <p style={{
      fontFamily: 'var(--font-dmsans)', fontWeight: 300,
      fontSize: '0.78rem',
      color: dark ? 'rgba(250,246,239,0.4)' : 'rgba(42,31,20,0.5)',
      lineHeight: 1.5, marginTop: '0.2rem',
    }}>{desc}</p>
  )
}

export default function MenuPage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section style={{ position: 'relative', height: 'clamp(460px, 68svh, 760px)', overflow: 'hidden' }}>
        <Image
          src="/images/IMG_5795.jpeg"
          alt="Mi Casa Café brunch flat lay"
          fill priority unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
        />
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(42,31,20,0) 25%, rgba(42,31,20,0.82) 100%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 'clamp(2.5rem, 6vw, 5rem)',
          left: 'clamp(1.5rem, 5vw, 4.5rem)',
          zIndex: 1,
        }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            style={{
              fontFamily: 'var(--font-dmsans)', fontWeight: 400,
              fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase',
              color: 'var(--terra)', marginBottom: '0.75rem',
            }}
          >All day · Every day</motion.p>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease }}
          >
            <span style={{
              fontFamily: 'var(--font-dancing)', fontWeight: 600,
              fontSize: 'clamp(1.6rem, 4.5vw, 4rem)',
              color: 'var(--terra)', display: 'block', lineHeight: 1,
            }}>the</span>
            <span style={{
              fontFamily: 'var(--font-playfair)', fontWeight: 800,
              fontSize: 'clamp(3.5rem, 10vw, 9rem)',
              color: '#FAF6EF', display: 'block',
              lineHeight: 0.88, letterSpacing: '-0.02em',
            }}>Menu</span>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BREAKFAST — split photo / list
      ══════════════════════════════════════════ */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))' }}>
        {/* Photo */}
        <div style={{ position: 'relative', minHeight: 'clamp(300px, 44vw, 580px)', overflow: 'hidden' }}>
          <Image
            src="/images/IMG_5787.jpeg"
            alt="Berry waffle with fresh fruit and cream"
            fill unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          {/* Caption glass */}
          <div style={{
            position: 'absolute', bottom: '1.75rem', left: '1.75rem',
            background: 'rgba(42,31,20,0.5)', backdropFilter: 'blur(10px)',
            padding: '0.55rem 1rem', borderRadius: '2px',
          }}>
            <p style={{
              fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontWeight: 400,
              fontSize: '0.88rem', color: '#FAF6EF',
            }}>Berry waffle</p>
          </div>
        </div>

        {/* List */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          style={{
            backgroundColor: 'var(--cream)',
            padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4.5rem)',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-dmsans)', fontWeight: 400,
            fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--terra)', marginBottom: '0.3rem',
          }}>Start the day</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '2.5rem' }}>
            <span style={{ fontFamily: 'var(--font-dancing)', fontWeight: 600, fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: 'var(--terra)' }}>the</span>
            <h2 style={{
              fontFamily: 'var(--font-playfair)', fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--espresso)', lineHeight: 1,
            }}>Breakfast</h2>
          </div>

          {breakfast.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.38, ease }}
              style={itemRow}
            >
              <div>
                <ItemName name={item.name} />
                {item.desc && <ItemDesc desc={item.desc} />}
              </div>
              {item.note && <Badge text={item.note} />}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          BRUNCH — list / photo (reversed)
      ══════════════════════════════════════════ */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))' }}>
        {/* List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          style={{
            backgroundColor: 'var(--blush)',
            padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4.5rem)',
            order: 0,
          }}
        >
          <p style={{
            fontFamily: 'var(--font-dmsans)', fontWeight: 400,
            fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--terra)', marginBottom: '0.3rem',
          }}>Gourmet & generous</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '2.5rem' }}>
            <span style={{ fontFamily: 'var(--font-dancing)', fontWeight: 600, fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: 'var(--terra)' }}>the</span>
            <h2 style={{
              fontFamily: 'var(--font-playfair)', fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--espresso)', lineHeight: 1,
            }}>Brunch</h2>
          </div>

          {brunch.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.38, ease }}
              style={itemRow}
            >
              <div>
                <ItemName name={item.name} />
                {item.desc && <ItemDesc desc={item.desc} />}
              </div>
              {item.note && <Badge text={item.note} />}
            </motion.div>
          ))}
        </motion.div>

        {/* Photos — stacked schnitzel + fish tacos */}
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', order: 1, minHeight: 'clamp(300px, 44vw, 580px)' }}>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Image
              src="/images/IMG_5796.jpeg"
              alt="Herb-crusted schnitzel with sauce being poured"
              fill unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <div style={{
              position: 'absolute', bottom: '1rem', left: '1.25rem',
              background: 'rgba(42,31,20,0.5)', backdropFilter: 'blur(10px)',
              padding: '0.4rem 0.8rem', borderRadius: '2px',
            }}>
              <p style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontWeight: 400, fontSize: '0.8rem', color: '#FAF6EF' }}>Herb-Crusted Schnitzel</p>
            </div>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Image
              src="/images/IMG_5797.jpeg"
              alt="Fish tacos with pico de gallo, pickled onions and jalapeños"
              fill unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
            <div style={{
              position: 'absolute', bottom: '1rem', left: '1.25rem',
              background: 'rgba(42,31,20,0.5)', backdropFilter: 'blur(10px)',
              padding: '0.4rem 0.8rem', borderRadius: '2px',
            }}>
              <p style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontWeight: 400, fontSize: '0.8rem', color: '#FAF6EF' }}>Fish Tacos</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PHOTO BREAK — feast platter
      ══════════════════════════════════════════ */}
      <section style={{ position: 'relative', height: 'clamp(260px, 38vw, 500px)', overflow: 'hidden' }}>
        <Image
          src="/images/IMG_5786.jpeg"
          alt="Generous sharing feast platter"
          fill unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
        />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(42,31,20,0.28)' }} />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center', zIndex: 1,
          }}
        >
          <span style={{
            fontFamily: 'var(--font-dancing)', fontWeight: 600,
            fontSize: 'clamp(1.2rem, 3vw, 2.2rem)',
            color: 'var(--terra)', display: 'block', lineHeight: 1,
          }}>generous</span>
          <span style={{
            fontFamily: 'var(--font-playfair)', fontWeight: 800,
            fontSize: 'clamp(2rem, 5.5vw, 5rem)',
            color: '#FAF6EF', display: 'block',
            lineHeight: 0.9, letterSpacing: '-0.02em',
          }}>by nature</span>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          DESSERTS + DRINKS — dark two-col
      ══════════════════════════════════════════ */}
      <section style={{
        backgroundColor: 'var(--espresso)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
      }}>
        {/* Desserts */}
        <div style={{
          padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4.5rem)',
          borderRight: '1px solid rgba(250,246,239,0.06)',
        }}>
          <p style={{
            fontFamily: 'var(--font-dmsans)', fontWeight: 400,
            fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--terra)', marginBottom: '0.3rem',
          }}>Sweet finishes</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '2.5rem' }}>
            <span style={{ fontFamily: 'var(--font-dancing)', fontWeight: 600, fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: 'var(--terra)' }}>the</span>
            <h2 style={{
              fontFamily: 'var(--font-playfair)', fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FAF6EF', lineHeight: 1,
            }}>Desserts</h2>
          </div>

          {desserts.map((item) => (
            <div key={item.name} style={itemRowDark}>
              <div>
                <ItemName name={item.name} dark />
                {item.desc && <ItemDesc desc={item.desc} dark />}
              </div>
              {item.note && <Badge text={item.note} />}
            </div>
          ))}

          {/* Waffle bowl photo */}
          <div style={{
            position: 'relative', width: '100%', aspectRatio: '4/3',
            overflow: 'hidden', marginTop: '2.5rem', borderRadius: '2px',
          }}>
            <Image
              src="/images/IMG_5794.jpeg"
              alt="PB banana waffle bowl"
              fill unoptimized
              style={{ objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute', bottom: '1rem', left: '1rem',
              background: 'rgba(42,31,20,0.5)', backdropFilter: 'blur(8px)',
              padding: '0.45rem 0.85rem', borderRadius: '2px',
            }}>
              <p style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: '0.8rem', color: '#FAF6EF' }}>
                PB Banana Waffle Bowl
              </p>
            </div>
          </div>
        </div>

        {/* Drinks */}
        <div style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4.5rem)' }}>
          <p style={{
            fontFamily: 'var(--font-dmsans)', fontWeight: 400,
            fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--terra)', marginBottom: '0.3rem',
          }}>Fresh pressed & blended</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '2.5rem' }}>
            <span style={{ fontFamily: 'var(--font-dancing)', fontWeight: 600, fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: 'var(--terra)' }}>the</span>
            <h2 style={{
              fontFamily: 'var(--font-playfair)', fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FAF6EF', lineHeight: 1,
            }}>Drinks</h2>
          </div>

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

      {/* ══════════════════════════════════════════
          COFFEE — cream minimal
      ══════════════════════════════════════════ */}
      <section style={{
        backgroundColor: 'var(--sand)',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)',
      }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-dmsans)', fontWeight: 400,
            fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--terra)', marginBottom: '0.3rem',
          }}>Campos specialty</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '3rem' }}>
            <span style={{ fontFamily: 'var(--font-dancing)', fontWeight: 600, fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: 'var(--terra)' }}>the</span>
            <h2 style={{
              fontFamily: 'var(--font-playfair)', fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--espresso)', lineHeight: 1,
            }}>Coffee</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          }}>
            {coffee.map((name) => (
              <div key={name} style={{
                padding: '1.1rem 0',
                borderBottom: '1px solid rgba(42,31,20,0.08)',
              }}>
                <p style={{
                  fontFamily: 'var(--font-playfair)', fontWeight: 600,
                  fontSize: '1rem', color: 'var(--espresso)',
                }}>{name}</p>
              </div>
            ))}
          </div>

          <p style={{
            marginTop: '2.5rem',
            fontFamily: 'var(--font-dmsans)', fontWeight: 300,
            fontSize: '0.72rem', color: 'rgba(42,31,20,0.35)', letterSpacing: '0.04em',
          }}>
            Menu may vary by location · Please advise of any allergies or dietary requirements
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: 'var(--espresso)',
        padding: '2rem clamp(1.5rem, 6vw, 5rem)',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem' }}>
          <span style={{ fontFamily: 'var(--font-dancing)', fontWeight: 600, fontSize: '1rem', color: 'var(--terra)' }}>Mi</span>
          <span style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: '1rem', color: 'rgba(250,246,239,0.45)' }}>Casa Café</span>
        </div>
        <p style={{
          fontFamily: 'var(--font-dmsans)', fontWeight: 300,
          fontSize: '0.65rem', letterSpacing: '0.1em',
          color: 'rgba(250,246,239,0.25)',
        }}>© {new Date().getFullYear()} · Brisbane</p>
      </footer>
    </>
  )
}


