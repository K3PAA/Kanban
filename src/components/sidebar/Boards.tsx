import Link from 'next/link'
import { Button } from '@/components/ui/button'

const boards = ['Platform Launch', 'Marketing Plan', 'Roadmap']

export default function Boards() {
  return (
    <section>
      <h2>All Boards ( 3 ) </h2>

      <ul>
        {boards.map((board) => (
          <li key={board}>
            <Link href={`/boards/${board}`}>{board}</Link>
          </li>
        ))}
        <li>
          <Button>+ Create new Board</Button>
        </li>
      </ul>
    </section>
  )
}
