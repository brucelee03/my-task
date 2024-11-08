import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #ffffff;
  color: #ffffff;
  font-family: 'Roboto';
  display: flex;
  justify-content: space-around;
  padding: 20px;
  min-height: 100vh;
`

export const TaskContainer = styled.div`
  background-color: #000000;
  padding: 15px;
  width: 60%;
`

export const TaskCreatingContainer = styled.div`
  background-color: #131313;
  padding: 20px;
  width: 40%;
`

export const TaskForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

export const TaskCreatingContainerHeading = styled.h1`
  color: #f3aa4e;
  font-size: 36px;
  font-weight: 500;
`

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`

export const TaskInput = styled.input`
  background-color: #f8f8f8;
  padding: 10px;
  border: none;
  border-radius: 2px;
  color: #475569;
  font-size: 16px;
  margin-bottom: 35px;
  outline: none;
`

export const TaskLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #ffffff;
`

export const TaskSelect = styled.select`
  background-color: #f8f8f8;
  padding: 10px;
  border: none;
  border-radius: 2px;
  color: #1a171d;
  font-size: 16px;
  font-weight: 600;
  outline: none;
`

export const AddTaskButton = styled.button`
  background-color: #f3aa4e;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  width: 100px;
  cursor: pointer;
  margin-top: 10px;
`

export const SubHeading = styled(TaskCreatingContainerHeading)`
  font-size: 22px;
  font-weight: 500;
  color: #f8f8f8;
  margin-top: 20px;
`

export const TaskListContainer = styled.ul`
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`

export const TaskItemContainer = styled.li`
  background-color: #1a171d;
  padding: 0px 19px;
  border-radius: 1px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
`

export const Task = styled.p`
  font-size: 15px;
  margin: 0;
  font-weight: 500;
`

export const TaskCard = styled.div`
  background-color: #f3aa4e;
  padding: 6px 12px;
  border-radius: 25px;
`

export const TaskTag = styled(Task)`
  font-size: 12px;
  color: #475569;
`

export const TagList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
`

export const TagButton = styled.button`
  background-color: ${props => (props.bgColor ? '#f3aa4e' : 'transparent')};
  color: #ffffff;
  padding: 5px 10px;
  border: solid 1px #f3aa4e;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  margin-right: 10px;
`

export const NoListMsg = styled.p`
  text-align: center;
  margin-top: 100px;
  font-size: 22px;
  font-weight: 500;
`
