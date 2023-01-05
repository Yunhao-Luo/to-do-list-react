import Items from "./Items";
import CompletedItems from "./CompletedItems";

import "./ToDo.css"

const ToDo = (props) => {

  const onComplete = (obj) => {
    props.onComplete(obj);
  };

  const undoComplete = (obj) => {
    props.undoComplete(obj);
  };

  return <div>
    {props.items.length!==0 && <Items items={props.items} onComplete={onComplete}></Items>}
    {props.items.length===0 && <h2 style={{ color: 'white' }}>You don't have any pending item</h2>}
    <h2 className='complete-tag' style={{ color: 'white' }}>Completed:</h2>
    <CompletedItems items={props.completed} undoComplete={undoComplete}></CompletedItems>
  </div>;
};

export default ToDo;
