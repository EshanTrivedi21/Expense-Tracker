import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import ExpenseFilter from "./ExpenseFilter.js";
import ExpensesChart from "./ExpensesChart.js";
import Card from "../UI/Card.js";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const formChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.slice(0, 4) === filteredYear;
  });
  
  return (
    <div className="mainDisplay">
      <ExpenseFilter
        onSelect={filteredYear}
        onChangeFilter={formChangeHandler}
      />
      {filteredExpenses.length === 0 ? null : ( <ExpensesChart expenses={filteredExpenses} /> )}
      {filteredExpenses.length === 0 ? (
        <Card>
          <p className="noExpenses">No expenses found.</p>
        </Card>
      ) : (
        filteredExpenses.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={`${expenses.title[0].toUpperCase()}${expenses.title.slice(1)}`}
            date={`${expenses.date.slice(8, 10)} / ${expenses.date.slice(5, 7)} / ${expenses.date.slice(0, 4)}`}
            amount={`$ ${expenses.amount}`}
          />
        ))
      )}
    </div>
  );
};

export default Expenses;
