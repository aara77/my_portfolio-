import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import type { Project } from '../data'
export default function ProjectModal({ project: p, onClose }: { project: Project | null; onClose: () => void }) {
  const ref = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!p) return
    ref.current?.focus()
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k); document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [p, onClose])
  return (
    <AnimatePresence>
      {p && (
        <motion.div className="fixed inset-0 z-50 grid place-items-center bg-ink/30 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div role="dialog" aria-modal="true" aria-label={p.title} onClick={e => e.stopPropagation()}
            initial={{ y: 30, scale: 0.96, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
            className="glass max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-[2rem] bg-snow/90 p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div><span className="rounded-full bg-blush/70 px-3 py-1 text-xs font-extrabold">{p.sticker}</span>
                <h3 className="mt-3 font-display text-2xl font-bold">{p.title}</h3></div>
              <button ref={ref} onClick={onClose} aria-label="Close project details" className="rounded-full bg-white p-2 shadow-soft"><X size={18} /></button>
            </div>
            <p className="mt-4 text-soft">{p.description}</p>
            {p.features && <><h4 className="mt-6 font-bold">Features</h4><ul className="mt-2 space-y-1.5">{p.features.map(f => <li key={f} className="flex gap-2 text-soft"><span className="text-powder" aria-hidden>✦</span>{f}</li>)}</ul></>}
            <h4 className="mt-6 font-bold">Tech</h4>
            <ul className="mt-2 flex flex-wrap gap-2">{p.tech.map(t => <li key={t} className="rounded-full bg-aqua/60 px-3 py-1 text-sm font-bold">{t}</li>)}</ul>
            {p.links && <div className="mt-7 flex flex-wrap gap-3">{p.links.map(l => <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn bg-ink text-snow">{l.label} <ArrowUpRight size={16} aria-hidden /></a>)}</div>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
