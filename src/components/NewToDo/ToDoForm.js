import React, { useState } from "react";
import "./ToDoForm.css";

const ToDoForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPriority, setEnteredPriority] = useState("Low");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTime, setEnteredTime] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const priorityChangeHandler = (event) => {
    setEnteredPriority(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let dateAndTime = enteredDate + "T" + enteredTime;
    if (dateAndTime === "T") {
      dateAndTime = new Date();
    } else {
      dateAndTime = new Date(dateAndTime);
    }
    const ToDoData = {
      title: enteredTitle,
      dueTime: dateAndTime,
      priority: enteredPriority,
      complete: false,
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
          <select value={props.selected} onChange={priorityChangeHandler}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="new-ToDo__control">
          <label>Due Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-ToDo__control">
          <label>Due Time</label>
          <input type="time" value={enteredTime} onChange={timeChangeHandler} />
        </div>
      </div>
      <div className="new-ToDo__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add ToDo</button>
      </div>
    </form>
  );
};

export default ToDoForm;
