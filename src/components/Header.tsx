import Image from 'next/image'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className='flex flex-1 justify-between items-center p-6  border-b-2 border-border'>
      <h1 className='text-2xl font-semibold'>Platform Launch</h1>

      <div className=''>
        <Button>+ Add new task</Button>
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
