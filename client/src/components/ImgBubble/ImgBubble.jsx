import React from 'react';
import './ImgBubble.css';

const ImgBubble = ({img, type}) => {
    return (
        <div className="chore-image" style={{backgroundImage: `url(${img})`}}></div>
    )
}

export default ImgBubble;