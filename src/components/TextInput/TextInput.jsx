import React from 'react';

const TextInput = (props) => {
    return (
        <div className="form-input">
            <label htmlFor={props.label}>{props.name}</label>
            <input 
                name={props.label} 
                type="text" 
                placeholder={props.placeholder} 
                onChange={props.handleChange}></input>
        </div>
    )
}

export default TextInput;