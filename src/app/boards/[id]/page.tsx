import prisma from '@/lib/db'

type BoardProps = {
  params: {
    id: string
  }
}

export default function Board({ params }: BoardProps) {
  const { id } = params

  return <div>yoo</div>
}
