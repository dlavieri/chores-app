import React, { forwardRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './TextInput.css';

const TextInput = forwardRef(({
    name,
    label,
    placeholder,
    handleChange
}, ref) => {
    const [ focused, setFocused ] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    }
    const handleBlur = () => {
        setFocused(false);
    }

    return (
        <div className="form-input">
            <CSSTransition
                in={focused}
                timeout={200}
                unmountOnExit
                classNames={"input-label"} >
            <label className="text-input-label" htmlFor={label}>{name}</label>
            </CSSTransition>
            <input 
                ref={ref}
                name={label} 
                className="text-input"
                type="text" 
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={placeholder} 
                onChange={handleChange}></input>
        </div>
    )
})

export default TextInput;