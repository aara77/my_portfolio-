import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export const Reveal = ({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay, ease: 'easeOut' }}>{children}</motion.div>
)

export const Sticker = ({ children, className = '', rotate = -8, delay = 0 }: { children: ReactNode; className?: string; rotate?: number; delay?: number }) => (
  <motion.span aria-hidden="true" style={{ rotate }}
    className={`absolute select-none rounded-2xl border-2 border-white bg-white/85 px-2.5 py-1.5 text-sm font-extrabold shadow-soft ${className}`}
    animate={{ y: [0, -8, 0], rotate: [rotate - 3, rotate + 3, rotate - 3] }}
    transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}>{children}</motion.span>
)

export const GlassCard = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    className={`glass rounded-3xl p-6 hover:shadow-lift ${className}`}>{children}</motion.div>
)

export const Section = ({ id, children }: { id: string; children: ReactNode }) => (
  <section id={id} className="relative mx-auto max-w-6xl scroll-mt-16 px-5 py-16 sm:py-24">{children}</section>
)

export const SectionHeading = ({ title, hint }: { title: string; hint?: string }) => (
  <Reveal className="mb-10 max-w-xl">
    <h2 className="font-display text-3xl font-bold sm:text-4xl">{title} <span className="text-powder" aria-hidden>✦</span></h2>
    {hint && <p className="mt-2 text-soft">{hint}</p>}
  </Reveal>
)
