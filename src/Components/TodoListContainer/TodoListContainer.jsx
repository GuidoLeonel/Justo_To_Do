import "./TodoListContainer.css";
import TodoListItem from "../TodoListItem/TodoListItem.jsx";
import { HourContainer } from "../HourContainer/HourContainer.jsx";

function TodoListContainer() {
  return (
    <div className="todo-list-container">
      <HourContainer />
      <h1>Lista de Tareas</h1>
      <TodoListItem />
    </div>
  );
}

export default TodoListContainer;
