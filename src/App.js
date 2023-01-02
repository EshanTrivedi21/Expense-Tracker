import ExpenseItem from "./components/Expenses/ExpenseItem.js";
import NewExpense from "./components/NewExpenses/NewExpense.js";

import './components/UI/index.css';

function App() {
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  const expense = [
    {
      title: "Tesla Model S Plaid",
      amount: "$40000",
      date: "20 / 10 / 22",
    },
    {
      title: "Bunglow, New York ",
      amount: "$400000",
      date: "21 / 10 / 22",
    },
    {
      title: "Bunglow Furnitures",
      amount: "$40000",
      date: "22 / 10 / 22",
    },
  ]

  return (
    <div>
      <h2 className="heading">EXPENSE TRACKER</h2>
      <div className="main">
        <div className="mainForm">
          <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        </div>
        <div className="mainDisplay">
          <ExpenseItem date={expense[0].date} amount={expense[0].amount} title={expense[0].title}></ExpenseItem>
          <ExpenseItem date={expense[1].date} amount={expense[1].amount} title={expense[1].title}></ExpenseItem>
          <ExpenseItem date={expense[2].date} amount={expense[2].amount} title={expense[2].title}></ExpenseItem>
        </div>
      </div>
    </div>
  );
}

export default App;