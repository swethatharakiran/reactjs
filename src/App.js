//import ExpenseForm from './components/NewExpense/ExpenseForm.js';
import Card from './components/UI/Card.js'
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from './components/NewExpense/NewExpense.js';
import React,{useState} from 'react';
//import ExpenseDate from "./components/ExpenseDate";
function App() {

    
    const expenses=[{title:'car insurance',amount:5000,date:new Date(2023,5,7),location:'banglore'},
      {title:'new TV',amount:50000,date:new Date(2023,4,7),location:'tumkur'},
      {title:'Desk',amount:8000,date:new Date(2023,5,5),location:'mysore'},]
    
      const [myExpenses,setMyExpense]=useState(expenses);

      const addExpenseHandler=(expenseData)=>{
        console.log('frm app.js file')
        console.log(expenseData);
        const updatedExpenses=[...myExpenses,
          {'title': expenseData.title,'amount': expenseData.amount,'date': new Date(expenseData.date)}]
        
        setMyExpense(updatedExpenses);
      }
    console.log(expenses);


  return (
    <Card>
      
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      
        
        {myExpenses.map((item)=>{
          return (
          
            <ExpenseItem title={item.title} 
            amount={item.amount} 
            date={item.date}
            location={item.location}></ExpenseItem>
            
          )
        })}
        
        
      </Card>
   
  );
}

export default App;