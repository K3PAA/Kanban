'use client'

import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/stores/sidebarStore'
import Image from 'next/image'

export default function Logo() {
  const isOpen = useSidebarStore((state) => state.isOpen)

  return (
    <div
      className={cn(
        'pl-3 sm:px-8  h-full sm:border-r flex items-center  border-border transition-all duration-100',
        {
          'sm:basis-[260px] border-b sm:border-b-0 md:basis-[300px] ': isOpen,
          'sm:basis-[220px] border-b': !isOpen,
        }
      )}
    >
      <Image
        src='/assets/logo-dark.svg'
        alt='logo'
        width={153}
        height={26}
        className='hidden sm:block dark:sm:hidden'
      />

      <Image
        src='/assets/logo-light.svg'
        alt='logo'
        width={153}
        height={26}
        className='hidden  dark:sm:block'
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
