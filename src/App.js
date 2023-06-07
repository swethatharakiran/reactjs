import Card from './components/Card.js'
import ExpenseItem from "./components/ExpenseItem";
//import ExpenseDate from "./components/ExpenseDate";
function App() {
    const expenses=[{title:'car insurance',amount:5000,date:new Date(2023,5,7),location:'banglore'},
      {title:'new TV',amount:50000,date:new Date(2023,4,7),location:'tumkur'},
      {title:'Desk',amount:8000,date:new Date(2023,5,5),location:'mysore'},]
    
  return (
    <Card className='expense-item'>
      <h2>Let's get started!</h2>
        {expenses.map((item)=>{
          return (
          
            <ExpenseItem title={item.title} 
            amount={item.amount} 
            date={item.date}
            location={item.location}></ExpenseItem>
            
          )
        })}
        
      </Card>
   
  );
}

export default App;