import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../todo-item/todo-item'
import './todo-list.scss'

function TodoList(props) {
  return(
    <React.Fragment>
      {
        props.todos.map((todo) => {
          return(
            <TodoItem
              key={todo.id}
              id={todo.id}
              taskName={todo.name}
              isDone={todo.isDone}
              onChangeName={props.onChangeName}
              onToggle={props.onToggle}
            />
          )
        })
      }
    </React.Fragment>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onChangeName: PropTypes.func,
  onToggle: PropTypes.func
}

export default TodoList
