import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  let [enteredTitle, SetEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    SetEnteredTitle(event.target.value);
    
  };

  let [enteredAmount, SetEnteredAmount] = useState("");

  const amountChangeHandler = (event) => {
    SetEnteredAmount(event.target.value);
  };

  let [enteredDate, SetEnteredDate] = useState("");

  const dateChangeHandler = (event) => {
    SetEnteredDate(event.target.value);
  };
  // Or
  // let [userInput, SetUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // });

  // const titleChangeHandler =(event)=> {
  //     SetUserInput({
  //         ...userInput,
  //         enteredTitle: event.target.value
  //     });
  // }

  // const amountChangeHandler = event =>{
  //     SetUserInput({
  //         ...userInput,
  //         enteredAmount: event.target.value
  //     })
  // }

  // const dateChangeHandler =(event)=>{
  //     SetUserInput({
  //         ...userInput,
  //         enteredDate: event.target.value
  //     })
  // }

  // OR
  //     // const titleChangeHandler2 = (event )=>{
  //     //     SetUserInput((prevState)=>{
  //     //         return {...prevState, enteredTitle: event.target.value
  //     //         }
  //     //         );
  //     // }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenses = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenses);
    console.log(expenses);
    SetEnteredTitle('');
    SetEnteredAmount('');
    SetEnteredDate('');
    
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2022-01-01"
              max="2029-11-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
