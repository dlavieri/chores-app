import React, { useContext, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';
import modalContext from '../../contexts/modalContext';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const Modal = ({ children, modalOpen, setModalOpen }) => {
    const modalRef = useRef(null);

    useOnClickOutside(modalRef, () => setModalOpen(false))

    useEffect(() => {
        function preventScroll() {
            const scrollY = `${window.scrollY}px`
            const listBody = document.querySelector(".list");
            const body = document.body;
            body.style.position = 'fixed';
            body.style.top = `-${scrollY}`;
            listBody.style.filter = "blur(1px)";
        }
        function reenableScroll() {
            const body = document.body;
            const listBody = document.querySelector(".list");
            const scrollY = body.style.top;
            body.style.position = "";
            listBody.style.filter = "";
            body.style.top = "";
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        if (modalOpen) {
            preventScroll()
        } else { reenableScroll()};
    }, [modalOpen])

    return (
        <>
        <CSSTransition
            in={modalOpen}
            timeout={1000}
            unmountOnExit
            classNames="css-modal">
            <div className="modal" id="modal" ref={modalRef}>
                {children}
            </div>
        </CSSTransition>
        {modalOpen && <div className="modal-shadow"></div>}
        </>
    )
}

export default Modal;