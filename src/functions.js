export const deleteToDo = (toDoToDelete, arr, setToDoList) => {
  const updatedToDoList = arr.filter((toDo) => toDo !== toDoToDelete);
  return setToDoList(updatedToDoList);
};

export const addToDo = (newToDo, toDoList, setToDoList) => {
  setToDoList([...toDoList, newToDo]);
};

export const getCurrentHour = () => {
  const currentHour = new Date();

  const hours = currentHour.getHours().toString().padStart(2, "0");
  const minutes = currentHour.getMinutes().toString().padStart(2, "0");
  const seconds = currentHour.getSeconds().toString().padStart(2, "0");
  const formatedHour = `${hours} : ${minutes} : ${seconds}`;

  return formatedHour;
};
