import React, { useState, useContext, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';
import reorderContext from '../../contexts/reorderContext';
import modalContext from '../../contexts/modalContext';

import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const Modal = () => {

    const [ type, setType ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ waterFreq, setWaterFreq ] = useState(null);
    const [ chores, setChores ] = useContext(reorderContext);
    const [ modalOpen, setModalOpen ] = useContext(modalContext);

    useEffect(() => {
        function preventScroll() {
            const scrollY = `${window.scrollY}px`
            const body = document.body;
            body.style.position = 'fixed';
            body.style.top = `-${scrollY}`;
        }
        function reenableScroll() {
            const body = document.body;
            const scrollY = body.style.top;
            body.style.position = "";
            body.style.top = "";
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
            console.log('cleanup')
        }

        if (modalOpen) {
            preventScroll()
        } else { reenableScroll()};
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
        <>
        <CSSTransition
            in={modalOpen}
            timeout={1000}
            unmountOnExit
            classNames="css-modal">
            <div className="modal">
                <form className="form-control">
                    <TextInput 
                        name="Plant Type" 
                        label="plantType" 
                        placeholder="What type of plant is it?" 
                        handleChange={(e) => setType(e.target.value)} />
                    <TextInput 
                        name="Location" 
                        label="location" 
                        placeholder="Where is it?" 
                        handleChange={(e) => setLocation(e.target.value)} />
                    <TextInput 
                        name="Water Frequency" 
                        label="waterFrequency" 
                        placeholder="How often does it need water?" 
                        handleChange={(e) => setWaterFreq(e.target.value)} />
                    <Button handleClick={handleSubmit}>Submit</Button>
                </form>
            </div>
        </CSSTransition>
        {modalOpen && <div className="modal-shadow"></div>}
        </>
    )
}

export default Modal;