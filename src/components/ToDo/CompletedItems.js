import Item from "./Item";
import "./Item.css";

const CompletedItems = (props) => {

  const undoComplete = (obj) => {
    props.undoComplete(obj);
  };

  return (
    <ul className="todo-list">
      {props.items.map((todo) => (
        <Item obj={todo} key={todo.id} undoComplete={undoComplete}/>
      ))}
    </ul>
  );
};

export default CompletedItems;
