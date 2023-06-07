import Card from '../UI/Card.js'
import './ExpenseItem.css'

const ExpenseDetails=(props)=>{

    return (
        <Card className='expense-item'>
            <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>Rs. {props.amount} </div>
            </div>
            <h2>{props.location}</h2>
        </Card>
        
    )

}

export default ExpenseDetails;