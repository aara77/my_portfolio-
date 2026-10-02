// ✏️ Edit everything here. Leave a URL empty to keep the placeholder.
export const profile = {
  name: 'Aarati Rai', title: 'Full Stack Developer', sub: 'Engineering IT Graduate',
  bio: 'I am a Junior Full Stack Developer with hands-on experience in MERN stack, Laravel and backend API development using FastAPI. I have worked on real-world web applications and have experience building RESTful APIs, authentication systems, and full-stack projects. I am seeking an opportunity to grow in software development and contribute to impactful products.',
  location: 'Chandragiri-15, Kathmandu, Nepal', email: 'aaratirai175@gmail.com', phone: '9810210037',
  github: '', linkedin: '', // TODO: paste your GitHub / LinkedIn URLs
}
export const focus = ['Frontend Development','Backend Development','REST APIs','Authentication','Database Integration','UI/UX-aware Development']
export const skills = [
  { group: 'Frontend', emoji: '🌸', items: ['React.js','Next.js','HTML','CSS','Tailwind CSS'] },
  { group: 'Backend', emoji: '🌿', items: ['Node.js','Express.js','Laravel','FastAPI'] },
  { group: 'Database', emoji: '🍃', items: ['MongoDB','MySQL'] },
  { group: 'Tools', emoji: '🧰', items: ['Git','GitHub','Postman','Figma'] },
  { group: 'Concepts', emoji: '💡', items: ['REST APIs','JWT Authentication','CRUD Operations'] },
]
export interface Project { id: string; title: string; sticker: string; description: string; tech: string[]; features?: string[]; links?: { label: string; href: string }[]; images?: string[]; tone: string }
export const projects: Project[] = [
  { id: 'fillease', title: 'AI Auto-Filling System / FillEase', sticker: '✦ Backend & API', tone: 'from-aqua to-sage',
    description: 'Developed backend APIs using FastAPI for an intelligent form auto-filling system.',
    tech: ['FastAPI','REST APIs','AI/OCR','Database integration'] },
  { id: 'snap-thrift', title: 'Snap Thrift – E-commerce Web Application', sticker: '♡ MERN', tone: 'from-blush to-snow',
    description: 'An e-commerce web application built using the MERN stack, Tailwind CSS, JWT, Cloudinary and Khalti API.',
    features: ['User authentication','Product management','Image uploads','Online payments','Admin approval system'],
    tech: ['MERN','Tailwind CSS','JWT','Cloudinary','Khalti API'] },
  { id: 'resumepilot', title: 'ResumePilot – AI Resume Optimization Platform', sticker: '★ AI', tone: 'from-powder/50 to-aqua',
    description: 'AI-powered resume optimization platform built using Next.js, Tailwind CSS and Framer Motion.',
    features: ['ATS compatibility analysis','Skill-gap detection','ATS scoring','Professional PDF reports','OCR-based resume parsing'],
    tech: ['Next.js','Tailwind CSS','Framer Motion','OCR','AI'] },
  { id: 'nhpc', title: 'NHPC Website & Exam Registration System', sticker: '✿ Live site', tone: 'from-sage to-powder/40',
    description: 'Contributed to development and maintenance of the NHPC website, including exam registration modules, frontend/backend features and database-driven registration functionality.',
    tech: ['Frontend','Backend','Database'], links: [{ label: 'nhpc.gov.np', href: 'https://nhpc.gov.np/' }, { label: 'Exam registration', href: 'https://exam.nhpc.gov.np/register/0' }] },
  { id: 'jot', title: 'JOT Nepal Website & Exam Registration System', sticker: '☆ Live site', tone: 'from-blush to-aqua',
    description: 'Worked on website development and maintenance, implemented and updated exam registration functionality, fixed application issues and improved user experience.',
    tech: ['Web development','Exam registration','Maintenance'], links: [{ label: 'jotnepal.com', href: 'https://jotnepal.com/' }] },
]
export const experience = { role: 'Junior Developer', org: 'AEIRC', place: 'Kathmandu', period: 'January 2025 – August 2026',
  points: ['Worked on real-world web applications','Frontend and backend feature implementation','REST/API-related development','Database-related work','NHPC website and exam registration system','JOT Nepal website and exam registration system'] }
export const education = [
  { title: 'Bachelor of Engineering in Information Technology', org: 'Nepal College of Information Technology', period: 'March 2022 – March 2026', place: 'Lalitpur, Nepal' },
  { title: '+2 Science', org: 'Bright Future Secondary School', period: 'May 2019 – June 2021', place: 'Kathmandu, Nepal' },
]
export const certification = { title: 'MERN Stack Development', org: 'Broadway Infosys', year: '2024',
  text: 'Completed practical MERN stack training and applied it to a real-world project, building RESTful APIs, integrating frontend and backend, and implementing user authentication.' }
export const achievements = [
  { emoji: '⚽', title: 'Best Player', text: '1st National Inter-Technical Futsal Cup and NCIT Sports Week', meta: '2022 · Lalitpur' },
  { emoji: '💻', title: 'Two-Day Hackathon Participant', text: '', meta: '' },
]
