'use client'

import { useState } from 'react'
import { useBook } from './book-context'

export function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentPage, goToPage, chapters, isAnimating } = useBook()

  const handleChapterClick = (index: number) => {
    if (!isAnimating) {
      goToPage(index)
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* ── Large screen — inline vertical nav ── */}
      <nav className="hidden lg:flex flex-col gap-6 fixed top-8 left-8 z-50">
        {chapters.map((chapter, index) => (
          <button
  key={chapter.id}
  onClick={() => handleChapterClick(index)}
  disabled={isAnimating}
  className={`
    group flex items-baseline gap-3 text-left cursor-pointer
    transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed
    ${currentPage === index ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}
  `}
>
  <span className={`block w-0.5 h-4 rounded-full transition-all duration-300 mb-0.5 shrink-0
    ${currentPage === index ? 'bg-primary opacity-100' : 'bg-transparent group-hover:bg-foreground/20'}
  `} />
  <span className="chapter-label w-6 shrink-0">
    {chapter.number}
  </span>
  <span className={`font-serif text-sm tracking-wide transition-all duration-200
    ${currentPage === index ? 'italic translate-x-0.5' : ''}
  `}>
    {chapter.title}
  </span>
</button>
        ))}
      </nav>

      {/* ── Small screen — hamburger ── */}
      <button
  onClick={() => setIsOpen(true)}
  className="lg:hidden fixed top-6 left-6 z-50 p-2.5 bg-background/80 backdrop-blur-sm rounded-md border border-border/40 hover:bg-background transition-colors group"
  aria-label="Open table of contents"
>
        <div className="flex flex-col gap-1.5">
          <span className="block w-6 h-0.5 bg-foreground rounded-full transition-all group-hover:w-5" />
          <span className="block w-6 h-0.5 bg-foreground rounded-full" />
          <span className="block w-6 h-0.5 bg-foreground rounded-full transition-all group-hover:w-4" />
        </div>
      </button>

      {/* ── TOC Overlay — small screen only ── */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* TOC Panel */}
        <div
          className={`absolute left-0 top-0 h-full w-full max-w-md bg-background paper-texture spine-shadow transform transition-transform duration-500 ease-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="relative z-10 h-full flex flex-col p-8 md:p-12">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 hover:bg-secondary/50 rounded transition-colors"
              aria-label="Close table of contents"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Title */}
            <div className="mb-12">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-wide">
                Contents
              </h2>
              <div className="decorative-divider mt-4">
                <span className="text-primary"> </span>
              </div>
            </div>

            {/* Chapter List */}
            <nav className="flex-1">
              <ul className="space-y-6">
                {chapters.map((chapter, index) => (
                  <li key={chapter.id}>
                    <button
                      onClick={() => handleChapterClick(index)}
                      disabled={isAnimating}
                      className={`w-full text-left group flex items-baseline transition-colors hover:text-primary disabled:opacity-50 ${
                        currentPage === index ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      <span className="chapter-label text-muted-foreground w-12 shrink-0">
                        {chapter.number}
                      </span>
                      <span className={`font-serif text-xl md:text-2xl ${
                        currentPage === index ? 'italic' : ''
                      }`}>
                        {chapter.title}
                      </span>
                      <span className="dot-leaders" />
                      <span className="font-serif text-lg text-muted-foreground">
                        {chapter.pageNumber}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer decoration */}
            <div className="mt-auto pt-8">
              <div className="decorative-divider">
                <span className="text-primary text-sm"> </span>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4 tracking-wide">
                Akram Sdm &middot; Portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}