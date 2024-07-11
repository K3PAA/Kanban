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
import InteractiveHeaderButtons from './InteractiveHeaderButtons'

type HeaderProps = {
  boards: Board[]
}

export default function Header({ boards }: HeaderProps) {
  return (
    <header className='flex flex-1 justify-between items-center  py-6 px-3 md:p-6  border-b border-border '>
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

      <InteractiveHeaderButtons />
    </header>
  )
}
