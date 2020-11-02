import React, { useState, useContext, useRef, useEffect } from 'react';
import Modal from '../Modal/Modal';
import loginModalContext from '../../contexts/loginModalContext';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const LoginForm = () => {
    const [ email, setEmail ] = useState(null);
    const [ password, setPassword ] = useState(null);
    const [ loginOpen, setLoginOpen ] = useContext(loginModalContext);

    const emailRef = useRef(null);
    const passRef = useRef(null);

    useEffect(() => {
        if(loginOpen) {
            emailRef.current.focus();
        }
    }, [loginOpen])

    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (
        <Modal modalOpen={loginOpen} setModalOpen={setLoginOpen}>
            <div className="login-form form-control">
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
                <Button onClick={handleLogin}>Login</Button>
            </div>
        </Modal>
    )
};

export default LoginForm;