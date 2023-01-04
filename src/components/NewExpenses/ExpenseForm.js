import "../NewExpenses/ExpenseForm.css";
import Button from "../UI/Button";

import { useState } from "react";

function ExpenseForm(props) {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    };
    
    props.onSaveExpense(expenseData);

    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  }

  return (
    <form className="formMain">
      <h3 className="formTitle">NEW EXPENSE</h3>
      <div className="formDiv">
        <label className="formLabel">Title</label>
        <input
          className="formInput"
          type="text"
          value={newTitle}
          onChange={titleChangeHandler}
        ></input>
      </div>
      <div className="formDiv">
        <label className="formLabel">Amount</label>
        <input
          className="formInput"
          type="number"
          value={newAmount}
          onChange={amountChangeHandler}
        ></input>
      </div>
      <div className="formDiv">
        <label className="formLabel">Date</label>
        <input
          className="formInput"
          type="date"
          value={newDate}
          onChange={dateChangeHandler}
        ></input>
      </div>
      <div className="button-wrap">
        <Button className="formButton" type="button" onClick={props.onCloseForm}>
          Cancel
        </Button>
        <Button className="formButton" type="submit" onClick={submitHandler}>
          Add
        </Button>
      </div>
    </form>
  );
}

export default ExpenseForm;
