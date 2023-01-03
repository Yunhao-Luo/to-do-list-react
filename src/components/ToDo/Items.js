import Item from "./Item";
import "./Item.css";

const Items = (props) => {

  const onComplete = (obj) => {
    props.onComplete(obj);
  };

  return (
    <ul className="todo-list">
      {props.items.map((todo) => (
        <Item obj={todo} key={todo.id} onComplete={onComplete}/>
      ))}
    </ul>
  );
};

export default Items;
