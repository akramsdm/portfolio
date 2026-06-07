import { ChapterHeading, DecorativeDivider } from '../decorative-elements'

const tools = [
  {
    category: 'Interface',
    items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Figma'],
  },
  {
    category: 'Server & Data',
    items: ['Python', 'Django', 'PHP', 'Laravel', 'PostgreSQL', 'REST APIs'],
  },
  {
    category: 'Workflow',
    items: ['Git', 'Vercel', 'Linux', 'Docker'],
  },
]

export function SkillsChapter() {
  return (
    <article>
      <ChapterHeading number="III" title="Skills & Tech" />

      {/* Opening prose */}
      <div className="space-y-5 text-lg leading-relaxed text-foreground/90 max-w-2xl mb-16">
        <p className="drop-cap">
          I don't have a favourite tool. I have a favourite outcome —
          software that works, feels considered, and{' '}
          <span className="highlight">holds together under pressure.</span>{' '}
          The stack follows from that.
        </p>
     
      </div>

    <div className="max-w-3xl mb-16">
  <span className="chapter-label text-muted-foreground">
    TOOLS
  </span>

  <h2 className="font-serif text-5xl md:text-5xl lg:text-6xl tracking-tight mt-2">
    What I build with
  </h2>

  {/* <p className="mt-5 text-lg text-foreground/60 max-w-xl">
    Designing, building, and refining digital products from concept to launch.
  </p> */}
</div>

      {/* Tool list */}
      <div className="space-y-10">
        {tools.map((section) => (
          <section key={section.category} className="grid grid-cols-[120px_1fr] gap-8 items-start border-b border-border pb-8">
            <span className="chapter-label text-muted-foreground pt-1">
              {section.category}
            </span>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="font-serif text-lg text-foreground/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <DecorativeDivider symbol="❧" className="mt-16" />
      {/* Competencies */}
<div className="mt-12">
  <div className="max-w-3xl mb-16">
  <span className="chapter-label text-muted-foreground">
COMPETENCIES
  </span>

  <h2 className="font-serif text-5xl md:text-5xl lg:text-6xl tracking-tight mt-2">
    What I Bring Beyond Code
  </h2>

  {/* <p className="mt-5 text-lg text-foreground/60 max-w-xl">
    Designing, building, and refining digital products from concept to launch.
  </p> */}
</div>


  <div className="space-y-0">
    {[
      {
        title: 'Communication & Client Relations',
        note: 'Translating technical decisions into language clients actually understand',
      },
      {
        title: 'Team Collaboration',
        note: 'Comfortable working across design, product and engineering functions',
      },
      {
        title: 'Independent Work',
        note: 'Self-directed, reliable, and accountable without needing oversight',
      },
      {
        title: 'Languages',
        note: 'English & Luganda',
      },
      {
        title: 'Driving',
        note: 'Valid license',
      },
    ].map((item) => (
      <div
        key={item.title}
        className="grid grid-cols-[1fr_1.2fr] gap-8 items-baseline border-b border-border py-4"
      >
        <span className="font-serif text-lg text-foreground/90">
          {item.title}
        </span>
        <span className="text-sm text-muted-foreground leading-relaxed">
          {item.note}
        </span>
      </div>
    ))}
  </div>
</div>

      <DecorativeDivider symbol=" " className="mt-16" />
      {/* How I work */}
    </article>
  )
}