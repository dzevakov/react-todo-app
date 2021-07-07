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
              taskName={todo.name}
            />
          )
        })
      }
    </React.Fragment>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onAddTodo: PropTypes.func
}

export default TodoList