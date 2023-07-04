import React,{useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm=(props)=>{
    console.log(props)

   // const [userInput,setUserInput]=useState({
   //     enteredTitle:'', enteredAmount:'',enteredDate:''});
   const [enteredTitle,setEnteredTitle]=useState('');
   const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    
    const titleEdit=(event)=>{
        
            //console.log(event.target.value)
            setEnteredTitle(event.target.value)  
    
           //setUserInput((prevState)=>{
            //return {...prevState,eneteredTitle:event.target.value};
          //})
    }

    const amountEdit=(event)=>{

            setEnteredAmount(event.target.value)
        
                 //setUserInput((prevState)=>{
            //return {...prevState,eneteredAmount:event.target.value};
          //})
    }

    const dateEdit=(event)=>{
        
            setEnteredDate(event.target.value)
        
        //  setUserInput((prevState)=>{
          //  return {...prevState,eneteredDate:event.target.value};
          //})
    }
    
    const submitEvent=(event)=>{
        event.preventDefault()
        console.log(props)
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        console.log(expenseData)
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <div className='new-expense'>
            <form onSubmit={submitEvent}>
                <div className='new-expense__controls'>
                <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleEdit}></input>
                </div>
                <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountEdit}></input>
                </div>
                <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2020-01-01' max='2023-06-01' value={enteredDate} onChange={dateEdit}></input>
                </div>
                </div>
                <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;