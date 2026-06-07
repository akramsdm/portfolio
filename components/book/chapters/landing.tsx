'use client'

import Image from 'next/image'
import { ChapterHeading, DecorativeDivider } from '../decorative-elements'
import { useState, useEffect } from 'react'
import portrait from '@/public/images/portrait.jpeg'

const subtitles = [
  'I AM AKRAM SSENGOOBA',
  'SOFTWARE ENGINEER & CREATIVE DEVELOPER',
  'BUILDING USER-FOCUSED EXPERIENCES',
]

const services = [
  {
    number: '01',
    title: 'Web Design & Development',
    description:
      'Crafting refined, performant websites that balance aesthetic precision with technical rigour.',
  },
  {
    number: '02',
    title: 'Full Stack Development',
    description:
      'End-to-end application architecture — from database design to polished user interfaces.',
  },
  {
    number: '03',
    title: 'Product Design',
    description:
      'Translating complex problems into clear, intuitive product experiences grounded in user research.',
  },
  {
    number: '04',
    title: 'UI / UX Consulting',
    description:
      'Design audits, interface critiques, and strategic guidance for teams seeking a sharper product voice.',
  },
]

const featuredProjects = [
  {
    number: '01',
    title: 'TIBA',
    subtitle: 'Charity Platform',
    description:
      'Helping charities manage campaigns, donations, volunteers and impact reporting through a unified platform.',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
    href: '#',
  },
  {
    number: '02',
    title: 'StockWatch',
    subtitle: 'Inventory System',
    description:
      'Offline-first inventory and sales tracking built for businesses in unreliable network environments.',
    year: '2025',
    image: '/projects/stockwatch.jpg',
    href: '#',
  },
]

// Replace these with real client logo imports when available
const clientLogos = [
  { id: 1, name: 'Client A' },
  { id: 2, name: 'Client B' },
  { id: 3, name: 'Client C' },
  { id: 4, name: 'Client D' },
]

export function AboutChapter() {
  const [displayedSubtitle, setDisplayedSubtitle] = useState('')
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentText = subtitles[currentSubtitleIndex]
    let index = isTyping ? 0 : currentText.length

    const timer = setInterval(() => {
      if (isTyping) {
        if (index <= currentText.length) {
          setDisplayedSubtitle(currentText.slice(0, index))
          index++
        } else {
          clearInterval(timer)
          setTimeout(() => setIsTyping(false), 2000)
        }
      } else {
        if (index >= 0) {
          setDisplayedSubtitle(currentText.slice(0, index))
          index--
        } else {
          clearInterval(timer)
          setCurrentSubtitleIndex((prev) => (prev + 1) % subtitles.length)
          setIsTyping(true)
        }
      }
    }, isTyping ? 50 : 30)

    return () => clearInterval(timer)
  }, [currentSubtitleIndex, isTyping])

  return (
    <article>
      <ChapterHeading number="I" title="Akram" />

      {/* Running header */}
      <div className="flex items-baseline justify-between border-b border-border pb-3 mb-10">
        <span className="chapter-label text-muted-foreground">
          Portfolio · About
        </span>
        <span className="chapter-label text-muted-foreground">Chapter I</span>
      </div>

      {/* Hero — portrait + intro */}
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 md:gap-12 items-start mb-10">
        {/* Portrait */}
        <div className="relative aspect-[3/4] overflow-hidden w-full max-w-[180px]">
          <Image
            src={portrait}
            alt="Portrait of Akram Ssengooba"
            fill
            className="object-cover grayscale contrast-90 brightness-95"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'oklch(0.48 0.09 48 / 0.35)',
              mixBlendMode: 'color',
            }}
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-5">
          {/* Typewriter blockquote */}
          <blockquote className="border-l-2 border-border pl-5 py-1">
            <p className="font-serif text-xl md:text-2xl italic font-normal leading-snug">
              {displayedSubtitle}
              <span className="inline-block w-px h-5 bg-foreground/40 ml-1 align-middle animate-pulse" />
            </p>
          </blockquote>

          <p className="text-base leading-relaxed text-foreground/70">
            Welcome to my digital portfolio — a collection of work, thoughts,
            and experiences accumulated through years of passionate development.
            Like the pages of a well-worn book, each project tells its own
            story.
          </p>
          <p className="text-base leading-relaxed text-foreground/70">
            I specialise in building modern web applications with a focus on
            user experience, performance, and maintainable code. My toolkit
            includes React, Next.js, TypeScript, and various backend
            technologies that bring ideas to life.
          </p>
        </div>
      </div>

      <DecorativeDivider symbol="◆" className="my-10" />

      {/* Services */}
      <div className="flex items-baseline gap-4 mb-6">
        <span className="chapter-label text-muted-foreground shrink-0">
          Services
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 border border-border mb-10"
        style={{ gap: '1px', background: 'hsl(var(--border))' }}
      >
        {services.map((service) => (
          <div
            key={service.number}
            className="bg-background flex flex-col gap-2 p-5"
          >
            <span className="chapter-label text-muted-foreground/50">
              {service.number}
            </span>
            <h4 className="font-serif text-xl font-normal leading-tight">
              {service.title}
            </h4>
            <p className="text-sm leading-relaxed text-foreground/60">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <DecorativeDivider symbol="◆" className="my-10" />

      {/* Featured projects */}
      <div className="flex items-baseline gap-4 mb-6">
        <span className="chapter-label text-muted-foreground shrink-0">
          Selected Work
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 border border-border mb-4"
        style={{ gap: '1px', background: 'hsl(var(--border))' }}
      >
        {featuredProjects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="group flex flex-col bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {/* Banner image */}
            <div className="relative w-full overflow-hidden aspect-[4/3] h-36 md:h-44">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover grayscale brightness-105 contrast-[0.88] transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-background/15 pointer-events-none" />
            </div>

            {/* Body */}
            <div className="flex flex-col gap-2 p-5 border-t border-border">
              <div className="flex items-baseline justify-between">
                <p className="chapter-label text-muted-foreground">
                  {project.subtitle}
                </p>
                <p className="chapter-label text-muted-foreground/50">
                  {project.year}
                </p>
              </div>
              <h3 className="font-serif text-2xl font-normal leading-tight">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/60">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* View all link */}
      <div className="text-center mt-4 mb-4">
        <a
          href="#"
          className="font-serif italic text-sm text-foreground/50 border-b border-border pb-px transition-colors duration-200 hover:text-foreground hover:border-foreground"
        >
          View all projects →
        </a>
      </div>

      <DecorativeDivider symbol="◆" className="my-10" />

      {/* Trusted by */}
      <div className="flex items-baseline gap-4 mb-6">
        <span className="chapter-label text-muted-foreground shrink-0">
          Trusted By
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-4 border border-border"
        style={{ gap: '1px', background: 'hsl(var(--border))' }}
      >
        {clientLogos.map((client) => (
          <div
            key={client.id}
            className="bg-background flex items-center justify-center py-8 px-6"
          >
            {/*
              Replace this placeholder with your real logo:
              <Image src={client.logo} alt={client.name} width={80} height={24} className="opacity-40 grayscale" />
            */}
            <div className="w-16 h-4 rounded-sm bg-border/60" aria-label={client.name} />
          </div>
        ))}
      </div>

      <DecorativeDivider symbol="❧" className="mt-14" />

      {/* Page number */}
      <p className="text-right chapter-label text-muted-foreground/30 mt-10 select-none">
        04
      </p>
    </article>
  )
}