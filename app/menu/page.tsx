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
  { name: 'Buttermilk Pancakes', desc: 'Classic stack with maple syrup & whipped butter' },
  { name: 'Blueberry Pancakes', desc: 'Fresh blueberries folded into fluffy batter' },
  { name: 'Strawberry Pancakes', desc: 'Seasonal strawberries with lemon cream' },
  { name: 'Lotus Biscoff Pancakes', desc: 'Biscoff sauce, banana, crushed speculoos, white flower', note: 'Signature' },
  { name: 'Classic Waffles', desc: 'Golden Belgian waffles, choice of toppings' },
  { name: 'Berry Waffle', desc: 'Mixed berries, chantilly, coulis, edible flower', note: 'Signature' },
  { name: 'Açaï Bowl — Super Green', desc: 'Spinach, banana, mango, granola, coconut flakes' },
  { name: 'Açaï Bowl — Pitaya Passion', desc: 'Dragon fruit, passionfruit, chia, honey' },
  { name: 'Açaï Bowl — Tropical Colada', desc: 'Coconut, pineapple, mango, toasted granola' },
]

const brunch: MenuItem[] = [
  { name: 'Pistachio French Toast', desc: 'Brioche, pistachio cream, white chocolate, strawberries, Turkish delight', note: 'Signature' },
  { name: 'Sujak Sensation', desc: 'House-spiced sujak, poached eggs, grilled sourdough, house relish' },
  { name: 'Haloumi Bruschetta', desc: 'Pan-seared haloumi, heirloom tomato, basil oil, toasted ciabatta' },
  { name: 'Herb-Crusted Schnitzel', desc: 'Creamy mushroom sauce, crinkle fries, garden salad' },
  { name: 'Fish Tacos', desc: 'Crispy battered fish, pickled onions, jalapeños, pico de gallo, lime' },
]

