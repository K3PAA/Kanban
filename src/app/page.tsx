import { Button } from '@/components/ui/button'

export default async function Home() {
  return (
    <main className='flex-1 transition-all duration-1000 flex flex-col gap-4 items-center justify-center'>
      <h2 className='text-4xl font-semibold'>No board selected</h2>
      <p className='text-muted text-lg'>Select board or create new one</p>
      <Button size='lg' className='rounded-full'>
        + Create new board
      </Button>
    </main>
  )
}
