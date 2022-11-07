import React from 'react'

const AddTask = (props) => {
  return (
    <div className="add_task">
          <input type="text" onChange={props.handleValueChange} />
          <button onClick={props.addTask}>Add Task</button>
    </div>
  )
}

export default AddTask