import React, { useState } from 'react';

//import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesList from './ExpenseList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

  };

  const filteredExpenses = props.items.filter(expense => {  //props.items has our expense list
    return expense.date.getFullYear().toString() === filteredYear;
  });

   

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
          />

          <ExpensesList items={filteredExpenses}/>
        
        
      </Card>
    </div>
  );
};

export default Expenses;