'use client'

import { Button } from '@/components/ui/button'
import Boards from '@/components/sidebar/Boards'
import Theme from '@/components/sidebar/Theme'
import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/stores/sidebarStore'
import Image from 'next/image'
import { Board } from '@prisma/client'

type SidebarProps = {
  boards: Board[]
}

export default function Sidebar({ boards }: SidebarProps) {
  const isOpen = useSidebarStore((state) => state.isOpen)
  const setIsOpen = useSidebarStore((state) => state.setIsOpen)

  return (
    <>
      <aside
        className={cn(
          'bg-card  border-r hidden sm:flex flex-col justify-between transition-all duration-300 ',
          {
            'basis-[260px] md:basis-[300px]': isOpen,
            'basis-[0px]  overflow-hidden opacity-0 pointer-events-none':
              !isOpen,
          }
        )}
      >
        <Boards boards={boards} />

        <div className='mb-8 flex flex-col gap-2 relative'>
          <Theme />

          <Button
            className='mr-6 pl-6 gap-4 justify-start text-muted'
            variant='ghost'
            onClick={() => setIsOpen(false)}
          >
            <Image
              src='/assets/icon-hide-sidebar.svg'
              alt='hide sidebar icon'
              width={18}
              height={16}
            />
            Hide Sidebar
          </Button>
        </div>
      </aside>

      <Button
        className={cn(
          'fixed bottom-12 left-0 rounded-r-full h-12 justify-start pr-5 pl-2 transition duration-300 hidden sm:block',
          {
            'opacity-0 pointer-events-none': isOpen,
          }
        )}
        onClick={() => {
          setIsOpen(true)
        }}
      >
        <Image
          src='/assets/icon-show-sidebar.svg'
          alt='show sidebar icon'
          width={16}
          height={10}
        />
      </Button>
    </>
  )
}
