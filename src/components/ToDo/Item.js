import Card from '../UI/Card';
import "./Items.css";

const Item = (props) => {

    const onComplete = () => {
        const completedItem = props.obj;
        completedItem.complete = true;
        props.onComplete(completedItem);
    }

    return <Card className="todo-item">
        <div className="todo__description">
            <h2>{props.obj.title}</h2>
            <h2>{props.obj.dueTime.toLocaleString()}</h2>
            <h2>Priority: {props.obj.priority}</h2>
            <button className="todo-item__complete" onClick={onComplete}>Complete: {props.obj.complete.toString()}</button>
        </div>
    </Card>
};

export default Item;