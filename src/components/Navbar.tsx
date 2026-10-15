import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Code2,
  FolderKanban,
  GraduationCap,
  House,
  Mail,
  Menu,
  Sparkles,
  UserRound,
  X,
} from 'lucide-react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']
const sidebarLinks = [
  { label: 'Home', id: 'home', icon: House },
  { label: 'About', id: 'about', icon: UserRound },
  { label: 'Skills', id: 'skills', icon: Code2 },
  { label: 'Projects', id: 'projects', icon: FolderKanban },
  { label: 'Experience', id: 'experience', icon: BriefcaseBusiness },
  { label: 'Education', id: 'education', icon: GraduationCap },
  { label: 'Contact', id: 'contact', icon: Mail },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState('home')
  const [sidebarTop, setSidebarTop] = useState(0)
  const [sidebarMaxHeight, setSidebarMaxHeight] = useState('calc(100vh - 24px)')

  useEffect(() => {
    const updateNavigation = () => {
      const y = window.scrollY
      setScrolled(y > 90)

      const footerTop = document.getElementById('site-footer')?.getBoundingClientRect().top ?? window.innerHeight
      const availableHeight = Math.max(0, Math.min(window.innerHeight - 24, footerTop - 24))
      const expectedHeight = Math.min(380, availableHeight)
      setSidebarTop(Math.max(12, Math.min((window.innerHeight - expectedHeight) / 2, footerTop - expectedHeight - 12)))
      setSidebarMaxHeight(`${availableHeight}px`)

      const current = [...sidebarLinks].reverse().find(({ id }) => {
        const section = document.getElementById(id)
        return section && section.getBoundingClientRect().top <= 150
      })
      setActive(current?.id ?? 'home')
    }

    updateNavigation()
    window.addEventListener('scroll', updateNavigation, { passive: true })
    return () => window.removeEventListener('scroll', updateNavigation)
  }, [])

  return (
    <>
      <header className={`fixed inset-x-0 top-3 z-40 px-3 ${scrolled ? 'md:hidden' : ''}`}>
        <nav aria-label="Main" className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-2.5">
          <a href="#home" className="flex items-center gap-1.5 font-display text-lg font-bold">
            <motion.span animate={{ rotate: [0, 18, 0] }} transition={{ duration: 4, repeat: Infinity }}><Sparkles size={18} className="text-powder" aria-hidden="true" /></motion.span>Aarati
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

      <AnimatePresence>
        {scrolled && (
          <motion.aside
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -18 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{ top: sidebarTop, maxHeight: sidebarMaxHeight }}
            className="glass fixed left-4 z-40 hidden flex-col gap-2 overflow-y-auto rounded-3xl p-2 shadow-lift md:flex"
          >
            <button
              type="button"
              onClick={() => setExpanded(value => !value)}
              aria-label={expanded ? 'Collapse navigation' : 'Expand navigation'}
              aria-expanded={expanded}
              className="flex h-10 items-center justify-center gap-3 rounded-2xl bg-white/60 px-2 text-sm font-bold text-soft transition hover:bg-aqua/60 hover:text-ink"
            >
              {expanded ? <ChevronLeft size={19} aria-hidden="true" /> : <ChevronRight size={19} aria-hidden="true" />}
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    Menu
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <div className="h-px bg-powder/20" />
            <nav aria-label="Section navigation">
              <ul className="flex flex-col gap-1">
                {sidebarLinks.map(({ label, id, icon: Icon }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      aria-label={label}
                      aria-current={active === id ? 'location' : undefined}
                      title={expanded ? undefined : label}
                      className={`flex h-10 items-center gap-3 rounded-2xl px-2.5 text-sm font-bold transition-colors hover:bg-aqua/60 hover:text-ink ${active === id ? 'bg-sage/75 text-ink' : 'text-soft'}`}
                    >
                      <Icon size={19} className="shrink-0" aria-hidden="true" />
                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.span
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 'auto' }}
                            exit={{ opacity: 0, width: 0 }}
                            className="overflow-hidden whitespace-nowrap"
                          >
                            {label}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
