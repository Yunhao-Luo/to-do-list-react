import Card from "../UI/Card";
import "./Items.css";

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
        <div className="todo-item__title">{props.obj.title}</div>
        <div className="todo-item__due">{props.obj.dueTime.toLocaleString()}</div>
        <div className="todo-item__priority">Priority: {props.obj.priority}</div>
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
