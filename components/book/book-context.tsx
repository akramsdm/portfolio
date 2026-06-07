'use client'

import { createContext, useContext, useState, useCallback, useRef, useEffect, type ReactNode } from 'react'

export type Chapter = {
  id: string
  number: string
  title: string
  pageNumber: string
}

export const chapters: Chapter[] = [
  { id: 'about', number: 'I', title: 'Akram', pageNumber: '1' },
  { id: 'projects', number: 'II', title: 'Projects', pageNumber: '2' },
  { id: 'resume', number: 'III', title: 'Resume', pageNumber: '4' },
    { id: 'notes', number: 'IV', title: 'Notes', pageNumber: '6' },

  { id: 'contact', number: 'V', title: 'Contact', pageNumber: '5' },
]

type BookContextType = {
  currentPage: number
  previousPage: number
  isAnimating: boolean
  direction: 'forward' | 'backward'
  goToPage: (index: number) => void
  nextPage: () => void
  prevPage: () => void
  chapters: Chapter[]
}

const BookContext = createContext<BookContextType | null>(null)

export function useBook() {
  const context = useContext(BookContext)
  if (!context) {
    throw new Error('useBook must be used within a BookProvider')
  }
  return context
}

type BookProviderProps = {
  children: ReactNode
  initialPage?: number
}

export function BookProvider({ children, initialPage = 0 }: BookProviderProps) {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [previousPage, setPreviousPage] = useState(-1)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward')
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const navigateToIndex = useCallback((index: number, pushHistory = true) => {
    if (isAnimating || index === currentPage || index < 0 || index >= chapters.length) return

    // Clear any existing timeout
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current)
    }

    const newDirection = index > currentPage ? 'forward' : 'backward'
    setDirection(newDirection)
    setPreviousPage(currentPage)
    setIsAnimating(true)

    // Update URL without causing a Next.js navigation when pushHistory is true
    const chapterId = chapters[index].id
    if (pushHistory && typeof window !== 'undefined') {
      const path = chapterId !== 'about' ? `/${chapterId}` : '/'
      window.history.pushState({}, '', path)
    }

    // Change page slightly before animation ends for smoother transition
    animationTimeoutRef.current = setTimeout(() => {
      setCurrentPage(index)
    }, 450) // Half of the 900ms animation

    // End animation state
    setTimeout(() => {
      setIsAnimating(false)
      setPreviousPage(-1)
    }, 2000)
  }, [currentPage, isAnimating])

  const goToPage = useCallback((index: number) => navigateToIndex(index, true), [navigateToIndex])

  const nextPage = useCallback(() => {
    if (currentPage < chapters.length - 1) {
      goToPage(currentPage + 1)
    }
  }, [currentPage, goToPage])

  const prevPage = useCallback(() => {
    if (currentPage > 0) {
      goToPage(currentPage - 1)
    }
  }, [currentPage, goToPage])

  // Respond to browser back/forward (popstate) by animating to the correct page
  useEffect(() => {
    const onPop = () => {
      if (typeof window === 'undefined') return
      const path = window.location.pathname
      const id = path === '/' ? 'about' : path.split('/')[1]
      const idx = chapters.findIndex((c) => c.id === id)
      if (idx === -1) return
      // animate without pushing history (we're already handling a history navigation)
      navigateToIndex(idx, false)
    }

    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [navigateToIndex])

  return (
    <BookContext.Provider value={{
      currentPage,
      previousPage,
      isAnimating,
      direction,
      goToPage,
      nextPage,
      prevPage,
      chapters,
    }}>
      {children}
    </BookContext.Provider>
  )
}
