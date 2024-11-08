import {TaskItemContainer, TaskCard, Task, TaskTag} from '../styledComponents'

const TaskItem = props => {
  const {taskItem} = props
  const {task, category} = taskItem

  return (
    <TaskItemContainer>
      <div>
        <Task>{task}</Task>
      </div>
      <TaskCard>
        <TaskTag>{category}</TaskTag>
      </TaskCard>
    </TaskItemContainer>
  )
}

export default TaskItem
