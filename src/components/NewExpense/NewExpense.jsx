import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './newExpense.css'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expensedata ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expensedata);
        setIsEditing(false);
    }

  let [isEditing, setIsEditing]=useState(false);
  
  const startEditHandler =()=>{
    setIsEditing(true);
  }

  const stopEditHandler =()=>{
    setIsEditing(false);
  }
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditHandler}>Add Expense</button>}
      { isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditHandler}/>}
    </div>
  )
}

export default NewExpense