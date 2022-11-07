import { useState } from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";


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
      taskName: newTask
    }
    setTodoList([...todoList, task]);
  }

  //function to remove Task from todo list
  const removeTask = (id) => {
    setTodoList(todoList.filter((task) => {
      return task.id !== id
    }))
  }

  return (
    <div className="App">
      <AddTask
        handleValueChange={handleValueChange}
        addTask={addTask}
      />
      <TodoList todoList={todoList.map((task) => {
        return (
          <div key={task.id}>
            <p>{task.taskName}</p>
            <button onClick={() => removeTask(task.id)}>remove</button>
          </div>
        ) 
      })} />
    </div>
  );
}

export default App;