const desserts: MenuItem[] = [
  { name: 'Dessert Pizza — Nutella Madness', desc: 'Crispy base, Nutella, banana, strawberry, crushed Oreo' },
  { name: 'Dessert Pizza — White Heaven', desc: 'White chocolate, mixed berries, toasted almond' },
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

export default function MenuPage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — full bleed, text bottom-left
      ══════════════════════════════════════════ */}
      <section style={{ position: 'relative', height: 'clamp(460px, 70svh, 780px)', overflow: 'hidden' }}>
        <Image
          src="/images/IMG_5795.jpeg"
          alt="Mi Casa Café brunch flat lay"
          fill priority unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
        />
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(28,20,16,0) 20%, rgba(28,20,16,0.78) 100%)',
        }} />
        <div style={{
          position: 'absolute', bottom: 'clamp(2.5rem, 6vw, 5rem)',
          left: 'clamp(1.5rem, 5vw, 4.5rem)',
          zIndex: 1,
        }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            style={{
              fontFamily: 'var(--font-jost)',
              fontWeight: 400,
              fontSize: '0.58rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--terra)',
              marginBottom: '0.8rem',
            }}
          >
            All day · Every day
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease }}
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(3.5rem, 10vw, 9rem)',
              lineHeight: 0.9,
              color: '#FAF7F2',
              letterSpacing: '-0.02em',
            }}
          >
            The Menu
          </motion.h1>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BREAKFAST — split layout with photo
      ══════════════════════════════════════════ */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
      }}>
        {/* Photo — Berry waffle */}
        <div style={{ position: 'relative', minHeight: 'clamp(320px, 45vw, 600px)', overflow: 'hidden' }}>
          <Image
            src="/images/IMG_5787.jpeg"
            alt="Berry waffle with fresh fruit and cream"
            fill unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div aria-hidden="true" style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(28,20,16,0) 50%, rgba(28,20,16,0.18) 100%)',
          }} />
          {/* Caption overlay */}
          <div style={{
            position: 'absolute', bottom: '1.75rem', left: '1.75rem',
            backgroundColor: 'rgba(28,20,16,0.55)',
            backdropFilter: 'blur(8px)',
            padding: '0.6rem 1.1rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '0.9rem',
              color: '#FAF7F2',
            }}>Berry waffle</p>
          </div>
        </div>

        {/* Menu list */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          style={{
            backgroundColor: 'var(--offwhite)',
            padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4.5rem)',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-jost)', fontWeight: 400,
            fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--terra)', marginBottom: '0.5rem',
          }}>Start the day</p>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300,
            fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--espresso)',
            marginBottom: '2.5rem', lineHeight: 1,
          }}>Breakfast</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {breakfast.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4, ease }}
                style={{
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(28,20,16,0.07)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                }}
              >
                <div>
                  <p style={{
                    fontFamily: 'var(--font-cormorant)', fontWeight: 600,
                    fontSize: '1.05rem', color: 'var(--espresso)',
                    marginBottom: item.desc ? '0.2rem' : 0,
                  }}>{item.name}</p>
                  {item.desc && (
                    <p style={{
                      fontFamily: 'var(--font-jost)', fontWeight: 300,
                      fontSize: '0.78rem', color: 'rgba(28,20,16,0.5)', lineHeight: 1.5,
                    }}>{item.desc}</p>
                  )}
                </div>
                {item.note && (
                  <span style={{
                    flexShrink: 0,
                    fontFamily: 'var(--font-jost)', fontWeight: 500,
                    fontSize: '0.5rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: 'var(--terra)',
                    border: '1px solid var(--terra)',
                    padding: '0.2rem 0.5rem',
                    whiteSpace: 'nowrap',
                    marginTop: '0.2rem',
                  }}>{item.note}</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          BRUNCH — reversed split
      ══════════════════════════════════════════ */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
      }}>
        {/* Menu list first on desktop (order trick via CSS) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          style={{
            backgroundColor: 'var(--sand)',
            padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4.5rem)',
            order: 0,
          }}
        >
          <p style={{
            fontFamily: 'var(--font-jost)', fontWeight: 400,
            fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--terra)', marginBottom: '0.5rem',
          }}>Gourmet & generous</p>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300,
            fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--espresso)',
            marginBottom: '2.5rem', lineHeight: 1,
          }}>Brunch</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {brunch.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4, ease }}
                style={{
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(28,20,16,0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                }}
              >
                <div>
                  <p style={{
                    fontFamily: 'var(--font-cormorant)', fontWeight: 600,
                    fontSize: '1.05rem', color: 'var(--espresso)',
                    marginBottom: item.desc ? '0.2rem' : 0,
                  }}>{item.name}</p>
                  {item.desc && (
                    <p style={{
                      fontFamily: 'var(--font-jost)', fontWeight: 300,
                      fontSize: '0.78rem', color: 'rgba(28,20,16,0.5)', lineHeight: 1.5,
                    }}>{item.desc}</p>
                  )}
                </div>
                {item.note && (
                  <span style={{
                    flexShrink: 0,
                    fontFamily: 'var(--font-jost)', fontWeight: 500,
                    fontSize: '0.5rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: 'var(--terra)',
                    border: '1px solid var(--terra)',
                    padding: '0.2rem 0.5rem',
                    whiteSpace: 'nowrap',
                    marginTop: '0.2rem',
                  }}>{item.note}</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Photo — pistachio french toast */}
        <div style={{ position: 'relative', minHeight: 'clamp(320px, 45vw, 600px)', overflow: 'hidden', order: 1 }}>
          <Image
            src="/images/IMG_5793.jpeg"
            alt="Pistachio French toast with strawberries"
            fill unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div style={{
            position: 'absolute', bottom: '1.75rem', left: '1.75rem',
            backgroundColor: 'rgba(28,20,16,0.55)',
            backdropFilter: 'blur(8px)',
            padding: '0.6rem 1.1rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '0.9rem',
              color: '#FAF7F2',
            }}>Pistachio French toast</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PHOTO BREAK — full width feast
      ══════════════════════════════════════════ */}
      <section style={{ position: 'relative', height: 'clamp(280px, 40vw, 520px)', overflow: 'hidden' }}>
        <Image
          src="/images/IMG_5786.jpeg"
          alt="Mi Casa Café — generous sharing feast platter"
          fill unoptimized
          style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
        />
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: 'rgba(28,20,16,0.25)',
        }} />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'var(--font-cormorant)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(1.4rem, 4vw, 3.5rem)',
            color: 'rgba(250,247,242,0.9)',
            textAlign: 'center',
            letterSpacing: '-0.01em',
            whiteSpace: 'nowrap',
          }}
        >
          Generous by nature
        </motion.p>
      </section>

      {/* ══════════════════════════════════════════
          DESSERTS + DRINKS — two-col dark
      ══════════════════════════════════════════ */}
      <section style={{
        backgroundColor: 'var(--espresso)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
        gap: 0,
      }}>
        {/* Desserts */}
        <div style={{
          padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4.5rem)',
          borderRight: '1px solid rgba(250,247,242,0.06)',
        }}>
          <p style={{
            fontFamily: 'var(--font-jost)', fontWeight: 400,
            fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--terra)', marginBottom: '0.5rem',
          }}>Sweet finishes</p>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300,
            fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FAF7F2',
            marginBottom: '2.5rem', lineHeight: 1,
          }}>Desserts</h2>
          {desserts.map((item, i) => (
            <div key={item.name} style={{
              padding: '0.9rem 0',
              borderBottom: '1px solid rgba(250,247,242,0.06)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem',
            }}>
              <div>
                <p style={{
                  fontFamily: 'var(--font-cormorant)', fontWeight: 600,
                  fontSize: '1.05rem', color: '#FAF7F2',
                  marginBottom: item.desc ? '0.2rem' : 0,
                }}>{item.name}</p>
                {item.desc && (
                  <p style={{
                    fontFamily: 'var(--font-jost)', fontWeight: 300,
                    fontSize: '0.78rem', color: 'rgba(250,247,242,0.38)', lineHeight: 1.5,
                  }}>{item.desc}</p>
                )}
              </div>
              {item.note && (
                <span style={{
                  flexShrink: 0,
                  fontFamily: 'var(--font-jost)', fontWeight: 500,
                  fontSize: '0.5rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'var(--terra)',
                  border: '1px solid var(--terra)',
                  padding: '0.2rem 0.5rem',
                  whiteSpace: 'nowrap',
                  marginTop: '0.2rem',
                }}>{item.note}</span>
              )}
            </div>
          ))}

          {/* Dessert photo */}
          <div style={{
            position: 'relative', width: '100%', aspectRatio: '4/3',
            overflow: 'hidden', marginTop: '2.5rem',
          }}>
            <Image
              src="/images/IMG_5794.jpeg"
              alt="PB banana waffle bowl"
              fill unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </div>

        {/* Drinks */}
        <div style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4.5rem)' }}>
          <p style={{
            fontFamily: 'var(--font-jost)', fontWeight: 400,
            fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--terra)', marginBottom: '0.5rem',
          }}>Fresh pressed & blended</p>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300,
            fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FAF7F2',
            marginBottom: '2.5rem', lineHeight: 1,
          }}>Drinks</h2>
          {drinks.map((item) => (
            <div key={item.name} style={{
              padding: '0.9rem 0',
              borderBottom: '1px solid rgba(250,247,242,0.06)',
            }}>
              <p style={{
                fontFamily: 'var(--font-cormorant)', fontWeight: 600,
                fontSize: '1.05rem', color: '#FAF7F2',
                marginBottom: item.desc ? '0.2rem' : 0,
              }}>{item.name}</p>
              {item.desc && (
                <p style={{
                  fontFamily: 'var(--font-jost)', fontWeight: 300,
                  fontSize: '0.78rem', color: 'rgba(250,247,242,0.38)', lineHeight: 1.5,
                }}>{item.desc}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COFFEE — minimal centered
      ══════════════════════════════════════════ */}
      <section style={{
        backgroundColor: 'var(--cream)',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)',
      }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-jost)', fontWeight: 400,
            fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--terra)', marginBottom: '0.5rem',
          }}>Campos specialty</p>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300,
            fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--espresso)',
            marginBottom: '3rem', lineHeight: 1,
          }}>Coffee</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '0',
          }}>
            {coffee.map((name) => (
              <div key={name} style={{
                padding: '1.1rem 0',
                borderBottom: '1px solid rgba(28,20,16,0.07)',
              }}>
                <p style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  color: 'var(--espresso)',
                }}>{name}</p>
              </div>
            ))}
          </div>

          <p style={{
            marginTop: '3rem',
            fontFamily: 'var(--font-jost)',
            fontWeight: 300,
            fontSize: '0.75rem',
            color: 'rgba(28,20,16,0.38)',
            letterSpacing: '0.04em',
          }}>
            Menu may vary by location · Please advise of any allergies or dietary requirements
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: 'var(--espresso)',
        padding: '2rem clamp(1.5rem, 6vw, 5rem)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem',
      }}>
        <p style={{
          fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 300,
          fontSize: '1.05rem', color: 'rgba(250,247,242,0.45)',
        }}>Mi Casa Café</p>
        <p style={{
          fontFamily: 'var(--font-jost)', fontWeight: 300,
          fontSize: '0.65rem', letterSpacing: '0.1em',
          color: 'rgba(250,247,242,0.25)',
        }}>© {new Date().getFullYear()} · Brisbane</p>
      </footer>
    </>
  )
}
