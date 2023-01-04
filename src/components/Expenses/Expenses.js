import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import ExpenseFilter from "./ExpenseFilter.js";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const formChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div className="mainDisplay">
      <ExpenseFilter
        onSelect={filteredYear}
        onChangeFilter={formChangeHandler}
      />
      {filteredExpenses.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          date={expenses.date}
          amount={expenses.amount}
        />
      ))}
    </div>
  );
};

export default Expenses;
