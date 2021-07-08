import React from 'react'
import './App.css'
import TodoList from './todo-list/todo-list'
import CreateTodo from './create-todo/create-todo'
import DeleteContext from './context/context'
import appStorage from './appStorage/appStorage'

function App() {
  const [todos, setTodos] = React.useState(appStorage())

  React.useEffect(() => {
    localStorage.setItem('todoapp', JSON.stringify(todos))
  })

  const addTodo = (newTodoName) => {
    const newTodo = {
      id: Date.now(),
      name: newTodoName,
      isDone: false,
    }
    setTodos(todos.concat([newTodo]))
  }

  const todoToggleHandler = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          todo.isDone = !todo.isDone
        }
        return todo
      })
    )
  }

  const todoChangeNameHandler = (todoId, newName) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          todo.name = newName
        }
        return todo
      })
    )
  }

  const deleteTodo = (taskID) => {
    setTodos(todos.filter((todo) => todo.id !== taskID))
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>ToDo App</h1>
      </header>
      <section className={'wrapper-app'}>
        <CreateTodo onAddTodo={addTodo} />
        <div
          className={'task-list'}
          style={{ backgroundImage: 'url(/squared-paper-texture.jpg)' }}
        >
          <DeleteContext.Provider value={{ deleteTodo }}>
            {todos.length
              ? <TodoList
              todos={todos}
              onChangeName={todoChangeNameHandler}
              onToggle={todoToggleHandler}
            /> : <p style={{fontSize: '18px', fontWeight: '700'}}>No task for today</p>
            }

          </DeleteContext.Provider>
        </div>
      </section>
    </div>
  )
}

export default App
