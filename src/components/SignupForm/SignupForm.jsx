import React, { useState, useContext, useRef, useEffect } from 'react';
import './SignupForm.css';
import Modal from '../Modal/Modal';
import '../../contexts/signupModalContext';
import signupModalContext from '../../contexts/signupModalContext';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const SignupForm = (props) => {
    const [ email, setEmail ] = useState(null);
    const [ password, setPassword ] = useState(null);
    const [ passMatch, setPassMatch ] = useState(null);
    const [ signupOpen, setSignupOpen ] = useContext(signupModalContext)

    const emailRef = useRef(null);
    const passRef = useRef(null);
    const passMatchRef = useRef(null);

    useEffect(() => {
        if (signupOpen) {
            emailRef.current.focus();
        }
    }, [signupOpen])

    const handleSignup = (e) => {
        e.preventDefault();
    }

    return (
        <Modal modalOpen={signupOpen} setModalOpen={setSignupOpen}>
            <div className="signup-form form-control">
                <TextInput
                    ref={emailRef}
                    name="Email" 
                    label="loginEmail" 
                    placeholder="Email" 
                    handleChange={(e) => setEmail(e.target.value)} />
                <TextInput
                    ref={passRef}
                    name="Password" 
                    label="loginPassword" 
                    placeholder="Password" 
                    handleChange={(e) => setPassword(e.target.value)} />
                <TextInput
                    ref={passMatchRef}
                    name="Confirm Password" 
                    label="signupConfirmPassword" 
                    placeholder="Confirm Password" 
                    handleChange={(e) => setPassMatch(e.target.value)} />
                <Button>Signup</Button>
            </div>
        </Modal>
    )
}

export default SignupForm;