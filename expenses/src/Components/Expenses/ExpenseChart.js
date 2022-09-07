//import React from 'react';

import Chart from "../Chart/Chart";


const ExpenseChart = (props)=>{
    
const months = [
    {name:'Jan', value:0},
    {name:'Feb', value:0},
    {name:'Mar', value:0},
    {name:'Apr', value:0},
    {name:'May', value:0},
    {name:'Jun', value:0},
    {name:'Jul', value:0},
    {name:'Aug', value:0},
    {name:'Sep', value:0},
    {name:'Oct', value:0},
    {name:'Nov', value:0},
    {name:'Dec', value:0}, 
];

for(const month of months){
       props.expenses.map((expense)=>{
        if(months[new Date(expense.date).getMonth()].name === month.name){
            month.value = month.value + Number(expense.price);
        }
    });
    
}

return(
    <Chart monthExpenses={months}/>
)
}

export default ExpenseChart;