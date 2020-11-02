import React from 'react';
import './Link.css';

const Link = ({
    onClick,
    link,
    children
}) => {
    return <a href={link} onClick={onClick} className="link">{children}</a>
}

export default Link;