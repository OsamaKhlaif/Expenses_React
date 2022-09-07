import React from 'react';
import ChartBar from './ChartBar';
import styles from "./Chart.module.css";

const Chart = (props) =>{
    const values = props.monthExpenses.map(month=>{
        return Number(month.value)});

    var maxValue = Math.max(...values);
        
    //example about CSS module.
return(
<div className={styles.chart}>
    {props.monthExpenses.map((month)=>{
        return <ChartBar key={month.name} name={month.name} total={month.value} maxValue={maxValue}/>
    })}
</div>
);
}

export default Chart;