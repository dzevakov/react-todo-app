import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../todo-item/todo-item'
import './todo-list.scss'

function TodoList({todos, onChangeName, onToggle, onDelete}) {
  return(
    todos.map((todo) => {
      return(
        <TodoItem
          key={todo.id}
          id={todo.id}
          taskName={todo.name}
          isDone={todo.isDone}
          onChangeName={onChangeName}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      )
    })
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      isDone: PropTypes.bool,
    })
  ),
  onChangeName: PropTypes.func,
  onToggle: PropTypes.func,
  onDelete: PropTypes.func,
}

export default TodoList
