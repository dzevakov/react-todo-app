import React from 'react'
import './todo-item.scss'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faSave } from '@fortawesome/free-solid-svg-icons'

function TodoItem(props) {
  const [taskIsEdit, setTaskIsEdit] = React.useState(false)
  const [taskName, setTaskName] = React.useState(props.taskName)

  const taskEditHandler = React.useCallback(() => {
    if (taskIsEdit) {
      saveTodo()
    }
    setTaskIsEdit(!taskIsEdit)
  }, [taskIsEdit])

  const saveTodo = () => props.onChangeName(props.id, taskName)

  const taskNameChangeHandler = React.useCallback((event) => {
    const newTaskName = event.target.value
    setTaskName(newTaskName)
  }, [taskName])

  let taskDoneClass = 'task-block__task'

  if (props.isDone) {
    taskDoneClass = taskDoneClass + ' done'
  }

  return (
    <div className={'task-block'}>
      <input type={'checkbox'} onChange={() => props.onToggle(props.id)} />
      {taskIsEdit ? (
        <input
          className={'task-block__text'}
          type={'text'}
          onChange={taskNameChangeHandler}
          value={taskName}
        />
      ) : (
        <p className={taskDoneClass}>{taskName}</p>
      )}
      <button
        className={'task-block__button task-block__button_edit'}
        onClick={taskEditHandler}
      >
        {taskIsEdit ? (
          <FontAwesomeIcon className='icon-save' icon={faSave} />
        ) : (
          <FontAwesomeIcon icon={faEdit} />
        )}
      </button>
      <button
        className={'task-block__button task-block__button_delete'}
        onClick={() => props.onDelete(props.id)}
      >
        <FontAwesomeIcon className='icon-delete' icon={faTrashAlt} />
      </button>
    </div>
  )
}

TodoItem.propTypes = {
  id: PropTypes.number,
  taskName: PropTypes.string,
  isDone: PropTypes.bool,
  onChangeName: PropTypes.func,
  onToggle: PropTypes.func,
  onDelete: PropTypes.func,
}

export default TodoItem
