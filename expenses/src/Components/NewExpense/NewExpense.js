import React, {useState} from "react";
import FormExpense from "./FormExpense";
import './NewExpense.css';

const NewExpense = (props) =>{

    const [showForm, setShowForm] = useState(false);

    const newDataHandler = (data) =>{
        props.data(data);
    }

    const showFormHandler = (show)=>{
        setShowForm(show);
    }

    const addNewExpenseHandler = () =>{
        setShowForm(true);
    }

return(
    <div className="new-expense">
    {showForm === false? <button onClick={addNewExpenseHandler}>Add New Expense</button>:
        <FormExpense showForm={showFormHandler} data={newDataHandler}/>
    }
    </div>
);
}

export default NewExpense;