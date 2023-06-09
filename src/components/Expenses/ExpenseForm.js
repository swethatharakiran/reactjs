import React,{useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm=()=>{

    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('')

    const titleEdit=(event)=>{
        setEnteredTitle(event.target.value)
    }

    const amountEdit=(event)=>{
        setEnteredAmount(event.target.value)
    }
    const dateEdit=(event)=>{
        setEnteredDate(event.target.value)
    }

    return (
        <div className='new-expense'>
            <form>
                <div className='new-expense__controls'>
                <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleEdit}></input>
                </div>
                <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountEdit}></input>
                </div>
                <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2020-01-01' max='2023-06-01' onChange={dateEdit}></input>
                </div>
                </div>
                <div className='new-expense__actions'>
                <button >Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;