import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../todo-item/todo-item'

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
  onToggle: PropTypes.func
}

export default TodoList
