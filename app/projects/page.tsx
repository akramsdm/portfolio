import { Book } from '@/components/book/book'

export const metadata = {
  title: 'Projects — Akram Ssengooba',
  description: 'Selected projects by Akram Ssengooba — case studies in web and product engineering.',
  openGraph: {
    title: 'Projects — Akram Ssengooba',
    description: 'Selected projects by Akram Ssengooba — case studies in web and product engineering.',
    url: '/projects',
  },
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Book initialPage={1} />
    </main>
  )
}
