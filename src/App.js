import "./styles.css";
import Todo from "./Todo";
import AddBtn from "./AddtoDOM";
import { useState } from "react";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const addTask = (newTaskText) => {
    if (newTaskText.trim() !== "") {
      const newTask = { id: tasks.length + 1, item: newTaskText };
      setTasks([...tasks, newTask]);
    }
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  const taskList = tasks?.map((task) => (
    <Todo item={task.item} id={task.id} key={task.id} deleteTask={deleteTask} />
  ));

  return (
    <div className="App">
      <main>
        <header>
          <h1>To-do List</h1>
          <p className="clear-all" onClick={clearAllTasks}>
            Clear List
          </p>
        </header>
        <br />
        <hr class="divider" />

        <ul id="list-box"> {taskList} </ul>
        <br />
        <br />

        <div className="add-box">
          <AddBtn addTheTask={addTask} />
        </div>
      </main>
    </div>
  );
}

export default App;
