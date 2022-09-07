import Card from "../Card/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React from "react";

const ExpenseItem = (props) => {
  var expenseDate = new Date(props.date);
  var expenseTitle = props.title;
  var expensePrice = props.price;
  //const [title, setTitle] = useState(expenseTitle);

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
