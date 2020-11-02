import React, { useState } from 'react';
import classNames from 'classnames';
import './ToggleBtn.css';
import Checkmark from '../svgs/Check';

const ToggleBtn = ({ handleCompleteChore, id }) => {
    const [ check, setCheck ] = useState(false);

    const checkClass = classNames({
        'toggle-btn': true,
        'checked': check
    });

    const handleCheck = () => {
        setCheck(true);
        setTimeout(() => handleCompleteChore(id), 450)
    };

    return (
        <div className={checkClass} onClick={handleCheck}>
            <Checkmark checked={check}/>
        </div>
    )
}

export default ToggleBtn;