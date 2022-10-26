import "../NewExpenses/ExpenseForm.css"
import Button from "../UI/Button"

function ExpenseForm () {
    return (
        <form className="formMain">
            <h3 className="formTitle">NEW EXPENSE</h3>
            <div className="formDiv">
                <label className="formLabel">Title</label>
                <input className="formInput" type="text"></input>
            </div>
            <div className="formDiv">
                <label className="formLabel">Amount</label>
                <input className="formInput" type="number"></input>
            </div>
            <div className="formDiv">
                <label className="formLabel">Date</label>
                <input className="formInput" type="date"></input>
            </div>
            <Button className="formButton" type="submit">Add Expense</Button>
        </form>
    );
}

export default ExpenseForm;