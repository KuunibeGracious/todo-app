import React from 'react'
import { FcTodoList } from 'react-icons/fc'
import "../css/Header.css"
const Header = () => {
  return (
    <div className='header'>
          <FcTodoList className='todo-icon' />
          <h1>Todo</h1>
    </div>
  )
}

export default Header