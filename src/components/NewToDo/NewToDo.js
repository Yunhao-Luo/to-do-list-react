import React, { useState } from "react";
import "./NewToDo.css";
import ToDoForm from "./ToDoForm";
import { FaPlus } from "react-icons/fa";

const NewToDo = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveToDoHandler = (enteredToDoData) => {
    const ToDoDate = {
      ...enteredToDoData,
      id: Math.random.toString(),
    };
    props.onAddToDo(ToDoDate);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing && (
        <div className="new-ToDo__collapsed">
          <button onClick={startEditingHandler}>{<FaPlus size={30} style={{color:"white"}}/>}</button>{" "}
        </div>
      )}
      {isEditing && (
        <div className="new-ToDo">
          <ToDoForm
            onSaveToDoData={saveToDoHandler}
            onCancel={stopEditingHandler}
          />
        </div>
      )}
    </div>
  );
};

export default NewToDo;
