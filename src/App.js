
import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DummyExpenses =[
  
];

function App() {
  
  const [expenses,setExpenses]=useState(DummyExpenses);
  const addExpenseHandler =(enteredExpenseData) =>{
    setExpenses((prevExpenses)=>{return [enteredExpenseData,...prevExpenses]});
    

  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>

      <Expenses expenses={expenses}/>

      
    </div>
  );
}

export default App;
