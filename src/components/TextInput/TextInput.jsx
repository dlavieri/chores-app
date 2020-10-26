import React, { forwardRef } from 'react';
import './TextInput.css';

const TextInput = forwardRef(({
    name,
    label,
    placeholder,
    handleChange
}, ref) => {
    return (
        <div className="form-input" ref={ref}>
            <label className="text-input-label" htmlFor={label}>{name}</label>
            <input 
                name={label} 
                className="text-input"
                type="text" 
                placeholder={placeholder} 
                onChange={handleChange}></input>
        </div>
    )
})

export default TextInput;