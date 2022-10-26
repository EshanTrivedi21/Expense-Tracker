import ExpenseForm from "./ExpenseForm.js";
import Card from "../UI/Card"

import "../NewExpenses/NewExpense.css";

function NewExpense () {
    return (
        <Card>
            <ExpenseForm></ExpenseForm>
        </Card>
    );
}

export default NewExpense;