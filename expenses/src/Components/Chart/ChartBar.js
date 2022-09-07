import React from 'react';
import "./ChartBar.css";

const ChartBar = (props) =>{
    var percentage = (Number(props.total)*100)/(Number(props.maxValue));
    percentage = (isNaN(percentage))?0:percentage;
    
return (
<div className='chartBar'>
    <div className='chartBarBorder'>
    <div className='chartBarPercentage' style={{height: percentage+"%"}}></div>
    </div>
    <div className='chartBarName'>{props.name}</div>
</div>
);
}

export default ChartBar;