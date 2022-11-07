import { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import DeleteAll from "./components/DeleteAll";
import RemoveTask from "./components/RemoveTask";
import "./css/App.css"


function App() {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  //function to handle value change in input field.
  const handleValueChange = (event) => {
    setNewTask(event.target.value);
    //console.log(event.target.value)
  }
  //function to add task to todo list.
  const addTask = () => {
    const task = {
      id:todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1 ,
      taskName: newTask,
      checked:false
    }
    setTodoList([...todoList, task]);
  }
  
  //function to remove Task from todo list
  const removeTask = (id) => {
    setTodoList(todoList.filter((task) => {
      return task.id !== id
    }))
  }
  //function to delete all tasks
  const deleteAll = () => {
    setTodoList([])
  }
  //check tasks
  const handleCheck = (id) => {
    setTodoList(todoList.map((task) => task.id === id ? { ...task, checked: !task.checked } : task))
  }

  const handleInputField = () => {
    setNewTask("")
  }


  return (
    <div className="app">
      <Header/>
      <AddTask
        handleValueChange={handleValueChange}
        addTask={addTask}
        clearField={handleInputField}
      />
      <TodoList todoList={todoList.map((task) => {
        return (
          <div className="todo_list" key={task.id}>
            <input
              className="checkbox"
              type="checkbox"
              onChange={() => handleCheck(task.id)}
              checked={task.checked}
            />
            <p className="task">{task.taskName}</p>
            <RemoveTask className="remove_task" removeTask={() => removeTask(task.id)} />
          </div>
        ) 
      })} />
      {todoList.length > 0 ?  <DeleteAll deleteAll={deleteAll} /> : <p className="footer_note">add a task</p>}
    </div>
  );
}

export default App;
