import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data'
const layers = {
  rest: (i: number) => ({ rotate: (i - 1) * 3, x: (i - 1) * 8, y: (1 - i) * 4, scale: 1 }),
  hover: (i: number) => ({ rotate: (i - 1) * 9, x: (i - 1) * 30, y: (1 - i) * 6, scale: i === 2 ? 1.07 : 0.97 }),
}
export default function ProjectCard({ project: p, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  return (
    <motion.article initial="rest" whileHover="hover" whileFocus="hover" animate="rest" whileInView={{ opacity: 1 }}
      className="glass group relative flex flex-col rounded-[2rem] p-5 transition-shadow hover:shadow-lift" tabIndex={-1}>
      <motion.div className="relative h-48 [perspective:800px]" whileHover={{ y: -4 }}>
        {[0, 1, 2].map(i => (
          <motion.div key={i} custom={i} variants={layers} transition={{ type: 'spring', stiffness: 220, damping: 20 }}
            className={`absolute inset-x-6 inset-y-2 overflow-hidden rounded-2xl border-2 border-white bg-gradient-to-br ${p.tone} shadow-soft`} style={{ zIndex: i }}>
            {p.images?.[i] ? <img src={p.images[i]} alt={`${p.title} screenshot ${i + 1}`} className="h-full w-full object-cover" /> : (
              <div className="p-3" aria-hidden><div className="flex gap-1"><i className="h-2 w-2 rounded-full bg-white/80" /><i className="h-2 w-2 rounded-full bg-white/80" /></div>
                <div className="mt-3 h-3 w-2/3 rounded-full bg-white/70" /><div className="mt-2 h-3 w-1/2 rounded-full bg-white/50" /><div className="mt-4 h-14 rounded-xl bg-white/40" /></div>)}
          </motion.div>
        ))}
        <motion.span variants={{ rest: { rotate: -6, y: 0 }, hover: { rotate: 4, y: -6 } }} className="absolute -top-1 right-0 z-10 rounded-2xl border-2 border-white bg-white/90 px-3 py-1 text-xs font-extrabold shadow-soft">{p.sticker}</motion.span>
      </motion.div>
      <p className="mt-5 text-sm font-extrabold text-powder">Project {String(index + 1).padStart(2, '0')}</p>
      <h3 className="mt-1 font-display text-xl font-bold">{p.title}</h3>
      <p className="mt-2 line-clamp-3 text-soft">{p.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map(t => <li key={t} className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold ring-1 ring-aqua">{t}</li>)}</ul>
      <div className="mt-5 flex items-center gap-4">
        <button onClick={onOpen} className="btn bg-ink px-4 py-2 text-sm text-snow">View details</button>
        {p.links?.[0] && <a href={p.links[0].href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-bold underline decoration-powder underline-offset-4">Visit <ArrowUpRight size={14} aria-hidden /><span className="sr-only">{p.links[0].label} (opens in new tab)</span></a>}
      </div>
    </motion.article>
  )
}
