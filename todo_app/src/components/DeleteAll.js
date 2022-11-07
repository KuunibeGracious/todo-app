import React from 'react'
import "../css/DeleteAll.css"

const DeleteAll = (props) => {
  return (
    <footer>
        <button onClick={props.deleteAll} >Delete All</button>
    </footer>
  )
}

export default DeleteAll