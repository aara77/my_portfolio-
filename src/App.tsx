import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { projects, type Project } from './data'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import ProjectModal from './components/ProjectModal'
import { Reveal, Section, SectionHeading } from './components/ui'
import { About, Skills, Experience, Education, Achievements, Contact, Footer } from './components/Sections'
export default function App() {
  const [open, setOpen] = useState<Project | null>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const close = useCallback(() => setOpen(null), [])

  useEffect(() => {
    const updateScrollTopVisibility = () => setShowScrollTop(window.scrollY > 400)
    updateScrollTopVisibility()
    window.addEventListener('scroll', updateScrollTopVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollTopVisibility)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero /><About /><Skills />
        <Section id="projects">
          <SectionHeading title="Featured projects" hint="Hover a card to fan out its screenshots, click for details." />
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => <Reveal key={p.id} delay={(i % 3) * 0.08}><ProjectCard project={p} index={i} onOpen={() => setOpen(p)} /></Reveal>)}
          </div>
        </Section>
        <Experience /><Education /><Achievements /><Contact />
      </main>
      <Footer />
      <ProjectModal project={open} onClose={close} />
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            aria-label="Scroll to top"
            title="Scroll to top"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="glass fixed bottom-5 right-5 z-30 grid h-12 w-12 place-items-center rounded-full text-ink shadow-soft transition hover:-translate-y-1 hover:bg-white sm:bottom-7 sm:right-7"
          >
            <ArrowUp size={20} aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
