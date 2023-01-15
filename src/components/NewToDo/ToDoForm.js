import React, { useState } from "react";
import "./ToDoForm.css";

const ToDoForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPriority, setEnteredPriority] = useState("low");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTime, setEnteredTime] = useState("");
  const [enteredTag, setEnteredTag] = useState("");

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

  const tagChangeHandler = (event) => {
    setEnteredTag(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let dateAndTime = enteredDate + "T" + enteredTime;
    if (dateAndTime === "T") {
      dateAndTime = new Date();
      console.log("here");
    } else {
      dateAndTime = new Date();
    }
    console.log(dateAndTime);
    let Title = enteredTitle;
    let Priority = enteredPriority;
    if (Title === "") {Title = "Untitled";}
    if (Priority==="") {Priority = "low";}
    const ToDoData = {
      title: Title,
      dueTime: dateAndTime,
      priority: Priority,
      complete: false,
      tag: enteredTag
    };

    console.log(ToDoData);

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
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
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
        <div className="new-ToDo__control">
          <label>Tag</label>
          <select value={props.selected} onChange={tagChangeHandler}>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Family">Family</option>
          </select>
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
