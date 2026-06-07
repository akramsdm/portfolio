import { ChapterHeading, DecorativeDivider } from '../decorative-elements'

const cvUrl = "/resume/CV.pdf";
const certificates = [
  { title: 'Python Essentials 1 & 2', issuer: 'Cisco' },
  { title: 'C Programming 1 & 2', issuer: 'Cisco' },
  { title: 'Introduction to Linux', issuer: 'Linux Foundation' },
  { title: 'Android Development with Jetpack Compose', issuer: 'Google' },
  { title: 'Foundations of IoT', issuer: 'Stanford University' },
]

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

const competencies = [
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
]

export function ResumeChapter() {
  return (
    <article>
      <ChapterHeading number="III" title="Resume" />

      {/* Opening philosophy */}
    <div className="max-w-2xl mb-16 text-xl leading-relaxed text-foreground/90">
  <p className="drop-cap">
   A self-taught and formally trained software engineer based in Kampala, currently studying 
   while building real-world products.{' '}
    <span className="highlight"> Open to any opportunities</span>{' '}
  </p>
</div>


      {/* Experience */}
      <section className="mb-12">
        <div className="flex items-baseline gap-4 mb-0">

            <h3 className='font-serif text-3xl  lg:text-4xl tracking-tight mt-2'>
            Experience
            </h3>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Montana */}
        <div className="grid grid-cols-[4rem_1fr] md:grid-cols-[6rem_1fr] gap-8 py-6 border-b border-border/20">
          <div className="chapter-label text-muted-foreground/60 leading-relaxed pt-0.5">
            2024
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-serif text-xl font-normal leading-tight">
              Website Maintainer & Developer
            </h4>
            <p className="text-sm italic text-muted-foreground">
              Montana International School — Kampala, Uganda
            </p>
            <p className="text-sm leading-relaxed text-foreground/60 mt-1">
              Contract role maintaining and improving the school's web presence —
              resolving issues, refining the interface, and keeping the site{' '}
              <span className="highlight">current and performing well.</span>
            </p>
          </div>
        </div>

        {/* Freelance */}
        <div className="grid grid-cols-[4rem_1fr] md:grid-cols-[6rem_1fr] gap-8 py-6">
          <div className="chapter-label text-muted-foreground/60 leading-relaxed pt-0.5">
            2023 —{' '}
            <span className="block">Present</span>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-serif text-xl font-normal leading-tight">
              Freelance Software Developer
            </h4>
            <p className="text-sm italic text-muted-foreground">
              Independent — Kampala, Uganda
            </p>
            <p className="text-sm leading-relaxed text-foreground/60 mt-1">
              Building websites, platforms and digital products for clients
              across Uganda — handling everything from{' '}
              <span className="highlight">design through deployment.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <div className="flex items-baseline gap-4 mb-0">
             <h3 className='font-serif text-3xl  lg:text-4xl tracking-tight mt-2'>
            Education
            </h3>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-[4rem_1fr] md:grid-cols-[6rem_1fr] gap-8 py-6">
          <div className="chapter-label text-muted-foreground/60 pt-0.5">
            2023 —{' '}
            <span className="block">Present</span>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-serif text-lg font-normal leading-snug">
              Bachelor of Science in Software Engineering
            </h4>
            <p className="text-sm italic text-muted-foreground">
              Bugema University
            </p>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="mb-12">
        <div className="flex items-baseline gap-4 mb-0">
              <h3 className='font-serif text-3xl  lg:text-4xl tracking-tight mt-2'>
            Certificates
            </h3>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-0 mt-2">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="grid grid-cols-[1fr_auto] gap-8 items-baseline border-b border-border/20 py-4"
            >
              <span className="font-serif text-lg text-foreground/90">
                {cert.title}
              </span>
              <span className="chapter-label text-muted-foreground/60 shrink-0">
                {cert.issuer}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Hackathons */}
      <section className="mb-12">
        <div className="flex items-baseline gap-4 mb-0">
           <h3 className='font-serif text-3xl  lg:text-4xl tracking-tight mt-2'>
            Hackathons
            </h3>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[6rem_1fr] gap-8 py-6 border-b border-border/20">
          <div className="chapter-label text-muted-foreground/60 pt-0.5">
            2025
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-serif text-lg font-normal leading-snug">
              AI Fest Uganda — GDG Makerere
            </h4>
            <p className="text-sm leading-relaxed text-foreground/60 mt-1">
              Built <span className="highlight">Haraka Care</span> — an
              AI-powered healthcare solution developed within the hackathon
              timeframe.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[6rem_1fr] gap-8 py-6">
          <div className="chapter-label text-muted-foreground/60 pt-0.5">
            2024
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-serif text-lg font-normal leading-snug">
              Web3 Buildathon
            </h4>
            <p className="text-sm leading-relaxed text-foreground/60 mt-1">
              Built <span className="highlight">Transparency Bot</span> — a
              Web3 tool designed to surface accountability and open information.
            </p>
          </div>
        </div>
      </section>


      {/* Tools */}
      <section className="mb-12">
        <div className="flex items-baseline gap-4 mb-0">
             <h3 className='font-serif text-3xl  lg:text-4xl tracking-tight mt-2'>
            Tools & Technologies
            </h3>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-0 mt-2">
          {tools.map((section) => (
            <div
              key={section.category}
              className="grid grid-cols-[5rem_1fr] md:grid-cols-[120px_1fr] gap-8 items-start border-b border-border/20 py-4"
            >
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
            </div>
          ))}
        </div>
      </section>

      {/* Competencies */}
      <section className="mb-12">
        <div className="flex items-baseline gap-4 mb-0">
             <h3 className='font-serif text-3xl  lg:text-4xl tracking-tight mt-2'>
              Competencies
              </h3>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-0 mt-2">
          {competencies.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-[1fr_1.2fr] gap-8 items-baseline border-b border-border/20 py-4"
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
      </section>

      {/* Download */}
      <div className="text-center mt-10">
        <a
          href={cvUrl}
          className="
            inline-flex items-center gap-2
            font-serif italic text-base
            text-foreground/60 border-b border-border pb-px
            transition-colors duration-200
            hover:text-foreground hover:border-foreground
          "
          download
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path
              d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="7 10 12 15 17 10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="12"
              y1="15"
              x2="12"
              y2="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Download full resume
        </a>
        <p className="chapter-label text-muted-foreground/50 mt-3">
          PDF Format · Updated 2025
        </p>
      </div>

      <DecorativeDivider symbol=" " className="mt-14" />
    </article>
  )
}