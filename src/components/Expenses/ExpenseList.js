import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }
  else{
   
     let expenselist= props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
      if (props.items.length===1){
        return (
            <ul className='expenses-list'>
            {expenselist}
            <h2>Only single Expense here. Please add more...</h2>
            </ul>
        )
      }
      else
      return (
        <ul className='expenses-list'>
        {expenselist}
        </ul>
      );
    
  }
  
};

export default ExpensesList;