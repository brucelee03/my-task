import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TagItem from '../TagItem'
import TaskItem from '../TaskItem'
import {
  NoListMsg,
  TagList,
  TaskListContainer,
  TaskContainer,
  TaskCreatingContainer,
  AddTaskButton,
  TaskCreatingContainerHeading,
  TaskSelect,
  SubHeading,
  TaskLabel,
  TaskInput,
  TaskForm,
  InputField,
  AppContainer,
} from '../styledComponents'

class TaskManager extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskInput: '',
      tagsList: props.tagsList,
      activeCategoryId: props.tagsList[0].optionId,
      activeTagId: '',
      tasksList: [],
    }
  }

  onChangeTask = event => {
    this.setState({taskInput: event.target.value})
  }

  onChangeTags = event => {
    this.setState({activeCategoryId: event.target.value})
  }

  onClickAddTask = event => {
    event.preventDefault()
    const {taskInput, activeCategoryId, tagsList} = this.state
    const activeTag = tagsList.find(
      eachTag => eachTag.optionId === activeCategoryId,
    )
    if (taskInput) {
      this.setState(prevState => ({
        tasksList: [
          ...prevState.tasksList,
          {
            id: uuidv4(), // Generate a unique ID
            task: taskInput, // Store taskInput directly as a string
            category: activeTag.displayText, // Store the category display text directly
            categoryId: activeCategoryId,
          },
        ],
        taskInput: '',
        activeCategoryId: tagsList[0].optionId,
      }))
    }
  }

  onClickTagBtn = id => {
    this.setState(prevState => ({
      activeTagId: prevState.activeTagId === id ? '' : id, // Toggle the active tag
    }))
  }

  renderGenratingTaskForm = () => {
    const {taskInput, activeCategoryId, tagsList} = this.state

    return (
      <TaskForm onSubmit={this.onClickAddTask}>
        <TaskCreatingContainerHeading>
          Create a task!
        </TaskCreatingContainerHeading>
        <InputField>
          <TaskLabel htmlFor="task">Task</TaskLabel>
          <TaskInput
            id="task"
            type="text"
            value={taskInput}
            onChange={this.onChangeTask}
            placeholder="Enter the task here"
          />
          <TaskLabel htmlFor="category">Tags</TaskLabel>
          <TaskSelect
            id="category"
            onChange={this.onChangeTags}
            value={activeCategoryId}
          >
            {tagsList.map(eachTag => (
              <option key={eachTag.optionId} value={eachTag.optionId}>
                {eachTag.displayText}
              </option>
            ))}
          </TaskSelect>
        </InputField>
        <AddTaskButton type="submit">Add Task</AddTaskButton>
      </TaskForm>
    )
  }

  render() {
    const {activeTagId, tasksList, tagsList} = this.state

    // Filter tasks based on the activeTagId
    const filteredTasksList = activeTagId
      ? tasksList.filter(eachTask => eachTask.categoryId === activeTagId)
      : tasksList // Show all tasks if no tag is selected

    return (
      <AppContainer>
        <TaskCreatingContainer>
          {this.renderGenratingTaskForm()}
        </TaskCreatingContainer>
        <TaskContainer>
          <SubHeading>Tags</SubHeading>
          <TagList>
            {tagsList.map(eachTag => (
              <TagItem
                key={eachTag.optionId}
                tag={eachTag}
                activeTag={activeTagId === eachTag.optionId}
                activeTagBtn={this.onClickTagBtn}
              />
            ))}
          </TagList>
          <SubHeading>Tasks</SubHeading>
          {filteredTasksList.length > 0 ? (
            <TaskListContainer>
              {filteredTasksList.map(eachTask => (
                <TaskItem key={eachTask.id} taskItem={eachTask} />
              ))}
            </TaskListContainer>
          ) : (
            <NoListMsg>No Tasks Added Yet</NoListMsg>
          )}
        </TaskContainer>
      </AppContainer>
    )
  }
}

export default TaskManager
