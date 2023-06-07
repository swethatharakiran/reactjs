import ExpenseDetails from './ExpensDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
function ExpenseItem(props){
    
    
    return (
        <div className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetails 
        title={props.title} 
        amount={props.amount} 
        location={props.location}></ExpenseDetails>
         </div>
        );
}

export default ExpenseItem;