import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Theme() {
  return (
    <Button variant='secondary' className='flex items-center gap-6'>
      <Image
        src='/assets/icon-light-theme.svg'
        alt='sun'
        width={20}
        height={20}
      />
      <div className='w-10 h-5 rounded-full bg-primary relative'>
        <div className='w-[14px] h-[14px] rounded-full bg-white absolute top-1/2 left-0 -translate-y-1/2 translate-x-[3px]'></div>
      </div>
      <Image
        src='/assets/icon-dark-theme.svg'
        alt='moon'
        width={16}
        height={16}
      />
    </Button>
  )
}
