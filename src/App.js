import ExpenseItem from "./components/ExpenseItem";
function App() {
    const expenses=[{title:'car insurance',amount:5000,date:new Date(2023,5,7),location:'banglore'},
      {title:'new TV',amount:50000,date:new Date(2023,4,7),location:'tumkur'},
      {title:'Desk',amount:8000,date:new Date(2023,5,5),location:'mysore'},]
    
  return (
    <div>
      <h2>Let's get started!</h2>
        {expenses.map((item)=>{
          return (
            <ExpenseItem title={item.title} 
            amount={item.amount} 
            date={item.date}
            location={item.location}></ExpenseItem>
          )
        })}
      </div>
   
  );
}

export default App;