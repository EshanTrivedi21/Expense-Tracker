import NewExpense from "./components/NewExpenses/NewExpense.js";
import Expenses from "./components/Expenses/Expenses.js";
import './components/UI/index.css';

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
];

function App() {
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <h2 className="heading">EXPENSE TRACKER</h2>
      <div className="main">
        <div className="mainForm">
          <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        </div>
          <Expenses items={expense} />
      </div>
    </div>
  );
}

export default App;