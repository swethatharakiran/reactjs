import ExpenseForm from './components/Expenses/ExpenseForm.js';
import Card from './components/UI/Card.js'
import ExpenseItem from "./components/Expenses/ExpenseItem";
//import ExpenseDate from "./components/ExpenseDate";
function App() {
    const expenses=[{title:'car insurance',amount:5000,date:new Date(2023,5,7),location:'banglore'},
      {title:'new TV',amount:50000,date:new Date(2023,4,7),location:'tumkur'},
      {title:'Desk',amount:8000,date:new Date(2023,5,5),location:'mysore'},]
    
  return (
    <Card>
      
      <ExpenseForm></ExpenseForm>
      
        
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