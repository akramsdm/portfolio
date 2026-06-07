'use client'

import { type ReactNode } from 'react'
import { useBook } from './book-context'
import { PageNumber3D } from '../ui/page-number'

type BookPageProps = {
  children: ReactNode
  pageIndex: number
  chapterNumber: string
  chapterTitle: string
  pageNumber: string
}

export function BookPage({
  children,
  pageIndex,
  chapterNumber,
  chapterTitle,
  pageNumber,
}: BookPageProps) {
  const { currentPage, isAnimating, direction, previousPage } = useBook()

  const isActive = currentPage === pageIndex
  const wasActive = previousPage === pageIndex
  const shouldTearAway = isAnimating && wasActive
  const isVisible = isActive || shouldTearAway

  const getZIndex = () => {
    if (shouldTearAway) return 50
    if (isActive) return 40
    return 10
  }

  if (!isVisible) return null

  // ── Static page (incoming, or idle active) ──────────────────────────
  if (!shouldTearAway) {
    return (
      <div
        className="absolute inset-0 w-full h-full bg-background paper-texture overflow-hidden"
        style={{ zIndex: getZIndex() }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 5,
            background: 'linear-gradient(to right, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.06) 6%, transparent 18%)',
          }}
        />
        <div
          className="relative h-full overflow-y-auto px-8 md:px-16 lg:px-24 py-16 md:py-8"
          style={{ zIndex: 3 }}
        >
          <div className="max-w-5xl mx-auto md:px-8">{children}</div>
        </div>
        <div className="absolute bottom-4 md:bottom-6 right-0 md:right-12" style={{ zIndex: 4 }}>
          <PageNumber3D value={pageNumber} />
        </div>
      </div>
    )
  }

  // ── Tearing page — split into left and right halves ─────────────────
  // SVG tear path for the jagged split edge
  const tearPath = `
    M 0,0
    L 100,0
    L 100,5 L 94,12 L 102,20 L 96,30 L 104,40
    L 98,52  L 106,62 L 99,72  L 107,82
    L 100,92 L 96,100
    L 0,100
    Z
  `

  const sharedPageContent = (
    <>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 5,
          background: 'linear-gradient(to right, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.06) 6%, transparent 18%)',
        }}
      />
      <div
        className="relative h-full overflow-y-auto px-8 md:px-16 lg:px-24 py-16 md:py-20"
        style={{ zIndex: 3 }}
      >
        <div className="max-w-3xl mx-auto">{children}</div>
      </div>
      <div className="absolute bottom-4 md:bottom-6 right-8 md:right-12" style={{ zIndex: 4 }}>
        <PageNumber3D value={pageNumber} />
      </div>
    </>
  )

  return (
    <>
      {/* ── Left half — clips to left 50%, slides out left ── */}
      <div
        className="absolute inset-0 w-full h-full animate-tear-left tear-fragment"
        style={{
          zIndex: 50,
          clipPath: 'inset(0 50% 0 0)',
          overflow: 'hidden',
        }}
      >
        <div className="absolute inset-0 bg-background paper-texture">
          {sharedPageContent}
        </div>
        {/* Tear edge shadow on the right side of the left half */}
        <div
          className="absolute inset-y-0"
          style={{
            right: 0,
            width: '18px',
            background: 'linear-gradient(to left, rgba(40,20,5,0.30) 0%, transparent 100%)',
            zIndex: 6,
          }}
        />
      </div>

      {/* ── Right half — clips to right 50%, slides out right ── */}
      <div
        className="absolute inset-0 w-full h-full animate-tear-right tear-fragment"
        style={{
          zIndex: 50,
          clipPath: 'inset(0 0 0 50%)',
          overflow: 'hidden',
        }}
      >
        <div className="absolute inset-0 bg-background paper-texture">
          {sharedPageContent}
        </div>
        {/* Tear edge shadow on the left side of the right half */}
        <div
          className="absolute inset-y-0"
          style={{
            left: 0,
            width: '18px',
            background: 'linear-gradient(to right, rgba(40,20,5,0.30) 0%, transparent 100%)',
            zIndex: 6,
          }}
        />
      </div>
    </>
  )
}