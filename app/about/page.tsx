import { Book } from '@/components/book/book'

export const metadata = {
  title: 'About — Akram Ssengooba',
  description:
    'Akram Ssengooba is a software developer based in Uganda. He builds user-focused, reliable software and is open to opportunities.',
  openGraph: {
    title: 'About — Akram Ssengooba',
    description:
      'Learn about Akram Ssengooba, a software developer based in Uganda building reliable, user-focused software.',
    url: '/about',
    images: ['/images/portrait.jpeg'],
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Book initialPage={0} />
    </main>
  )
}
