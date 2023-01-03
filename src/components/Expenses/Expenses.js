import React from "react";
import ExpenseItem from "./ExpenseItem.js";
import ExpenseFilter from "./ExpenseFilter.js";

const Expenses = (props) => {
  return (
    <div className="mainDisplay">
      <ExpenseFilter/>
      <ExpenseItem
        date={props.items[0].date}
        amount={props.items[0].amount}
        title={props.items[0].title}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[1].date}
        amount={props.items[1].amount}
        title={props.items[1].title}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[2].date}
        amount={props.items[2].amount}
        title={props.items[2].title}
      ></ExpenseItem>
    </div>
  );
};

export default Expenses;
