import Tasks from '@/components/Tasks'
import { Button } from '@/components/ui/button'
import prisma from '@/lib/db'
import { cn } from '@/lib/utils'

type BoardProps = {
  params: {
    id: string
  }
}

const colors = [
  'after:bg-[#49C4E5]',
  'after:bg-[#8471F2]',
  'after:bg-[#67E2AE]',
]

export default async function Board({ params }: BoardProps) {
  const { id } = params

  const board = await prisma.board.findUnique({
    where: {
      id,
    },
    include: {
      columns: {
        include: {
          tasks: true,
        },
      },
    },
  })

  if (!board) {
    return <h1>Board not found</h1>
  }

  return (
    <main className='flex-1 flex px-6 gap-6  overflow-auto'>
      {board.columns.map((column, i) => {
        return (
          <section key={column.id} className='min-w-[300px] flex-1 py-6'>
            <h2
              className={cn(
                "ml-6 uppercase tracking-widest text-sm tex t-muted relative after:content-[''] after:w-3 after:h-3 after:absolute after:rounded-full after:top-1/2 after:-left-4 after:-translate-y-1/2",
                colors[i % 3]
              )}
            >
              {column.name} <span>({column.tasks.length})</span>
            </h2>

            <Tasks tasks={column.tasks} />
          </section>
        )
      })}
      <Button
        className='my-20 h-auto min-w-[240px]  border-2 text-2xl'
        variant='secondary'
      >
        + New Column
      </Button>
    </main>
  )
}
