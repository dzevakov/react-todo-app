import React from 'react'

function TodoItem() {
  return (
    <div>
      <input type={'checkbox'} />
      <label className={'task'}>Buy milk</label>
      <label type={'text'} />
      <button className={'edit'}>edit</button>
      <button className={'delete'}>delete</button>
    </div>
  )
}

export default TodoItem
