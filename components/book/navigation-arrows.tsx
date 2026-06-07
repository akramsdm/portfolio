'use client'

import { useBook } from './book-context'

export function NavigationArrows() {
  const { currentPage, nextPage, prevPage, isAnimating, chapters } = useBook()

  return (
    <>
      {/* Previous Arrow */}
      <button
        onClick={prevPage}
        disabled={currentPage === 0 || isAnimating}
        className={`fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-3 md:p-4 
          rounded-full border border-border bg-background/80 backdrop-blur-sm
          transition-all duration-300 hover:bg-secondary hover:border-primary
          disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-background/80
          group`}
        aria-label="Previous page"
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
          className="text-foreground group-hover:text-primary transition-colors"
        >
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Next Arrow */}
      <button
        onClick={nextPage}
        disabled={currentPage === chapters.length - 1 || isAnimating}
        className={`fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-3 md:p-4 
          rounded-full border border-border bg-background/80 backdrop-blur-sm
          transition-all duration-300 hover:bg-secondary hover:border-primary
          disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-background/80
          group`}
        aria-label="Next page"
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
          className="text-foreground group-hover:text-primary transition-colors"
        >
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Page indicator dots - mobile friendly */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex gap-2 md:hidden">
        {chapters.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentPage === index ? 'bg-primary' : 'bg-border'
            }`}
          />
        ))}
      </div>
    </>
  )
}
