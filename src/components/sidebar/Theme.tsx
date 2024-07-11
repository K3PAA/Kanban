'use client'

import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function Theme() {
  const { setTheme } = useTheme()

  const handleThemeChange = () => {
    const isDarkMode = document.documentElement.className.includes('dark')
    setTheme(isDarkMode ? 'light' : 'dark')
  }

  return (
    <Button
      variant='secondary'
      size='lg'
      className='mx-auto sm:mx-6 flex items-center gap-6 w-[90%] sm:w-auto mt-4 sm:mt-0'
      onClick={handleThemeChange}
    >
      <Image
        src='/assets/icon-light-theme.svg'
        alt='sun'
        width={20}
        height={20}
      />
      <div className='w-10 h-5 rounded-full bg-primary relative'>
        <div className='w-[14px] h-[14px] rounded-full bg-white absolute top-1/2 left-0 transition-all duration-300 -translate-y-1/2 translate-x-[3px] dark:translate-x-[23px]'></div>
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
