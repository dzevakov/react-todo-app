const createClassName = (condition) => {
  const defaultName ='task-block__task'

  return condition ? defaultName + ' done' : defaultName
}

export default createClassName