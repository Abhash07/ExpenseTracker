import React, { useState } from "react";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  let [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedtedYear) => {
    setFilteredYear(selectedtedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeYearFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
