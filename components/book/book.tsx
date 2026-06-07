'use client'

import { useEffect } from 'react'
import { BookProvider, useBook, chapters } from './book-context'
import { TableOfContents } from './table-of-contents'
import { BookPage } from './book-page'
import { NavigationArrows } from './navigation-arrows'
import { AboutChapter } from './chapters/about-chapter'
import { ProjectsChapter } from './chapters/projects-chapter'
import { SkillsChapter } from './chapters/skills-chapter'
import { ResumeChapter } from './chapters/resume-chapter'
import { ContactChapter } from './chapters/contact-chapter'
import { NotesChapter } from './chapters/notes-chapter'

type BookProps = {
  initialPage?: number
}

export function Book({ initialPage = 0 }: BookProps) {
  return (
    <BookProvider initialPage={initialPage}>
      <BookContent />
    </BookProvider>
  )
}

function BookContent() {
  const { nextPage, prevPage } = useBook()

 

  const chapterComponents = [
    <AboutChapter key="about" />,
    <ProjectsChapter key="projects" />,
    <ResumeChapter key="resume" />,
      <NotesChapter key="notes" />,
    <ContactChapter key="contact" />,

  ]

  return (
    <div className="relative w-full h-screen overflow-hidden bg-secondary">
      {/* Book container with outer frame/desk effect */}
      <div className="absolute inset-0">
        {/* Book pages container */}
        <div className="relative w-full h-full ">
          {chapters.map((chapter, index) => (
            <BookPage
              key={chapter.id}
              pageIndex={index}
              chapterNumber={chapter.number}
              chapterTitle={chapter.title}
              pageNumber={chapter.pageNumber}
            >
              {chapterComponents[index]}
            </BookPage>
          ))}
        </div>
      </div>

      {/* Navigation elements */}
      <TableOfContents />
    </div>
  )
}
