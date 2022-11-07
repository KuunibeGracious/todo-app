import React from 'react'
import {FaTrash} from 'react-icons/fa'

const RemoveTask = (props) => {
  return (
    // <button onClick={props.removeTask} >remove</button>
      <FaTrash
          role="button"
          onClick={props.removeTask}
      />
  )
}

export default RemoveTask