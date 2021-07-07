import React from 'react'
import './App.css'
import TodoItem from './todo-item/todo-item';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>ToDo App</h1>
      </header>
      <section className={'wrapper-app'}>
        <TodoItem />
      </section>
    </div>
  );
}

export default App;
