import { ChapterHeading, DecorativeDivider } from '../decorative-elements'
import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import  portrait  from '@/public/images/portrait.jpeg';
import  tiba  from '@/public/images/tiba.png';

import Image from 'next/image'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
// At the top of AboutChapter.tsx

// Inside the component, with your other state:



export function AboutChapter() {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
fetch('https://countapi.mileshilliard.com/api/v1/hit/akramsdm.dev')
  .then(r => r.json())
  .then(d => setViews(Number(d.value)))
  .catch(() => setViews(null))
}, [])


const subtitles = [
  'I AM AKRAM SSENGOOBA',
  'SOFTWARE ENGINEER & CREATIVE DEVELOPER',
  'BUILDING USER-FOCUSED EXPERIENCES'
];

const services = [
  {
    mark: '✦',
    title: 'Web Design & Development',
    description:
      'Websites that are fast, thoughtful, and built to last.',
  },
  {
    mark: '✧',
    title: 'Full Stack Development',
    description:
      'Building complete products from backend to polished interfaces.',
  },
  {
    mark: '✶',
    title: 'Product Design',
    description:
      'Translating complex problems into clear, intuitive product experiences grounded in user research.',
  },
  {
    mark: '✺',
    title: 'UI / UX Consulting',
    description:
      'Design audits, interface critiques, and strategic guidance for teams seeking a sharper product voice.',
  },
]

