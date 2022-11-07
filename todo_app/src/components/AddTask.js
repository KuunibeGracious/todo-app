import React from 'react'
import "../css/AddTask.css"

const AddTask = (props) => {
  return (
    <div className="add_task">
          <input type="text" onChange={props.handleValueChange} placeholder="Input Task"/>
          <button onClick={props.addTask}>Add Task</button>
    </div>
  )
}

export default AddTask