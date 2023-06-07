import Card from './Card';
import ExpenseDetails from './ExpensDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
function ExpenseItem(props){
    
    
    return (
        
        <Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetails 
        title={props.title} 
        amount={props.amount} 
        location={props.location}></ExpenseDetails>
         </Card>
         
        );
}

export default ExpenseItem;