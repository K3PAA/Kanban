import { Task } from '@prisma/client'
import SingleTask from './SingleTask'

type TasksProps = {
  tasks: Task[]
}

export default function Tasks({ tasks }: TasksProps) {
  return (
    <ul className='py-6 flex flex-col gap-5  '>
      {tasks.map((task) => {
        return <SingleTask key={task.id} task={task} />
      })}
    </ul>
  )
}
