import Card from '../UI/Card';
import ExpenseDetails from './ExpensDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem=(props)=>{
    
    const deleteExp=()=>{
        console.log('clicked')
    }
    
    return (
        
        <Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        
        <ExpenseDetails 
        title={props.title} 
        amount={props.amount} 
        location={props.location}></ExpenseDetails>
        <button onClick={deleteExp}>Delete Expense</button>
        
         </Card>
         
        );
}

export default ExpenseItem;