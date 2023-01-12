import Card from "../UI/Card";
import "./Items.css";
import {
  MdWork,
  MdOutlineFamilyRestroom
} from "react-icons/md";

import {BsFillPersonFill} from "react-icons/bs"

const Item = (props) => {
  const onComplete = () => {
    const completedItem = props.obj;
    completedItem.complete = true;
    props.onComplete(completedItem);
  };

  const undoComplete = () => {
    const completedItem = props.obj;
    completedItem.complete = false;
    props.undoComplete(completedItem);
  };

  return (
    <Card className="todo-item">
      <div className="todo-item__description">
        <div className="todo-item__description__container">
          <div className="todo-item__firstline__container">
            <div className="todo-item__title">{props.obj.title}</div>
            <div className="todo-item__tag__container">
              <div className="todo-item__tag">{props.obj.tag}</div>
              {props.obj.tag === "Work" && <MdWork />}
              {props.obj.tag === "Family" && <MdOutlineFamilyRestroom />}
              {props.obj.tag === "Personal" && <BsFillPersonFill />}
            </div>
          </div>
          <div className="todo-item__due">
            {props.obj.dueTime.toLocaleString()}
          </div>
          {props.obj.priority === "low" && (
            <div className="todo-item__priority__low">
              Priority: {props.obj.priority}
            </div>
          )}
          {props.obj.priority === "medium" && (
            <div className="todo-item__priority__medium">
              Priority: {props.obj.priority}
            </div>
          )}
          {props.obj.priority === "high" && (
            <div className="todo-item__priority__high">
              Priority: {props.obj.priority}
            </div>
          )}
        </div>
      </div>
      {!props.obj.complete && (
        <button className="todo-item__incomplete" onClick={onComplete}></button>
      )}
      {props.obj.complete && (
        <button className="todo-item__complete" onClick={undoComplete}></button>
      )}
    </Card>
  );
};

export default Item;
