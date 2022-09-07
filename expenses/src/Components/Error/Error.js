import React from 'react';
import "./Error.css";

const Error = (props) =>{


    const buttonHandler = () =>{
        props.setError(false);
    }

return (
    <div className='errorContainer'>
    <div className='modal'>
        <div className='header'>
            <h2>Invalid Input</h2>
        </div>
        <div className='info'>
            <p>Please fill in all input.</p>
        </div>
        <div className='button'>
            <button type="button" onClick={buttonHandler}>OK</button>
        </div>
    </div>
    </div>

);
}


export default Error;