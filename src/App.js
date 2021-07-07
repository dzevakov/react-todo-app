import React from 'react'
import './App.css'
import TodoList from './todo-list/todo-list'
import CreateTodo from './create-todo/create-todo'
import DeleteContext from './context/context'

function App() {
  const [todos, setTodos] = React.useState([
    {id: 0, name: 'Buy milk'},
    {id: 1, name: 'Buy bread'},
    {id: 2, name: 'Wash the dishes'}
  ])

  const addTodo = (newTodoName) => {
    const newTodo = {
      id: Date.now(),
      name: newTodoName
    }
    setTodos(todos.concat([newTodo]))
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
          <TodoList todos={todos} />
        </DeleteContext.Provider>
      </section>
    </div>
  );
}

export default App;
