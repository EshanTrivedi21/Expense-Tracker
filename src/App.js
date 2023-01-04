import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense.js";
import Expenses from "./components/Expenses/Expenses.js";
import "./components/UI/index.css";

const staticExpenses = [
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: "2021-02-28",
  },
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: "2020-07-12",
  },
  { id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: "2020-08-22" },
];

function App() {
  const [expenses, setExpenses] = useState(staticExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2 className="heading">EXPENSE TRACKER</h2>
      <div className="main">
        <div className="mainForm">
          <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        </div>
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default App;
