import React from 'react'
import './todo-item.scss'
import PropTypes from 'prop-types'
import DeleteContext from '../context/context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faSave } from '@fortawesome/free-solid-svg-icons'

function TodoItem(props) {
  const [taskIsEdit, setTaskIsEdit] = React.useState(false)
  const [taskName, setTaskName] = React.useState(props.taskName)
  const { deleteTodo } = React.useContext(DeleteContext)

  const taskEditHandler = () => {
    if (taskIsEdit) {
      saveTodo()
    }
    setTaskIsEdit(!taskIsEdit)
  }

  const saveTodo = () => {
    props.onChangeName(props.id, taskName)
  }

  const taskNameChangeHandler = (newTaskName) => {
    setTaskName(newTaskName)
  }

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
          onChange={(event) => {
            taskNameChangeHandler(event.target.value)
          }}
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
          <FontAwesomeIcon icon={faSave} style={{color: '#2897ed'}}/>
        ) : (
          <FontAwesomeIcon icon={faEdit} />
        )}
      </button>
      <button
        className={'task-block__button task-block__button_delete'}
        onClick={() => deleteTodo(props.id)}
      >
        <FontAwesomeIcon icon={faTrashAlt} style={{ color: '#f63a0f' }} />
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
}

export default TodoItem
