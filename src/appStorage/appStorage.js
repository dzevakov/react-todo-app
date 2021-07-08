function appStorage() {
  let storage = []

  if (localStorage.todoapp) {
    storage = JSON.parse(localStorage.getItem('todoapp'))
  } else {
    storage = [
      {id: 0, name: 'Buy milky way', isDone: false},
      {id: 1, name: 'Buy bread', isDone: false},
      {id: 2, name: 'Wash the dishes', isDone: false}
    ]
    localStorage.setItem('todoapp', JSON.stringify(storage))
  }

  return storage
}

export default appStorage
