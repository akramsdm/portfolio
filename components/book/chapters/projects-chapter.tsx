'use client'

import Image from 'next/image'
import { ChapterHeading, DecorativeDivider } from '../decorative-elements'
import  tiba  from '@/public/images/tiba.png';
import  montana  from '@/public/images/montana.png';
import  harakacare  from '@/public/images/harakacare.png';
import  kjsbus  from '@/public/images/kjsbus.png';
import  stokwatch  from '@/public/images/stokwatch.jpeg';







const projects = [
  {
    number: '05',
    title: 'StockWatch',
    subtitle: 'Inventory System',
    description:
      '<span class="highlight">Currently building an offline-first</span> inventory and sales platform for businesses where connectivity cannot be assumed. Designed around reliability, simplicity and uninterrupted daily operations.',
    role: ['Product Strategy', 'Frontend · Backend'],
    year: '2025',
    image: stokwatch.src, 
    href: '#',
  },
  {
    number: '01',
    title: 'Tiba Charity Platform',
    subtitle: 'Charity Platform',
    description:
      'Helping charities manage campaigns, donations, volunteers and impact reporting through a unified digital platform.',
    role: ['Product Design', 'Full Stack Development'],
    year: '2025',
    image: tiba.src,
    href: 'https://tiba.org', // replace with actual URL
  },
  {
    number: '02',
    title: 'Montana International School Website',
    subtitle: 'International School',
    description:
      'Converted a static school site into a fully dynamic Laravel system — delivering an online application module with e-signatures and PDF generation, an events calendar, news, newsletters, and email subscriptions.',
    role: ['Full Stack Development', 'Laravel'],
    year: '2024',
    image: montana.src,
    href: '', // replace with actual URL
  },
  {
    number: '03',
    title: 'Haraka Care',
    subtitle: 'AI Healthcare Triage',
    description:
      'Patients report symptoms over WhatsApp or SMS — the system handles the rest, matching each case to the nearest suitable facility based on proximity, severity and medical context.',
    role: ['Full Stack Development', 'AI Integration'],
    year: '2025',
    image: harakacare.src,
    href: '#',
  },
  {
    number: '04',
    title: 'KJS Bus Management System',
    subtitle: 'Bus Booking System',
    description:
      'End-to-end transport booking for the Kampala region — passengers search routes, reserve seats and pay online while operators manage fleets, schedules and bookings from a single dashboard.',
    role: ['Full Stack Development', 'Product Design'],
    year: '2025',
    image: kjsbus.src,
    href: '#',
  },
  
]
export function ProjectsChapter() {
  return (
    <article>
      <ChapterHeading number="II" title="Selected Work" />

      {/* Opening */}
      <div className="max-w-xl mb-16 text-lg leading-relaxed text-foreground/90">
        <p className="drop-cap">
          A selection of products built to solve real problems for real people.
          Each one shaped by the constraints, context, and people behind it.
        </p>
      </div>


      {/* Project grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:mx-4"
        style={{  background: 'hsl(var(--border))' }}
      >
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="
              group flex flex-col
              bg-background
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary
            "
          >
            {/* Banner image */}
            <div className="relative w-full overflow-hidden aspect-[3/1]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="
                  object-cover grayscale
                  brightness-105 contrast-[0.88]
                  transition-transform duration-700 ease-in-out
                  group-hover:scale-[1.02]
                  h-10
                "
              />
              <div className="absolute inset-0 bg-background/15 pointer-events-none" />
            </div>

            {/* Card body */}
            <div className="flex flex-col gap-3 p-5 flex-1 border-b border-border/20">

              {/* Subtitle + year */}
             
              {/* Title */}
              <h3 className="font-serif text-3xl font-normal leading-tight tracking-tight group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed text-foreground/60 flex-1"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />

              {/* Roles */}
              
            </div>
          </a>
        ))}
      </div>

      {/* Colophon */}
      <DecorativeDivider symbol="" className="mt-14" />

      <p className="text-sm text-muted-foreground mt-6 italic font-serif">
        Additional projects and case studies available upon request.
      </p>
    </article>
  )
}