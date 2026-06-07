import { Book } from '@/components/book/book'

export const metadata = {
  title: 'Notes — Akram Ssengooba',
  description: 'Notes and writings by Akram Ssengooba on software, design, and engineering.',
  openGraph: {
    title: 'Notes — Akram Ssengooba',
    description: 'Notes and writings by Akram Ssengooba on software, design, and engineering.',
    url: '/notes',
  },
}

export default function NotesPage() {
  return (
    <main className="min-h-screen">
      <Book initialPage={3} />
    </main>
  )
}
