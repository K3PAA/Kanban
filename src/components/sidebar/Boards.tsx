'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Board } from '@prisma/client'
import { usePathname } from 'next/navigation'

type BoardsProps = {
  boards: Board[]
}

export default function Boards({ boards }: BoardsProps) {
  const path = usePathname()
  const boardId = path.split('/').pop()

  return (
    <section className='text-nowrap '>
      <h2 className='ml-6 uppercase text-sm tracking-widest text-muted'>
        All Boards ( 3 ){' '}
      </h2>

      <ul className='text-muted text-md mt-5'>
        {boards.map((board, i) => {
          return (
            <li key={board.id}>
              <Link
                href={`/boards/${board.id}`}
                className={cn(
                  'pl-6  py-3 flex gap-4 items-center mr-6 rounded-r-full',
                  { 'bg-primary text-white': board.id === boardId }
                )}
              >
                <Image
                  src='/assets/icon-board.svg'
                  alt='board icon'
                  width={16}
                  height={16}
                  className={cn({
                    'brightness-0 saturate-100 invert': board.id === boardId,
                  })}
                />
                {board.name}
              </Link>
            </li>
          )
        })}
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
