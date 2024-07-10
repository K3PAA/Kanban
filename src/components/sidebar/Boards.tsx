import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const boards = ['Platform Launch', 'Marketing Plan', 'Roadmap']

export default function Boards() {
  return (
    <section className='text-nowrap '>
      <h2 className='ml-6 uppercase text-sm tracking-widest text-muted'>
        All Boards ( 3 ){' '}
      </h2>

      <ul className='text-muted text-md mt-5'>
        {boards.map((board, i) => (
          <li key={board}>
            <Link
              href={`/boards/${board}`}
              className={cn(
                'pl-6  py-3 flex gap-4 items-center mr-6 rounded-r-full',
                { 'bg-primary text-white': i === 0 }
              )}
            >
              <Image
                src='/assets/icon-board.svg'
                alt='board icon'
                width={16}
                height={16}
                className={cn({ 'brightness-0 saturate-100 invert': i === 0 })}
              />
              {board}
            </Link>
          </li>
        ))}
        <li>
          <Button
            className='pl-6 flex text-md gap-4 text-primary capitalize'
            variant='ghost'
          >
            <Image
              src='/assets/icon-board.svg'
              alt='board icon'
              width={16}
              height={16}
              className='brightness-0 saturate-100 invert'
            />
            + Create new Board
          </Button>
        </li>
      </ul>
    </section>
  )
}
