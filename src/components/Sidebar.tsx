import { Button } from '@/components/ui/button'
import Boards from '@/components/sidebar/Boards'
import Theme from '@/components/sidebar/Theme'

export default function Sidebar() {
  return (
    <aside className='bg-card basis-[300px] border-r-2 flex flex-col justify-between'>
      <Boards />

      <div className='mb-8 flex flex-col gap-2'>
        <Theme />
        <Button>Hide Sidebar</Button>
      </div>
    </aside>
  )
}
