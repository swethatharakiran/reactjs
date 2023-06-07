import './ExpenseItem.css'
function ExpenseItem(){
    const expensedate=new Date(2023, 5, 7);
    const expensetitle='Car Insurance'
    const expenseamount=5000
    const locationOfExpenditure='banglore'
    return (
        <div className='expense-item'>
        <div>{expensedate.toISOString()}</div>
        <div className='expense-item__description'>
        <h2>{expensetitle}</h2>
        <div className='expense-item__price'>Rs. {expenseamount} </div>
        </div>
        <h2>{locationOfExpenditure}</h2>
         </div>
        );
}

export default ExpenseItem