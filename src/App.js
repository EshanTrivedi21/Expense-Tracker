import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense.js";
import Expenses from "./components/Expenses/Expenses.js";
import './components/UI/index.css';

const staticExpenses = [
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
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