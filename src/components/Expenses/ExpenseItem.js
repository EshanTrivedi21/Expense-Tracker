import Card from "../UI/Card.js";
import Button from "../UI/Button.js";

import "../Expenses/ExpenseItem.css";

import { useState } from "react";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title) 
    function clickHandler () {
        setTitle("New Title");
    }
    return (
        <Card className="element">
            <span>{title}</span>
            <div className="etc">
                <span>{props.date}</span>
                <span>{props.amount}</span>
            </div>
            <Button onClick={clickHandler}>Change Title</Button>
        </Card>
    );
}

export default ExpenseItem;