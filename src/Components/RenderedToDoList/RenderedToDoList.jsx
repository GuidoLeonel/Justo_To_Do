import PropTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem.jsx";

const RenderedToDoList = ({ arrToDoList, setToDoList }) => {
  return (
    <div className="rendered-list-items">
      {arrToDoList.map((toDoItem, index) => {
        return (
          <TodoItem
            key={index}
            toDoItem={toDoItem}
            toDoList={arrToDoList}
            setToDoList={setToDoList}
          />
        );
      })}
    </div>
  );
};

RenderedToDoList.propTypes = {
  arrToDoList: PropTypes.array.isRequired,
  setToDoList: PropTypes.func.isRequired,
};

export default RenderedToDoList;
