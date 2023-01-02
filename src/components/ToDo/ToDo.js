import Card from "../UI/Card";
import Items from "./Items";
import CompletedItems from "./CompletedItems";

import "./ToDo.css"

const ToDo = (props) => {

  const onComplete = (obj) => {
    props.onComplete(obj);
  };

  return <Card className="todos">
    <Items items={props.items} onComplete={onComplete}></Items>
    <h2 style={{ color: 'white' }}>Completed:</h2>
    <CompletedItems items={props.completed}></CompletedItems>
  </Card>;
};

export default ToDo;
