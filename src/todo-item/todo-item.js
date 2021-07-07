import React from 'react'
import './todo-item.scss'

function TodoItem() {
  const [taskIsEdit, setTaskIsEdit] = React.useState(false)
  const [taskName, setTaskName] = React.useState('Buy milk')

  const taskEditHandler = () => {
    if (taskIsEdit) {
      setTaskIsEdit(false)
    } else {
      setTaskIsEdit(true)
    }
  }

  const taskNameChangeHandler = (newTaskName) => {
    setTaskName(newTaskName)
  }

  return (
    <div className={'task-block'}>
      <input type={'checkbox'} />
      {taskIsEdit ? (
        <input
          className={'task-block__text'}
          type={'text'}
          onChange={(event) => {
            taskNameChangeHandler(event.target.value)
          }}
          placeholder={taskName}
        />
      ) : (
        <label className={'task-block__task'}>{taskName}</label>
      )}
      <button
        className={'task-block__button task-block__button_edit'}
        onClick={taskEditHandler}
      >
        {
          taskIsEdit ? 'save' : 'edit'
        }
      </button>
      <button className={'task-block__button task-block__button_delete'}>
        delete
      </button>
    </div>
  )
}

export default TodoItem
