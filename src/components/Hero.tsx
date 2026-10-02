import { motion } from 'framer-motion'
import { ArrowDown, Code2, Heart, Mail, Star } from 'lucide-react'
import { profile } from '../data'
import { Sticker } from './ui'
export default function Hero() {
  return (
    <section id="home" className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-10 overflow-hidden px-5 pb-16 pt-32 md:grid-cols-[1.15fr_.85fr]">
      <motion.div aria-hidden className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-aqua/60 blur-3xl" animate={{ x: [0, 30, 0], y: [0, 20, 0] }} transition={{ duration: 14, repeat: Infinity }} />
      <motion.div aria-hidden className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-blush/70 blur-3xl" animate={{ x: [0, -30, 0] }} transition={{ duration: 16, repeat: Infinity }} />
      <motion.div className="relative" initial="h" animate="s" transition={{ staggerChildren: 0.12 }}>
        {[
          <span key="a" className="glass inline-block rounded-full px-4 py-1.5 text-sm font-extrabold">Hello! ♡</span>,
          <h1 key="b" className="mt-5 font-display text-5xl font-bold leading-[1.05] sm:text-7xl">{profile.name}</h1>,
          <p key="c" className="mt-3 text-xl font-bold text-powder sm:text-2xl">{profile.title} <span className="text-soft">|</span> {profile.sub}</p>,
          <p key="d" className="mt-5 max-w-lg text-lg text-soft">I build MERN, Laravel and FastAPI web apps, from clean interfaces to the APIs behind them.</p>,
          <div key="e" className="mt-8 flex flex-wrap gap-3">
            <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} href="#projects" className="btn bg-ink text-snow shadow-soft">View My Work <ArrowDown size={18} aria-hidden /></motion.a>
            <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} href="#contact" className="btn glass"><Mail size={18} aria-hidden /> Let's Connect</motion.a>
          </div>,
        ].map((el, i) => <motion.div key={i} variants={{ h: { opacity: 0, y: 20 }, s: { opacity: 1, y: 0 } }}>{el}</motion.div>)}
      </motion.div>
      <div className="relative mx-auto h-72 w-full max-w-sm sm:h-96" aria-hidden>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.7 }}
          className="glass absolute inset-6 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-sage/80 via-aqua/60 to-blush/70 p-6">
          <div className="flex gap-1.5"><i className="h-3 w-3 rounded-full bg-blush" /><i className="h-3 w-3 rounded-full bg-sage" /><i className="h-3 w-3 rounded-full bg-powder" /></div>
          <pre className="mt-6 font-mono text-sm leading-7 text-ink">{`const aarati = {\n  stack: "MERN",\n  also: ["Laravel", "FastAPI"],\n  mood: "♡"\n}`}</pre>
        </motion.div>
        <Sticker className="-top-1 left-0" rotate={-10}><Code2 size={18} className="text-powder" /></Sticker>
        <Sticker className="right-0 top-6" rotate={9} delay={1}><Star size={18} className="fill-blush text-blush" /></Sticker>
        <Sticker className="bottom-2 right-8" rotate={-6} delay={2}><Heart size={18} className="fill-blush text-blush" /></Sticker>
      </div>
    </section>
  )
}
