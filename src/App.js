import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense.js";
import Expenses from "./components/Expenses/Expenses.js";
import './components/UI/index.css';

const expense = [];

function App() {
  const [expenses, setExpenses] = useState(expense);

  

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