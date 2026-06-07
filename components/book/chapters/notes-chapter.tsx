import { ChapterHeading, DecorativeDivider } from '../decorative-elements'

const notes = [

  {
    number: '02',
    title: 'What AI Fest taught me about building fast',
    date: 'April 2025',
    body: [
      `AI Fest 2025 gave us a problem, a room, and a deadline. No prolonged planning, no waiting for perfect requirements. We built Haraka Care — an AI-powered healthcare tool — in the kind of compressed timeframe that strips away everything non-essential.`,
      `What surprised me was how much you can ship when you stop second-guessing. The features we launched with were not the features we started with. We cut ruthlessly, kept what worked, and moved. That discipline — deciding quickly what matters and letting go of what doesn't — is harder to practise in a normal project timeline where there always seems to be more time.`,
      `I didn't win. But I left with something more useful than a trophy — a clearer sense of what I'm capable of under pressure, and a habit of asking earlier: does this actually need to exist?`,
    ],
  },
  {
    number: '03',
    title: 'Django or Laravel — how I actually choose',
    date: 'May 2025',
    body: [
      `I get asked this more than I expected. The honest answer is that I don't have a preference — I have a process. The first question I ask is what the project needs, not what I feel like using.`,
      `Laravel wins when the client is likely to hand the project to another developer after me. The ecosystem is mature, the documentation is excellent, and PHP developers are everywhere. It's a safe choice in the best sense of the word.`,
      `Django wins when data is at the centre of the product — when there's complexity in the models, when I need the admin panel, or when Python makes more sense across the stack. It's faster for me to move in when the domain is complex. Neither is better. Both have earned their place in my toolkit for different reasons, and I'd rather know both well than be religious about either.`,
    ],
  },
]

export function NotesChapter() {
  return (
    <article>
      <ChapterHeading number="V" title="Notes" />

      {/* Opening */}
      <div className="max-w-xl mb-16 text-xl leading-relaxed text-foreground/90">
        <p className="drop-cap">
          A few things I've been thinking about — written down so they're
          useful to someone other than{' '}
          <span className="highlight">just me.</span>
        </p>
      </div>

      <DecorativeDivider symbol=" " className="mb-12" />

      {/* Notes list */}
      <div className="space-y-0 md:mx-24">
        {notes.map((note, i) => (
          <div
            key={note.number}
            className="border-b border-border py-10"
          >
            {/* Meta */}
            <div className="flex items-baseline justify-between mb-4">
            
              <span className="chapter-label text-muted-foreground/50">
                {note.date}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl md:text-3xl font-normal leading-snug mb-6 max-w-2xl">
              {note.title}
            </h3>

            {/* Body */}
            <div className="space-y-4 text-foreground/75 leading-relaxed max-w-3xl">
              {note.body.map((paragraph, j) => (
                <p
                  key={j}
                  className={i === 0 && j === 0 ? 'drop-cap' : ''}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <DecorativeDivider symbol=" " className="mt-16" />
    </article>
  )
}