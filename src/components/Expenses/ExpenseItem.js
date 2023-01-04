import Card from "../UI/Card.js";
import "../Expenses/ExpenseItem.css";

function ExpenseItem(props) {
    return (
        <Card className="element">
            <span>{props.title}</span>
            <div className="etc">
                <span>{props.date}</span>
                <span>{props.amount}</span>
            </div>
        </Card>
    );
}

export default ExpenseItem;