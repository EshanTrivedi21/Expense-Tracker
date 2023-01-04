import ExpenseForm from "./ExpenseForm.js";
import Button from "../UI/Button.js";
import Card from "../UI/Card";
import "../NewExpenses/NewExpense.css";
import { useState } from "react";
import "../NewExpenses/NewExpense.css";

function NewExpense(props) {
  const [openForm, setOpenForm] = useState(false);

  function openFormHandler() {
    setOpenForm(true);
  }

  function closeFormHandler() {
    setOpenForm(false);
  }

  function saveExpenseHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: (Math.floor(Math.random() * 1000) + 1).toString(),
    };
    props.onAddExpense(expenseData);
  }

  return (
    <Card className="margin-zero">
      {openForm ? (
        <ExpenseForm onSaveExpense={saveExpenseHandler} onCloseForm={closeFormHandler}></ExpenseForm>
      ) : (
        <Button className="formButton formOpenButton" onClick={openFormHandler}>
          ADD EXPENSE
        </Button>
      )}
    </Card>
  );
}

export default NewExpense;
