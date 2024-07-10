'use client'

import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/stores/sidebarStore'
import Image from 'next/image'

export default function Logo() {
  const isOpen = useSidebarStore((state) => state.isOpen)

  return (
    <div
      className={cn(
        'px-4 sm:px-8  h-full sm:border-r-2 flex items-center  border-border transition-all duration-300',
        {
          'sm:basis-[260px] border-b-2 sm:border-b-0 md:basis-[300px] ': isOpen,
          'sm:basis-[220px] border-b-2': !isOpen,
        }
      )}
    >
      <Image
        src='/assets/logo-dark.svg'
        alt='logo'
        width={153}
        height={26}
        className='hidden sm:block'
      />
      <Image
        src='/assets/logo-mobile.svg'
        alt='logo'
        width={24}
        height={25}
        className='sm:hidden'
      />
    </div>
  )
}
