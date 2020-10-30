import React, { useContext } from 'react';
import './Header.css';
import Link from '../Link/Link';
import loginModalContext from '../../contexts/loginModalContext';
import signupModalContext from '../../contexts/signupModalContext';

const Header = () => {
    const [ loginOpen, setLoginOpen ] = useContext(loginModalContext);
    const [ signupOpen, setSignupOpen ] = useContext(signupModalContext);

    const handleLoginModal = () => {
        setLoginOpen(true)
    }

    const handleSignupModal = () => {
        setSignupOpen(true);
    }

    return (
        <header className="header">
            <Link onClick={handleLoginModal}>Login</Link>
            <Link onClick={handleSignupModal}>Signup</Link>
        </header>
    )
}

export default Header;