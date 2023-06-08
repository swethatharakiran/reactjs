import React,{useState} from 'react'; //useState is a function imported frm react
import Card from '../UI/Card';
import ExpenseDetails from './ExpensDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem=(props)=>{
    
    const [title, setTitle]=useState(props.title);
    const [amount,setAmount]=useState(props.amount)
    
    const changeTitle=()=>{
        setTitle('Updated!')
        console.log('clicked')
    }

    const changeAmount=()=>{
        setAmount(100)
        console.log('changed')
    }
    
    return (
        
        <Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        
        <ExpenseDetails 
        title={title} 
        amount={amount} 
        location={props.location}></ExpenseDetails>
        <button onClick={changeTitle}>Change Title</button>
        <button onClick={changeAmount}>Change Amount</button>
        
         </Card>
         
        );
}

export default ExpenseItem;