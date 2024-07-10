import Image from 'next/image'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className='flex flex-1 justify-between items-center  py-6 px-3 md:p-6  border-b-2 border-border '>
      <h1 className='text-xl md:text-2xl font-semibold'>Platform Launch</h1>

      <div className=''>
        <Button>
          <Image
            src='/assets/icon-add-task-mobile.svg'
            alt='logo'
            width={12}
            height={12}
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
