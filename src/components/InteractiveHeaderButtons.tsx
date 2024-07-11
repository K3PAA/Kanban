'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

export default function InteractiveHeaderButtons() {
  const pathname = usePathname()
  const isBoardSelected = pathname.startsWith('/boards/')

  return (
    <div className='flex items-center'>
      <Button
        variant='default'
        size='lg'
        className='rounded-full'
        disabled={!isBoardSelected}
      >
        <Image
          src='/assets/icon-add-task-mobile.svg'
          alt='logo'
          width={12}
          height={12}
          className='sm:hidden'
        />
        <span className='hidden sm:block'>+ Add new task</span>
      </Button>
      <Button variant='ghost' size='icon' disabled={!isBoardSelected}>
        <Image
          src='/assets/icon-vertical-ellipsis.svg'
          alt=''
          width={5}
          height={20}
        />
      </Button>
    </div>
  )
}