const projects = [
  {
    number: '01',
    title: 'TIBA',
    subtitle: 'Charity Platform',
    description:
      'Helping charities manage campaigns, donations, volunteers and impact reporting through a unified digital platform.',
    role: ['Product Design', 'Full Stack Development'],
    year: '2025',
    image:tiba.src,
    href: '#',
  },
  {
    number: '02',
    title: 'StokWatch',
    subtitle: 'Inventory System',
    description:
      'Offline-first inventory and sales tracking built for businesses operating in unreliable network environments.',
    role: ['Product Strategy', 'Frontend · Backend'],
    year: '2025',
    image: tiba.src,
    href: '#',
  },

]
const clientLogos = [
  { id: 1, name: 'Client A' },
  { id: 2, name: 'Client B' },
  { id: 3, name: 'Client C' },
  { id: 4, name: 'Client D' },
]
  
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  // Mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  
 
   // Rotating typewriter effect with type in and type out
  useEffect(() => {
    const currentText = subtitles[currentSubtitleIndex];
    let index = isTyping ? 0 : currentText.length;
    
    const timer = setInterval(() => {
      if (isTyping) {
        // Type in
        if (index <= currentText.length) {
          setDisplayedSubtitle(currentText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          // Pause before typing out
          setTimeout(() => setIsTyping(false), 2000);
        }
      } else {
        // Type out
        if (index >= 0) {
          setDisplayedSubtitle(currentText.slice(0, index));
          index--;
        } else {
          clearInterval(timer);
          // Move to next subtitle
          setCurrentSubtitleIndex((prev) => (prev + 1) % subtitles.length);
          setIsTyping(true);
        }
      }
    }, isTyping ? 50 : 30); // Faster when deleting
    
    return () => clearInterval(timer);
  }, [currentSubtitleIndex, isTyping]);

  return (
    <article>
      <ChapterHeading number="I" title="Akram" />
 
          {/* Author's portrait and intro */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center mb-4">
        {/* Portrait */}
      <div className="relative w-50 md:w-100 aspect-[1/1]  md:aspect-[3/4] rounded-lg overflow-hidden shadow-2xl ring-1 ring-foreground/5">
  <img
    src={portrait.src}
    alt="Portrait of Akram Sdm"
    className="
     object-cover
      grayscale
      contrast-110
      brightness-95
    "
  />

  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background: "oklch(0.48 0.09 48 / 0.35)",
      mixBlendMode: "color",
    }}
  />
</div>
        
        
        {/* Name and tagline */}
        <div className="w-full">

          
          
      {/* Pull quote */}
       {/* <blockquote className="my-2 px-6 md:px-10 py-6 border-l-4 border-primary bg-secondary/30 rounded-r">
        <p className="font-serif text-xl md:text-2xl italic text-foreground leading-relaxed">
         <span>{displayedSubtitle}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block w-0.5 h-5 bg-primary ml-1"
                />
        </p>
      </blockquote>  */}

        {/* <blockquote className="my-2 px-6 md:px-10 py-6 border-l-4 border-primary bg-secondary/30 rounded-r">
        <p className="font-serif text-xl md:text-2xl italic text-foreground leading-relaxed">
           Thanks for stopping by.

        </p>
      </blockquote>  */}
      <div className="space-y-2 text-lg leading-relaxed text-foreground/90">
  <p className="drop-cap">
    I'm <span className="highlight">Akram Ssengooba</span>, a software engineer 
    and creative developer based in Kampala. 
  </p>
  <p>
    I build software products that are as<span className="highlight">
     considered in design as they are solid</span> in engineering.
  </p>

  {/* Availability */}
  {/* <p className="text-sm text-foreground/50 tracking-wide">
    <MapPin className="inline h-3.5 w-3.5 mr-1 mb-0.5" />
    Based in Kampala &nbsp;·&nbsp; Open to opportunities
  </p> */}

  {/* CTA */}
  <div className="flex gap-4 pt-2">
    
      <a href="/projects"
      className="px-5 py-2.5 bg-foreground text-background text-sm rounded-sm hover:opacity-80 transition"
    >
      See my work
    </a>
    
     <a href="/resume" 
      className="px-5 py-2.5 border border-border text-sm rounded-sm hover:bg-secondary transition"
    >
      View CV
    </a>

    
  </div>
</div>
      
        </div>
        </div>
       


      {/* Bio content */}
      {/* <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
        <p>
          Welcome to my digital portfolio — a collection of work, thoughts, and experiences 
          accumulated through years of passionate development. Like the pages of a well-worn 
          book, each project tells its own story.
        </p>
        
        <p>
          I specialize in building modern web applications with a focus on user experience, 
          performance, and maintainable code. My toolkit includes React, Next.js, TypeScript, 
          and various backend technologies that bring ideas to life.
        </p>
        
        <p>
          When I&apos;m not writing code, you&apos;ll find me exploring new technologies, 
          contributing to open source projects, or seeking inspiration in the intersection 
          of design and engineering.
        </p>
      </div> */}

      <DecorativeDivider symbol=" " className="mt-12" />
      
            {/* Services */}
            {/* Chapter III — Areas of Practice */}
<section className="mt-24">
  

  <div className="max-w-2xl mb-16">
   <div className="max-w-3xl mb-16">
  <span className="chapter-label text-muted-foreground">
    SERVICES
  </span>

  <h2 className="font-serif text-4xl lg:text-5xl tracking-tight mt-2">
    What I bring to the table
  </h2>

 
</div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 md:gap-y-14">
    {services.map((item) => (
      <div
        key={item.title}
        className="group border-b border-border/20 pb-6"
      >
        <div className="mb-4 flex items-center gap-3 text-sm tracking-[0.3em] uppercase text-muted-foreground">
          <span className="text-primary text-2xl">{item.mark}</span>
        </div>

        <h3 className="font-serif text-xl leading-tight mb-4 transition-colors duration-300 group-hover:text-primary">
          {item.title}
        </h3>

        <p
          className="leading-relaxed text-foreground/65 max-w-md"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
      </div>
    ))}
  </div>
</section>
      <DecorativeDivider symbol=" " className="mt-12" />
<section>

 <div className="max-w-2xl mb-16 mt-24">
    <div className="max-w-3xl mb-16">
  <span className="chapter-label text-muted-foreground">
    SELECTED WORK
  </span>

  <h2 className="font-serif text-4xl  lg:text-5xl tracking-tight mt-2">
    Things I'm proud of
  </h2>


</div>
  </div>
        {/* 2-column grid — hairline gutter rules via background color trick */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 mx-2 md:mx-8"
          style={{  background: 'hsl(var(--border))' }}
        >
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="
                group
                flex
                flex-col
                bg-background
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
              "
            >
              {/* Full-width banner image */}
              <div className="relative w-full overflow-hidden aspect-[16/6] ">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    grayscale
                    brightness-105
                    contrast-[0.88]
                    transition-transform
                    duration-700
                    ease-in-out
                    group-hover:scale-[1.02]
                  "
                />
  
                {/* Subtle paper wash */}
                <div className="absolute inset-0 bg-background/15 pointer-events-none" />
  
                {/* Chapter number badge */}
               
              </div>
  
              {/* Card body */}
              <div className="flex flex-col gap-3 p-5 flex-1 border-b border-border/20">
  
                {/* Subtitle + year */}
                <div className="flex items-baseline justify-between">
                  <p className="chapter-label text-muted-foreground">
                    {project.subtitle}
                  </p>
                  <p className="chapter-label text-muted-foreground/60">
                    {project.year}
                  </p>
                </div>
  
                {/* Title */}
                <h3 className="text-4xl font-normal leading-tight tracking-tight">
                  {project.title}
                </h3>
  
                {/* Description */}
                <p className="text-sm leading-relaxed text-foreground/60 flex-1">
                  {project.description}
                </p>
  
                
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-4 mb-4">
        <a
          href="/projects"
          className="font-serif italic text-sm text-foreground/50 border-b border-border pb-px transition-colors duration-200 hover:text-foreground hover:border-foreground"
        >
          View all projects →
        </a>
      </div>
</section>
      <DecorativeDivider symbol=" " className="mt-12" />

{views != null && (
  <p className="chapter-label text-muted-foreground flex items-center gap-1.5 mt-1">
    <span>READ</span>
    <span className="text-foreground/40">·</span>
    <span>{views.toLocaleString()} {views === 1 ? 'time' : 'times'}</span>
  </p>
)}
      
      
    </article>
  )
}
