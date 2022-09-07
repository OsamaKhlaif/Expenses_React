import React, {useState} from 'react';
import './FormExpense.css';
import Error from '../Error/Error';

const FormExpense = (props) =>{
const [title, setTitle] = useState('');
const [price, setPrice] = useState('');
const [date, setDate] = useState('');
const [error, setError] = useState(false);

const titleHandlerChange = (event)=>{
 setTitle(event.target.value);
}

const priceHandlerChange = (event)=>{
    setPrice(event.target.value);
}

const dateHandlerChange = (event)=>{
    setDate(event.target.value);
}

const submitHandler = () =>{
    if(title.length !== 0 && price.length !== 0 && date.length !== 0){
    const expense = {
        title: title,
        price: price,
        date: date
    };

    props.data(expense);
    setTitle("");
    setPrice("");
    setDate("");
   
} else{
    setError(true);
}
}


const cancelHandler = ()=>{
props.showForm(false);
}

const errorHandler = (event) =>{
    setError(event);
}

    return(
        <div>
        {error && (
            <Error setError={errorHandler} />
        )}
        <form>
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title:</label>
                <input type='text' value={title} onChange={titleHandlerChange} required/>
            </div>
            <div className='new-expense__control'>
                <label >Price:</label>
                <input type='number' step='0.01' value={price} onChange={priceHandlerChange} required/>
            </div>
            <div className='new-expense__control'>
                <label>Date:</label>
                <input type='date' value={date} onChange={dateHandlerChange} required/>
            </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={cancelHandler}>Cancel</button>
                <button type='button' onClick={submitHandler}>Add Expense</button>
            </div>
            
        </form>
        </div>
    );
}


export default FormExpense;