import React from 'react'
import './todo-item.scss'
import PropTypes from 'prop-types'

function TodoItem(prpos) {
  const [taskIsEdit, setTaskIsEdit] = React.useState(false)
  const [taskName, setTaskName] = React.useState(prpos.taskName)

  const taskEditHandler = () => {
    setTaskIsEdit(!taskIsEdit)
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
          value={taskName}
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

TodoItem.propTypes = {
  taskName: PropTypes.string
}

export default TodoItem
