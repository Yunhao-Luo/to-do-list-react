import React, { useState } from "react";
import "./NewToDo.css";
import ToDoForm from "./ToDoForm";

const NewToDo = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const saveToDoHandler = (enteredToDoData) => {
    const ToDoDate = {
      ...enteredToDoData,
      id: Math.random.toString()
    }
    props.onAddToDo(ToDoDate);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-ToDo">
      {!isEditing && <button onClick={startEditingHandler}>Add New ToDo</button>}
      {isEditing && <ToDoForm onSaveToDoData={saveToDoHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewToDo;
