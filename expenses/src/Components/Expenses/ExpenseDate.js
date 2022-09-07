import Card from "../Card/Card";
import "./ExpenseDate.css";
import React from 'react';

const ExpenseDate = (props) => {
  return (
    <Card className="expense-date">
      <div className="expense-date__month">
        {props.date.toLocaleString("en-US", { month: "long" })}
      </div>
      <div className="expense-date__year">
        {props.date.toLocaleString("en-US", { year: "numeric" })}
      </div>
      <div className="expense-date__day">
        {props.date.toLocaleString("en-US", { day: "2-digit" })}
      </div>
    </Card>
  );
};

export default ExpenseDate;
