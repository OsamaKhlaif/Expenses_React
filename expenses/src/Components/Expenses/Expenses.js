import Card from "../Card/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import React, {useState} from 'react';
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) =>{

  const [selectedFilter, setSelectedFilter] = useState('2019');

  const filterDataHandler = (data) =>{
    setSelectedFilter(data);
  }

  const expenses = props.expenses.filter((expense)=>{ return (new Date(expense.date).getFullYear().toString() === selectedFilter)? expense:""});
    
    return (
      <Card className="expenses">
      <ExpenseFilter selected={selectedFilter} filterData={filterDataHandler}/>
      <ExpenseChart expenses={expenses}/>
      {expenses.length === 0?<p>Not Found Expenses</p>:
      expenses.map((expense)=>{
        
      return <ExpenseItem key={Math.random()} title={expense.title} price={expense.price} date={expense.date}/>
      })}
      </Card>
    );
}

export default Expenses;