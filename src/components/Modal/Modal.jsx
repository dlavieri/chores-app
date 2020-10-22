import React, { useState } from 'react';
import './Modal.css';

import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const Modal = () => {

    const [ type, setType ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ waterFreq, setWaterFreq ] = useState(null);

    const handleSubmit = () => {
        let data = {
            type,
            location,
            waterFreq
        };

        console.log(data);
    }

    return (
        <>
        <div className="modal">
            <form className="form-control">
                <TextInput 
                    name="Plant Type" 
                    label="plantType" 
                    placeholder="What type of plant is it?" 
                    handleChange={val => setType(val)} />
                <TextInput 
                    name="Location" 
                    label="location" 
                    placeholder="Where is it?" 
                    handleChange={val => setLocation(val)} />
                <TextInput 
                    name="Water Frequency" 
                    label="waterFrequency" 
                    placeholder="How often does it need water?" 
                    handleChange={val => setWaterFreq(val)} />
                <Button handleClick={handleSubmit}>Submit</Button>
            </form>
        </div>
        <div className="modal-shadow"></div>
        </>
    )
}

export default Modal;