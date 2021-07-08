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
    <React.Fragment>
      <p className={'create-todo-title'}>Create you new task</p>
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
    </React.Fragment>
  )
}

CreateTodo.propTypes = {
  onAddTodo: PropTypes.func,
}

export default CreateTodo
