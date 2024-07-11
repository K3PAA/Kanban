import prisma from '@/lib/db'
import { Task } from '@prisma/client'

type TaskProps = {
  task: Task
}

export default async function SingleTask({ task }: TaskProps) {
  const subtasks = await prisma.subtask.findMany({
    where: {
      taskId: task.id,
    },
  })

  const completed = subtasks.filter((subtask) => subtask.isCompleted).length

  return (
    <li className=''>
      <button className='bg-card text-left shadow-md  py-6 px-4 rounded-xl w-full'>
        <h3 className='font-semibold   mr-auto'> {task.title} </h3>
        <p className='text-muted'>
          {completed} of {subtasks.length} completed
        </p>
      </button>
    </li>
  )
}
