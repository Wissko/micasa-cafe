'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

interface MenuItem {
  name: string
  desc?: string
}

interface MenuSection {
  title: string
  accent: string
  bg: string
  items: MenuItem[]
}

const menuSections: MenuSection[] = [
  {
    title: 'Breakfast',
    accent: 'Start the day right',
    bg: 'var(--blush)',
    items: [
      { name: 'Buttermilk Pancakes', desc: 'Classic stack with maple syrup & whipped butter' },
      { name: 'Blueberry Pancakes', desc: 'Fresh blueberries folded into fluffy buttermilk batter' },
      { name: 'Strawberry Pancakes', desc: 'Seasonal strawberries with lemon cream' },
      { name: 'Nutella Pancakes', desc: 'Warm Nutella drizzle, banana & crushed hazelnuts' },
      { name: 'Classic Waffles', desc: 'Golden Belgian-style waffles with your choice of toppings' },
      { name: 'Açaï Bowl – Super Green', desc: 'Spinach, banana, mango, granola & coconut flakes' },
      { name: 'Açaï Bowl – Pitaya Passion', desc: 'Dragon fruit, passionfruit, chia & honey' },
      { name: 'Açaï Bowl – Tropical Colada', desc: 'Coconut, pineapple, mango & toasted granola' },
    ],
  },
  {
    title: 'Brunch',
    accent: 'Gourmet & generous',
    bg: 'var(--sand)',
    items: [
      { name: 'Sujak Sensation', desc: 'House-spiced sujak sausage, poached eggs, grilled sourdough & house relish' },
      { name: 'Haloumi Bruschetta', desc: 'Pan-seared haloumi, heirloom tomato, basil oil & toasted ciabatta' },
    ],
  },
  {
    title: 'Desserts',
    accent: 'Sweet finishes',
    bg: 'var(--blush)',
    items: [
      { name: 'Dessert Pizza – Nutella Madness', desc: 'Thin crispy base, Nutella, banana, strawberry & crushed Oreo' },
      { name: 'Dessert Pizza – White Heaven', desc: 'White chocolate spread, mixed berries & toasted almond' },
      { name: 'Sundae – Strawberry Dream', desc: 'Vanilla ice cream, fresh strawberries, whipped cream & strawberry sauce' },
    ],
  },
  {
    title: 'Drinks',
    accent: 'Fresh pressed & blended',
    bg: 'var(--cream)',
    items: [
      { name: 'Fit Shake – Berry Breaky', desc: 'Mixed berries, banana, almond milk & protein boost' },
      { name: 'Fit Shake – Mango Muscle', desc: 'Mango, pineapple, coconut water & vanilla protein' },
      { name: 'Fit Shake – Strawberry Slam', desc: 'Strawberry, honey, oat milk & chia seeds' },
      { name: 'Fresh Juice – Green Dream', desc: 'Cucumber, apple, celery, spinach & lemon' },
      { name: 'Fresh Juice – Detoxer', desc: 'Beetroot, carrot, ginger & orange' },
      { name: 'Fresh Juice – Pear Flair', desc: 'Pear, apple, mint & lime' },
      { name: 'Fresh Juice – Feel Good', desc: 'Watermelon, strawberry & lemon' },
      { name: 'Classic Milkshake', desc: 'Your choice of flavour, thick and creamy' },
      { name: 'Frappe', desc: 'Blended iced coffee or flavoured frappe — ask your server' },
    ],
  },
  {
    title: 'Coffee',
    accent: 'Campos specialty',
    bg: 'var(--espresso)',
    items: [
      { name: 'Espresso' },
      { name: 'Long Black' },
      { name: 'Flat White' },
      { name: 'Cappuccino' },
      { name: 'Latte' },
      { name: 'Piccolo' },
      { name: 'Cold Brew' },
      { name: 'Iced Latte' },
    ],
  },
]

export default function MenuPage() {
  return (
    <>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, var(--terra) 0%, #D4734E 100%)',
        padding: 'clamp(6rem, 12vw, 10rem) 2rem clamp(3rem, 6vw, 5rem)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="tile-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.span
            {...fadeUp(0)}
            style={{
              fontFamily: 'var(--font-dancing)',
              fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
              color: 'rgba(250,246,239,0.85)',
              display: 'block',
              marginBottom: '0.3rem',
            }}
          >
            all day,
          </motion.span>
          <motion.h1
            {...fadeUp(0.1)}
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(3rem, 8vw, 5.5rem)',
              fontWeight: 800,
              color: 'var(--cream)',
              lineHeight: 1,
              marginBottom: '1rem',
            }}
          >
            Our Menu
          </motion.h1>
          <motion.p
            {...fadeUp(0.2)}
            style={{
              fontFamily: 'var(--font-dmsans)',
              fontSize: '1rem',
              color: 'rgba(250,246,239,0.75)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Breakfast · Brunch · Desserts · Drinks · Coffee
          </motion.p>
        </div>
      </section>

      {/* Menu sections */}
      {menuSections.map((section, si) => (
        <section
          key={section.title}
          style={{
            backgroundColor: section.bg,
            padding: 'clamp(3rem, 6vw, 5rem) 2rem',
          }}
        >
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            {/* Section header */}
            <motion.div
              {...fadeUp(0)}
              style={{ marginBottom: '2.5rem', borderBottom: '1px solid rgba(42,31,20,0.12)', paddingBottom: '1rem' }}
            >
              <span style={{
                fontFamily: 'var(--font-dancing)',
                fontSize: '1.1rem',
                color: section.title === 'Coffee' ? 'var(--terra)' : 'var(--terra)',
                display: 'block',
                marginBottom: '0.2rem',
              }}>{section.accent}</span>
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 700,
                color: section.title === 'Coffee' ? 'var(--cream)' : 'var(--espresso)',
                lineHeight: 1.1,
              }}>{section.title}</h2>
            </motion.div>

            {/* Items grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}>
              {section.items.map((item, ii) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: ii * 0.06,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  style={{
                    padding: '1.25rem 1.5rem',
                    borderRadius: '6px',
                    backgroundColor: section.title === 'Coffee'
                      ? 'rgba(250,246,239,0.06)'
                      : 'rgba(255,255,255,0.55)',
                    borderLeft: '3px solid var(--terra)',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: section.title === 'Coffee' ? 'var(--cream)' : 'var(--espresso)',
                    marginBottom: item.desc ? '0.3rem' : 0,
                  }}>{item.name}</h3>
                  {item.desc && (
                    <p style={{
                      fontFamily: 'var(--font-dmsans)',
                      fontSize: '0.85rem',
                      color: section.title === 'Coffee' ? 'rgba(250,246,239,0.6)' : 'rgba(42,31,20,0.65)',
                      lineHeight: 1.5,
                    }}>{item.desc}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer note */}
      <section style={{ backgroundColor: 'var(--sand)', padding: '3rem 2rem', textAlign: 'center' }}>
        <p style={{
          fontFamily: 'var(--font-dmsans)',
          fontSize: '0.85rem',
          color: 'var(--espresso)',
          opacity: 0.6,
          maxWidth: '500px',
          margin: '0 auto',
        }}>
          Menu items may vary by location. Please advise our team of any allergies or dietary requirements.
        </p>
      </section>
    </>
  )
}
