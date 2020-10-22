import React from 'react';
import Plus from '../svgs/Plus';
import DownArrow from '../svgs/DownArrow';
import './AddBtn.css';

const AddBtn = ({ handleModal, modalOpen }) => {
    if (modalOpen) {
        return (
            <div className="add-btn close-modal" onClick={handleModal}>
                <DownArrow />
            </div>
        )
    }
    return (
        <div className="add-btn" onClick={handleModal}>
            <Plus />
        </div>
    )
}

export default AddBtn;