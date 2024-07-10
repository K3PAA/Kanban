import Image from 'next/image'
import { Button } from '@/components/ui/button'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import Boards from './sidebar/Boards'
import Theme from './sidebar/Theme'
import { Board } from '@prisma/client'
import BoardTitle from './BoardTitle'

type HeaderProps = {
  boards: Board[]
}

export default function Header({ boards }: HeaderProps) {
  return (
    <header className='flex flex-1 justify-between items-center  py-6 px-3 md:p-6  border-b-2 border-border '>
      <BoardTitle
        boards={boards}
        className='hidden sm:block text-xl md:text-2xl font-semibold'
      />
      <NavigationMenu className='sm:hidden '>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-xl px-2'>
              <BoardTitle boards={boards} />
            </NavigationMenuTrigger>
            <NavigationMenuContent className='py-4 w-[270px]'>
              <Boards boards={boards} />
              <Theme />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className=''>
        <Button>
          <Image
            src='/assets/icon-add-task-mobile.svg'
            alt='logo'
            width={12}
            height={12}
            className='sm:hidden'
          />
          <span className='hidden sm:block'>+ Add new task</span>
        </Button>
        <Button variant='ghost' size='icon'>
          <Image
            src='/assets/icon-vertical-ellipsis.svg'
            alt=''
            width={5}
            height={20}
          />
        </Button>
      </div>
    </header>
  )
}
