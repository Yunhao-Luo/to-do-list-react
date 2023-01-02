import React, { useState } from "react";
import "./ToDoForm.css";

const ToDoForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPriority, setEnteredPriority] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const priorityChangeHandler = (event) => {
    setEnteredPriority(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const ToDoData = {
      title: enteredTitle,
      dueTime: new Date(enteredDate),
      priority: "low",
      complete: false
    };
    
    props.onSaveToDoData(ToDoData);
    setEnteredTitle("");
    setEnteredPriority("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-ToDo__controls">
        <div className="new-ToDo__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-ToDo__control">
          <label>Priority</label>
          <input
            type="text"
            value={enteredPriority}
            onChange={priorityChangeHandler}
          />
        </div>
        <div className="new-ToDo__control">
          <label>Due Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-ToDo__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add ToDo</button>
      </div>
    </form>
  );
};

export default ToDoForm;
