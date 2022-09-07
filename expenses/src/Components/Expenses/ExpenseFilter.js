import React from 'react';
import "./ExpenseFilter.css";

const ExpenseFilter = (props) =>{

    const selectOptionHandler = (option) =>{
        props.filterData(option.target.value);
    }

return(
    <div className="filter">
        <p>Filter by year</p>
        <select value={props.selected} onChange={selectOptionHandler}>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
        </select>
    </div>
)
}

export default ExpenseFilter;