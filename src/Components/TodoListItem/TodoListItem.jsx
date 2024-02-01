import { useState, useEffect } from "react";
/* import TodoItem from "../TodoItem/TodoItem.jsx"; */
import RenderedToDoList from "../RenderedToDoList/RenderedToDoList.jsx";
import { addToDo } from "../../functions.js";

import "./ToDoListItem.css";

function TodoListItem() {
  const [toDoList, setToDoList] = useState(() => {
    const itemsSaved = localStorage.getItem("toDoList");
    return itemsSaved ? JSON.parse(itemsSaved) : [];
  });
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addToDo(inputValue, toDoList, setToDoList);
      setInputValue("");
    }
  };

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <div className="todo-list-item">
      <form className="form-input-todo-text" onSubmit={handleInput}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new Task"
            aria-label="Add a new Task"
            aria-describedby="button-addon2"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="btn btn-outline-light"
            type="submit"
            id="button-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </button>
        </div>
      </form>

      <RenderedToDoList arrToDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}

export default TodoListItem;
