import { Book } from '@/components/book/book'

export const metadata = {
  title: 'Contact — Akram Ssengooba',
  description: 'Get in touch with Akram Ssengooba for software projects, consulting, or collaboration.',
  openGraph: {
    title: 'Contact — Akram Ssengooba',
    description: 'Get in touch with Akram Ssengooba for software projects, consulting, or collaboration.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Book initialPage={4} />
    </main>
  )
}
