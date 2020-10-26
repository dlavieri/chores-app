import React, { useRef, useState, useContext, useEffect } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import reorderContext from '../../contexts/reorderContext';

const NewChoreForm = ({ modalOpen }) => {
    const [ type, setType ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ waterFreq, setWaterFreq ] = useState(null);
    const [ chores, setChores ] = useContext(reorderContext);

    const typeRef = useRef(null);
    const locationRef = useRef(null);
    const waterRef = useRef(null);

    useEffect(() => {
        if (modalOpen) typeRef.current.focus();
    }, [modalOpen])

    const handleSubmit = (e) => {
        e.preventDefault();
        let _id = Math.floor(100 * Math.random()).toString();
        const placeholderImg = 'https://image.flaticon.com/icons/png/512/628/628283.png';

        let data = {
            _id,
            _active: false,
            _category: 'Plant',
            _type: type,
            _location: location,
            _img: placeholderImg,
            _water: { frequencyDays: waterFreq, lastRecorded: Date.now },
            _fertilizer: { frequencyDays: 365, lastRecorded: Date.now },
            _health: { prev: [], current: "" },
            _notes: ""
        };
        
        let arr = chores.slice();
        arr.push(data);
        setChores(arr)
        console.log(arr);
    }

    return (
        <Modal modalOpen={modalOpen}>
            <form className="form-control new-chore-form">
                <TextInput 
                    ref={typeRef}
                    name="Plant Type" 
                    label="plantType" 
                    placeholder="What type of plant is it?" 
                    handleChange={(e) => setType(e.target.value)} />
                <TextInput 
                    ref={locationRef}
                    name="Location" 
                    label="location" 
                    placeholder="Where is it?" 
                    handleChange={(e) => setLocation(e.target.value)} />
                <TextInput 
                    ref={waterRef}
                    name="Water Frequency" 
                    label="waterFrequency" 
                    placeholder="How often does it need water?" 
                    handleChange={(e) => setWaterFreq(e.target.value)} />
                <Button handleClick={handleSubmit}>Submit</Button>
            </form>
        </Modal>
    )
}

export default NewChoreForm;