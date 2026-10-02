import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Sparkles, X } from 'lucide-react'
const links = ['Home','About','Skills','Projects','Experience','Contact']
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-3 z-40 px-3">
      <nav aria-label="Main" className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-2.5">
        <a href="#home" className="flex items-center gap-1.5 font-display text-lg font-bold">
          <motion.span animate={{ rotate: [0, 18, 0] }} transition={{ duration: 4, repeat: Infinity }}><Sparkles size={18} className="text-powder" aria-hidden /></motion.span>Aarati
        </a>
        <ul className="hidden gap-1 md:flex">
          {links.map(l => <li key={l}><a href={`#${l.toLowerCase()}`} className="rounded-full px-3.5 py-1.5 text-sm font-bold text-soft transition hover:bg-aqua/60 hover:text-ink">{l}</a></li>)}
        </ul>
        <button className="rounded-full p-2 md:hidden" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="glass mx-auto mt-2 max-w-5xl rounded-3xl p-3 md:hidden">
            {links.map(l => <li key={l}><a onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`} className="block rounded-2xl px-4 py-3 font-bold hover:bg-aqua/50">{l}</a></li>)}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
