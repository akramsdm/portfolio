import { Book } from '@/components/book/book'

export const metadata = {
  title: 'Resume — Akram Ssengooba',
  description: 'Resume and professional experience of Akram Ssengooba — software development, product work, and consulting.',
  openGraph: {
    title: 'Resume — Akram Ssengooba',
    description: 'Resume and professional experience of Akram Ssengooba.',
    url: '/resume',
  },
}

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <Book initialPage={2} />
    </main>
  )
}
