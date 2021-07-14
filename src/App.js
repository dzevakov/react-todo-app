import React from 'react'
import './App.css'
import TodoList from './todo-list/todo-list'
import CreateTodo from './create-todo/create-todo'
import appStorage from './appStorage/appStorage'

const App = () => {
  const [todos, setTodos] = React.useState(appStorage())

  React.useEffect(() => {
    localStorage.setItem('todoapp', JSON.stringify(todos))
  }, [todos])

  const addTodo = React.useCallback((newTodoName) => {
    const newTodo = {
      id: Date.now(),
      name: newTodoName,
      isDone: false,
    }
    setTodos(todos.concat([newTodo]))
  }, [todos])

  const todoToggleHandler = React.useCallback((todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          todo.isDone = !todo.isDone
        }
        return todo
      })
    )
  }, [todos])

  const todoChangeNameHandler = React.useCallback((todoId, newName) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          todo.name = newName
        }
        return todo
      })
    )
  }, [todos])

  const deleteTodo = React.useCallback((taskID) => setTodos(todos.filter((todo) => todo.id !== taskID)), [todos])

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>ToDo App</h1>
      </header>
      <section className={'wrapper-app'}>
        <CreateTodo onAddTodo={addTodo} />
        <div
          className='task-list'
        >
          {todos.length
            ? <TodoList
            todos={todos}
            onChangeName={todoChangeNameHandler}
            onToggle={todoToggleHandler}
            onDelete={deleteTodo}
          /> : <p style={{fontSize: '18px', fontWeight: '700'}}>No task for today</p>
          }
        </div>
      </section>
    </div>
  )
}

export default App
