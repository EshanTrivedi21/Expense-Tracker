import ExpenseForm from "./ExpenseForm.js";
import Card from "../UI/Card"

import "../NewExpenses/NewExpense.css";

function NewExpense (props) {
    function saveExpenseHandler (enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: (Math.floor(Math.random() * 1000) + 1).toString()
        };
        props.onAddExpense(expenseData);
    }
    return (
        <Card className="margin-zero">
            <ExpenseForm onSaveExpense = {saveExpenseHandler}></ExpenseForm>
        </Card>
    );
}

export default NewExpense;