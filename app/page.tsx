import { Book } from '@/components/book/book'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Book initialPage={0} />
    </main>
  )
}
