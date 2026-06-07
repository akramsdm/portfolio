'use client'

import { ChapterHeading, DecorativeDivider } from '../decorative-elements'

const contacts = [
  {
    label: 'Email',
    value: 'akramginiyas@gmail.com',
    href: 'mailto:akramginiyas@gmail.com',
    icon: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  },
  {
    label: 'WhatsApp',
    value: '+256 745336850',
    href: 'https://wa.me/256745336850',
    icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.529 5.861L.057 23.535a.75.75 0 0 0 .908.908l5.674-1.472A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z',
  },
  {
    label: 'GitHub',
    value: 'github.com/akramsdm',
    href: 'https://github.com/akramsdm',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
  },
  {
    label: 'X',
    value: '@akram_sdm1',
    href: 'https://x.com/akram_sdm1',
    icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'LinkedIn',
    value: 'Akram Ssengooba',
    href: 'https://www.linkedin.com/in/akram-ssengooba-380403407',
    icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
]

export function ContactChapter() {
  return (
    <article>
      <ChapterHeading number="V" title="Contact" />

      {/* Opening */}
      <div className="max-w-xl mb-16 space-y-4 text-lg leading-relaxed text-foreground/90">
        <p className="drop-cap">
          Open to new opportunities, collaborations, and meaningful connections.
          If you think we could build something worth building —{' '}
          <span className="highlight">let's talk.</span>
        </p>
      </div>

      <DecorativeDivider symbol=" " className="mb-12" />

      {/* Contact list */}
      <div className="space-y-0 max-w-2x md:mx-24">
        {contacts.map((contact) => (
          
           <a key={contact.label}
            href={contact.href}
            target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={contact.label}
            className="group grid grid-cols-[32px_100px_1fr] gap-6 items-center border-b border-border/40 py-5 transition-colors duration-200 hover:text-primary"
          >
            {/* Icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-muted-foreground group-hover:text-primary transition-colors duration-200 shrink-0"
            >
              <path d={contact.icon} />
            </svg>

            {/* Label */}
            <span className="chapter-label text-muted-foreground group-hover:text-primary transition-colors duration-200">
              {contact.label}
            </span>

            {/* Value */}
            <span className="font-serif text-base text-foreground/70 group-hover:text-primary transition-colors duration-200 break-all">
              {contact.value}
            </span>
          </a>
        ))}
      </div>

      <DecorativeDivider symbol=" " className="mt-16" />

      {/* Closing colophon */}
      <div className="mt-10 text-center space-y-2">
        <p className="font-serif italic text-foreground/50 text-base">
          Thank you for reading.
        </p>
        <p className="chapter-label text-muted-foreground/40">
          Akram Ssengooba · Kampala, Uganda · 2025
        </p>
      </div>

      <DecorativeDivider symbol="❧" className="mt-10" />
    </article>
  )
}  