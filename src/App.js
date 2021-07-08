import React from 'react'
import './App.css'
import TodoList from './todo-list/todo-list'
import CreateTodo from './create-todo/create-todo'
import DeleteContext from './context/context'

function App() {
  const [todos, setTodos] = React.useState([
    {id: 0, name: 'Buy milk', isDone: false},
    {id: 1, name: 'Buy bread', isDone: false},
    {id: 2, name: 'Wash the dishes', isDone: false}
  ])

  const addTodo = (newTodoName) => {
    const newTodo = {
      id: Date.now(),
      name: newTodoName,
      isDone: false
    }
    setTodos(todos.concat([newTodo]))
    console.log(todos)
  }

  const todoToggleHandler = (todoId) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === todoId) {
          todo.isDone = !todo.isDone
        }
        return todo
      })
    )
  }

  const deleteTodo = (taskID) => {
    setTodos(todos.filter(todo => todo.id !== taskID))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo App</h1>
      </header>
      <section className={'wrapper-app'}>
        <CreateTodo onAddTodo={addTodo}/>
        <hr />
        <DeleteContext.Provider value={{deleteTodo}}>
          <TodoList todos={todos} onToggle={todoToggleHandler}/>
        </DeleteContext.Provider>
      </section>
    </div>
  );
}

export default App;
