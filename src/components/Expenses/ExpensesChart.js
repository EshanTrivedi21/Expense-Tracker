import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  
  for (let i = 0; i < props.expenses.length; i++) {
    const expenseMonth = (Number(props.expenses[i].date.slice(5, 7)) - 1);
    chartDataPoints[expenseMonth].value += props.expenses[i].amount;
  }

  return <Chart dataPoints={chartDataPoints}></Chart>;
};

export default ExpensesChart;
