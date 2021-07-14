import React from 'react'
import './create-todo.scss'
import PropTypes from 'prop-types'

function CreateTodo({onAddTodo}) {
  const [newTodo, setNewTodo] = React.useState('')

  const newTaskNameHandler = React.useCallback((event) => {
    const newName = event.target.value
    setNewTodo(newName)
  }, [newTodo])

  const newTodoHandler = React.useCallback(() => {
    if (newTodo.trim()) {
      onAddTodo(newTodo)
    }
    setNewTodo('')
  }, [newTodo])

  return (
    <div className={'create-task-block'}>
      <p className={'create-todo-title'}>Create your new task</p>
      <div className={'create-todo'}>
        <input
          className={'create-todo__text'}
          type={'text'}
          onChange={newTaskNameHandler}
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
