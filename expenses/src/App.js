import React, {useState} from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const expenses = [
  { title: "Shoes", date: new Date(), price: 19.99 },
  { title: "Shirt", date: new Date(), price: 39.99 },
  { title: "T-Shirt", date: new Date(), price: 37.99 },
];

const App = () =>{
  
  const [newExpense, setNewExpense] = useState(expenses);
  
  const newDataHandler = (data) => {
    setNewExpense([data, ...newExpense]);
  };

  return (
    <div className="App">
      <NewExpense data={newDataHandler} />
      <Expenses expenses={newExpense} />
    </div>
  );
}

export default App;
