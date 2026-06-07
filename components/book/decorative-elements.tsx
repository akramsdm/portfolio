type DividerProps = {
  symbol?: string
  className?: string
}

export function DecorativeDivider({ symbol = 'أكرم', className = '' }: DividerProps) {
  return (
    <div className={`decorative-divider my-4 ${className}`}>
      <span className="text-primary">{symbol}</span>
    </div>
  )
}

export function ChapterHeading({ 
  number, 
  title 
}: { 
  number: string
  title: string 
}) {
  return (
    <header className="text-center mb-0 md:mb-4">
      <p className="chapter-label text-muted-foreground mb-2">
        Chapter {number}
      </p>
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide leading-tight">
        {title}
      </h1>
      <DecorativeDivider className="mt-2" />
    </header>
  )
}
