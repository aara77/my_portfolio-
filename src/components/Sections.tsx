import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Award, GraduationCap, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { achievements, certification, education, experience, focus, profile, skills } from '../data'
import { GlassCard, Reveal, Section, SectionHeading, Sticker } from './ui'

// 📸 Put your photo in /public (e.g. public/aarati.jpg) and set: const ABOUT_IMAGE = '/aarati.jpg'
const ABOUT_IMAGE = ''

export const About = () => (
  <Section id="about">
    <SectionHeading title="About me" />
    <div className="grid items-center gap-10 md:grid-cols-[.8fr_1.2fr]">
      <Reveal className="mx-auto w-full max-w-xs">
        <div className="relative">
          <div aria-hidden className="absolute inset-0 -rotate-6 rounded-[2.5rem] bg-blush/70" />
          <div aria-hidden className="absolute inset-0 rotate-3 rounded-[2.5rem] bg-aqua/70" />
          <motion.figure whileHover={{ rotate: -1, scale: 1.02 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-[6px] border-white bg-gradient-to-br from-sage to-aqua shadow-lift">
            {ABOUT_IMAGE ? (
              <img src={ABOUT_IMAGE} alt="Portrait of Aarati Rai" className="h-full w-full object-cover" />
            ) : (
              <div className="grid h-full w-full place-items-center p-6 text-center text-soft">
                <div><span className="text-4xl" aria-hidden>📸</span>
                  <p className="mt-2 font-bold">Your photo goes here</p>
                  <p className="text-sm">Set ABOUT_IMAGE in Sections.tsx</p></div>
              </div>
            )}
          </motion.figure>
          <Sticker className="-right-3 -top-4" rotate={10}>🌷</Sticker>
          <Sticker className="-bottom-3 -left-3" rotate={-8} delay={1}>✦</Sticker>
        </div>
      </Reveal>
      <div className="space-y-6">
        <Reveal delay={0.05}><GlassCard>
          <p className="font-bold text-powder">Junior Full Stack Developer · Kathmandu, Nepal</p>
          <p className="mt-3 leading-relaxed text-soft">{profile.bio}</p></GlassCard></Reveal>
        <Reveal delay={0.12}><ul className="flex flex-wrap gap-3">
          {focus.map((f, i) => <motion.li key={f} whileHover={{ y: -3, rotate: i % 2 ? 2 : -2 }} className={`rounded-full px-4 py-2 text-sm font-bold shadow-soft ${['bg-sage','bg-aqua','bg-blush'][i % 3]}`}>{f}</motion.li>)}
        </ul></Reveal>
      </div>
    </div>
  </Section>
)

export const Skills = () => (
  <Section id="skills">
    <SectionHeading title="My developer toolbox" hint="Tools I reach for when I build." />
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((s, i) => (
        <Reveal key={s.group} delay={i * 0.06}><GlassCard className="h-full">
          <h3 className="font-display text-xl font-bold"><span aria-hidden>{s.emoji} </span>{s.group}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">{s.items.map(t => <li key={t} className="rounded-xl bg-white/80 px-3 py-1.5 text-sm font-bold ring-1 ring-aqua transition hover:bg-sage">{t}</li>)}</ul>
        </GlassCard></Reveal>
      ))}
    </div>
  </Section>
)

export const Experience = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] })
  return (
    <Section id="experience">
      <SectionHeading title="Experience" />
      <div ref={ref} className="relative pl-10">
        <div className="absolute bottom-0 left-3 top-0 w-1 rounded-full bg-aqua/50" />
        <motion.div style={{ scaleY: scrollYProgress, originY: 0 }} className="absolute bottom-0 left-3 top-0 w-1 rounded-full bg-powder" />
        <span aria-hidden className="absolute left-0 top-5 grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-blush text-xs shadow-soft">✿</span>
        <Reveal><GlassCard>
          <p className="text-sm font-bold text-powder">{experience.period}</p>
          <h3 className="font-display text-2xl font-bold">{experience.role}</h3>
          <p className="font-bold text-soft">{experience.org} · {experience.place}</p>
          <ul className="mt-4 space-y-2">{experience.points.map(p => <li key={p} className="flex gap-2 text-soft"><span className="text-powder" aria-hidden>✦</span>{p}</li>)}</ul>
        </GlassCard></Reveal>
      </div>
    </Section>
  )
}

