import Item from "./Item";
import "./Item.css";

const CompletedItems = (props) => {
  return (
    <ul className="todo-list">
      {props.items.map((todo) => (
        <Item obj={todo}/>
      ))}
    </ul>
  );
};

export default CompletedItems;
