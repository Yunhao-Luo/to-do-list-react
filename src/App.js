import React, { useState } from "react";
import "./App.css";

import ToDo from "./components/ToDo/ToDo";
import NewToDo from "./components/NewToDo/NewToDo";
import Card from "./components/UI/Card";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const DUMMY_TO_DOS = [
    {
      id: "e1",
      title: "Do laundry",
      dueTime: new Date(2022, 10, 3, 16, 0),
      priority: "low",
      complete: false,
      tag: "Personal",
    },
    {
      id: "e2",
      title: "Do homework",
      dueTime: new Date(2022, 10, 5, 12, 0),
      priority: "high",
      complete: false,
      tag: "Work",
    },
    {
      id: "e3",
      title: "Dinner with Tony",
      dueTime: new Date(2022, 10, 3, 18, 0),
      priority: "medium",
      complete: false,
      tag: "Family",
    },
  ];

  const DUMMY_COMPLETED = [
    {
      id: "e4",
      title: "Grocery shopping",
      dueTime: new Date(2022, 8, 3, 10, 0),
      priority: "medium",
      complete: true,
      tag: "Personal",
    },
  ];

  const [ToDos, setToDos] = useState(DUMMY_TO_DOS);
  const [CompletedTodDos, setCompletedToDos] = useState(DUMMY_COMPLETED);

  const onAddToDo = (ToDo) => {
    setToDos((prevToDos) => {
      return [ToDo, ...prevToDos];
    });
  };

  const onComplete = (item) => {
    setCompletedToDos((prevToDos) => {
      return [item, ...prevToDos];
    });
    setToDos((prevToDos) => {
      return prevToDos.filter((todo) => {
        return todo !== item;
      });
    });
  };

  const undoComplete = (item) => {
    setToDos((prevToDos) => {
      return [item, ...prevToDos];
    });
    setCompletedToDos((prevToDos) => {
      return prevToDos.filter((todo) => {
        return todo !== item;
      });
    });
  };

  return (
    <div className="App">
      <h2 style={ {color:"white"} }>To Do List</h2>
      <div>
        <div className="main-container">
          <Card className="left-bar">
            <SideBar />
          </Card>
          <Card className="todos">
            <div className="content__container">
              <NewToDo onAddToDo={onAddToDo}></NewToDo>
              <ToDo
                items={ToDos}
                completed={CompletedTodDos}
                onComplete={onComplete}
                undoComplete={undoComplete}
              ></ToDo>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
