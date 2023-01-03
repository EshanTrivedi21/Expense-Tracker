import React from "react";
import Card from "../UI/Card";
import "./ExpenseFilter.css";

const ExpenseFilter = () => {
  const dropdownHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <Card className="expenses-filter">
        <label>Filter by year</label>
        <select onChange={dropdownHandler} className="filterSelect">
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
    </Card>
  );
};

export default ExpenseFilter;
