import React from 'react'
import './create-todo.scss'
import PropTypes from 'prop-types'

function CreateTodo(props) {
  const [newTodo, setNewTodo] = React.useState('')

  const newTaskNameHandler = (newName) => {
    setNewTodo(newName)
  }

  const newTodoHandler = () => {
    if (newTodo.trim()) {
      props.onAddTodo(newTodo)
    }
    setNewTodo('')
  }

  return (
    <div className={'create-task-block'}>
      <p className={'create-todo-title'}>Create your new task</p>
      <div className={'create-todo'}>
        <input
          className={'create-todo__text'}
          type={'text'}
          onChange={(event) => newTaskNameHandler(event.target.value)}
          value={newTodo}
        />
        <button className={'create-todo__button'} onClick={newTodoHandler}>
          create task
        </button>
      </div>
      <hr />
    </div>
  )
}

CreateTodo.propTypes = {
  onAddTodo: PropTypes.func,
}

export default CreateTodo