export const Education = () => (
  <Section id="education">
    <SectionHeading title="Education & certification" />
    <div className="grid gap-5 md:grid-cols-3">
      {education.map((e, i) => (
        <Reveal key={e.title} delay={i * 0.08}><GlassCard className={`h-full ${i ? '-rotate-1' : 'rotate-1'}`}>
          <GraduationCap className="text-powder" aria-hidden />
          <h3 className="mt-3 font-display text-lg font-bold">{e.title}</h3>
          <p className="font-bold text-soft">{e.org}</p>
          <p className="mt-2 text-sm text-soft">{e.period} · {e.place}</p></GlassCard></Reveal>
      ))}
      <Reveal delay={0.16}><GlassCard className="relative h-full bg-sage/60">
        <Sticker className="-right-2 -top-3" rotate={10}>★</Sticker>
        <Award className="text-powder" aria-hidden />
        <h3 className="mt-3 font-display text-lg font-bold">{certification.title}</h3>
        <p className="font-bold text-soft">{certification.org} · {certification.year}</p>
        <p className="mt-2 text-sm text-soft">{certification.text}</p></GlassCard></Reveal>
    </div>
  </Section>
)

export const Achievements = () => (
  <Section id="achievements">
    <SectionHeading title="Achievements" />
    <div className="grid gap-5 sm:grid-cols-2">
      {achievements.map((a, i) => (
        <Reveal key={a.title} delay={i * 0.08}><GlassCard className="flex items-center gap-4">
          <span aria-hidden className="grid h-16 w-16 shrink-0 place-items-center rounded-full border-4 border-white bg-blush text-3xl shadow-soft">{a.emoji}</span>
          <div><h3 className="font-display text-lg font-bold">{a.title}</h3>
            {a.text && <p className="text-soft">{a.text}</p>}{a.meta && <p className="text-sm font-bold text-powder">{a.meta}</p>}</div>
        </GlassCard></Reveal>
      ))}
    </div>
  </Section>
)

export const Contact = () => {
  const rows = [[Mail, profile.email, `mailto:${profile.email}`], [Phone, profile.phone, `tel:${profile.phone}`], [MapPin, profile.location, undefined]] as const
  const social = [[Github, 'GitHub', profile.github], [Linkedin, 'LinkedIn', profile.linkedin]] as const
  return (
    <Section id="contact">
      <Reveal><div className="glass relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sage/70 via-aqua/50 to-blush/60 p-8 text-center sm:p-14">
        <Sticker className="left-6 top-6" rotate={-10}>✦</Sticker><Sticker className="bottom-6 right-6" rotate={8} delay={1}>♡</Sticker>
        <h2 className="mx-auto max-w-xl font-display text-3xl font-bold sm:text-5xl">Let's build something lovely together. ♡</h2>
        <ul className="mt-8 flex flex-col items-center gap-3 text-lg font-bold">
          {rows.map(([Icon, text, href]) => <li key={text} className="flex items-center gap-2"><Icon size={18} className="text-ink" aria-hidden />{href ? <a href={href} className="underline decoration-powder underline-offset-4">{text}</a> : text}</li>)}
        </ul>
        <motion.a whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} href={`mailto:${profile.email}`} className="btn mt-8 bg-ink text-snow shadow-soft"><Mail size={18} aria-hidden /> Email me</motion.a>
        <div className="mt-6 flex justify-center gap-3">
          {social.map(([Icon, label, url]) => <a key={label} href={url || '#'} target={url ? '_blank' : undefined} rel="noreferrer" aria-label={url ? label : `${label} (add your link in data.ts)`} className="glass rounded-full p-3"><Icon size={20} /></a>)}
        </div>
      </div></Reveal>
    </Section>
  )
}

export const Footer = () => (
  <footer className="pb-10 text-center text-sm font-bold text-soft">Made with React, creativity & a little ✦ magic ✦</footer>
)
