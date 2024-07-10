import Image from 'next/image'

export default function Logo() {
  return (
    <div className='basis-[300px] pl-8  h-full border-r-2 flex items-center  border-b-2 border-border'>
      <Image src='/assets/logo-dark.svg' alt='logo' width={153} height={26} />
    </div>
  )
}
